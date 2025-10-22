import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        FREE Shipping On Orders Over US$60
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
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
              <a href="/" className="flex flex-col items-center">
                <span className="font-serif text-2xl font-bold tracking-tight">Lattafa</span>
                <span className="font-serif text-xs tracking-widest">US</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              <div
                className="relative"
                onMouseEnter={() => setIsShopOpen(true)}
                onMouseLeave={() => setIsShopOpen(false)}
              >
                <button className="text-sm font-medium hover:text-muted-foreground transition-colors">
                  Shop
                </button>
                {isShopOpen && (
                  <div className="absolute left-0 top-full mt-2 w-[600px] bg-popover border rounded-sm shadow-lg p-6 z-50">
                    <div className="grid grid-cols-4 gap-8">
                      <div>
                        <a href="/collections/best-sellers" className="block py-1.5 text-sm hover:text-accent transition-colors">Best Sellers</a>
                        <a href="/collections/new-arrivals" className="block py-1.5 text-sm hover:text-accent transition-colors">New Arrivals</a>
                        <a href="/collections/bundles" className="block py-1.5 text-sm hover:text-accent transition-colors">Bundles</a>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-2">By Category</h3>
                        <a href="/collections/all" className="block py-1.5 text-sm hover:text-accent transition-colors">All Fragrances</a>
                        <a href="/collections/women" className="block py-1.5 text-sm hover:text-accent transition-colors">Women's Fragrances</a>
                        <a href="/collections/men" className="block py-1.5 text-sm hover:text-accent transition-colors">Men's Fragrances</a>
                        <a href="/collections/unisex" className="block py-1.5 text-sm hover:text-accent transition-colors">Unisex Fragrances</a>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-2">By Type</h3>
                        <a href="/collections/edp" className="block py-1.5 text-sm hover:text-accent transition-colors">Eau de Parfum (EDP)</a>
                        <a href="/collections/deodorant" className="block py-1.5 text-sm hover:text-accent transition-colors">Deodorant</a>
                        <a href="/collections/air-freshener" className="block py-1.5 text-sm hover:text-accent transition-colors">Air Freshener</a>
                        <a href="/collections/spray" className="block py-1.5 text-sm hover:text-accent transition-colors">All Over Spray</a>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-2">By Brand</h3>
                        <a href="/collections/lattafa" className="block py-1.5 text-sm hover:text-accent transition-colors">Lattafa</a>
                        <a href="/collections/lattafa-pride" className="block py-1.5 text-sm hover:text-accent transition-colors">Lattafa Pride</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="/collections" className="text-sm font-medium hover:text-muted-foreground transition-colors">Collections</a>
              <a href="/pages/about" className="text-sm font-medium hover:text-muted-foreground transition-colors">About Us</a>
              <a href="/pages/contact" className="text-sm font-medium hover:text-muted-foreground transition-colors">Contact Us</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Account" className="hidden sm:flex">
                <User size={20} />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
