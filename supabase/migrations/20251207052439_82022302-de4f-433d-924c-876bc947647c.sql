-- Create a table for visitor counter
CREATE TABLE public.visitor_counter (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    count BIGINT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.visitor_counter ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read the counter
CREATE POLICY "Anyone can view visitor count" 
ON public.visitor_counter 
FOR SELECT 
USING (true);

-- Allow anyone to update the counter (for incrementing)
CREATE POLICY "Anyone can update visitor count" 
ON public.visitor_counter 
FOR UPDATE 
USING (true);

-- Insert initial counter record
INSERT INTO public.visitor_counter (count) VALUES (12547);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_visitor_counter_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_visitor_counter_updated_at
BEFORE UPDATE ON public.visitor_counter
FOR EACH ROW
EXECUTE FUNCTION public.update_visitor_counter_timestamp();