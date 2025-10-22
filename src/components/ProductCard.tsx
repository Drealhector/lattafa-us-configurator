import { Star } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  vendor?: string;
  rating?: number;
  reviewsCount?: number;
  status?: string;
  tags?: string[];
}

const ProductCard = ({
  name,
  image,
  price,
  originalPrice,
  vendor = "Lattafa US",
  rating = 0,
  reviewsCount = 0,
  status,
  tags = [],
}: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden bg-secondary rounded-sm mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {status === "sold out" && (
          <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
            <Badge variant="secondary" className="text-xs">Sold Out</Badge>
          </div>
        )}
        {tags.includes("New") && (
          <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">New</Badge>
        )}
      </div>
      
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">{vendor}</p>
        <h3 className="text-sm font-medium line-clamp-2 group-hover:text-accent transition-colors">
          {name}
        </h3>
        
        {reviewsCount > 0 && (
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < Math.floor(rating) ? "fill-accent text-accent" : "text-muted"}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviewsCount})</span>
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{price}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
