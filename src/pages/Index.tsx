import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { InformationSection } from "@/components/InformationSection";

import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <AboutSection />
      <InformationSection />
      
      <Footer />
    </div>
  );
};

export default Index;
