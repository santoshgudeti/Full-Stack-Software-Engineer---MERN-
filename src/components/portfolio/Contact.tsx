import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Globe } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/santosh-guddeti-929668216", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/santoshgudeti", label: "GitHub" },
    { icon: Globe, href: "https://santoshgudeti.github.io/Full-Stack-Software-Engineer---MERN-/", label: "Portfolio" },
    { icon: Mail, href: "mailto:santoshgudeti@gmail.com", label: "Email" },
  ];

  const contactInfo = [
    { icon: Mail, value: "santoshgudeti@gmail.com", href: "mailto:santoshgudeti@gmail.com" },
    { icon: Phone, value: "+91 8309085060", href: "tel:+918309085060" },
    { icon: MapPin, value: "Hyderabad, India", href: null },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-primary font-mono text-sm">07. What's Next?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, I'll do my best to get back to you!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:santoshgudeti@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={18} />
              Say Hello
            </a>

            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Contact info */}
          <div className="glass-card p-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {contactInfo.map((item) => (
                <div key={item.value}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-4 rounded-lg hover:bg-primary/5"
                    >
                      <div className="p-3 rounded-full bg-secondary/50">
                        <item.icon size={24} />
                      </div>
                      <span className="text-sm">{item.value}</span>
                    </a>
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-muted-foreground p-4">
                      <div className="p-3 rounded-full bg-secondary/50">
                        <item.icon size={24} />
                      </div>
                      <span className="text-sm">{item.value}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-10">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-3 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Availability badge */}
          <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-green-500">Currently available for opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
