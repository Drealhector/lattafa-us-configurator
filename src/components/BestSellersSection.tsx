import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sapphireOud from "@/assets/sapphire-oud.jpg";
import desertFalcon from "@/assets/desert-falcon.jpg";
import spiceCaravan from "@/assets/spice-caravan.jpg";
import roseMirage from "@/assets/rose-mirage.jpg";

const BestSellersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { name: "Afeef", image: sapphireOud, price: "$49.99 USD", vendor: "Lattafa" },
    { name: "Asad", image: desertFalcon, price: "From $14.99 USD", vendor: "Lattafa" },
    { name: "Khamrah", image: spiceCaravan, price: "$49.99 USD", vendor: "Lattafa" },
    { name: "Yara", image: roseMirage, price: "$44.99 USD", vendor: "Lattafa" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(products.length - 4, prev + 1));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif text-[#5B3A29]">Best Sellers</h2>
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
              disabled={currentIndex >= products.length - 4}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 transition-all"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {products.slice(currentIndex, currentIndex + 4).map((product, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-muted rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-muted-foreground mb-1">{product.vendor}</p>
              <h3 className="text-base font-medium mb-2">{product.name}</h3>
              <p className="text-sm font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
