CREATE OR REPLACE FUNCTION public.increment_visitor_counter()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    next_count bigint;
BEGIN
    UPDATE public.visitor_counter
    SET count = count + 1
    WHERE id = (
        SELECT id
        FROM public.visitor_counter
        ORDER BY created_at ASC
        LIMIT 1
    )
    RETURNING count INTO next_count;

    RETURN next_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_visitor_counter() TO anon;
GRANT EXECUTE ON FUNCTION public.increment_visitor_counter() TO authenticated;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_publication_tables
        WHERE pubname = 'supabase_realtime'
          AND schemaname = 'public'
          AND tablename = 'visitor_counter'
    ) THEN
        ALTER PUBLICATION supabase_realtime ADD TABLE public.visitor_counter;
    END IF;
END;
$$;
