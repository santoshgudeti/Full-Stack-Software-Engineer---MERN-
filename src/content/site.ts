import type { SiteConfig } from "./types";

const BASE = import.meta.env.BASE_URL;
const URL = "https://santoshgudeti.github.io/Full-Stack-Software-Engineer---MERN-";

export const site: SiteConfig = {
  url: URL,
  basePath: BASE,
  resumeUrl: `${BASE}resume.pdf`,
  // Absolute by necessity — social scrapers do not resolve relative image URLs.
  ogImage: `${URL}/og.png`,
  // Phase 3 converts these from in-page anchors to real routes.
  nav: [
    { label: "About", to: "#about" },
    { label: "Skills", to: "#skills" },
    { label: "Experience", to: "#experience" },
    { label: "Work", to: "#projects" },
    { label: "Education", to: "#education" },
    { label: "Contact", to: "#contact" },
  ],
  seo: {
    titleTemplate: "%s | G. Santosh",
    defaultTitle:
      "G. Santosh — Full Stack Engineer & AI/ML Integration Specialist",
    defaultDescription:
      "Full Stack Engineer building fintech and AI-integrated platforms with NestJS, FastAPI, React, and PostgreSQL. Specialising in LLM integrations, RAG pipelines, and third-party API orchestration.",
    keywords: [
      "Full Stack Engineer",
      "AI/ML Integration",
      "NestJS",
      "FastAPI",
      "React",
      "PostgreSQL",
      "pgvector",
      "RAG",
      "Fintech",
      "India",
    ],
  },
};
