-- Add columns for multiple images and full description to products table
ALTER TABLE public.products 
ADD COLUMN IF NOT EXISTS image_url_2 text,
ADD COLUMN IF NOT EXISTS image_url_3 text,
ADD COLUMN IF NOT EXISTS full_description text;

-- Update existing products to have proper descriptions
UPDATE public.products 
SET full_description = 'A luxurious fragrance that captivates with its rich and sophisticated blend.'
WHERE full_description IS NULL;