import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { getImageUrl } from "@/lib/imageMap";

const BundlesSection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bundles, setBundles] = useState<any[]>([]);

  useEffect(() => {
    fetchBundles();
  }, []);

  const fetchBundles = async () => {
    const { data } = await supabase
      .from("products")
      .select("*")
      .eq("section", "bundles")
      .order("display_order", { ascending: true });
    
    if (data) setBundles(data);
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(bundles.length - 4, currentIndex + 1));
  };

  if (bundles.length === 0) return null;

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold">Bundles</h2>
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
              disabled={currentIndex >= bundles.length - 4}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bundles.slice(currentIndex, currentIndex + 4).map((bundle) => (
            <div
              key={bundle.id}
              onClick={() => navigate(`/product/${bundle.id}`)}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={getImageUrl(bundle.image_url)}
                  alt={bundle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{bundle.vendor}</p>
                <h3 className="text-sm font-semibold mb-2 line-clamp-2">{bundle.name}</h3>
                <p className="text-lg font-bold text-primary">{bundle.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundlesSection;
