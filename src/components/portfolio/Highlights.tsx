import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Strong Ownership Mindset",
    description: "Excellent debugging and problem-solving skills with a focus on delivering high-quality solutions",
  },
  {
    icon: Users,
    title: "AI-Enabled Systems",
    description: "Experience delivering AI-enabled systems used by internal teams and clients in production environments",
  },
  {
    icon: Lightbulb,
    title: "Passionate About Innovation",
    description: "Deeply passionate about Applied AI, scalable backend systems, and real-time architecture",
  },
];

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">06.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Additional Highlights</h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-primary/30 transition-colors"
              >
                <div className="inline-flex p-4 rounded-xl bg-secondary group-hover:bg-primary/20 transition-colors mb-4">
                  <item.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
