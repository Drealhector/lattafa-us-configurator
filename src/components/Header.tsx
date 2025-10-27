import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingCart, User, X, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import lattafaLogo from "@/assets/lattafa-logo-extracted.png";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/contexts/CartContext";
import { CartSheet } from "./CartSheet";

// Import product images
import chocoOverdoseImg from "@/assets/choco-overdose.jpg";
import berryOnTopImg from "@/assets/berry-on-top.jpg";
import vanillaFreakImg from "@/assets/vanilla-freak.jpg";
import cookieCraveImg from "@/assets/cookie-crave.jpg";
import whippedPleasureImg from "@/assets/whipped-pleasure.jpg";
import herConfessionImg from "@/assets/her-confession.jpg";
import yaraImg from "@/assets/yara.jpg";
import khamrahImg from "@/assets/khamrah.jpg";
import qaedAlFursanImg from "@/assets/qaed-al-fursan.jpg";
import asadImg from "@/assets/asad.jpg";
import layaanImg from "@/assets/layaan.jpg";
import asadElixirImg from "@/assets/asad-elixir.jpg";
import asadElixir2Img from "@/assets/asad-elixir-2.jpg";
import yaraElixirImg from "@/assets/yara-elixir.jpg";
import yaraElixir2Img from "@/assets/yara-elixir-2.jpg";
import nasmaatImg from "@/assets/nasmaat.jpg";
import nasmaat2Img from "@/assets/nasmaat-2.jpg";
import nebrasElixirImg from "@/assets/nebras-elixir.jpg";
import nebrasElixir2Img from "@/assets/nebras-elixir-2.jpg";
import eclaireBanoffiImg from "@/assets/eclaire-banoffi.jpg";
import eclaireBanoffi2Img from "@/assets/eclaire-banoffi-2.jpg";

