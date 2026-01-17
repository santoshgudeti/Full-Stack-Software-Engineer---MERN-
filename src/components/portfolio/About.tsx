import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Globe, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const expertiseAreas = [
  { icon: Server, label: "Full Stack Development" },
  { icon: Globe, label: "REST APIs" },
  { icon: Zap, label: "Real-Time Systems" },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 relative" ref={ref}>
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
            <div className="flex-1 h-px bg-border/50" />
          </motion.div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Text content - 3 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Full Stack Software Engineer</span> with 
                1.4+ years of hands-on experience building and maintaining production-ready web 
                applications using the <span className="text-primary font-medium">MERN stack</span>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Strong experience in developing RESTful APIs, integrating frontend and backend systems, 
                and delivering end-to-end recruitment and workflow automation features. Experienced in 
                real-time updates using WebSockets and integrating external AI-based evaluation services 
                within enterprise applications.
              </p>

              <motion.ul className="space-y-3 ml-2">
                {[
                  "End-to-end feature development with React, Node.js, Express & MongoDB",
                  "RESTful API design and backend service implementation",
                  "Real-time communication using WebSockets and Socket.IO",
                  "Integration of external AI evaluation services for assessments",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                    variants={itemVariants}
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Expertise badges */}
              <motion.div 
                className="flex flex-wrap gap-3 pt-4"
                variants={itemVariants}
              >
                {expertiseAreas.map((area) => (
                  <div
                    key={area.label}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border/50 rounded-full"
                  >
                    <area.icon size={16} className="text-primary" />
                    <span className="text-sm font-medium">{area.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile photo - 2 columns */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 flex justify-center lg:justify-end"
            >
              <div className="relative group">
                {/* Border */}
                <div className="absolute -inset-2 rounded-lg border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300" />
                
                {/* Image container */}
                <div className="relative aspect-square w-64 sm:w-72 rounded-lg overflow-hidden bg-background">
                  <img
                    src={profilePhoto}
                    alt="G. Santosh"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
