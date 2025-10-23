import { useState, useEffect } from "react";
import { Menu, Search, ShoppingCart, User, X, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import lattafaLogo from "@/assets/lattafa-logo-extracted.png";
import { supabase } from "@/integrations/supabase/client";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [trendingIndex, setTrendingIndex] = useState(0);
  const [trendingProducts, setTrendingProducts] = useState<any[]>([]);
  const [newArrivals, setNewArrivals] = useState<any[]>([]);
  const [bestSellers, setBestSellers] = useState<any[]>([]);
  const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data: trending } = await supabase
      .from("products")
      .select("*")
      .eq("section", "trending")
      .order("display_order", { ascending: true });

    const { data: arrivals } = await supabase
      .from("products")
      .select("*")
      .eq("section", "new_arrivals")
      .order("display_order", { ascending: true });

    const { data: sellers } = await supabase
      .from("products")
      .select("*")
      .eq("section", "best_sellers")
      .order("display_order", { ascending: true });

    const { data: collectionData } = await supabase
      .from("products")
      .select("*")
      .eq("section", "collections")
      .order("display_order", { ascending: true });

    setTrendingProducts(trending || []);
    setNewArrivals(arrivals || []);
    setBestSellers(sellers || []);
    setCollections(collectionData || []);
  };

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
                <img src={lattafaLogo} alt="Lattafa Perfumes" className="h-20 w-auto" />
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="flex items-center space-x-8 flex-1 justify-center">
              {/* SHOP Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("shop")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-black">
                  SHOP
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "shop" && trendingProducts.length > 0 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[600px] bg-white border shadow-2xl z-[100] p-8">
                    {/* Trend This Week Carousel */}
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-serif text-lg text-black">Trend This Week</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500">{trendingIndex + 1}/{trendingProducts.length}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setTrendingIndex(Math.max(0, trendingIndex - 1));
                            }}
                            disabled={trendingIndex === 0}
                            className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black"
                            aria-label="Previous"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setTrendingIndex(Math.min(trendingProducts.length - 2, trendingIndex + 1));
                            }}
                            disabled={trendingIndex >= trendingProducts.length - 2}
                            className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black"
                            aria-label="Next"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        {trendingProducts.slice(trendingIndex, trendingIndex + 2).map((product, idx) => (
                          <div key={idx} className="group cursor-pointer text-center">
                            <div className="relative aspect-square overflow-hidden bg-gray-50 rounded mb-3">
                              <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <p className="text-xs text-gray-500 mb-1">{product.vendor}</p>
                            <h4 className="text-base font-semibold mb-1 leading-tight text-black">{product.name}</h4>
                            <p className="text-base font-bold text-black">{product.price}</p>
                          </div>
                        ))}
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
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-black">
                  NEW ARRIVALS
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "new-arrivals" && newArrivals.length > 0 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] bg-white border shadow-2xl p-8 z-[100]">
                    <div className="grid grid-cols-4 gap-6">
                      {newArrivals.map((product, idx) => (
                        <div key={idx} className="group cursor-pointer text-center">
                          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-3">
                            <img
                              src={product.image_url}
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
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-black">
                  BEST SELLERS
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "best-sellers" && bestSellers.length > 0 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] bg-white border shadow-2xl p-8 z-[100]">
                    <div className="grid grid-cols-4 gap-6">
                      {bestSellers.map((product, idx) => (
                        <div key={idx} className="group cursor-pointer text-center">
                          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-3">
                            <img
                              src={product.image_url}
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
                      {[1, 2, 3, 4].map((i) => (
                        <div key={`placeholder-${i}`} className="group cursor-pointer text-center">
                          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-3 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">No Image</span>
                          </div>
                          <h4 className="text-sm font-serif mb-2 text-black">Product Name {i}</h4>
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
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-black">
                  COLLECTIONS
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "collections" && collections.length > 0 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] bg-white border shadow-2xl p-8 z-[100]">
                    <div className="grid grid-cols-4 gap-6">
                      {collections.map((product, idx) => (
                        <div key={idx} className="group cursor-pointer text-center">
                          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-3">
                            <img
                              src={product.image_url}
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

            {/* Icons - Right Side */}
            <div className="flex items-center gap-1 ml-auto">
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
