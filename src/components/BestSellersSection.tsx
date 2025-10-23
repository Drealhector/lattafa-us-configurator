import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
const BestSellersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      const {
        data,
        error
      } = await supabase.from("products").select("*").eq("section", "best_sellers").order("display_order", {
        ascending: true
      });
      if (data && !error) {
        setProducts(data);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(products.length - 4, prev + 1));
  };
  if (loading) {
    return <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-[#5B3A29] mb-8">Best Sellers</h2>
          
        </div>
      </section>;
  }
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        

        <div className="grid grid-cols-4 gap-6">
          {products.slice(currentIndex, currentIndex + 4).map(product => {})}
        </div>
      </div>
    </section>;
};
export default BestSellersSection;