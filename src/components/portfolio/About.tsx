import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Clock } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    metric: "50+",
    label: "Resumes processed in under 30 seconds",
  },
  {
    icon: Zap,
    metric: "<1 min",
    label: "Real-time evaluation reports",
  },
  {
    icon: Clock,
    metric: "<5 sec",
    label: "Automated offer letter generation",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Results-driven <span className="text-foreground font-medium">Full Stack Software Engineer</span> with 
                strong expertise in <span className="text-primary font-medium">Applied AI systems</span>, Generative AI 
                integrations, and real-time web platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experienced in building production-grade AI-enabled applications using MERN stack, Python-based AI 
                services (FastAPI), RESTful APIs, WebSockets, and LLM APIs. Proven ability to design scalable 
                recruitment and evaluation systems involving:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  Resume parsing & semantic matching with embeddings generation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  Vector similarity search & RAG-style pipelines
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  Voice-based assessments with STT/TTS integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  Automated decision workflows & evaluation pipelines
                </li>
              </ul>
            </div>

            {/* Profile placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-lg bg-secondary border border-border/50 overflow-hidden relative group">
                {/* Replace this div with your profile photo:
                    <img src="/path-to-your-photo.jpg" alt="G. Santosh" className="w-full h-full object-cover" />
                */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold gradient-text">GS</span>
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-2 border border-primary/30 rounded-lg -z-10 translate-x-4 translate-y-4" />
            </div>
          </div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-4 mt-12"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center ai-highlight"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text mb-2">{item.metric}</div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
