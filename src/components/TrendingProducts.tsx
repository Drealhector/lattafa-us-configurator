import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { supabase } from "@/integrations/supabase/client";
import { getImageUrl } from "@/lib/imageMap";

const TrendingProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('section', 'new_arrivals')
        .order('display_order', { ascending: true })
        .limit(6);
      
      if (data) {
        setProducts(data.map(p => ({
          id: p.id,
          name: p.name,
          image: getImageUrl(p.image_url),
          price: p.price,
          vendor: p.vendor,
          rating: 5,
          reviewsCount: 100,
          tags: ["Trending"],
        })));
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">Trend This Week</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
