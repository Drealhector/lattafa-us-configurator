-- Create enum for product sections
CREATE TYPE product_section AS ENUM ('trending', 'new_arrivals', 'best_sellers', 'collections');

-- Create products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  vendor TEXT NOT NULL DEFAULT 'Lattafa',
  price TEXT NOT NULL,
  image_url TEXT NOT NULL,
  section product_section NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Public read access (anyone can view products)
CREATE POLICY "Anyone can view products"
ON public.products
FOR SELECT
TO public
USING (true);

-- Only authenticated users can insert/update/delete (for admin use)
CREATE POLICY "Authenticated users can insert products"
ON public.products
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
ON public.products
FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete products"
ON public.products
FOR DELETE
TO authenticated
USING (true);

-- Create storage bucket for product images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true);

-- Storage policies for product images
CREATE POLICY "Anyone can view product images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'product-images');

CREATE POLICY "Authenticated users can upload product images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'product-images');

CREATE POLICY "Authenticated users can update product images"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'product-images');

CREATE POLICY "Authenticated users can delete product images"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'product-images');

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample products for each section
INSERT INTO public.products (name, vendor, price, image_url, section, display_order) VALUES
('Sapphire Oud', 'Lattafa', '$49.99 USD', 'https://via.placeholder.com/400', 'trending', 1),
('Desert Falcon', 'Lattafa', 'From $14.99 USD', 'https://via.placeholder.com/400', 'trending', 2),
('Spice Caravan', 'Lattafa', '$49.99 USD', 'https://via.placeholder.com/400', 'trending', 3),
('Rose Mirage', 'Lattafa', '$44.99 USD', 'https://via.placeholder.com/400', 'trending', 4),
('Candy Noir', 'Lattafa', 'From $29.99 USD', 'https://via.placeholder.com/400', 'trending', 5),
('Art of Universe', 'Lattafa', '$59.99 USD', 'https://via.placeholder.com/400', 'new_arrivals', 1),
('Atheeri', 'Lattafa', '$54.99 USD', 'https://via.placeholder.com/400', 'new_arrivals', 2),
('Khamrah Dukhan', 'Lattafa', '$49.99 USD', 'https://via.placeholder.com/400', 'best_sellers', 1),
('Victoria', 'Lattafa', '$44.99 USD', 'https://via.placeholder.com/400', 'collections', 1);