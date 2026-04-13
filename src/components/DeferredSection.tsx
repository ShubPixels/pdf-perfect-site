import { ReactNode, useEffect, useRef, useState } from "react";

interface DeferredSectionProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  minHeight?: number | string;
  rootMargin?: string;
}

export const DeferredSection = ({
  children,
  className,
  fallback,
  minHeight = 320,
  rootMargin = "320px 0px",
}: DeferredSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) {
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        minHeight:
          !shouldRender && minHeight !== undefined
            ? typeof minHeight === "number"
              ? `${minHeight}px`
              : minHeight
            : undefined,
      }}
    >
      {shouldRender ? (
        children
      ) : (
        fallback ?? (
          <div className="h-full w-full rounded-[2rem] border border-border/40 bg-secondary/30" />
        )
      )}
    </div>
  );
};
