const comparisons = [
  {
    title: "Kitchen Deep Cleaning",
    before: "../../src/assets/Before/Before1.png",
    after: "../../src/assets/After/After1.png",
  },
  {
    title: "Bathroom Transformation",
    before: "../../src/assets/Before/Before2.png",
    after: "../../src/assets/After/After2.png",
  },
  {
    title: "Living Room Refresh",
    before: "../../src/assets/Before/Before3.png",
    after: "../../src/assets/After/After3.png",
  },
];

const BeforeAfterSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Real Results
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Before & After
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            See the difference professional cleaning makes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-elevated p-4 sm:p-6"
            >
              <h3 className="font-semibold text-lg text-card-foreground mb-4">
                {item.title}
              </h3>

              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Before */}
                <div className="relative">
                  <img
                    src={item.before}
                    alt={`${item.title} before cleaning`}
                    className="rounded-xl object-cover h-64 sm:h-72 md:h-52 lg:h-60 w-full"
                  />
                  <span className="absolute top-2 left-2 text-xs font-semibold bg-muted px-2 py-1 rounded-full">
                    Before
                  </span>
                </div>

                {/* After */}
                <div className="relative">
                  <img
                    src={item.after}
                    alt={`${item.title} after cleaning`}
                    className="rounded-xl object-cover h-64 sm:h-72 md:h-52 lg:h-60 w-full"
                  />
                  <span className="absolute top-2 left-2 text-xs font-semibold bg-fresh text-white px-2 py-1 rounded-full">
                    After
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
