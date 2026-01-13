import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Cpu, Code, Database, Server, Wrench, Cloud, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Applied AI & Machine Learning",
    icon: Cpu,
    isAI: true,
    skills: [
      "LLM API Integration",
      "Resume Parsing",
      "Semantic Matching",
      "Prompt Engineering",
      "Embeddings Generation",
      "Vector Similarity Search",
      "RAG-style Pipelines",
      "Speech-to-Text (STT)",
      "Text-to-Speech (TTS)",
      "AI Scoring Algorithms",
      "Evaluation Pipelines",
      "Feature Extraction",
      "Model Inference",
      "Latency Optimization",
      "Async AI Processing",
      "Tokenization & Chunking",
      "NLP Concepts",
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java (OCA Certified)"],
  },
  {
    title: "Frontend",
    icon: Code,
    skills: ["React.js", "Next.js (App Router)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "WebSockets", "Socket.IO", "JWT Auth", "API Security"],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Redis (Pub/Sub)", "Redis Caching", "SQL"],
  },
  {
    title: "Real-Time Systems",
    icon: Wrench,
    skills: ["WebSocket Architecture", "Polling Fallback", "Event-Driven Design", "Redis Pub/Sub"],
  },
  {
    title: "Architecture & DevOps",
    icon: Cloud,
    skills: ["Scalable System Design", "API Optimization", "Performance Tuning", "Docker", "CI/CD", "Git", "Linux"],
  },
  {
    title: "AI Tools & Libraries",
    icon: Cpu,
    isAI: true,
    skills: ["OpenAI APIs", "LangChain (conceptual)", "Pinecone/FAISS (conceptual)", "Python", "FastAPI"],
  },
];

const SkillBadge = ({ skill, isAI, delay }: { skill: string; isAI?: boolean; delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={`relative overflow-hidden ${isAI ? "tech-badge-ai" : "tech-badge"}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, y: -2 }}
    >
      {isAI && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
          animate={isHovered ? { x: ["0%", "100%"] } : {}}
          transition={{ duration: 0.5 }}
        />
      )}
      <span className="relative z-10">{skill}</span>
    </motion.span>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
          animate={isInView ? { scale: [0.8, 1.1, 1], opacity: [0, 0.5, 0.3] } : {}}
          transition={{ duration: 2 }}
        />
      </div>

      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={cardVariants} className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Technical Skills</h2>
            <motion.div 
              className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* AI Skills callout */}
          <motion.div
            variants={cardVariants}
            className="mb-8 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-accent/5 to-transparent border border-primary/20 flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Applied AI Specialist:</span> Deep experience with LLM integrations, semantic search, and AI-driven automation pipelines
            </p>
          </motion.div>

          {/* Skills grid */}
          <motion.div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className={`glass-card p-6 ${category.isAI ? "ai-highlight relative overflow-hidden" : ""}`}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* AI category glow effect */}
                {category.isAI && (
                  <motion.div
                    className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-0"
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className={`p-2 rounded-lg ${category.isAI ? "bg-primary/20" : "bg-secondary"}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className={`w-5 h-5 ${category.isAI ? "text-primary" : "text-muted-foreground"}`} />
                    </motion.div>
                    <h3 className={`font-semibold ${category.isAI ? "text-primary" : "text-foreground"}`}>
                      {category.title}
                      {category.isAI && (
                        <motion.span
                          className="ml-2 inline-block"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ✨
                        </motion.span>
                      )}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                        isAI={category.isAI}
                        delay={categoryIndex * 0.1 + skillIndex * 0.02}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
