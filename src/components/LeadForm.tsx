import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react"
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
      <div className="container mx-auto px-4 lg:px-8 w-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .5, delay: .2 }}
              viewport={{ once: true }}
              className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </motion.span>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .5, delay: .4 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Request Your Free Estimate
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .5, delay: .6 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm lg:text-lg mb-10 leading-relaxed">
              Fill out the form and we’ll send you a free, no-obligation estimate
              within 24 hours.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .5, delay: .8 }}
              viewport={{ once: true }}
              className="space-y-6">
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
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .5, delay: .2 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-elevated w-full p-4 sm:p-6 md:p-10">
            <form
              action="https://formspree.io/f/xnjvkeeq"
              method="POST"
              className="space-y-4 sm:space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Cleaning Estimate Request"
              />

              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium">
                  Your Name
                </label>
                <Input
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Service */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium">
                  Service Type
                </label>

                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ service: value })
                  }
                >
                  <SelectTrigger className="w-full">
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

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium">
                  Message (Optional)
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your cleaning needs..."
                  rows={3}
                  className="sm:rows-4"
                />
              </div>

              {/* Button */}
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-4 sm:py-6 text-base sm:text-lg font-semibold"
              >
                Request My Free Estimate
                <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>

              <p className="text-xs text-center text-muted-foreground px-2">
                No spam. No obligation. We’ll contact you within 24 hours.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section >
  );
};

export default LeadForm;
