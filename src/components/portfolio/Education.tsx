import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = {
  degree: "B.Tech in Information Technology",
  institution: "CVR College of Engineering (JNTU)",
  period: "2019 – 2023",
  cgpa: "8.07",
};

const certifications = [
  { name: "Oracle Certified Associate — Java SE 8", issuer: "Oracle" },
  { name: "Google IT Support Certificate", issuer: "Google" },
  { name: "Full Stack Web Development", issuer: "MyCaptain" },
  { name: "Database Foundations", issuer: "Oracle Academy" },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Education & Certifications</h2>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-foreground">{education.degree}</h4>
                <p className="text-muted-foreground">{education.institution}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">CGPA:</span>
                    <span className="font-semibold text-primary">{education.cgpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>

              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <div>
                      <p className="font-medium text-foreground">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
