import { Home, Sparkles, Wand, WashingMachine, Leaf, Wrench, Hammer, PlugZap, Plug, Thermometer, Paintbrush2, Zap, FileText, Key, CornerDownRight, Truck, Trash2, Briefcase, Sofa, HardHat } from "lucide-react";

const services = [
  { icon: Wand, title: "Regular cleaning" },
  { icon: WashingMachine, title: "One-off cleaning" },
  { icon: Sparkles, title: "Deep cleaning" },
  { icon: Wand, title: "End of tenancy cleaning" },
  { icon: HardHat, title: "After builders cleaning" },
  { icon: WashingMachine, title: "Carpet cleaning" },
  // { icon: Leaf, title: "Gardener" },
  { icon: Hammer, title: "Handyman" },
  { icon: PlugZap, title: "Electrician" },
  { icon: Wrench, title: "Appliance engineer" },
//   { icon: Thermometer, title: "Gas & heating engineer" },//
  { icon: Paintbrush2, title: "Painter & decorator" },
  // { icon: Zap, title: "Energy assessor" },
//   { icon: FileText, title: "Certificates & reports" },//
  // { icon: Key, title: "Locksmith" },//
  { icon: Hammer, title: "Carpenter" },
  // { icon: CornerDownRight, title: "Drainage specialist" },
  // { icon: Truck, title: "Removals" },
  // { icon: Trash2, title: "Waste removal" },
  { icon: Briefcase, title: "Builder" },
  { icon: Sofa, title: "Upholstery cleaning" },
  { icon: Wrench, title: "Plumber" },
];

const CleanersGrid = () => {
  return (
    <section aria-labelledby="nearby-services" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-muted-foreground text-sm">Housekeep services near me</span>
          <h2 id="nearby-services" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-3">
            Cleaners and tradespeople near me
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
          {services.map((service) => (
            <a
              key={service.title}
              className="w-full max-w-[10rem] group flex flex-col items-center gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-elevated transition-all duration-200 hover:-translate-y-1 text-center"
              aria-label={service.title}
            >
              <div className="w-14 h-14 rounded-md flex items-center justify-center bg-muted/50 group-hover:bg-muted">
                <service.icon className="w-7 h-7 text-foreground/70" />
              </div>
              <span className="text-xs sm:text-sm text-foreground/80">{service.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleanersGrid;
