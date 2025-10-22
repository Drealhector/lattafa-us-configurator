import { Button } from "./ui/button";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  reviewsCount?: number;
  status?: string;
  tags?: string[];
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewMoreLink?: string;
  columns?: number;
}

const ProductSection = ({ 
  title, 
  products, 
  viewMoreLink,
  columns = 4 
}: ProductSectionProps) => {
  const gridClass = {
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
  }[columns] || "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-serif text-3xl font-bold">{title}</h2>
          {viewMoreLink && (
            <Button variant="outline" asChild>
              <a href={viewMoreLink}>View More</a>
            </Button>
          )}
        </div>
        <div className={`grid ${gridClass} gap-6`}>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
