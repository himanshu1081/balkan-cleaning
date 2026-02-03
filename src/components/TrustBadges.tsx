import { Shield, Leaf, UserCheck } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete peace of mind with our comprehensive insurance coverage.",
    iconColor: "text-crimson-light",
    bgColor: "bg-crimson/20",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "We use environmentally responsible cleaning solutions.",
    iconColor: "text-fresh-light",
    bgColor: "bg-fresh/20",
  },
  {
    icon: UserCheck,
    title: "Background Checked",
    description: "All our staff undergo thorough background verification.",
    iconColor: "text-crimson-light",
    bgColor: "bg-crimson/20",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex items-start gap-4 p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${badge.bgColor} flex items-center justify-center`}>
                <badge.icon className={`w-6 h-6 ${badge.iconColor}`} />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground mb-1">
                  {badge.title}
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
