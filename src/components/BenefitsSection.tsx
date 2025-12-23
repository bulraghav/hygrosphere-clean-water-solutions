import { Check, X, Minus } from "lucide-react";

type Rating = "good" | "bad" | "neutral";

interface ComparisonRow {
  feature: string;
  hygrosphere: { value: string; rating: Rating };
  tablets: { value: string; rating: Rating };
  boiling: { value: string; rating: Rating };
  filters: { value: string; rating: Rating };
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Upfront Cost",
    hygrosphere: { value: "$50-80", rating: "neutral" },
    tablets: { value: "$5-15", rating: "good" },
    boiling: { value: "$0-20", rating: "good" },
    filters: { value: "$20-100", rating: "neutral" },
  },
  {
    feature: "Recurring Cost",
    hygrosphere: { value: "Near zero", rating: "good" },
    tablets: { value: "$30-60/yr", rating: "bad" },
    boiling: { value: "$50-150/yr fuel", rating: "bad" },
    filters: { value: "$20-50/yr", rating: "bad" },
  },
  {
    feature: "Energy Required",
    hygrosphere: { value: "None (passive)", rating: "good" },
    tablets: { value: "None", rating: "good" },
    boiling: { value: "High (fuel)", rating: "bad" },
    filters: { value: "None/Low", rating: "good" },
  },
  {
    feature: "Time to Safe Water",
    hygrosphere: { value: "2-4 hours", rating: "neutral" },
    tablets: { value: "30 min", rating: "good" },
    boiling: { value: "20-40 min", rating: "neutral" },
    filters: { value: "Instant", rating: "good" },
  },
  {
    feature: "Microplastic Removal",
    hygrosphere: { value: "Yes (>90%)", rating: "good" },
    tablets: { value: "No", rating: "bad" },
    boiling: { value: "No", rating: "bad" },
    filters: { value: "Some", rating: "neutral" },
  },
  {
    feature: "Supply Chain Dependence",
    hygrosphere: { value: "None", rating: "good" },
    tablets: { value: "High", rating: "bad" },
    boiling: { value: "Fuel supply", rating: "bad" },
    filters: { value: "Cartridges", rating: "bad" },
  },
  {
    feature: "Off-Grid Suitable",
    hygrosphere: { value: "Excellent", rating: "good" },
    tablets: { value: "Good", rating: "neutral" },
    boiling: { value: "Limited", rating: "neutral" },
    filters: { value: "Variable", rating: "neutral" },
  },
];

const RatingIcon = ({ rating }: { rating: Rating }) => {
  if (rating === "good") {
    return (
      <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center">
        <Check className="w-3 h-3 text-success" />
      </div>
    );
  }
  if (rating === "bad") {
    return (
      <div className="w-5 h-5 bg-destructive/20 rounded-full flex items-center justify-center">
        <X className="w-3 h-3 text-destructive" />
      </div>
    );
  }
  return (
    <div className="w-5 h-5 bg-muted-foreground/20 rounded-full flex items-center justify-center">
      <Minus className="w-3 h-3 text-muted-foreground" />
    </div>
  );
};

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Comparison
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Hygrosphere Stands Out
          </h2>
          <p className="text-lg text-muted-foreground">
            A side-by-side comparison shows how Hygrosphere uniquely addresses the limitations 
            of traditional water treatment methods.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-5 bg-primary/5 border-b border-border">
                <div className="p-4 font-semibold text-foreground">Feature</div>
                <div className="p-4 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                    Hygrosphere
                  </div>
                </div>
                <div className="p-4 text-center font-medium text-muted-foreground">Chlorine Tablets</div>
                <div className="p-4 text-center font-medium text-muted-foreground">Boiling</div>
                <div className="p-4 text-center font-medium text-muted-foreground">Basic Filters</div>
              </div>

              {/* Table Body */}
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-5 border-b border-border last:border-0 ${
                    index % 2 === 0 ? "bg-card" : "bg-secondary/30"
                  }`}
                >
                  <div className="p-4 font-medium text-foreground">{row.feature}</div>
                  <div className="p-4 flex items-center justify-center gap-2">
                    <RatingIcon rating={row.hygrosphere.rating} />
                    <span className="text-sm font-medium text-foreground">{row.hygrosphere.value}</span>
                  </div>
                  <div className="p-4 flex items-center justify-center gap-2">
                    <RatingIcon rating={row.tablets.rating} />
                    <span className="text-sm text-muted-foreground">{row.tablets.value}</span>
                  </div>
                  <div className="p-4 flex items-center justify-center gap-2">
                    <RatingIcon rating={row.boiling.rating} />
                    <span className="text-sm text-muted-foreground">{row.boiling.value}</span>
                  </div>
                  <div className="p-4 flex items-center justify-center gap-2">
                    <RatingIcon rating={row.filters.rating} />
                    <span className="text-sm text-muted-foreground">{row.filters.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Advantage Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Check className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">The Only Solution That Does It All</p>
              <p className="text-sm text-muted-foreground">
                Hygrosphere is the only system that combines zero recurring costs, off-grid operation, and microplastic removal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
