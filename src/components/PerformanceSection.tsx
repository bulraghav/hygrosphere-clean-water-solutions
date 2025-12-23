import { Check, Beaker, Shield, Droplet, FileCheck } from "lucide-react";

const metrics = [
  {
    category: "Condensation",
    icon: Droplet,
    data: [
      { metric: "Condensation Rate", value: "50-150 mL/h", condition: "at 60-80% RH" },
      { metric: "Nightly Yield", value: "≥0.75-1.0 L", condition: "target per cycle" },
      { metric: "Cylinder Area", value: "~415 cm²", condition: "effective surface" },
    ],
  },
  {
    category: "Disinfection",
    icon: Shield,
    data: [
      { metric: "Pathogen Reduction", value: "3-log (99.9%)", condition: "E. coli baseline" },
      { metric: "Treatment Time", value: "2-4 hours", condition: "with reflector" },
      { metric: "Classic SODIS", value: "4-6 hours", condition: "comparison baseline" },
    ],
  },
  {
    category: "Filtration",
    icon: Beaker,
    data: [
      { metric: "Microplastic Removal", value: "75-90%", condition: ">0.5 µm particles" },
      { metric: "Membrane Pore Size", value: "0.2-0.5 µm", condition: "PES/PVDF" },
      { metric: "Daily Output", value: "1-2 L", condition: "drinking water" },
    ],
  },
];

const validationProtocols = [
  "Humidity-chamber tests for condensation rate verification",
  "UV dosimeter cards and temperature logging for SODIS validation",
  "Turbidity and particle counting for filtration efficacy",
  "E. coli culture tests for pathogen reduction confirmation",
];

export const PerformanceSection = () => {
  return (
    <section id="performance" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Performance & Validation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Science-Backed Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Every claim is grounded in research and validated through rigorous testing protocols.
            Our targets are based on peer-reviewed literature and laboratory verification.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((section, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg"
            >
              {/* Header */}
              <div className="bg-primary/5 p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {section.category}
                  </h3>
                </div>
              </div>

              {/* Data Table */}
              <div className="p-6">
                <table className="w-full">
                  <tbody>
                    {section.data.map((row, i) => (
                      <tr key={i} className="border-b border-border last:border-0">
                        <td className="py-3">
                          <p className="text-sm font-medium text-foreground">{row.metric}</p>
                          <p className="text-xs text-muted-foreground">{row.condition}</p>
                        </td>
                        <td className="py-3 text-right">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            {row.value}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Validation Protocols */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-success" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Validation Protocols
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {validationProtocols.map((protocol, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <p className="text-sm text-muted-foreground">{protocol}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
