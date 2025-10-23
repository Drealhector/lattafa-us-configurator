import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import BestSellersSection from "@/components/BestSellersSection";
import TrendingSection from "@/components/TrendingSection";
import TrendingProducts from "@/components/TrendingProducts";
import CollectionsOverview from "@/components/CollectionsOverview";
import Testimonials from "@/components/Testimonials";
import FeaturesSection from "@/components/FeaturesSection";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner />
        <BestSellersSection />
        <TrendingProducts />
        <TrendingSection />
        <CollectionsOverview />
        <Testimonials />
        <FeaturesSection />
      </main>

      <Footer />
    </div>;
};
export default Index;