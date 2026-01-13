import { lazy, Suspense } from "react";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Highlights from "@/components/portfolio/Highlights";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

// Lazy load Three.js component for better performance
const ParticleBackground = lazy(() => import("@/components/portfolio/ParticleBackground"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Three.js Particle Background */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
