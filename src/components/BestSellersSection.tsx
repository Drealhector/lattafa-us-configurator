import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import yara from "@/assets/yara.jpg";
import khamrah from "@/assets/khamrah.jpg";
import qaedAlFursan from "@/assets/qaed-al-fursan.jpg";
import asad from "@/assets/asad.jpg";

const BestSellersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      name: "Yara",
      image: yara,
      price: "$49.99",
      vendor: "Lattafa",
      rating: 5.0,
      reviewsCount: 342,
    },
    {
      name: "Khamrah",
      image: khamrah,
      price: "$54.99",
      vendor: "Lattafa",
      rating: 4.9,
      reviewsCount: 428,
    },
    {
      name: "Qaed Al Fursan",
      image: qaedAlFursan,
      price: "$64.99",
      vendor: "Lattafa",
      rating: 4.8,
      reviewsCount: 215,
    },
    {
      name: "Asad",
      image: asad,
      price: "$59.99",
      vendor: "Lattafa",
      rating: 4.9,
      reviewsCount: 298,
    },
  ];

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