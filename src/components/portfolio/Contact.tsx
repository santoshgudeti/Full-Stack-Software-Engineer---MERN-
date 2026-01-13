import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Download, ArrowUpRight, Send, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/santosh-guddeti-929668216", label: "LinkedIn", color: "from-blue-500 to-blue-600" },
    { icon: Github, href: "https://github.com/santoshgudeti", label: "GitHub", color: "from-gray-600 to-gray-800" },
    { icon: Mail, href: "mailto:santoshgudeti@gmail.com", label: "Email", color: "from-red-500 to-orange-500" },
  ];

  const contactInfo = [
    { icon: Mail, value: "santoshgudeti@gmail.com", href: "mailto:santoshgudeti@gmail.com" },
    { icon: Phone, value: "+91 8309085060", href: "tel:+918309085060" },
    { icon: MapPin, value: "Hyderabad, India", href: null },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{
            background: [
              "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 50%)",
              "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center relative"
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="text-primary font-mono text-sm">07. What's Next?</span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            I'm currently open to new opportunities and collaborations. Whether you have a question 
            or just want to say hi, I'll do my best to get back to you!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <MagneticButton
              href="mailto:santoshgudeti@gmail.com"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              <Send size={18} className="group-hover:rotate-12 transition-transform" />
              Say Hello
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </MagneticButton>
            
            <MagneticButton
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </MagneticButton>
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["-200% 0%", "200% 0%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10 grid sm:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-all p-4 rounded-lg hover:bg-primary/5"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="p-3 rounded-full bg-secondary/50"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon size={24} />
                      </motion.div>
                      <span className="text-sm">{item.value}</span>
                    </motion.a>
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-muted-foreground p-4">
                      <div className="p-3 rounded-full bg-secondary/50">
                        <item.icon size={24} />
                      </div>
                      <span className="text-sm">{item.value}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex justify-center gap-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="relative p-4 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground transition-all duration-300 overflow-hidden"
                aria-label={link.label}
                onMouseEnter={() => setHoveredSocial(link.label)}
                onMouseLeave={() => setHoveredSocial(null)}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${link.color}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredSocial === link.label ? 0.2 : 0 }}
                />
                
                <link.icon size={24} className="relative z-10" />

                {/* Sparkle effect */}
                {hoveredSocial === link.label && (
                  <motion.div
                    className="absolute -top-1 -right-1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <Sparkles size={12} className="text-primary" />
                  </motion.div>
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* Availability badge */}
          <motion.div
            className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, type: "spring" }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-sm text-green-500">Currently available for opportunities</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
