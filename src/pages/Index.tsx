import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import TrendingProducts from "@/components/TrendingProducts";
import CollectionsOverview from "@/components/CollectionsOverview";
import Testimonials from "@/components/Testimonials";
import FeaturesSection from "@/components/FeaturesSection";
import ProductSection from "@/components/ProductSection";
import sapphireOud from "@/assets/sapphire-oud.jpg";
import desertFalcon from "@/assets/desert-falcon.jpg";
import spiceCaravan from "@/assets/spice-caravan.jpg";
import roseMirage from "@/assets/rose-mirage.jpg";
import candyNoir from "@/assets/candy-noir.jpg";
import pinkDusk from "@/assets/pink-dusk.jpg";

const Index = () => {
  const under30Products = [
    { name: "Desert Falcon", image: desertFalcon, price: "From $14.99", rating: 4.5, reviewsCount: 42 },
    { name: "Spice Caravan", image: spiceCaravan, price: "$29.99", rating: 4.8, reviewsCount: 50 },
    { name: "Rose Mirage", image: roseMirage, price: "$29.99", rating: 4.0, reviewsCount: 5 },
    { name: "Candy Noir", image: candyNoir, price: "From $29.99", rating: 4.2, reviewsCount: 12 },
    { name: "Pink Dusk", image: pinkDusk, price: "$29.99", rating: 4.0, reviewsCount: 4 },
    { name: "Sapphire Oud", image: sapphireOud, price: "$29.99", rating: 5, reviewsCount: 5 },
    { name: "Desert Falcon", image: desertFalcon, price: "$29.99", rating: 4.5, reviewsCount: 42 },
    { name: "Rose Mirage", image: roseMirage, price: "$29.99", rating: 4.0, reviewsCount: 5 },
  ];

  const bundlesProducts = [
    { name: "Desert Luxe Set", image: desertFalcon, price: "$59.99", rating: 5, reviewsCount: 15 },
    { name: "Noir Duo Set", image: candyNoir, price: "$54.99", rating: 4.8, reviewsCount: 12 },
    { name: "Spice Caravan Set", image: spiceCaravan, price: "$54.99", rating: 4.7, reviewsCount: 8 },
    { name: "Rose Collection", image: roseMirage, price: "$49.99", rating: 4.9, reviewsCount: 20 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner />
        <TrendingProducts />
        <CollectionsOverview />
        <ProductSection 
          title="Under $30" 
          products={under30Products.slice(0, 8)}
          viewMoreLink="/collections/under-30"
          columns={4}
        />
        <ProductSection 
          title="Bundles" 
          products={bundlesProducts}
          viewMoreLink="/collections/bundles"
          columns={4}
        />
        <Testimonials />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
