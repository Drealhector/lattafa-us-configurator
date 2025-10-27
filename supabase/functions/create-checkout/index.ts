import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { items } = await req.json();

    if (!items || items.length === 0) {
      throw new Error("Cart is empty");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Convert cart items to Stripe line items
    const lineItems = items.map((item: any) => {
      // Extract numeric price from string like "$45.00" or "USD $45.00"
      const priceStr = item.price.replace(/[^0-9.]/g, '');
      const priceInCents = Math.round(parseFloat(priceStr) * 100);

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: item.vendor,
            images: [item.image],
          },
          unit_amount: priceInCents,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/payment-cancelled`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'AE', 'SA'],
      },
      billing_address_collection: 'required',
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
