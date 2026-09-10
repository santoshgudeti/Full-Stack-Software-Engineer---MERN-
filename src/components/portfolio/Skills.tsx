import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@/components/common/Icon";
import { skillCategories } from "@/content";

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
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
            <div className="flex-1 h-px bg-border/50" />
          </motion.div>

          {/* Skills grid */}
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="glass-card p-6 hover:border-primary/30 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-secondary">
                    <Icon name={category.icon} className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="tech-badge"
                    >
                      {skill}
                    </span>
                  ))}
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
