import { Leaf, Flame, Recycle, Target, Heart } from "lucide-react";

const impactAreas = [
  {
    icon: Flame,
    title: "Reduced Fuel Consumption",
    stat: "80-100%",
    description: "Less firewood/kerosene vs boiling, cutting household fuel costs and collection time",
    color: "accent",
  },
  {
    icon: Leaf,
    title: "Lower Emissions",
    stat: "~2 kg CO₂",
    description: "Saved per liter compared to boiling, contributing to cleaner air and climate goals",
    color: "success",
  },
  {
    icon: Recycle,
    title: "Zero Plastic Waste",
    stat: "365+",
    description: "Bottles avoided per person annually compared to purchasing bottled water",
    color: "primary",
  },
];

const sdgAlignment = [
  {
    number: 6,
    title: "Clean Water & Sanitation",
    description: "Direct contribution to universal access to safe drinking water",
  },
  {
    number: 3,
    title: "Good Health & Well-being",
    description: "Reducing waterborne diseases and indoor air pollution",
  },
  {
    number: 13,
    title: "Climate Action",
    description: "Cutting emissions from water boiling and plastic production",
  },
];

export const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 lg:py-32 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-primary-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/20 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Impact & Sustainability
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            More Than Water — A Pathway to Resilience
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Every Hygrosphere unit creates ripple effects: healthier families, 
            reduced environmental burden, and stronger communities.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {impactAreas.map((area, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 text-center hover:bg-primary-foreground/15 transition-colors"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                area.color === "accent" ? "bg-accent/20" :
                area.color === "success" ? "bg-success/20" :
                "bg-primary-foreground/20"
              }`}>
                <area.icon className={`w-8 h-8 ${
                  area.color === "accent" ? "text-accent" :
                  area.color === "success" ? "text-success" :
                  "text-primary-foreground"
                }`} />
              </div>
              <p className="font-display text-4xl font-bold mb-2">{area.stat}</p>
              <h4 className="font-semibold text-lg mb-3">{area.title}</h4>
              <p className="text-primary-foreground/70 text-sm">{area.description}</p>
            </div>
          ))}
        </div>

        {/* SDG Alignment */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 mb-4">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">UN Sustainable Development Goals</span>
            </div>
            <h3 className="font-display text-2xl font-semibold">Aligned with Global Priorities</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sdgAlignment.map((sdg, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10"
              >
                <div className="w-12 h-12 bg-primary-foreground text-primary rounded-xl flex items-center justify-center font-display font-bold text-xl mb-4">
                  {sdg.number}
                </div>
                <h4 className="font-semibold mb-2">{sdg.title}</h4>
                <p className="text-sm text-primary-foreground/70">{sdg.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Durability Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20">
            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-success" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Built for Long-Term Use</p>
              <p className="text-sm text-primary-foreground/70">
                Glass construction, minimal moving parts, and repairable design mean years of reliable service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
