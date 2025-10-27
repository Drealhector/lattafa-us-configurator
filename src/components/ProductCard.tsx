import { Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id?: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  vendor?: string;
  rating?: number;
  reviewsCount?: number;
  status?: string;
  tags?: string[];
  compact?: boolean;
}

const ProductCard = ({
  id,
  name,
  image,
  price,
  originalPrice,
  vendor = "Lattafa US",
  rating = 0,
  reviewsCount = 0,
  status,
  tags = [],
  compact = false,
}: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/product/${id}`);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`group cursor-pointer ${compact ? 'text-xs' : ''}`}
    >
      <div className={`relative aspect-square overflow-hidden bg-secondary rounded-sm ${compact ? 'mb-2' : 'mb-3'}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
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
      
      <div className={compact ? 'space-y-0.5' : 'space-y-1'}>
        <p className="text-xs text-muted-foreground">{vendor}</p>
        <h3 className={`font-medium line-clamp-2 group-hover:text-accent transition-colors ${compact ? 'text-xs' : 'text-sm'}`}>
          {name}
        </h3>
        
        {!compact && reviewsCount > 0 && (
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
          <span className={`font-semibold ${compact ? 'text-xs' : 'text-sm'}`}>{price}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
