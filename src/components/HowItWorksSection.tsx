import { Droplets, Sun, Filter, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Droplets,
    title: "Atmospheric Water Harvesting",
    subtitle: "Collect water from thin air",
    description: "A vertical glass cylinder (≈6cm × 22-25cm) uses alternating hydrophilic and hydrophobic lanes inspired by the Namib desert beetle. Helical tracks collect moisture droplets and guide them into a collection manifold.",
    specs: [
      { label: "Yield", value: "0.75-1.0L per night" },
      { label: "Best conditions", value: "60-80% humidity" },
      { label: "Rate", value: "50-150 mL/hour" },
    ],
    color: "primary",
  },
  {
    number: "02",
    icon: Sun,
    title: "Solar Disinfection (SODIS)",
    subtitle: "Purify with sunlight",
    description: "A horizontal borosilicate tray (≈0.75L capacity) with a Mylar-backed reflector maximizes UV-A exposure. The shallow depth ensures complete UV penetration, inactivating bacteria, viruses, and protozoa faster than traditional methods.",
    specs: [
      { label: "Disinfection time", value: "2-4 hours" },
      { label: "Capacity", value: "0.75L per cycle" },
      { label: "Pathogen reduction", value: "3-log (99.9%)" },
    ],
    color: "accent",
  },
  {
    number: "03",
    icon: Filter,
    title: "Microplastic Filtration",
    subtitle: "Remove invisible threats",
    description: "The outlet tap features a 0.2-0.5 µm PES/PVDF membrane that captures microplastics and fine particles — a threat that many low-cost systems completely ignore. Clean, safe water is dispensed on demand.",
    specs: [
      { label: "Removal rate", value: ">90% microplastics" },
      { label: "Filter pore size", value: "0.2-0.5 µm" },
      { label: "Daily capacity", value: "1-2L drinking water" },
    ],
    color: "success",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            The Solution
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three Modules, One Integrated System
          </h2>
          <p className="text-lg text-muted-foreground">
            Hygrosphere combines proven technologies into a seamless, off-grid water purification system 
            that requires no electricity, no consumables, and minimal maintenance.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-success -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                  </div>
                )}
                
                <div className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      step.color === "primary" ? "bg-primary/10" :
                      step.color === "accent" ? "bg-accent/10" :
                      "bg-success/10"
                    }`}>
                      <step.icon className={`w-8 h-8 ${
                        step.color === "primary" ? "text-primary" :
                        step.color === "accent" ? "text-accent" :
                        "text-success"
                      }`} />
                    </div>
                    <span className={`font-display text-5xl font-bold ${
                      step.color === "primary" ? "text-primary/20" :
                      step.color === "accent" ? "text-accent/20" :
                      "text-success/20"
                    }`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className={`text-sm font-medium mb-4 ${
                    step.color === "primary" ? "text-primary" :
                    step.color === "accent" ? "text-accent" :
                    "text-success"
                  }`}>
                    {step.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    {step.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{spec.label}</span>
                        <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Humidity Chart Placeholder */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h4 className="font-display text-lg font-semibold text-foreground mb-6 text-center">
              Condensation Performance by Humidity Level
            </h4>
            <div className="grid grid-cols-4 gap-4">
              {[
                { humidity: "40%", rate: "20-40", height: "20%" },
                { humidity: "60%", rate: "50-80", height: "45%" },
                { humidity: "80%", rate: "100-150", height: "75%" },
                { humidity: "95%+", rate: "150+", height: "95%" },
              ].map((data, index) => (
                <div key={index} className="text-center">
                  <div className="h-32 bg-secondary rounded-lg flex items-end justify-center overflow-hidden mb-2">
                    <div 
                      className="w-full bg-gradient-to-t from-primary to-primary-light rounded-t transition-all duration-500"
                      style={{ height: data.height }}
                    />
                  </div>
                  <p className="font-semibold text-foreground">{data.humidity}</p>
                  <p className="text-xs text-muted-foreground">{data.rate} mL/h</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
