import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const serviceTypes = [
  { value: "residential", label: "Residential Cleaning" },
  { value: "commercial", label: "Commercial Cleaning" },
  { value: "end-of-tenancy", label: "End-of-Tenancy Cleaning" },
  { value: "window", label: "Window Cleaning" },
  { value: "carpet", label: "Carpet & Upholstery" },
  { value: "other", label: "Other Services" },
];

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours with your free estimate.",
    });

    setFormData({ name: "", email: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Request Your Free Estimate
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Ready to experience the Balkan Cleaning difference? Fill out the
              form and we'll provide you with a customized quote within 24 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">020 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-fresh/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-fresh" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-foreground">
                    info@balkancleaning.co.uk
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Serving</p>
                  <p className="font-semibold text-foreground">
                    Greater London Area
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background border-input focus:ring-accent focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background border-input focus:ring-accent focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Service Type
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-card-foreground mb-2"
                >
                  Message (Optional)
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your cleaning needs..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="bg-background border-input focus:ring-accent focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-crimson-dark text-accent-foreground font-semibold py-6 text-lg transition-all hover:shadow-elevated"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Request My Free Estimate
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our privacy policy. We'll never
                share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
