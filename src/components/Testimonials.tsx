import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "John",
      role: "Verified Customer",
      comment: "Spice Caravan starts off intense, but the dry-down is absolutely beautiful.",
      product: "Spice Caravan",
      rating: 5,
    },
    {
      name: "Maria",
      role: "Verified Customer",
      comment: "Sapphire Oud is labeled unisex, but smells bold and luxurious. Love it!",
      product: "Sapphire Oud",
      rating: 5,
    },
    {
      name: "Ahmed",
      role: "Verified Customer",
      comment: "Rose Mirage smells great and lasts around 8 hours. Highly recommended!",
      product: "Rose Mirage",
      rating: 5,
    },
    {
      name: "Lisa",
      role: "Verified Customer",
      comment: "Candy Noir is sweet and delightful. I get compliments whenever I wear it.",
      product: "Candy Noir",
      rating: 5,
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm mb-4 text-muted-foreground italic">
                  "{review.comment}"
                </p>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                  <p className="text-xs text-accent mt-1">{review.product}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
