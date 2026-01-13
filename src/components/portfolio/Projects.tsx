import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, Zap, Clock, Radio, ChevronRight } from "lucide-react";
import skillMatrixImage from "@/assets/skillmatrix-preview.jpg";
import deliveryImage from "@/assets/delivery-preview.jpg";

const projects = [
  {
    title: "SkillMatrix",
    subtitle: "AI-Powered Applicant Tracking System",
    description: "Designed and developed a full-scale enterprise ATS automating the recruitment lifecycle",
    image: skillMatrixImage,
    techStack: ["React", "Node.js", "Express", "Python (FastAPI)", "MongoDB", "WebSockets", "LLM APIs", "STT/TTS"],
    highlights: [
      {
        icon: Sparkles,
        text: "Analyze and rank 50+ resumes within 30 seconds",
        isMetric: true,
      },
      {
        icon: null,
        text: "LLM-based resume parsing with RAG-style pipelines and semantic similarity matching",
        isMetric: false,
      },
      {
        icon: Zap,
        text: "Deliver evaluation reports in under 1 minute",
        isMetric: true,
      },
      {
        icon: null,
        text: "Multi-mode assessment workflows (MCQ, text, voice) with STT/TTS integration",
        isMetric: false,
      },
      {
        icon: Clock,
        text: "Generate offer letters in under 5 seconds",
        isMetric: true,
      },
      {
        icon: null,
        text: "Fault-tolerant AI workflows with retries, fallbacks, and confidence thresholds",
        isMetric: false,
      },
    ],
    isCompanyProject: true,
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
  },
  {
    title: "Live Delivery Tracking System",
    subtitle: "Real-Time GPS Tracking Platform",
    description: "Built a real-time delivery tracking system with live GPS updates, ETA calculation, and order status transitions",
    image: deliveryImage,
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Socket.IO", "Redis", "MongoDB", "Google Maps APIs", "Tailwind CSS"],
    highlights: [
      {
        icon: Radio,
        text: "Live GPS updates with WebSockets and polling fallback",
        isMetric: true,
      },
      {
        icon: null,
        text: "Redis Pub/Sub for high-frequency reliable updates",
        isMetric: false,
      },
      {
        icon: null,
        text: "Google Maps APIs with smooth LERP animations",
        isMetric: false,
      },
      {
        icon: null,
        text: "Scalable APIs separating live tracking from historical records",
        isMetric: false,
      },
    ],
    isCompanyProject: false,
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <motion.div 
        className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden rounded-xl border border-border/50">
          {/* Gradient overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-10`}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: isHovered ? 0 : 0.3 }}
          />
          
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Hover overlay with view button */}
          <motion.div
            className="absolute inset-0 bg-background/80 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
              className="flex gap-4"
            >
              <span className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-sm font-medium flex items-center gap-2">
                <ExternalLink size={16} />
                View Project
              </span>
            </motion.div>
          </motion.div>
        </div>
        
        {project.isCompanyProject && (
          <motion.div 
            className="absolute top-4 right-4 z-30 px-3 py-1.5 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Company Project
          </motion.div>
        )}

        {/* Decorative elements */}
        <motion.div
          className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"
          animate={{ scale: isHovered ? 1.5 : 1 }}
        />
      </motion.div>

      {/* Content */}
      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
          <p className="text-primary font-mono text-sm mb-2 flex items-center gap-2">
            <ChevronRight size={14} />
            {project.subtitle}
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 relative inline-block">
            {project.title}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            />
          </h3>
          <p className="text-muted-foreground mb-6">{project.description}</p>

          {/* Highlights */}
          <ul className="space-y-3 mb-6">
            {project.highlights.map((highlight, i) => (
              <motion.li
                key={i}
                className={`flex items-start gap-3 text-sm ${
                  highlight.isMetric ? "text-foreground" : "text-muted-foreground"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + i * 0.05 + 0.3 }}
              >
                {highlight.icon ? (
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    <highlight.icon size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  </motion.div>
                ) : (
                  <motion.span 
                    className="text-primary mt-0.5"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                  >
                    ▹
                  </motion.span>
                )}
                <span className={highlight.isMetric ? "font-medium" : ""}>
                  {highlight.isMetric ? (
                    <span className="metric-highlight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                      {highlight.text}
                    </span>
                  ) : (
                    highlight.text
                  )}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                className={
                  tech.toLowerCase().includes("llm") || 
                  tech.toLowerCase().includes("ai") || 
                  tech.toLowerCase().includes("stt") || 
                  tech.toLowerCase().includes("python") ||
                  tech.toLowerCase().includes("fastapi")
                    ? "tech-badge-ai"
                    : "tech-badge"
                }
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + i * 0.03 + 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <motion.button 
              className="btn-secondary text-sm py-2 px-4 opacity-50 cursor-not-allowed" 
              disabled
              whileHover={{ scale: 1.02 }}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.button>
            <motion.button 
              className="btn-secondary text-sm py-2 px-4 opacity-50 cursor-not-allowed" 
              disabled
              whileHover={{ scale: 1.02 }}
            >
              <Github size={16} />
              Source Code
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"
          animate={isInView ? { scale: [0.8, 1.1, 1], opacity: [0, 0.5, 0.3] } : {}}
          transition={{ duration: 2 }}
        />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
            <motion.div 
              className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          {/* Projects */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index} 
                isInView={isInView} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
