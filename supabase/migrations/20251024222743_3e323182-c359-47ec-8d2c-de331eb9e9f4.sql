-- Update existing products with additional images and full descriptions
UPDATE public.products 
SET 
  image_url_2 = 'vanilla-freak-2.jpg',
  image_url_3 = 'vanilla-freak-3.jpg',
  full_description = 'Vanilla Freak from Lattafa''s Gourmand Collection is a captivating Eau de Parfum offered in a 75ml spray. Expertly crafted, this fragrance blends rich vanilla notes with sweet, gourmand accords to create a warm and inviting scent. Perfect for those seeking a sophisticated yet indulgent aroma, Vanilla Freak radiates comfort and elegance throughout the day. Its long-lasting formula ensures you stay enveloped in its luscious fragrance from morning until night. Top notes: Cupcake accord. Middle Notes: Cinnamon, Almond, Sugar Frosting. Base Notes: Vanilla, Musk, Butter cream.'
WHERE name = 'Vanilla Freak' AND section = 'trending';

UPDATE public.products 
SET 
  image_url_2 = 'whipped-pleasure-2.jpg',
  image_url_3 = 'whipped-pleasure-3.jpg',
  full_description = 'A delightful gourmand fragrance that captures the essence of indulgent desserts. Whipped Pleasure envelops you in a cloud of sweet, creamy notes that are irresistibly comforting and playful.'
WHERE name = 'Whipped Pleasure - Give Me Gourmand' AND section = 'trending';

UPDATE public.products 
SET 
  image_url_2 = 'yara-2.jpg',
  image_url_3 = 'yara-3.jpg',
  full_description = 'A juicy, floral, addictive fragrance that whispers softness yet leaves a lasting impression. Yara is an inviting blend of tropical warmth, creamy florals and sweet indulgence that is sweet yet sophisticated, delicate yet addictive, blending orchid, tangerine and vanilla into a scent that feels playful, dreamy and delicious. Created for women who radiate warmth, charm and playful sophistication. Crafted for everyday elegance and soft sophistication. Top Notes: Orchid, Heliotrope, Tangerine. Middle Notes: Gourmand Accord, Tropical Fruits. Base Notes: Vanilla, Musk, Sandalwood.'
WHERE name = 'Yara' AND section = 'best_sellers';

UPDATE public.products 
SET 
  image_url_2 = 'khamrah-2.jpg',
  image_url_3 = 'khamrah-3.jpg',
  full_description = 'Khamrah by Lattafa Perfumes is an Aromatic Spicy fragrance for women and men. This is a new fragrance. Khamrah was launched in 2022. The top notes are Cinnamon, Nutmeg, and Bergamot; the middle notes are Dates, Praline, Tuberose, and Mahonial; the base notes are Vanilla, Tonka Bean, Amberwood, Myrrh, Benzoin, and Akigalawood. Top Notes: Cinnamon, Nutmeg, Bergamot. Middle Notes: Dates, Praline, Tuberose, Mahonial. Base Notes: Vanilla, Tonka Bean, Amberwood, Myrrh, Benzoin, Akigalawood.'
WHERE name = 'Khamrah' AND section = 'best_sellers';

-- Insert new Tamima product
INSERT INTO public.products (name, vendor, price, image_url, image_url_2, section, display_order, full_description)
VALUES 
('Tamima', 'Lattafa', '$29.99', 'tamima.jpg', 'tamima-2.jpg', 'best_sellers', 5, 'A fresh and captivating fragrance that balances citrus brightness with warm, woody undertones. Perfect for everyday wear with its versatile and elegant composition.');