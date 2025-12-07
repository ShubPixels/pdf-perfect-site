import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useVisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const incrementAndFetchCount = async () => {
      try {
        // Check if this session already incremented
        const hasVisited = sessionStorage.getItem('visitor_counted');
        
        // Fetch current count
        const { data, error } = await supabase
          .from('visitor_counter')
          .select('id, count')
          .limit(1)
          .single();

        if (error) throw error;

        if (!hasVisited && data) {
          // Increment the counter
          const { error: updateError } = await supabase
            .from('visitor_counter')
            .update({ count: data.count + 1 })
            .eq('id', data.id);

          if (!updateError) {
            sessionStorage.setItem('visitor_counted', 'true');
            setCount(data.count + 1);
          } else {
            setCount(data.count);
          }
        } else if (data) {
          setCount(data.count);
        }
      } catch (error) {
        console.error('Error with visitor counter:', error);
        setCount(12547); // Fallback
      } finally {
        setLoading(false);
      }
    };

    incrementAndFetchCount();
  }, []);

  return { count, loading };
};
