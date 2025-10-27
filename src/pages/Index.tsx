import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import BestSellersSection from "@/components/BestSellersSection";
import TrendingSection from "@/components/TrendingSection";
import TrendingProducts from "@/components/TrendingProducts";
import CollectionsOverview from "@/components/CollectionsOverview";
import Testimonials from "@/components/Testimonials";
import FeaturesSection from "@/components/FeaturesSection";
import Under30Section from "@/components/Under30Section";
import BundlesSection from "@/components/BundlesSection";
import CategoryCarouselSection from "@/components/CategoryCarouselSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner />
        <BestSellersSection />
        <TrendingProducts />
        <TrendingSection />
        <CollectionsOverview />
        <CategoryCarouselSection title="Men's Collection" section="men" />
        <CategoryCarouselSection title="Women's Collection" section="women" />
        <CategoryCarouselSection title="Unisex Collection" section="unisex" />
        <CategoryCarouselSection title="Lattafa Pride" section="lattafa_pride" />
        <CategoryCarouselSection title="Niche Emarati" section="niche_emarati" />
        <Under30Section />
        <BundlesSection />
        <Testimonials />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;