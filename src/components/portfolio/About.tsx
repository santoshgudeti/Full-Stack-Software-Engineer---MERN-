import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Clock, Brain, Code, Cpu } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const highlights = [
  {
    icon: Sparkles,
    metric: "50+",
    label: "Resumes processed in under 30 seconds",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    metric: "<1 min",
    label: "Real-time evaluation reports",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    metric: "<5 sec",
    label: "Automated offer letter generation",
    color: "from-emerald-500 to-teal-500",
  },
];

const expertiseAreas = [
  { icon: Brain, label: "Applied AI" },
  { icon: Code, label: "Full Stack" },
  { icon: Cpu, label: "Real-Time" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={isInView ? { scale: [0.8, 1.2, 1], opacity: [0, 0.5, 0.3] } : {}}
          transition={{ duration: 2 }}
        />
      </div>

      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
            <motion.div 
              className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Text content - 3 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Results-driven <span className="text-foreground font-semibold">Full Stack Software Engineer</span> with 
                strong expertise in <span className="text-primary font-semibold">Applied AI systems</span>, Generative AI 
                integrations, and real-time web platforms.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Experienced in building production-grade AI-enabled applications using MERN stack, Python-based AI 
                services (FastAPI), RESTful APIs, WebSockets, and LLM APIs. Proven ability to design scalable 
                recruitment and evaluation systems involving:
              </p>

              <motion.ul className="space-y-3 ml-2">
                {[
                  "Resume parsing & semantic matching with embeddings generation",
                  "Vector similarity search & RAG-style pipelines",
                  "Voice-based assessments with STT/TTS integration",
                  "Automated decision workflows & evaluation pipelines",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.span 
                      className="text-primary mt-1.5 text-lg"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      ▹
                    </motion.span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Expertise badges */}
              <motion.div 
                className="flex flex-wrap gap-3 pt-4"
                variants={itemVariants}
              >
                {expertiseAreas.map((area, index) => (
                  <motion.div
                    key={area.label}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full"
                    whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <area.icon size={16} className="text-primary" />
                    <span className="text-sm font-medium">{area.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile photo - 2 columns */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Animated border */}
                <motion.div
                  className="absolute -inset-3 rounded-lg"
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Image container */}
                <motion.div
                  className="relative aspect-square w-64 sm:w-72 rounded-lg overflow-hidden bg-background"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={profilePhoto}
                    alt="G. Santosh"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>

                {/* Corner decoration */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-lg -z-10"
                  animate={{ 
                    x: [4, 8, 4],
                    y: [4, 8, 4],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>

          {/* Metrics */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-3 gap-6 mt-16"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="glass-card p-6 text-center h-full relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  {/* Icon with glow */}
                  <motion.div
                    className="relative inline-block mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <item.icon className="relative w-10 h-10 text-primary" />
                  </motion.div>

                  {/* Metric */}
                  <motion.div 
                    className="text-4xl font-bold gradient-text mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ type: "spring", delay: 0.5 + index * 0.2 }}
                  >
                    {item.metric}
                  </motion.div>
                  
                  <p className="text-sm text-muted-foreground relative z-10">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
