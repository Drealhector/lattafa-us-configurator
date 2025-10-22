import { Button } from "./ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-transparent" />
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground">
            PRE-ORDER NOW
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            New Arrivals | Best Sellers
          </p>
          <Button size="lg" className="mt-6">
            Shop All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
