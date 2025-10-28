import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "");

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { items } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length === 0) {
      navigate("/");
      return;
    }

    const createCheckoutSession = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('create-checkout', {
          body: { items }
        });

        if (error) throw error;

        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      } catch (error: any) {
        console.error('Checkout error:', error);
        toast({
          title: "Checkout failed",
          description: error.message || "Please try again",
          variant: "destructive",
        });
        navigate("/");
      }
    };

    createCheckoutSession();
  }, [items, navigate, toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Complete Your Order</h1>
          
          {clientSecret ? (
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          ) : (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading checkout...</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
