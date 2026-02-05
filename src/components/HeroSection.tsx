import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/Screenshot 2026-02-03 215505.png";
import heroVideo from "@/assets/Professional_Cleaning_Video_Generation.mp4";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const highlights = [
    "Fully Insured",
    "Eco-Friendly Products",
    "Background Checked Staff",
    "Holiday lets (Airbnb, Booking.com, Vrbo etc)",
  ];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => setVideoReady(true);
    video.addEventListener("canplay", onReady);

    return () => video.removeEventListener("canplay", onReady);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image + Video */}
      <div className="absolute inset-0 z-0">
        {/* IMAGE (loads instantly) */}
        <img
          src={heroImage}
          alt="Clean modern interior"
          className={`w-full h-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-0" : "opacity-100"
            }`}
        />

        {/* VIDEO (hidden until ready) */}
        <video
          ref={videoRef}
          src={heroVideo}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>


      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-fresh rounded-full animate-sparkle" />
            Professional Cleaning Services
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in [animation-delay:100ms] opacity-0 text-green-500">
            Balkan Cleaning,{" "}
            <span className="text-crimson-light">Spotless Results.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm md:text-base text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in [animation-delay:200ms] opacity-0 text-balance">
            Professional residential cleaning services you can
            trust. Serving London with integrity and attention to detail.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in [animation-delay:300ms] opacity-0">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-primary-foreground/80 text-xs md:text-sm"
              >
                <CheckCircle className="w-4 h-4 text-fresh" />
                {item}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms] opacity-0">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-crimson-dark text-accent-foreground font-semibold md:px-8 md:py-6 text-sm md:text-lg transition-all hover:shadow-elevated hover:scale-105"
            >
              <a href="#contact">
                Book Your Cleaning
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold md:px-8 md:py-6 text-sm md:text-lg"
            >
              <a href="#services">View Our Services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10" /> */}
    </section>
  );
};

export default HeroSection;
