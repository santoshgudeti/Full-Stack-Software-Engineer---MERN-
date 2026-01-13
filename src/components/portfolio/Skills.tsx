import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Code, Database, Server, Wrench, Cloud } from "lucide-react";

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

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Technical Skills</h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`glass-card p-6 ${category.isAI ? "ai-highlight" : ""}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.isAI ? "bg-primary/20" : "bg-secondary"}`}>
                    <category.icon className={`w-5 h-5 ${category.isAI ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <h3 className={`font-semibold ${category.isAI ? "text-primary" : "text-foreground"}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={category.isAI ? "tech-badge-ai" : "tech-badge"}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