// Image mapping for fallback
const imageMap: Record<string, string> = {
  "choco-overdose.jpg": chocoOverdoseImg,
  "berry-on-top.jpg": berryOnTopImg,
  "vanilla-freak.jpg": vanillaFreakImg,
  "cookie-crave.jpg": cookieCraveImg,
  "whipped-pleasure.jpg": whippedPleasureImg,
  "her-confession.jpg": herConfessionImg,
  "yara.jpg": yaraImg,
  "khamrah.jpg": khamrahImg,
  "qaed-al-fursan.jpg": qaedAlFursanImg,
  "asad.jpg": asadImg,
  "layaan.jpg": layaanImg,
  "asad-elixir.jpg": asadElixirImg,
  "asad-elixir-2.jpg": asadElixir2Img,
  "yara-elixir.jpg": yaraElixirImg,
  "yara-elixir-2.jpg": yaraElixir2Img,
  "nasmaat.jpg": nasmaatImg,
  "nasmaat-2.jpg": nasmaat2Img,
  "nebras-elixir.jpg": nebrasElixirImg,
  "nebras-elixir-2.jpg": nebrasElixir2Img,
  "eclaire-banoffi.jpg": eclaireBanoffiImg,
  "eclaire-banoffi-2.jpg": eclaireBanoffi2Img,
};
const Header = () => {
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [trendingIndex, setTrendingIndex] = useState(0);
  const [arrivalsIndex, setArrivalsIndex] = useState(0);
  const [sellersIndex, setSellersIndex] = useState(0);
  const [collectionsIndex, setCollectionsIndex] = useState(0);
  const [trendingProducts, setTrendingProducts] = useState<any[]>([]);
  const [newArrivals, setNewArrivals] = useState<any[]>([]);
  const [bestSellers, setBestSellers] = useState<any[]>([]);
  const [collections, setCollections] = useState<any[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const {
      data: trending
    } = await supabase.from("products").select("*").eq("section", "trending").order("display_order", {
      ascending: true
    });
    const {
      data: arrivals
    } = await supabase.from("products").select("*").eq("section", "new_arrivals").order("display_order", {
      ascending: true
    });
    const {
      data: sellers
    } = await supabase.from("products").select("*").eq("section", "best_sellers").order("display_order", {
      ascending: true
    });
    const {
      data: collectionData
    } = await supabase.from("products").select("*").eq("section", "collections").order("display_order", {
      ascending: true
    });
    
    // Map images to local assets
    const mapImageUrl = (url: string) => {
      const fileName = url?.split('/').pop() || '';
      return imageMap[fileName] || url;
    };
    
    const mapProduct = (p: any) => ({
      ...p,
      image_url: mapImageUrl(p.image_url),
      image_url_2: p.image_url_2 ? mapImageUrl(p.image_url_2) : null,
    });
    
    setTrendingProducts((trending || []).map(mapProduct));
    setNewArrivals((arrivals || []).map(mapProduct));
    setBestSellers((sellers || []).map(mapProduct));
    setCollections((collectionData || []).map(mapProduct));
  };
  
  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Animated Top Bar - Brown with scrolling text */}
      <div className="bg-[#5B3A29] text-white py-2 overflow-hidden relative">
        <div className="flex animate-[scroll-left_25s_linear_infinite]">
          {[...Array(10)].map((_, i) => <span key={i} className="inline-block px-12 text-xs font-medium whitespace-nowrap">
              FREE Shipping On Orders Over USD $60
            </span>)}
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16 gap-8">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <img src={lattafaLogo} alt="Lattafa Perfumes" className="h-12 w-auto" />
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              {/* SHOP Dropdown */}
              <div className="relative" onMouseEnter={() => setActiveDropdown("shop")} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-black">
                  SHOP
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "shop" && trendingProducts.length > 0 && <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[600px] bg-white border shadow-2xl z-[100] p-8 max-h-[500px]">
                    {/* Trend This Week Carousel */}
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-serif text-lg text-black">Trend This Week</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500">{trendingIndex + 1}/{trendingProducts.length}</span>
                          <button onClick={e => {
                        e.stopPropagation();
                        setTrendingIndex(Math.max(0, trendingIndex - 1));
                      }} disabled={trendingIndex === 0} className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black" aria-label="Previous">
                            <ChevronLeft size={20} />
                          </button>
                          <button onClick={e => {
                        e.stopPropagation();
                        setTrendingIndex(Math.min(trendingProducts.length - 2, trendingIndex + 1));
                      }} disabled={trendingIndex >= trendingProducts.length - 2} className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black" aria-label="Next">
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        {trendingProducts.slice(trendingIndex, trendingIndex + 2).map((product, idx) => <div key={idx} onClick={() => navigate(`/product/${product.id}`)} className="group cursor-pointer text-center">
                            <div className="relative aspect-square overflow-hidden bg-gray-50 rounded mb-3">
                              <img src={product.image_url} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-xs text-gray-500 mb-1">{product.vendor}</p>
                            <h4 className="text-base font-semibold mb-1 leading-tight text-black">{product.name}</h4>
                            <p className="text-base font-bold text-black">{product.price}</p>
                          </div>)}
                      </div>
                    </div>
                  </div>}
              </div>

              {/* NEW ARRIVALS Dropdown */}
              <div className="relative" onMouseEnter={() => setActiveDropdown("new-arrivals")} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-black">
                  NEW ARRIVALS
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "new-arrivals" && newArrivals.length > 0 && <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] bg-white border shadow-2xl p-8 z-[100] max-h-[600px]">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-serif text-lg text-black">New Arrivals</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">{Math.floor(arrivalsIndex / 4) + 1}/{Math.ceil(newArrivals.length / 4)}</span>
                        <button onClick={e => { e.stopPropagation(); setArrivalsIndex(Math.max(0, arrivalsIndex - 4)); }} disabled={arrivalsIndex === 0} className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black" aria-label="Previous">
                          <ChevronLeft size={20} />
                        </button>
                        <button onClick={e => { e.stopPropagation(); setArrivalsIndex(Math.min(newArrivals.length - 4, arrivalsIndex + 4)); }} disabled={arrivalsIndex >= newArrivals.length - 4} className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black" aria-label="Next">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                      {newArrivals.slice(arrivalsIndex, arrivalsIndex + 4).map((product, idx) => <div key={idx} onClick={() => navigate(`/product/${product.id}`)} className="group cursor-pointer text-center">
                          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-3">
                            <img src={product.image_url} alt={product.name} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                            {product.image_url_2 && <img src={product.image_url_2} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />}
                          </div>
                          <h4 className="text-sm font-serif mb-2 text-black">{product.name}</h4>
                          <p className="text-sm font-bold text-black">{product.price}</p>
                        </div>)}
                    </div>
                  </div>}
              </div>

              {/* BEST SELLERS Dropdown */}
              <div className="relative" onMouseEnter={() => setActiveDropdown("best-sellers")} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-black">
                  BEST SELLERS
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "best-sellers" && bestSellers.length > 0 && <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] bg-white border shadow-2xl p-8 z-[100] max-h-[600px]">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-serif text-lg text-black">Best Sellers</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">{Math.floor(sellersIndex / 4) + 1}/{Math.ceil(bestSellers.length / 4)}</span>
                        <button onClick={e => { e.stopPropagation(); setSellersIndex(Math.max(0, sellersIndex - 4)); }} disabled={sellersIndex === 0} className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black" aria-label="Previous">
                          <ChevronLeft size={20} />
                        </button>
                        <button onClick={e => { e.stopPropagation(); setSellersIndex(Math.min(bestSellers.length - 4, sellersIndex + 4)); }} disabled={sellersIndex >= bestSellers.length - 4} className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black" aria-label="Next">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                      {bestSellers.slice(sellersIndex, sellersIndex + 4).map((product, idx) => <div key={idx} onClick={() => navigate(`/product/${product.id}`)} className="group cursor-pointer text-center">
                          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-3">
                            <img src={product.image_url} alt={product.name} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                            {product.image_url_2 && <img src={product.image_url_2} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />}
                          </div>
                          <h4 className="text-sm font-serif mb-2 text-black">{product.name}</h4>
                          <p className="text-sm font-bold text-black">{product.price}</p>
                        </div>)}
                    </div>
                  </div>}
              </div>

              {/* COLLECTIONS Dropdown */}
              <div className="relative" onMouseEnter={() => setActiveDropdown("collections")} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="text-sm font-semibold tracking-wide hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-black">
                  COLLECTIONS
                  <ChevronDown size={14} className="text-gray-500" />
                </button>
                {activeDropdown === "collections" && collections.length > 0 && <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] bg-white border shadow-2xl p-8 z-[100] max-h-[600px]">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-serif text-lg text-black">Collections</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">{Math.floor(collectionsIndex / 4) + 1}/{Math.ceil(collections.length / 4)}</span>
                        <button onClick={e => { e.stopPropagation(); setCollectionsIndex(Math.max(0, collectionsIndex - 4)); }} disabled={collectionsIndex === 0} className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black" aria-label="Previous">
                          <ChevronLeft size={20} />
                        </button>
                        <button onClick={e => { e.stopPropagation(); setCollectionsIndex(Math.min(collections.length - 4, collectionsIndex + 4)); }} disabled={collectionsIndex >= collections.length - 4} className="disabled:opacity-30 hover:opacity-70 transition-opacity text-black" aria-label="Next">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                      {collections.slice(collectionsIndex, collectionsIndex + 4).map((product, idx) => <div key={idx} onClick={() => navigate(`/product/${product.id}`)} className="group cursor-pointer text-center">
                          <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-3">
                            <img src={product.image_url} alt={product.name} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                            {product.image_url_2 && <img src={product.image_url_2} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />}
                          </div>
                          <h4 className="text-sm font-serif mb-2 text-black">{product.name}</h4>
                          <p className="text-sm font-bold text-black">{product.price}</p>
                        </div>)}
                    </div>
                  </div>}
              </div>
            </nav>

            {/* Icons - Right Side */}
            <div className="flex items-center gap-1 ml-auto">
              <Button variant="ghost" size="icon" aria-label="Search" className="lg:flex">
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Account" className="hidden lg:flex">
                <User size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Cart" 
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Menu" 
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <img src={lattafaLogo} alt="Lattafa Perfumes" className="h-10 w-auto" />
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setMobileSubmenu(null); }} 
              className="p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Menu */}
          {!mobileSubmenu && (
            <nav className="p-6">
              <div className="space-y-6">
                <button
                  onClick={() => setMobileSubmenu('shop')}
                  className="w-full flex items-center justify-between py-4 border-b border-gray-200"
                >
                  <span className="text-2xl font-serif text-black">Shop</span>
                  <ChevronRight size={24} className="text-gray-400" />
                </button>
                
                <button
                  onClick={() => setMobileSubmenu('new-arrivals')}
                  className="w-full flex items-center justify-between py-4 border-b border-gray-200"
                >
                  <span className="text-2xl font-serif text-black">New Arrivals</span>
                  <ChevronRight size={24} className="text-gray-400" />
                </button>
                
                <button
                  onClick={() => setMobileSubmenu('best-sellers')}
                  className="w-full flex items-center justify-between py-4 border-b border-gray-200"
                >
                  <span className="text-2xl font-serif text-black">Best Sellers</span>
                  <ChevronRight size={24} className="text-gray-400" />
                </button>
                
                <button
                  onClick={() => setMobileSubmenu('collections')}
                  className="w-full flex items-center justify-between py-4 border-b border-gray-200"
                >
                  <span className="text-2xl font-serif text-black">Collections</span>
                  <ChevronRight size={24} className="text-gray-400" />
                </button>
                
                <div className="py-4 border-b border-gray-200">
                  <span className="text-2xl font-serif text-black">Bundles</span>
                </div>
                
                <div className="py-4 border-b border-gray-200">
                  <span className="text-2xl font-serif text-black">Track My Order</span>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t">
                <button className="w-full bg-black text-white py-4 rounded-full text-lg font-semibold mb-4">
                  LOG IN
                </button>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="text-2xl">🇺🇸</span>
                  <span>United States (USD $)</span>
                  <ChevronDown size={16} />
                </div>
              </div>
            </nav>
          )}

          {/* Submenu - Shop */}
          {mobileSubmenu === 'shop' && (
            <div className="p-6">
              <button 
                onClick={() => setMobileSubmenu(null)}
                className="flex items-center gap-2 mb-6"
              >
                <ChevronLeft size={24} />
                <span className="text-lg font-bold uppercase tracking-wider">SHOP</span>
              </button>
              <div className="grid grid-cols-2 gap-4 pb-32">
                {trendingProducts.map((product, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => { navigate(`/product/${product.id}`); setIsMobileMenuOpen(false); setMobileSubmenu(null); }} 
                    className="cursor-pointer"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-50 rounded-lg mb-3">
                      <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-sm font-serif mb-1 text-black">{product.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submenu - New Arrivals */}
          {mobileSubmenu === 'new-arrivals' && (
            <div className="p-6">
              <button 
                onClick={() => setMobileSubmenu(null)}
                className="flex items-center gap-2 mb-6"
              >
                <ChevronLeft size={24} />
                <span className="text-lg font-bold uppercase tracking-wider">NEW ARRIVALS</span>
              </button>
              <div className="grid grid-cols-2 gap-4 pb-32">
                {newArrivals.map((product, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => { navigate(`/product/${product.id}`); setIsMobileMenuOpen(false); setMobileSubmenu(null); }} 
                    className="cursor-pointer"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-50 rounded-lg mb-3">
                      <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-sm font-serif mb-1 text-black">{product.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submenu - Best Sellers */}
          {mobileSubmenu === 'best-sellers' && (
            <div className="p-6">
              <button 
                onClick={() => setMobileSubmenu(null)}
                className="flex items-center gap-2 mb-6"
              >
                <ChevronLeft size={24} />
                <span className="text-lg font-bold uppercase tracking-wider">BEST SELLERS</span>
              </button>
              <div className="grid grid-cols-2 gap-4 pb-32">
                {bestSellers.map((product, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => { navigate(`/product/${product.id}`); setIsMobileMenuOpen(false); setMobileSubmenu(null); }} 
                    className="cursor-pointer"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-50 rounded-lg mb-3">
                      <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-sm font-serif mb-1 text-black">{product.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submenu - Collections */}
          {mobileSubmenu === 'collections' && (
            <div className="p-6">
              <button 
                onClick={() => setMobileSubmenu(null)}
                className="flex items-center gap-2 mb-6"
              >
                <ChevronLeft size={24} />
                <span className="text-lg font-bold uppercase tracking-wider">COLLECTIONS</span>
              </button>
              <div className="grid grid-cols-2 gap-4 pb-32">
                {collections.map((product, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => { navigate(`/product/${product.id}`); setIsMobileMenuOpen(false); setMobileSubmenu(null); }} 
                    className="cursor-pointer"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-50 rounded-lg mb-3">
                      <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-sm font-serif mb-1 text-black">{product.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Section for Submenus */}
          {mobileSubmenu && (
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white border-t">
              <button className="w-full bg-black text-white py-4 rounded-full text-lg font-semibold mb-4">
                LOG IN
              </button>
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-2xl">🇺🇸</span>
                <span>United States (USD $)</span>
                <ChevronDown size={16} />
              </div>
            </div>
          )}
        </div>
      )}

      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  );
};

export default Header;