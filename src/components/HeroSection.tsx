import { Button } from "@/components/ui/button";
import { ArrowDown, Droplets, Sun, Filter } from "lucide-react";
import heroDevice from "@/assets/hero-device.png";

export const HeroSection = () => {
  const scrollToHowItWorks = () => {
    const element = document.querySelector("#how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-light/20 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 lg:py-32">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Conrad Challenge 2025
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Off-Grid Clean Water from Air & Sunlight
            </h1>
            
            <p className="text-lg lg:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              A three-in-one solar water station that harvests atmospheric moisture, 
              disinfects with UV, and filters microplastics — no electricity or consumables required.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Droplets className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/90">Water Harvesting</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Sun className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/90">Solar Disinfection</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full">
                <Filter className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/90">Microplastic Filtration</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button
                variant="accent"
                size="xl"
                onClick={scrollToHowItWorks}
                className="group"
              >
                What is Hygrosphere?
                <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Partner With Us
              </Button>
            </div>
          </div>

          {/* Device Illustration */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full scale-75" />
              
              {/* Device Image */}
              <img
                src={heroDevice}
                alt="Hygrosphere water harvesting device with condensation cylinder, storage tank, and solar disinfection tray"
                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
              />
              
              {/* Floating Labels */}
              <div className="absolute top-10 -left-4 lg:left-0 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl border border-border animate-float hidden lg:block">
                <p className="text-xs text-muted-foreground">Condensation</p>
                <p className="text-sm font-semibold text-foreground">0.75-1L / night</p>
              </div>
              
              <div className="absolute bottom-20 -right-4 lg:right-0 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl border border-border animate-float-delayed hidden lg:block">
                <p className="text-xs text-muted-foreground">Disinfection</p>
                <p className="text-sm font-semibold text-foreground">2-4 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
