import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles, Zap, Clock, Radio } from "lucide-react";
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
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
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
            <div className="flex-1 h-px bg-border/50" />
          </div>

          {/* Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                {/* Image */}
                <div className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-xl border border-border/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {project.isCompanyProject && (
                    <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm border border-primary/30">
                      Company Project
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="mb-4">
                    <p className="text-primary font-mono text-sm mb-2">{project.subtitle}</p>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-sm ${
                          highlight.isMetric ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {highlight.icon ? (
                          <highlight.icon size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        ) : (
                          <span className="text-primary mt-0.5">▹</span>
                        )}
                        <span className={highlight.isMetric ? "font-medium" : ""}>
                          {highlight.isMetric ? (
                            <span className="metric-highlight">{highlight.text}</span>
                          ) : (
                            highlight.text
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={tech.toLowerCase().includes("llm") || tech.toLowerCase().includes("ai") || tech.toLowerCase().includes("stt") || tech.toLowerCase().includes("python")
                          ? "tech-badge-ai"
                          : "tech-badge"
                        }
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <button className="btn-secondary text-sm py-2 px-4 opacity-50 cursor-not-allowed" disabled>
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                    <button className="btn-secondary text-sm py-2 px-4 opacity-50 cursor-not-allowed" disabled>
                      <Github size={16} />
                      Source Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
