import yara from "@/assets/yara.jpg";
import khamrah from "@/assets/khamrah.jpg";
import herConfession from "@/assets/her-confession.jpg";
import whippedPleasure from "@/assets/whipped-pleasure.jpg";

const CollectionsOverview = () => {
  const collections = [
    { name: "Yara Collection", itemCount: 1, image: yara },
    { name: "Khamrah Collection", itemCount: 1, image: khamrah },
    { name: "Her Confession", itemCount: 1, image: herConfession },
    { name: "Give Me Gourmand", itemCount: 5, image: whippedPleasure },
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
