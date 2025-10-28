import { X, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CartSheet = ({ open, onOpenChange }: CartSheetProps) => {
  const { items, removeItem, updateQuantity, itemCount, total, clearCart } = useCart();
  const { toast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { items }
      });

      if (error) throw error;

      if (data?.url) {
        // Redirect to checkout in same tab
        window.location.href = data.url;
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout failed",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart ({itemCount})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-[calc(100vh-180px)] mt-4">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some amazing fragrances to get started!</p>
              <Button onClick={() => onOpenChange(false)}>Continue Shopping</Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto pr-2 -mr-2">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm mb-1 truncate">{item.name}</h4>
                        <p className="text-xs text-gray-500 mb-2">{item.vendor}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border rounded">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-gray-100 text-sm"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border-x text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-gray-100 text-sm"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-bold text-sm">{item.price}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-3 space-y-3 bg-white sticky bottom-0">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full"
                  size="lg"
                >
                  {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
                </Button>
                <p className="text-xs text-center text-gray-500">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
