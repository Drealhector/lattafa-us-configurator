import ProductCard from "./ProductCard";
import sapphireOud from "@/assets/sapphire-oud.jpg";
import desertFalcon from "@/assets/desert-falcon.jpg";
import spiceCaravan from "@/assets/spice-caravan.jpg";
import roseMirage from "@/assets/rose-mirage.jpg";
import candyNoir from "@/assets/candy-noir.jpg";
import pinkDusk from "@/assets/pink-dusk.jpg";

const TrendingProducts = () => {
  const products = [
    {
      name: "Sapphire Oud",
      image: sapphireOud,
      price: "$49.99",
      rating: 5,
      reviewsCount: 5,
      status: "sold out",
      tags: ["Men", "Trending"],
    },
    {
      name: "Desert Falcon",
      image: desertFalcon,
      price: "From $14.99",
      rating: 4.5,
      reviewsCount: 42,
      tags: ["Men", "Trending"],
    },
    {
      name: "Spice Caravan",
      image: spiceCaravan,
      price: "$49.99",
      rating: 4.8,
      reviewsCount: 50,
      tags: ["Unisex", "Trending"],
    },
    {
      name: "Rose Mirage",
      image: roseMirage,
      price: "$44.99",
      rating: 4.0,
      reviewsCount: 5,
      tags: ["Women", "Trending"],
    },
    {
      name: "Candy Noir",
      image: candyNoir,
      price: "From $29.99",
      rating: 4.2,
      reviewsCount: 12,
      tags: ["Women", "Trending"],
    },
    {
      name: "Pink Dusk",
      image: pinkDusk,
      price: "$39.99",
      rating: 4.0,
      reviewsCount: 4,
      tags: ["Unisex", "Trending"],
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">Trend This Week</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
