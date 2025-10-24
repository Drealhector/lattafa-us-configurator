import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import { supabase } from "@/integrations/supabase/client";
import { getImageUrl } from "@/lib/imageMap";

interface CategoryCarouselSectionProps {
  title: string;
  section: string;
  itemsPerView?: number;
}

const CategoryCarouselSection = ({ 
  title, 
  section,
  itemsPerView = 4 
}: CategoryCarouselSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('section', section)
        .order('display_order', { ascending: true });
      
      if (data) {
        setProducts(data.map(p => ({
          id: p.id,
          name: p.name,
          image: getImageUrl(p.image_url),
          price: p.price,
          vendor: p.vendor,
          rating: 5,
          reviewsCount: 100,
        })));
      }
    };
    
    fetchProducts();
  }, [section]);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(products.length - itemsPerView, currentIndex + 1));
  };

  if (products.length === 0) return null;

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground text-sm">
              What you want when you want it in an instant.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="rounded-full h-10 w-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= products.length - itemsPerView}
              className="rounded-full h-10 w-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(currentIndex, currentIndex + itemsPerView).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarouselSection;
