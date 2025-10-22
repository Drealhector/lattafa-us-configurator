import { Button } from "./ui/button";
import heroBannerBg from "@/assets/hero-banner-bg.jpg";

const HeroBanner = () => {
  return (
    <section className="relative h-[600px] overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${heroBannerBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-wider">
            TOGETHER WE'RE TROUBLE
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Two fragrances designed to pull you closer and keep you there.<br />
            Strong alone. Dangerous together.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="bg-[#D4AF37] hover:bg-[#C19B2A] text-black font-semibold px-8">
              PRE-ORDER NOW
            </Button>
          </div>
        </div>
      </div>
      
      {/* Product Labels */}
      <div className="absolute bottom-12 left-12 text-white">
        <h2 className="font-serif text-4xl md:text-6xl font-light tracking-wider">ASAD</h2>
        <p className="font-serif text-2xl md:text-4xl font-light tracking-wider">ELIXIR</p>
      </div>
      
      <div className="absolute bottom-12 right-12 text-white text-right">
        <h2 className="font-serif text-4xl md:text-6xl font-light tracking-wider">YARA</h2>
        <p className="font-serif text-xl md:text-2xl font-light italic tracking-wider mt-2">Elixir</p>
      </div>
    </section>
  );
};

export default HeroBanner;
