import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  image: string;
  vendor: string;
  price: string;
  status?: string;
}

interface TrendingCarouselProps {
  products: Product[];
}

const TrendingCarousel = ({ products }: TrendingCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(products.length - itemsPerPage, prev + itemsPerPage));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage) + 1;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-lg">Trend This Week</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{currentPage}/{totalPages}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="h-8 w-8"
          >
            <ChevronLeft size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            disabled={currentIndex >= products.length - itemsPerPage}
            className="h-8 w-8"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {visibleProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} compact />
        ))}
      </div>
    </div>
  );
};

export default TrendingCarousel;
