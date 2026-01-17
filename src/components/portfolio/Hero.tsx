import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github, Download, ChevronDown, Globe } from "lucide-react";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/santosh-guddeti-929668216", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/santoshgudeti", label: "GitHub" },
    { icon: Globe, href: "https://santoshgudeti.github.io/Full-Stack-Software-Engineer---MERN-/", label: "Portfolio" },
    { icon: Mail, href: "mailto:santoshgudeti@gmail.com", label: "Email" },
  ];

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y, opacity }}
      >
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      </motion.div>

      <motion.div
        className="section-container relative z-10"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="max-w-2xl order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </motion.div>

            {/* Location & Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 text-muted-foreground mb-4"
            >
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                <span className="text-sm">Hyderabad, India</span>
              </div>
              <span className="text-border">•</span>
              <span className="text-sm">1.4+ Years Experience</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              G. <span className="gradient-text">Santosh</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-xl sm:text-2xl lg:text-2xl font-medium text-foreground">
                Full Stack Software Engineer
              </h2>
              <p className="text-lg text-primary font-medium mt-1">
                MERN Stack
              </p>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Building production-ready web applications with React, Node.js, Express, and MongoDB.
              Experienced in real-time updates, API development, and integrating external AI evaluation services.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
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
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-3"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                  aria-label={link.label}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl" />

              {/* Image container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-border/50">
                <img
                  src={profilePhoto}
                  alt="G. Santosh - Full Stack Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-secondary/90 backdrop-blur-sm border border-border/50 rounded-full text-xs font-medium shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                MERN Stack Developer
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs">Scroll down</span>
          <ChevronDown size={18} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
