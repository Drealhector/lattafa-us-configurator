import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import lattafaLogo from "@/assets/lattafa-logo-extracted.png";
import sapphireOud from "@/assets/sapphire-oud.jpg";
import desertFalcon from "@/assets/desert-falcon.jpg";
import spiceCaravan from "@/assets/spice-caravan.jpg";
import roseMirage from "@/assets/rose-mirage.jpg";
import candyNoir from "@/assets/candy-noir.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [trendingIndex, setTrendingIndex] = useState(0);

  const trendingProducts = [
    { name: "Sapphire Oud", image: sapphireOud, vendor: "Lattafa", price: "$49.99 USD" },
    { name: "Desert Falcon", image: desertFalcon, vendor: "Lattafa", price: "From $14.99 USD" },
    { name: "Spice Caravan", image: spiceCaravan, vendor: "Lattafa", price: "$49.99 USD" },
    { name: "Rose Mirage", image: roseMirage, vendor: "Lattafa", price: "$44.99 USD" },
    { name: "Candy Noir", image: candyNoir, vendor: "Lattafa", price: "From $29.99 USD" },
  ];

  const dropdownProducts = [
    { name: "Art of Universe", image: sapphireOud },
    { name: "Atheeri", image: desertFalcon },
    { name: "Khamrah Dukhan", image: spiceCaravan },
    { name: "Victoria", image: roseMirage },
  ];

  const totalPages = trendingProducts.length;
  const currentPage = trendingIndex + 1;

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Animated Top Bar - Brown with scrolling text */}
      <div className="bg-[#5B3A29] text-white py-2.5 overflow-hidden relative">
        <div className="flex animate-[scroll-left_25s_linear_infinite]">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="inline-block px-12 text-sm font-medium whitespace-nowrap">
              FREE Shipping On Orders Over USD $60
            </span>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20 gap-8">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <img src={lattafaLogo} alt="Lattafa Perfumes" className="h-16 w-auto" />
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {/* SHOP Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("shop")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                  SHOP
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "shop" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] bg-white border shadow-2xl z-[100] animate-[slide-down_0.3s_ease-out]">
                    <div className="grid grid-cols-[auto_auto_auto_auto_1fr] gap-8 p-8">
                      {/* Column 1 - Main Links */}
                      <div className="space-y-3 min-w-[120px]">
                        <a href="/collections/best-sellers" className="block text-sm hover:underline font-medium text-black">Best Sellers</a>
                        <a href="/collections/new-arrivals" className="block text-sm hover:underline font-medium text-black">New Arrivals</a>
                      </div>
                      
                      {/* Column 2 - By Category */}
                      <div className="min-w-[160px]">
                        <h3 className="font-semibold text-sm mb-3 text-black">By Category</h3>
                        <div className="space-y-3">
                          <a href="/collections/all" className="block text-sm hover:underline text-black">All Fragrances</a>
                          <a href="/collections/women" className="block text-sm hover:underline text-black">Women's Fragrances</a>
                          <a href="/collections/men" className="block text-sm hover:underline text-black">Men's Fragrances</a>
                          <a href="/collections/unisex" className="block text-sm hover:underline text-black">Unisex Fragrances</a>
                        </div>
                      </div>
                      
                      {/* Column 3 - By Type */}
                      <div className="min-w-[160px]">
                        <h3 className="font-semibold text-sm mb-3 text-black">By Type</h3>
                        <div className="space-y-3">
                          <a href="/collections/edp" className="block text-sm hover:underline text-black">Eau de Parfum (EDP)</a>
                          <a href="/collections/deodorant" className="block text-sm hover:underline text-black">Deodorant</a>
                          <a href="/collections/air-freshener" className="block text-sm hover:underline text-black">Air Freshener</a>
                          <a href="/collections/spray" className="block text-sm hover:underline text-black">All Over Spray</a>
                        </div>
                      </div>
                      
                      {/* Column 4 - By Brand */}
                      <div className="min-w-[120px]">
                        <h3 className="font-semibold text-sm mb-3 text-black">By Brand</h3>
                        <div className="space-y-3">
                          <a href="/collections/lattafa" className="block text-sm hover:underline text-black">Lattafa</a>
                          <a href="/collections/lattafa-pride" className="block text-sm hover:underline text-black">Lattafa Pride</a>
                        </div>
                      </div>
                      
                      {/* Trend This Week Carousel */}
                      <div className="border-l pl-8 min-w-[280px]">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-serif text-base text-black">Trend This Week</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">{currentPage}/{totalPages}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setTrendingIndex(Math.max(0, trendingIndex - 1));
                              }}
                              disabled={trendingIndex === 0}
                              className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black"
                              aria-label="Previous"
                            >
                              <ChevronLeft size={18} />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setTrendingIndex(Math.min(totalPages - 1, trendingIndex + 1));
                              }}
                              disabled={trendingIndex === totalPages - 1}
                              className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black"
                              aria-label="Next"
                            >
                              <ChevronRight size={18} />
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {trendingProducts.slice(trendingIndex, trendingIndex + 2).map((product, idx) => (
                            <div key={idx} className="group cursor-pointer">
                              <div className="relative aspect-square overflow-hidden bg-gray-100 rounded mb-2">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <p className="text-xs text-gray-500 mb-1">{product.vendor}</p>
                              <h4 className="text-sm font-medium mb-1 leading-tight text-black">{product.name}</h4>
                              <p className="text-sm font-semibold text-black">{product.price}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* NEW ARRIVALS Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("new-arrivals")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1 border-b-2 border-transparent">
                  NEW ARRIVALS
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "new-arrivals" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] bg-white border shadow-2xl p-8 z-[100] animate-[slide-down_0.3s_ease-out]">
                    <div className="grid grid-cols-4 gap-6">
                      {dropdownProducts.map((product, idx) => (
                        <div key={idx} className="group cursor-pointer text-center">
                          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="text-sm font-serif mb-2 text-black">{product.name}</h4>
                          <button className="mx-auto w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* BEST SELLERS Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("best-sellers")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                  BEST SELLERS
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "best-sellers" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] bg-white border shadow-2xl p-8 z-[100] animate-[slide-down_0.3s_ease-out]">
                    <div className="grid grid-cols-4 gap-6">
                      {dropdownProducts.map((product, idx) => (
                        <div key={idx} className="group cursor-pointer text-center">
                          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="text-sm font-serif mb-2 text-black">{product.name}</h4>
                          <button className="mx-auto w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* COLLECTIONS Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("collections")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                  COLLECTIONS
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "collections" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] bg-white border shadow-2xl p-8 z-[100] animate-[slide-down_0.3s_ease-out]">
                    <div className="grid grid-cols-4 gap-6">
                      {dropdownProducts.map((product, idx) => (
                        <div key={idx} className="group cursor-pointer text-center">
                          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="text-sm font-serif mb-2 text-black">{product.name}</h4>
                          <button className="mx-auto w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden ml-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Icons - Right Side */}
            <div className="hidden lg:flex items-center gap-1 ml-auto">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Account">
                <User size={20} />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
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
            <a href="/collections/shop" className="block font-medium text-sm">Shop</a>
            <a href="/collections/new-arrivals" className="block font-medium text-sm">New Arrivals</a>
            <a href="/collections/best-sellers" className="block font-medium text-sm">Best Sellers</a>
            <a href="/collections" className="block font-medium text-sm">Collections</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
