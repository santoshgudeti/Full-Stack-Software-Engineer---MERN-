import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github, Download, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/50 mb-8"
          >
            <MapPin size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">Hyderabad, India</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
          >
            G. <span className="gradient-text">Santosh</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium mb-6"
          >
            Full Stack Software Engineer
            <span className="block sm:inline text-primary"> — Applied AI & Real-Time Systems</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mb-8"
          >
            MERN Stack, Generative AI Integrations, Scalable Real-Time Platforms
          </motion.p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="mailto:santoshgudeti@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">santoshgudeti@gmail.com</span>
            </a>
            <a
              href="tel:+918309085060"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">+91 8309085060</span>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Download size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="https://www.linkedin.com/in/santosh-guddeti-929668216"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/santoshgudeti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:santoshgudeti@gmail.com"
              className="p-3 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
