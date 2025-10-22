import { Facebook, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold mb-2">Subscribe to get 10% OFF</h2>
            <p className="text-sm mb-6 text-primary-foreground/80">Subscribe for discounts and updates.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Email"
                className="bg-primary-foreground text-primary"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
            <p className="text-xs mt-4 text-primary-foreground/60">
              By subscribing you agree to the Terms of Use & Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Shop */}
            <div>
              <h3 className="font-semibold mb-4">Quick Shop</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="/collections/all" className="hover:text-primary-foreground transition-colors">All Fragrances</a></li>
                <li><a href="/collections/new-arrivals" className="hover:text-primary-foreground transition-colors">New Arrivals</a></li>
                <li><a href="/collections/bestsellers" className="hover:text-primary-foreground transition-colors">Bestsellers</a></li>
                <li><a href="/products/gift-card" className="hover:text-primary-foreground transition-colors">Gift Card</a></li>
                <li><a href="/collections/bundles" className="hover:text-primary-foreground transition-colors">Bundles</a></li>
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h3 className="font-semibold mb-4">Customer Support</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="/pages/faq" className="hover:text-primary-foreground transition-colors">FAQs</a></li>
                <li><a href="/pages/referral" className="hover:text-primary-foreground transition-colors">Referral and Rewards</a></li>
                <li><a href="/pages/shipping" className="hover:text-primary-foreground transition-colors">Shipping & Returns</a></li>
                <li><a href="/pages/track-order" className="hover:text-primary-foreground transition-colors">Track My Order</a></li>
                <li><a href="/pages/contact" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Know More */}
            <div>
              <h3 className="font-semibold mb-4">Know More</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="/pages/about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
                <li><a href="/pages/blogs" className="hover:text-primary-foreground transition-colors">Blogs</a></li>
                <li><a href="/pages/reviews" className="hover:text-primary-foreground transition-colors">Reviews</a></li>
                <li><a href="/account" className="hover:text-primary-foreground transition-colors">My Account</a></li>
                <li><a href="/pages/wholesale" className="hover:text-primary-foreground transition-colors">Wholesale/Reseller</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links & Region */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
              
              <div className="text-sm text-primary-foreground/60">
                © 2025 Lattafa US.
              </div>

              <div className="text-sm text-primary-foreground/80">
                United States (USD $)
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-6 text-center">
              <p className="text-xs text-primary-foreground/60 mb-2">We accept</p>
              <div className="flex flex-wrap justify-center gap-2 text-xs text-primary-foreground/80">
                <span>Amazon</span> • <span>American Express</span> • <span>Apple Pay</span> • 
                <span>Diners Club</span> • <span>Discover</span> • <span>Google Pay</span> • 
                <span>Mastercard</span> • <span>PayPal</span> • <span>Shop Pay</span> • <span>Visa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
