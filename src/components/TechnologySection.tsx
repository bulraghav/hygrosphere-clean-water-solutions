import { Ruler, Box, Wrench, DollarSign } from "lucide-react";

const specifications = [
  {
    component: "Condensation Cylinder",
    material: "Soda-lime or borosilicate glass",
    dimensions: "6 cm diameter × 22-25 cm height",
    notes: "Fluorinated hydrophobic rails, silane hydrophilic lanes",
  },
  {
    component: "Storage Tank",
    material: "Food-safe bioplastic (Vivomer or equivalent)",
    dimensions: "≈25 × 8 × 5 cm internal (1L capacity)",
    notes: "UV-resistant, non-leaching material",
  },
  {
    component: "SODIS Tray",
    material: "Borosilicate glass + Mylar/PET reflector",
    dimensions: "≈25 × 8 × 3.75 cm internal (0.75L)",
    notes: "Shallow depth for UV penetration",
  },
  {
    component: "Filtration Membrane",
    material: "PES/PVDF membrane",
    dimensions: "0.2-0.5 µm pore size",
    notes: "Removable for cleaning, long service life",
  },
];

const costBreakdown = [
  { item: "Glass components", cost: "$15-25" },
  { item: "Coatings & treatments", cost: "$10-15" },
  { item: "Filtration membrane", cost: "$8-12" },
  { item: "Structural elements", cost: "$10-18" },
  { item: "Assembly & QC", cost: "$7-10" },
];

export const TechnologySection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Engineering Details
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built to Last, Designed to Scale
          </h2>
          <p className="text-lg text-muted-foreground">
            Every component is chosen for durability, repairability, and cost-effectiveness 
            at scale production volumes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Specifications Table */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Ruler className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Technical Specifications
              </h3>
            </div>

            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-5 border border-border hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-foreground mb-3">{spec.component}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Material</p>
                      <p className="text-foreground">{spec.material}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Dimensions</p>
                      <p className="text-foreground">{spec.dimensions}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
                    {spec.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cost & Manufacturing */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Cost Structure
              </h3>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg mb-6">
              <div className="space-y-3">
                {costBreakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{item.item}</span>
                    <span className="font-semibold text-foreground">{item.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4 border-t-2 border-primary/20">
                  <span className="font-semibold text-foreground">Pilot Unit Total</span>
                  <span className="text-lg font-bold text-primary">$50-80</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl p-6 border border-success/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-success" />
                </div>
                <h4 className="font-semibold text-foreground">Scale Economics</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                At volume production (1000+ units), material costs drop significantly through:
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-success rounded-full" />
                  Bulk glass and coating procurement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-success rounded-full" />
                  Injection molding for structural parts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-success rounded-full" />
                  Streamlined assembly processes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-success rounded-full" />
                  Target: 30-40% cost reduction at scale
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
