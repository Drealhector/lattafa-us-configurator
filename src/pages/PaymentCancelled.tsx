import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

const PaymentCancelled = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <XCircle className="w-24 h-24 text-gray-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your payment was cancelled. Your cart items are still saved.
          </p>

          <div className="space-y-4">
            <Button onClick={() => navigate('/')} size="lg" className="w-full sm:w-auto">
              Continue Shopping
            </Button>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="font-semibold mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you encountered any issues during checkout, please contact our support team.
            </p>
            <p className="text-sm text-gray-500">
              We're here to help you complete your purchase.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentCancelled;
