const CategorySection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-12">
          {/* By Category */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">By Category</h3>
            <ul className="space-y-2">
              <li><a href="/collections/all" className="text-sm hover:text-[#D4AF37] transition-colors">All Fragrances</a></li>
              <li><a href="/collections/women" className="text-sm hover:text-[#D4AF37] transition-colors">Women's Fragrances</a></li>
              <li><a href="/collections/men" className="text-sm hover:text-[#D4AF37] transition-colors">Men's Fragrances</a></li>
              <li><a href="/collections/unisex" className="text-sm hover:text-[#D4AF37] transition-colors">Unisex Fragrances</a></li>
            </ul>
          </div>

          {/* By Type */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">By Type</h3>
            <ul className="space-y-2">
              <li><a href="/collections/edp" className="text-sm hover:text-[#D4AF37] transition-colors">Eau de Parfum (EDP)</a></li>
              <li><a href="/collections/deodorant" className="text-sm hover:text-[#D4AF37] transition-colors">Deodorant</a></li>
              <li><a href="/collections/air-freshener" className="text-sm hover:text-[#D4AF37] transition-colors">Air Freshener</a></li>
              <li><a href="/collections/spray" className="text-sm hover:text-[#D4AF37] transition-colors">All Over Spray</a></li>
            </ul>
          </div>

          {/* By Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">By Brand</h3>
            <ul className="space-y-2">
              <li><a href="/collections/lattafa" className="text-sm hover:text-[#D4AF37] transition-colors">Lattafa</a></li>
              <li><a href="/collections/lattafa-pride" className="text-sm hover:text-[#D4AF37] transition-colors">Lattafa Pride</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
