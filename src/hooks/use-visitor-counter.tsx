import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const VISITOR_SESSION_KEY = "visitor_counted";

type VisitorCounterContextValue = {
  count: number | null;
  didIncrement: boolean;
  loading: boolean;
};

const VisitorCounterContext = createContext<VisitorCounterContextValue | null>(null);

export const VisitorCounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number | null>(null);
  const [didIncrement, setDidIncrement] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (!supabase) {
      console.error("Visitor counter is disabled because Supabase environment variables are missing.");
      setLoading(false);

      return () => {
        isMounted = false;
      };
    }

    const counterChannel = supabase
      .channel("visitor-counter-live")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "visitor_counter",
        },
        (payload) => {
          if (!isMounted) {
            return;
          }

          const nextCount = payload.new.count;
          if (typeof nextCount === "number") {
            setCount(nextCount);
          }
        },
      )
      .subscribe((status) => {
        if (status === "CHANNEL_ERROR") {
          console.error("Visitor counter realtime subscription failed.");
        }
      });

    const syncCounter = async () => {
      try {
        const hasVisited = sessionStorage.getItem(VISITOR_SESSION_KEY) === "true";
        const { data, error } = await supabase
          .from("visitor_counter")
          .select("id, count")
          .order("created_at", { ascending: true })
          .limit(1)
          .maybeSingle();

        if (error) throw error;
        if (!data) {
          throw new Error("Visitor counter row not found.");
        }
        if (!isMounted) return;

        setCount(data.count);

        if (!hasVisited) {
          const { data: nextCount, error: incrementError } = await supabase.rpc(
            "increment_visitor_counter",
          );

          if (!isMounted) return;

          if (!incrementError) {
            sessionStorage.setItem(VISITOR_SESSION_KEY, "true");
            if (typeof nextCount === "number") {
              setCount(nextCount);
            }
            setDidIncrement(true);
          } else {
            throw incrementError;
          }
        }
      } catch (error) {
        console.error("Error with visitor counter:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void syncCounter();

    return () => {
      isMounted = false;
      void counterChannel.unsubscribe();
    };
  }, []);

  return (
    <VisitorCounterContext.Provider value={{ count, didIncrement, loading }}>
      {children}
    </VisitorCounterContext.Provider>
  );
};

export const useVisitorCounter = () => {
  const context = useContext(VisitorCounterContext);

  if (!context) {
    throw new Error("useVisitorCounter must be used within a VisitorCounterProvider.");
  }

  return context;
};
