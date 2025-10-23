import ProductCard from "./ProductCard";
import chocoOverdose from "@/assets/choco-overdose.jpg";
import berryOnTop from "@/assets/berry-on-top.jpg";
import vanillaFreak from "@/assets/vanilla-freak.jpg";
import cookieCrave from "@/assets/cookie-crave.jpg";
import whippedPleasure from "@/assets/whipped-pleasure.jpg";
import herConfession from "@/assets/her-confession.jpg";

const TrendingProducts = () => {
  const products = [
    {
      name: "Choco Overdose - Give Me Gourmand",
      image: chocoOverdose,
      price: "$39.99",
      rating: 5,
      reviewsCount: 124,
      tags: ["Unisex", "Trending"],
    },
    {
      name: "Berry On Top - Give Me Gourmand",
      image: berryOnTop,
      price: "$39.99",
      rating: 4.8,
      reviewsCount: 98,
      tags: ["Women", "Trending"],
    },
    {
      name: "Vanilla Freak - Give Me Gourmand",
      image: vanillaFreak,
      price: "$39.99",
      rating: 4.9,
      reviewsCount: 156,
      tags: ["Unisex", "Trending"],
    },
    {
      name: "Cookie Crave - Give Me Gourmand",
      image: cookieCrave,
      price: "$39.99",
      rating: 4.7,
      reviewsCount: 87,
      tags: ["Unisex", "Trending"],
    },
    {
      name: "Whipped Pleasure - Give Me Gourmand",
      image: whippedPleasure,
      price: "$39.99",
      rating: 4.8,
      reviewsCount: 112,
      tags: ["Women", "Trending"],
    },
    {
      name: "Her Confession",
      image: herConfession,
      price: "$59.99",
      rating: 5.0,
      reviewsCount: 203,
      tags: ["Women", "Trending"],
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
