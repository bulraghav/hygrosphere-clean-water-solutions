import { AlertTriangle, Clock, DollarSign, Flame } from "lucide-react";

const stats = [
  {
    value: "2B+",
    label: "People lack safely managed drinking water",
    icon: AlertTriangle,
  },
  {
    value: "4+ hrs",
    label: "Average daily time spent collecting water in rural areas",
    icon: Clock,
  },
  {
    value: "$150+",
    label: "Annual cost of bottled water for low-income families",
    icon: DollarSign,
  },
  {
    value: "1.4M",
    label: "Tons of CO₂ from household water boiling annually",
    icon: Flame,
  },
];

const challenges = [
  {
    title: "Chemical Tablets",
    issues: ["Recurring costs", "Supply chain dependence", "Taste issues", "Storage requirements"],
  },
  {
    title: "Household Filters",
    issues: ["Cartridge replacement", "Pressure requirements", "Ongoing expense", "Complex maintenance"],
  },
  {
    title: "Boiling Water",
    issues: ["Fuel-intensive", "Time-consuming", "CO₂ emissions", "Indoor air pollution"],
  },
];

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            The Challenge
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Water Scarcity Remains a Global Crisis
          </h2>
          <p className="text-lg text-muted-foreground">
            In rural and disaster-affected regions, access to safe drinking water is still a daily struggle. 
            Existing solutions have critical trade-offs that leave communities underserved.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Current Solutions Problems */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center font-display text-2xl font-semibold text-foreground mb-10">
            Why Current Solutions Fall Short
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-destructive/10 text-destructive rounded-lg flex items-center justify-center text-sm font-bold">
                    ✗
                  </span>
                  {challenge.title}
                </h4>
                <ul className="space-y-2">
                  {challenge.issues.map((issue, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 bg-destructive/50 rounded-full" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Teaser */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-medium">
              Hygrosphere addresses all these challenges with a single, integrated system
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
