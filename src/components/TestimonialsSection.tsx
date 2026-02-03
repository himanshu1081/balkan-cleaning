"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Islington",
    content:
      "Balkan Cleaning transformed my home! The attention to detail is incredible. I've tried many services over the years, but none come close to their professionalism and thoroughness.",
    rating: 5,
  },
  {
    name: "James Patterson",
    role: "Office Manager, Canary Wharf",
    content:
      "We've been using their commercial cleaning services for over a year. Reliable, efficient, and always leaves our office spotless. Highly recommend for any business.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Landlord, Chelsea",
    content:
      "Their end-of-tenancy cleaning is exceptional. Every property handover has been smooth thanks to their meticulous work. Worth every penny!",
    rating: 5,
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const slideFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-24" style={{ backgroundColor: "#2e2e2e" }}>
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-crimson font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/70 text-lg">
            Don’t just take our word for it—hear from our customers.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            variants={slideFade}
            initial="hidden"
            animate="visible"
            className="rounded-2xl p-8 md:p-12 relative overflow-hidden
                       bg-[#383838] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            <Quote className="absolute top-6 right-6 w-16 h-16 text-crimson/15" />

            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-crimson text-crimson"
                  />
                ))}
              </div>

              <blockquote className="text-lg md:text-2xl text-white leading-relaxed mb-8 font-medium">
                “{testimonials[currentIndex].content}”
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-crimson/20 flex items-center justify-center">
                  <span className="text-crimson font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-white/60">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-white/20 text-black hover:text-white
                         hover:bg-crimson/20 hover:border-crimson"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 rounded-full transition-all ${index === currentIndex
                      ? "bg-crimson w-8"
                      : "bg-white/30 hover:bg-crimson/50 w-2.5"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-white/20 text-black hover:text-white
                         hover:bg-crimson/20 hover:border-crimson"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
