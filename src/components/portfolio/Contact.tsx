import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Download, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section header */}
          <span className="text-primary font-mono text-sm">07. What's Next?</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            I'm currently open to new opportunities and collaborations. Whether you have a question 
            or just want to say hi, I'll do my best to get back to you!
          </p>

          {/* Contact buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:santoshgudeti@gmail.com" className="btn-primary">
              <Mail size={18} />
              Say Hello
              <ArrowUpRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Contact info */}
          <div className="glass-card p-8">
            <div className="grid sm:grid-cols-3 gap-6">
              <a
                href="mailto:santoshgudeti@gmail.com"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
                <span className="text-sm">santoshgudeti@gmail.com</span>
              </a>
              <a
                href="tel:+918309085060"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={24} />
                <span className="text-sm">+91 8309085060</span>
              </a>
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <MapPin size={24} />
                <span className="text-sm">Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/santosh-guddeti-929668216"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/santoshgudeti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:santoshgudeti@gmail.com"
              className="p-3 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
