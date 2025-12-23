import { Droplets } from "lucide-react";

const footerLinks = [
  { label: "Problem", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Performance", href: "#performance" },
  { label: "Benefits", href: "#benefits" },
  { label: "Impact", href: "#impact" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-primary-light" />
            <span className="font-display text-lg font-bold">Hygrosphere</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Tagline */}
          <p className="text-sm text-background/50">
            Safe water, off-grid.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Hygrosphere. Built for the Conrad Challenge 2025.
          </p>
        </div>
      </div>
    </footer>
  );
};
