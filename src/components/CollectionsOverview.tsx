import oudRoyale from "@/assets/collection-oud-royale.jpg";
import desertLuxe from "@/assets/collection-desert-luxe.jpg";
import imperialLeather from "@/assets/collection-imperial-leather.jpg";
import spiceBlend from "@/assets/collection-spice-blend.jpg";
import signaturePride from "@/assets/collection-signature-pride.jpg";

const CollectionsOverview = () => {
  const collections = [
    { name: "Oud Royale", itemCount: 7, image: oudRoyale },
    { name: "Desert Luxe", itemCount: 7, image: desertLuxe },
    { name: "Imperial Leather", itemCount: 5, image: imperialLeather },
    { name: "Spice Blend", itemCount: 5, image: spiceBlend },
    { name: "Signature Pride", itemCount: 58, image: signaturePride },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          Explore Our Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {collections.map((collection, index) => (
            <a
              key={index}
              href={`/collections/${collection.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-sm mb-3">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-4">
                  <div className="text-primary-foreground">
                    <h3 className="font-semibold text-sm mb-1">{collection.name}</h3>
                    <p className="text-xs text-primary-foreground/80">
                      {collection.itemCount} items
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsOverview;
