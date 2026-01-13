import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Cognitbotz",
    location: "Hyderabad",
    period: "Feb 2025 – Present",
    type: "Full-time",
    responsibilities: [
      "Owned end-to-end development of enterprise recruitment platform features using React, Node.js, Express, MongoDB, and Python-based AI services (FastAPI)",
      "Designed and implemented RESTful APIs and backend services supporting resume processing, candidate workflows, and HR operations",
      "Built AI-driven evaluation pipelines integrating LLM inference, semantic scoring logic, embeddings, vector search, and asynchronous job queues",
      "Developed real-time features using WebSockets and Socket.IO for live assessments and dashboards",
      "Optimized APIs, AI inference paths, data models, and background workers for performance, reliability, and scalability",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Cognitbotz",
    location: "Hyderabad",
    period: "Oct 2024 – Feb 2025",
    type: "Internship",
    responsibilities: [
      "Developed responsive, reusable UI components using React, Bootstrap, and modern CSS practices",
      "Integrated frontend workflows with backend APIs, authentication, and role-based access control",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1.5 animate-glow-pulse" />

                <div className="glass-card p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase size={14} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
