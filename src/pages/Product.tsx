import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

// Import all product images
import chocoOverdoseImg from "@/assets/choco-overdose.jpg";
import berryOnTopImg from "@/assets/berry-on-top.jpg";
import vanillaFreakImg from "@/assets/vanilla-freak.jpg";
import vanillaFreak2Img from "@/assets/vanilla-freak-2.jpg";
import vanillaFreak3Img from "@/assets/vanilla-freak-3.jpg";
import cookieCraveImg from "@/assets/cookie-crave.jpg";
import whippedPleasureImg from "@/assets/whipped-pleasure.jpg";
import whippedPleasure2Img from "@/assets/whipped-pleasure-2.jpg";
import whippedPleasure3Img from "@/assets/whipped-pleasure-3.jpg";
import herConfessionImg from "@/assets/her-confession.jpg";
import yaraImg from "@/assets/yara.jpg";
import yara2Img from "@/assets/yara-2.jpg";
import yara3Img from "@/assets/yara-3.jpg";
import khamrahImg from "@/assets/khamrah.jpg";
import khamrah2Img from "@/assets/khamrah-2.jpg";
import khamrah3Img from "@/assets/khamrah-3.jpg";
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
import tamimaImg from "@/assets/tamima.jpg";
import tamima2Img from "@/assets/tamima-2.jpg";

const imageMap: Record<string, string> = {
  "choco-overdose.jpg": chocoOverdoseImg,
  "berry-on-top.jpg": berryOnTopImg,
  "vanilla-freak.jpg": vanillaFreakImg,
  "vanilla-freak-2.jpg": vanillaFreak2Img,
  "vanilla-freak-3.jpg": vanillaFreak3Img,
  "cookie-crave.jpg": cookieCraveImg,
  "whipped-pleasure.jpg": whippedPleasureImg,
  "whipped-pleasure-2.jpg": whippedPleasure2Img,
  "whipped-pleasure-3.jpg": whippedPleasure3Img,
  "her-confession.jpg": herConfessionImg,
  "yara.jpg": yaraImg,
  "yara-2.jpg": yara2Img,
  "yara-3.jpg": yara3Img,
  "khamrah.jpg": khamrahImg,
  "khamrah-2.jpg": khamrah2Img,
  "khamrah-3.jpg": khamrah3Img,
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
  "tamima.jpg": tamimaImg,
  "tamima-2.jpg": tamima2Img,
};

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addItem } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    if (!id) return;
    
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching product:", error);
      navigate("/");
      return;
    }

    if (data) {
      const mapImageUrl = (url: string) => {
        const fileName = url?.split('/').pop() || '';
        return imageMap[fileName] || url;
      };

      setProduct({
        ...data,
        image_url: mapImageUrl(data.image_url),
        image_url_2: data.image_url_2 ? mapImageUrl(data.image_url_2) : null,
        image_url_3: data.image_url_3 ? mapImageUrl(data.image_url_3) : null,
      });
    }
    
    setLoading(false);
  };

  const getImages = () => {
    if (!product) return [];
    const images = [product.image_url];
    if (product.image_url_2) images.push(product.image_url_2);
    if (product.image_url_3) images.push(product.image_url_3);
    return images;
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image_url,
      vendor: product.vendor,
    }, quantity);
    
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const images = getImages();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? "border-black" : "border-transparent"
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">{product.vendor}</p>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-black">{product.price}</p>
            </div>

            <div className="prose prose-sm">
              <p className="text-gray-700 leading-relaxed">{product.full_description}</p>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-3 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
              <Button onClick={handleAddToCart} size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-1">Free Shipping</p>
                <p className="text-sm text-gray-600">On orders over $60</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-1">Easy Returns</p>
                <p className="text-sm text-gray-600">Satisfaction Guarantee</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-1">100% Authentic</p>
                <p className="text-sm text-gray-600">Direct from Lattafa</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-1">Secure Checkout</p>
                <p className="text-sm text-gray-600">Apple Pay, PayPal & Stripe</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
