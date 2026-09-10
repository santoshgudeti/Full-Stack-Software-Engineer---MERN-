import { Download } from "lucide-react";
import { Icon } from "@/components/common/Icon";
import { profile, site } from "@/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-secondary/20">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold gradient-text">
              {profile.name}
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              {profile.headline} · {profile.subHeadline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {site.nav.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
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
              {profile.socials.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={link.label}
                >
                  <Icon name={link.icon} size={18} />
                </a>
              ))}
            </div>
            <a
              href={site.resumeUrl}
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
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Built with React, TypeScript, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
