import { Home, School, Building2, Tent, Globe2 } from "lucide-react";

const userGroups = [
  {
    icon: Home,
    title: "Off-Grid Households",
    description: "Families in rural areas without reliable water infrastructure or electricity access.",
  },
  {
    icon: School,
    title: "Schools & Anganwadis",
    description: "Educational institutions providing safe water to children in underserved communities.",
  },
  {
    icon: Tent,
    title: "Relief Camps",
    description: "Emergency response situations where rapid, independent water solutions are critical.",
  },
  {
    icon: Building2,
    title: "NGOs & CSR Programs",
    description: "Organizations implementing sustainable water access projects at scale.",
  },
  {
    icon: Globe2,
    title: "Climate-Vulnerable Communities",
    description: "Regions facing increasing water stress due to changing climate patterns.",
  },
];

const priorities = [
  "Reliably safe drinking water every day",
  "Predictable daily volume (no surprises)",
  "Low lifetime cost of ownership",
  "Simple operation anyone can learn",
  "Minimal dependence on fuel or spare parts",
];

export const TargetUsersSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: User Groups */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Who We Serve
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Designed for Those Who Need It Most
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Hygrosphere targets communities where traditional water infrastructure is unavailable, 
              unreliable, or prohibitively expensive — approximately 2 billion people worldwide.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {userGroups.map((group, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-xl border border-border hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <group.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{group.title}</h4>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: What Matters */}
          <div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                What Matters to Our Users
              </h3>
              
              <div className="space-y-4">
                {priorities.map((priority, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="font-medium text-foreground">{priority}</p>
                  </div>
                ))}
              </div>

              {/* Market Size Callout */}
              <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <p className="text-4xl font-display font-bold text-foreground mb-2">25%</p>
                <p className="text-muted-foreground">
                  of the global population still lacks access to safely managed drinking water — 
                  a massive addressable need that Hygrosphere is designed to serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
