import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { getImageUrl } from "@/lib/imageMap";
import { Button } from "./ui/button";

const Under30Section = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await supabase
      .from("products")
      .select("*")
      .eq("section", "under_30")
      .order("display_order", { ascending: true });
    
    if (data) setProducts(data);
  };

  const displayedProducts = showAll ? products : products.slice(0, 6);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Under $30</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={getImageUrl(product.image_url)}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">{product.vendor}</p>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-xl font-bold text-primary">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        {products.length > 6 && !showAll && (
          <div className="text-center">
            <Button onClick={() => setShowAll(true)} variant="outline" size="lg">
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Under30Section;
