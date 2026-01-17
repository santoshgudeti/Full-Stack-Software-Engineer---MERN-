import { Download, Github, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-secondary/20">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold gradient-text">
              G. Santosh
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Full Stack Software Engineer (MERN Stack)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.linkedin.com/in/santosh-guddeti-929668216"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/santoshgudeti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:santoshgudeti@gmail.com"
                className="p-2 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} G. Santosh. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
