import { Package, RefreshCcw, ShieldCheck, Truck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Authentic Fragrances",
      subtitle: "Direct from Lattafa US",
    },
    {
      icon: RefreshCcw,
      title: "Easy Returns",
      subtitle: "Satisfaction Guarantee",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      subtitle: "On orders over $60",
    },
    {
      icon: Package,
      title: "Secure Checkout",
      subtitle: "Apple Pay, PayPal & Stripe",
    },
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <Icon size={40} className="text-accent mb-3" />
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
