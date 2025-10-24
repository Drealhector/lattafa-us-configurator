import { Button } from "./ui/button";
import heroProductsDuo from "@/assets/hero-duo-products.png";

const HeroBanner = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroProductsDuo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-wider drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            TOGETHER WE'RE TROUBLE
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Two fragrances designed to pull you closer and keep you there.<br />
            Strong alone. Dangerous together.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#C19B2A] hover:to-[#D4AF37] text-black font-semibold px-8 shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 animate-shimmer">
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
      
      {/* Product Labels */}
      <div className="absolute bottom-12 left-12 text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wider">CHOCO</h2>
        <p className="font-serif text-xl md:text-3xl font-light tracking-wider">OVERDOSE</p>
      </div>
      
      <div className="absolute bottom-12 right-12 text-white text-right drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
        <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wider">VANILLA</h2>
        <p className="font-serif text-xl md:text-2xl font-light italic tracking-wider mt-2">Freak</p>
      </div>
    </section>
  );
};

export default HeroBanner;
