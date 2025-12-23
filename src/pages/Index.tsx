import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TargetUsersSection } from "@/components/TargetUsersSection";
import { TechnologySection } from "@/components/TechnologySection";
import { ImpactSection } from "@/components/ImpactSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hygrosphere | Off-Grid Clean Water from Air & Sunlight</title>
        <meta 
          name="description" 
          content="Hygrosphere is a three-in-one solar water station that harvests atmospheric moisture, disinfects with UV, and filters microplastics — no electricity or consumables required. Conrad Challenge 2025." 
        />
        <meta name="keywords" content="water harvesting, atmospheric water generation, solar disinfection, SODIS, microplastic filtration, off-grid water, clean water, Conrad Challenge" />
        <meta property="og:title" content="Hygrosphere | Off-Grid Clean Water from Air & Sunlight" />
        <meta property="og:description" content="A three-in-one solar water station for safe water, off-grid. Harvest. Disinfect. Protect." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hygrosphere.com" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <ProblemSection />
          <HowItWorksSection />
          <PerformanceSection />
          <BenefitsSection />
          <TargetUsersSection />
          <TechnologySection />
          <ImpactSection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
