-- First check and modify the section column to accept the new values
-- Drop the existing type constraint and recreate with new values
DO $$ 
BEGIN
  -- Drop constraint if exists
  ALTER TABLE products DROP CONSTRAINT IF EXISTS products_section_check;
  
  -- Alter column to text if it's not already
  ALTER TABLE products ALTER COLUMN section TYPE text;
  
  -- Add check constraint with all section types
  ALTER TABLE products ADD CONSTRAINT products_section_check 
    CHECK (section IN ('best_sellers', 'bundles', 'collections', 'new_arrivals', 'trending', 'under_30', 'men', 'women', 'unisex', 'lattafa_pride', 'niche_emarati', 'personal_care', 'home_care', 'gift_sets'));
END $$;