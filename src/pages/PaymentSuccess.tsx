import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { clearCart } = useCart();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Clear cart on successful payment
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
          
          {sessionId && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-500 mb-2">Order Reference</p>
              <p className="font-mono text-sm">{sessionId}</p>
            </div>
          )}

          <div className="space-y-4">
            <Button onClick={() => navigate('/')} size="lg" className="w-full sm:w-auto">
              Continue Shopping
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">📦 Processing</h3>
              <p className="text-sm text-gray-600">
                Your order is being prepared for shipment
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">✉️ Email Confirmation</h3>
              <p className="text-sm text-gray-600">
                Check your inbox for order details
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">🚚 Tracking</h3>
              <p className="text-sm text-gray-600">
                You'll receive tracking info within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
