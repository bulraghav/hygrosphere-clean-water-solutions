import { Lightbulb, GraduationCap, Award } from "lucide-react";

const teamMembers = [
  {
    name: "[Founder Name 1]",
    role: "Co-Founder & Lead Engineer",
    school: "[School Name]",
    bio: "Passionate about hardware solutions for global challenges. Background in physics and materials science. Driven to bridge the gap between lab research and real-world impact.",
    focus: "Water systems, condensation physics, sustainable materials",
  },
  {
    name: "[Founder Name 2]",
    role: "Co-Founder & Design Lead",
    school: "[School Name]",
    bio: "Focused on user-centered design for underserved communities. Interests span environmental engineering and social enterprise. Believes technology should serve everyone.",
    focus: "Product design, field testing, community engagement",
  },
];

const achievements = [
  "Science fair participation in water/environmental categories",
  "Research into atmospheric water generation and SODIS",
  "Field interest in WASH (Water, Sanitation, Hygiene)",
  "Conrad Challenge 2025 entrants",
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 lg:py-32 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            The Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Student Innovators with a Mission
          </h2>
          <p className="text-lg text-muted-foreground">
            We're students who saw water stress firsthand and wanted to build something 
            technically rigorous yet realistic — a solution that could actually work in the field.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl font-display font-bold text-primary-foreground">
                  {member.name.charAt(1)}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-1">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.school}</p>
              
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-1">Focus Areas</p>
                <p className="text-sm text-foreground">{member.focus}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Our Story
              </h3>
            </div>

            <p className="text-muted-foreground mb-6">
              The idea for Hygrosphere emerged from a simple observation: despite decades of progress, 
              billions still lack access to safe water. We asked ourselves — what if we could combine 
              multiple proven technologies into one low-cost, self-sufficient system?
            </p>

            <p className="text-muted-foreground mb-6">
              Inspired by nature (the Namib beetle's fog-harvesting shell) and validated science 
              (solar disinfection research from Swiss institutes), we designed a three-in-one device 
              that harvests, purifies, and filters — all without electricity or consumables.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {index === 3 ? (
                      <Award className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
