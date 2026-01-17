import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import skillMatrixImage from "@/assets/skillmatrix-preview.jpg";
import deliveryImage from "@/assets/delivery-preview.jpg";

const projects = [
  {
    title: "SkillMatrix",
    subtitle: "Applicant Tracking System",
    description: "Enterprise Applicant Tracking System supporting end-to-end recruitment workflows",
    image: skillMatrixImage,
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "shadcn/ui"],
    highlights: [
      "Contributed to the development of an enterprise ATS supporting end-to-end recruitment workflows",
      "Implemented backend APIs for resume ingestion, candidate processing, job management, and result storage",
      "Enforced role-based access control for HR and administrative users",
      "Developed offer letter generation using customizable templates and automated document creation",
      "Enabled public job postings through shareable job links",
      "Integrated MCQ and voice-based question generation APIs into the assessment platform to support dynamic evaluation workflows",
    ],
    isCompanyProject: true,
  },
  {
    title: "Live Delivery Tracking System",
    subtitle: "Real-Time GPS Tracking Platform",
    description: "Real-time delivery tracking system displaying live order status updates",
    image: deliveryImage,
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Socket.IO", "Redis", "MongoDB", "Google Maps APIs"],
    highlights: [
      "Built a real-time delivery tracking system to display live order status updates",
      "Implemented event-driven communication using Socket.IO for server-to-client updates",
      "Designed RESTful APIs for order management, user management, and delivery history",
      "Ensured consistent state synchronization between frontend and backend during real-time updates",
    ],
    isCompanyProject: false,
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`grid lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-xl border border-border/50">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover"
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.3 }}
          />
          
          {project.isCompanyProject && (
            <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
              Company Project
            </div>
          )}

          {!project.isCompanyProject && (
            <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-medium rounded-full bg-secondary/90 text-foreground border border-border/50">
              Personal Project
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <p className="text-primary font-mono text-sm mb-2 flex items-center gap-2">
          <ChevronRight size={14} />
          {project.subtitle}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-6">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="text-primary mt-0.5">▹</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links placeholder */}
        <div className="flex gap-4">
          <button 
            className="btn-secondary text-sm py-2 px-4 opacity-50 cursor-not-allowed" 
            disabled
          >
            <ExternalLink size={16} />
            Live Demo
          </button>
          <button 
            className="btn-secondary text-sm py-2 px-4 opacity-50 cursor-not-allowed" 
            disabled
          >
            <Github size={16} />
            Source Code
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          {/* Projects */}
          <div className="space-y-16">
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
