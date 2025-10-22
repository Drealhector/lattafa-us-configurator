import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import TrendingCarousel from "./TrendingCarousel";
import ProductCard from "./ProductCard";
import lattafaLogo from "@/assets/lattafa-logo.png";
import sapphireOud from "@/assets/sapphire-oud.jpg";
import desertFalcon from "@/assets/desert-falcon.jpg";
import spiceCaravan from "@/assets/spice-caravan.jpg";
import roseMirage from "@/assets/rose-mirage.jpg";
import candyNoir from "@/assets/candy-noir.jpg";
import pinkDusk from "@/assets/pink-dusk.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const trendingProducts = [
    { name: "Sapphire Oud", image: sapphireOud, vendor: "Lattafa US", price: "$49.99", status: "sold out" },
    { name: "Desert Falcon", image: desertFalcon, vendor: "Lattafa US", price: "From $14.99" },
    { name: "Spice Caravan", image: spiceCaravan, vendor: "Lattafa US", price: "$49.99" },
    { name: "Rose Mirage", image: roseMirage, vendor: "Lattafa US", price: "$44.99" },
    { name: "Candy Noir", image: candyNoir, vendor: "Lattafa US", price: "From $29.99" },
  ];

  const placeholderProducts = [
    { name: "Art of Universe", image: sapphireOud, vendor: "Lattafa US", price: "$39.99" },
    { name: "Atheeri", image: desertFalcon, vendor: "Lattafa US", price: "$44.99" },
    { name: "Khamrah Dukhan", image: spiceCaravan, vendor: "Lattafa US", price: "$49.99" },
    { name: "Victoria", image: roseMirage, vendor: "Lattafa US", price: "$42.99" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Animated Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden relative">
        <div className="flex animate-[scroll-left_20s_linear_infinite] whitespace-nowrap">
          <span className="inline-block px-8 text-sm font-medium">FREE Shipping On Orders Over USD $60</span>
          <span className="inline-block px-8 text-sm font-medium">FREE Shipping On Orders Over USD $60</span>
          <span className="inline-block px-8 text-sm font-medium">FREE Shipping On Orders Over USD $60</span>
          <span className="inline-block px-8 text-sm font-medium">FREE Shipping On Orders Over USD $60</span>
          <span className="inline-block px-8 text-sm font-medium">FREE Shipping On Orders Over USD $60</span>
          <span className="inline-block px-8 text-sm font-medium">FREE Shipping On Orders Over USD $60</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
              <a href="/" className="flex items-center">
                <img src={lattafaLogo} alt="Lattafa" className="h-12" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("shop")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-sm font-medium hover:text-muted-foreground transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-primary">
                  SHOP
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === "shop" && (
                  <div className="absolute left-0 top-full mt-2 w-[800px] bg-background border rounded-sm shadow-lg p-6 z-50">
                    <div className="grid grid-cols-[auto_1fr_1fr_1fr_300px] gap-8">
                      <div className="space-y-2">
                        <a href="/collections/best-sellers" className="block py-1.5 text-sm hover:underline font-medium">Best Sellers</a>
                        <a href="/collections/new-arrivals" className="block py-1.5 text-sm hover:underline font-medium">New Arrivals</a>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-2">By Category</h3>
                        <a href="/collections/all" className="block py-1.5 text-sm hover:underline">All Fragrances</a>
                        <a href="/collections/women" className="block py-1.5 text-sm hover:underline">Women's Fragrances</a>
                        <a href="/collections/men" className="block py-1.5 text-sm hover:underline">Men's Fragrances</a>
                        <a href="/collections/unisex" className="block py-1.5 text-sm hover:underline">Unisex Fragrances</a>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-2">By Type</h3>
                        <a href="/collections/edp" className="block py-1.5 text-sm hover:underline">Eau de Parfum (EDP)</a>
                        <a href="/collections/deodorant" className="block py-1.5 text-sm hover:underline">Deodorant</a>
                        <a href="/collections/air-freshener" className="block py-1.5 text-sm hover:underline">Air Freshener</a>
                        <a href="/collections/spray" className="block py-1.5 text-sm hover:underline">All Over Spray</a>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-2">By Brand</h3>
                        <a href="/collections/lattafa" className="block py-1.5 text-sm hover:underline">Lattafa</a>
                        <a href="/collections/lattafa-pride" className="block py-1.5 text-sm hover:underline">Lattafa Pride</a>
                      </div>
                      <div className="border-l pl-6">
                        <TrendingCarousel products={trendingProducts} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("new-arrivals")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-sm font-medium hover:text-muted-foreground transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-primary">
                  NEW ARRIVALS
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === "new-arrivals" && (
                  <div className="absolute left-0 top-full mt-2 w-[700px] bg-background border rounded-sm shadow-lg p-6 z-50">
                    <div className="grid grid-cols-4 gap-4">
                      {placeholderProducts.map((product, idx) => (
                        <ProductCard key={idx} {...product} compact />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("best-sellers")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-sm font-medium hover:text-muted-foreground transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-primary">
                  BEST SELLERS
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === "best-sellers" && (
                  <div className="absolute left-0 top-full mt-2 w-[700px] bg-background border rounded-sm shadow-lg p-6 z-50">
                    <div className="grid grid-cols-4 gap-4">
                      {placeholderProducts.map((product, idx) => (
                        <ProductCard key={idx} {...product} compact />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("collections")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-sm font-medium hover:text-muted-foreground transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-primary">
                  COLLECTIONS
                  <ChevronDown size={16} />
                </button>
                {activeDropdown === "collections" && (
                  <div className="absolute left-0 top-full mt-2 w-[700px] bg-background border rounded-sm shadow-lg p-6 z-50">
                    <div className="grid grid-cols-4 gap-4">
                      {placeholderProducts.map((product, idx) => (
                        <ProductCard key={idx} {...product} compact />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="/pages/about" className="text-sm font-medium hover:text-muted-foreground transition-colors border-b-2 border-transparent hover:border-primary">About Us</a>
              <a href="/pages/contact" className="text-sm font-medium hover:text-muted-foreground transition-colors border-b-2 border-transparent hover:border-primary">Contact Us</a>
            </nav>

            {/* Icons - Horizontal Layout */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Account" className="hidden sm:flex">
                <User size={20} />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <div>
              <button className="font-medium text-sm mb-2">Shop</button>
              <div className="pl-4 space-y-2">
                <a href="/collections/best-sellers" className="block text-sm text-muted-foreground">Best Sellers</a>
                <a href="/collections/new-arrivals" className="block text-sm text-muted-foreground">New Arrivals</a>
                <a href="/collections/all" className="block text-sm text-muted-foreground">All Fragrances</a>
              </div>
            </div>
            <a href="/collections" className="block font-medium text-sm">Collections</a>
            <a href="/pages/about" className="block font-medium text-sm">About Us</a>
            <a href="/pages/contact" className="block font-medium text-sm">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
