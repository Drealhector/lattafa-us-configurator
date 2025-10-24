import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import { supabase } from "@/integrations/supabase/client";

const BestSellersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('section', 'best_sellers')
        .order('display_order', { ascending: true });
      
      if (data) {
        setProducts(data.map(p => ({
          name: p.name,
          image: p.image_url,
          price: p.price,
          vendor: p.vendor,
          rating: 5.0,
          reviewsCount: 100,
        })));
      }
    };
    
    fetchProducts();
  }, []);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(products.length - 4, currentIndex + 1));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl font-bold">Best Sellers</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= products.length - 4}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(currentIndex, currentIndex + 4).map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;