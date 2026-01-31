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
import { Send, Mail, MapPin } from "lucide-react";

const serviceTypes = [
  { value: "residential", label: "Residential Cleaning" },
  { value: "commercial", label: "Commercial Cleaning" },
  { value: "end-of-tenancy", label: "End-of-Tenancy Cleaning" },
  { value: "window", label: "Window Cleaning" },
  { value: "carpet", label: "Carpet & Upholstery" },
  { value: "other", label: "Other Services" },
];

const LeadForm = () => {
  const [formData, setFormData] = useState({
    service: "",
  });

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Request Your Free Estimate
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Fill out the form and we’ll send you a free, no-obligation estimate
              within 24 hours.
            </p>

            <div className="space-y-6">
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
            <form
              action="https://formspree.io/f/xnjvkeeq"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Cleaning Estimate Request"
              />

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Type
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ service: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem
                        key={service.value}
                        value={service.value}
                      >
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <input
                  type="hidden"
                  name="service"
                  value={formData.service}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message (Optional)
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your cleaning needs..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-6 text-lg font-semibold"
              >
                Request My Free Estimate
                <Send className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                No spam. No obligation. We’ll contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
