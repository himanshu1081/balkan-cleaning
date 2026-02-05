import { Home, Building2, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CleanersGrid from "./CleanersGrid";
import { motion } from "motion/react"

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Deep cleaning for homes and apartments. We make your living space spotless and welcoming.",
    features: ["Weekly/Bi-weekly cleaning", "Deep cleaning", "Move-in/out cleaning"],
    color: "crimson",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Specialized sanitation for offices and retail spaces. Professional service that keeps your business shining.",
    features: ["Office cleaning", "Retail spaces", "Healthcare facilities"],
    color: "fresh",
  },
  {
    icon: Sparkles,
    title: "Specialist Services",
    description: "End-of-tenancy, window cleaning, and carpet care. Expert solutions for specific cleaning needs.",
    features: ["End-of-tenancy", "Window cleaning", "Carpet & upholstery"],
    color: "crimson",
  }, {
    icon: Sparkles,
    title: "After Builders Cleaning",
    description:
      "A detailed clean after construction or renovation work. We remove dust, paint splashes, and debris to leave your space spotless and ready to use.",
    features: [
      "Post-construction dust removal",
      "Paint & plaster residue cleaning",
      "Final deep clean & detailing",
    ],
    color: "crimson",
  },

];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 bg-secondary ">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .5, delay: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .5, delay: .2 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Comprehensive Cleaning Solutions
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .5, delay: .4 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg">
            From homes to offices, we deliver exceptional cleaning services tailored to your needs.
          </motion.p>
        </div>

        {/* Services Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .5, delay: .4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-card border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${service.color === 'crimson'
                  ? 'bg-crimson/10 group-hover:bg-crimson/20'
                  : 'bg-fresh/10 group-hover:bg-fresh/20'
                  }`}>
                  <service.icon className={`w-7 h-7 ${service.color === 'crimson' ? 'text-crimson' : 'text-fresh'}`} />
                </div>
                <CardTitle className="font-display text-xl text-card-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.color === 'crimson' ? 'bg-crimson' : 'bg-fresh'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="ghost"
                  className="text-accent hover:text-crimson-dark hover:bg-accent/10 p-0 group/btn"
                >
                  <a href="#contact">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
