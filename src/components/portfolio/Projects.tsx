import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight, Lock } from "lucide-react";
import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { sortedProjects, type Project } from "@/content";

const projects = sortedProjects();

const linkIcon = (kind: Project["links"][number]["kind"]) =>
  kind === "source" ? Github : ExternalLink;

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: Project;
  index: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="grid lg:grid-cols-2 gap-8 items-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media */}
      <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-xl border border-border/50">
          {project.cover ? (
            <motion.div
              className="w-full aspect-video overflow-hidden"
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <ResponsiveImage
                avif={project.cover.avif}
                webp={project.cover.webp}
                jpg={project.cover.jpg}
                sizes="(min-width: 1024px) 50vw, 100vw"
                width={1152}
                height={648}
                alt={project.cover.alt}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ) : (
            <div className="w-full aspect-video flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary via-card to-background">
              <span className="text-4xl font-bold gradient-text">
                {project.title
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 3)
                  .join("")}
              </span>
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                {project.domain}
              </span>
            </div>
          )}

          <div
            className={`absolute top-4 right-4 px-3 py-1.5 text-xs font-medium rounded-full ${
              project.kind === "company"
                ? "bg-primary/90 text-primary-foreground"
                : "bg-secondary/90 text-foreground border border-border/50"
            }`}
          >
            {project.kind === "company" ? "Company Project" : "Personal Project"}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
        <p className="text-primary font-mono text-sm mb-2 flex items-center gap-2">
          <ChevronRight size={14} />
          {project.subtitle}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold mb-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {project.org} · {project.year}
        </p>
        <p className="text-muted-foreground mb-6">{project.summary}</p>

        <ul className="space-y-2 mb-6">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5">▹</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {project.links.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => {
              const LinkIcon = linkIcon(link.kind);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2 px-4"
                >
                  <LinkIcon size={16} />
                  {link.label}
                </a>
              );
            })}
          </div>
        ) : (
          project.kind === "company" && (
            <span className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Lock size={13} />
              Proprietary — source not public
            </span>
          )
        )}
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
                key={project.slug}
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
