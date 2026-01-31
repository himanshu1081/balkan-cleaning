import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CleanersGrid from "@/components/CleanersGrid";
import ServicesGrid from "@/components/ServicesGrid";
import TrustBadges from "@/components/TrustBadges";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesGrid />
        <TrustBadges />
        <TestimonialsSection />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
