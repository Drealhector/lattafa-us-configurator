import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { getImageUrl } from "@/lib/imageMap";
import { useNavigate } from "react-router-dom";

const TrendingSection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('section', 'trending')
        .order('display_order', { ascending: true })
        .limit(10);
      
      if (data) {
        setProducts(data.map(p => ({
          id: p.id,
          name: p.name,
          image: getImageUrl(p.image_url),
          price: p.price,
          vendor: p.vendor,
        })));
      }
    };
    
    fetchProducts();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(products.length - 5, prev + 1));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif text-[#5B3A29]">Trend This Week</h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= products.length - 5}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 transition-all"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {products.slice(currentIndex, currentIndex + 5).map((product) => (
            <div 
              key={product.id} 
              onClick={() => navigate(`/product/${product.id}`)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-muted rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-muted-foreground mb-1">{product.vendor}</p>
              <h3 className="text-sm font-medium mb-2">{product.name}</h3>
              <p className="text-sm font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
