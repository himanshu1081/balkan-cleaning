const comparisons = [
  {
    title: "Kitchen Deep Cleaning",
    before: "/Before/Before1.png",
    after: "/After/After1.png",
  },
  {
    title: "Bathroom Transformation",
    before: "/Before/Before2.png",
    after: "/After/After2.png",
  },
  {
    title: "Living Room Refresh",
    before: "/Before/Before3.png",
    after: "/After/After3.png",
  },
];

const BeforeAfterSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Real Results
          </span>
          <h2 className="text-4xl font-bold mt-3 mb-4">
            Before & After
          </h2>
          <p className="text-muted-foreground text-lg">
            Same space. Totally different energy.
          </p>
        </div>

        {/* Comparisons */}
        {comparisons.map((item, index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">
              {item.title}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.before}
                  alt="Before cleaning"
                  className="w-full h-[320px] object-cover hover:scale-110 transition-all duration-500 ease-out"
                />
                <span className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                  Before
                </span>
              </div>

              {/* After */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.after}
                  alt="After cleaning"
                  className="w-full h-[320px] object-cover hover:scale-110 transition-all duration-500 ease-out"
                />
                <span className="absolute bottom-4 left-4 bg-accent text-white text-sm px-3 py-1 rounded-full">
                  After
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterSection;
