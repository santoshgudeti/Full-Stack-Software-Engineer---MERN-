import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profile320Avif from "@/assets/profile-320.avif";
import profile320Webp from "@/assets/profile-320.webp";
import profile320Jpg from "@/assets/profile-320.jpg";
import profile640Avif from "@/assets/profile-640.avif";
import profile640Webp from "@/assets/profile-640.webp";
import profile640Jpg from "@/assets/profile-640.jpg";
import { Icon } from "@/components/common/Icon";
import { ResponsiveImage } from "@/components/common/ResponsiveImage";
import { profile, yearsOfExperience } from "@/content";

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
                <span className="text-foreground font-medium">{profile.headline}</span> with{" "}
                {yearsOfExperience()}+ years shipping AI-driven applications across{" "}
                <span className="text-primary font-medium">Fintech, HR Tech, and on-demand platforms</span>.
              </p>

              {profile.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-muted-foreground leading-relaxed"
                  variants={itemVariants}
                >
                  {paragraph}
                </motion.p>
              ))}

              {/* Focus areas */}
              <motion.div className="flex flex-wrap gap-3 pt-4" variants={itemVariants}>
                {profile.focusAreas.map((area) => (
                  <div
                    key={area.label}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border/50 rounded-full"
                  >
                    <Icon name={area.icon} size={16} className="text-primary" />
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
                  <ResponsiveImage
                    avif={[
                      [profile320Avif, 320],
                      [profile640Avif, 640],
                    ]}
                    webp={[
                      [profile320Webp, 320],
                      [profile640Webp, 640],
                    ]}
                    jpg={[
                      [profile320Jpg, 320],
                      [profile640Jpg, 640],
                    ]}
                    sizes="(min-width: 640px) 288px, 256px"
                    width={640}
                    height={640}
                    alt={profile.name}
                    loading="lazy"
                    decoding="async"
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
