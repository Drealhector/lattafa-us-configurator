import { Button } from "./ui/button";
import heroProductsDuo from "@/assets/hero-duo-products.png";

const HeroBanner = () => {
  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[85vh] w-full overflow-hidden bg-black">
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
        <div className="max-w-3xl space-y-3 sm:space-y-4 md:space-y-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-wider drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            TOGETHER WE'RE TROUBLE
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Two fragrances designed to pull you closer and keep you there.<br className="hidden sm:block" />
            Strong alone. Dangerous together.
          </p>
          <div className="flex gap-4 justify-center pt-2 sm:pt-4">
            <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#C19B2A] hover:to-[#D4AF37] text-black font-semibold px-6 sm:px-8 text-sm sm:text-base shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 animate-shimmer">
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
      
      {/* Product Labels - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 lg:bottom-12 left-4 lg:left-12 text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl font-light tracking-wider">CHOCO</h2>
        <p className="font-serif text-lg md:text-xl lg:text-3xl font-light tracking-wider">OVERDOSE</p>
      </div>
      
      <div className="hidden md:block absolute bottom-8 lg:bottom-12 right-4 lg:right-12 text-white text-right drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl font-light tracking-wider">VANILLA</h2>
        <p className="font-serif text-lg md:text-xl lg:text-2xl font-light italic tracking-wider mt-2">Freak</p>
      </div>
    </section>
  );
};

export default HeroBanner;
