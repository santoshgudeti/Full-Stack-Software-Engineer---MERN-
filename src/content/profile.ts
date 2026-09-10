import type { Profile } from "./types";

export const profile: Profile = {
  name: "G. Santosh",
  shortName: "Santosh",
  initials: "GS",
  headline: "Full Stack Engineer",
  subHeadline: "AI/ML Integration Specialist",
  location: "Kakinada, India",
  email: "santoshgudeti@gmail.com",
  phone: "+91 8309085060",
  careerStart: "2024-10",
  availability: {
    available: true,
    label: "Open to opportunities",
  },
  summary:
    "Full Stack Engineer shipping AI-driven applications across Fintech, HR Tech, and on-demand platforms. I build production systems with NestJS, FastAPI, React, and PostgreSQL — specialising in LLM integrations, RAG pipelines, and third-party API orchestration.",
  bio: [
    "I build the parts of a product that have to be right: payment flows, KYC pipelines, credit logic, and the LLM integrations that increasingly sit behind all of them. Most of my work has been in regulated or high-trust domains, where a silent failure is expensive and correctness matters more than velocity.",
    "At 8byte.ai I worked inside a multi-tenant loan origination system serving five lender brands from one codebase — EMI and payment collection, a reloan workflow, KYC funnel analytics, and FOIR enforcement in the credit assessment engine. Before that, at Cognitbotz, I built the FastAPI services behind an enterprise ATS: semantic resume matching on pgvector embeddings, and LLM scoring pipelines with schema-validated output that stayed reliable across tens of thousands of calls.",
    "What I care about is the boring part of AI engineering — making a non-deterministic model produce output a downstream system can actually depend on. Schema validation, retry logic, caching, and honest latency budgets. That, and shipping it inside a real product rather than a demo.",
  ],
  focusAreas: [
    { label: "Full Stack Engineering", icon: "layers" },
    { label: "LLM & RAG Integration", icon: "ai" },
    { label: "Fintech API Orchestration", icon: "fintech" },
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/santosh-guddeti-929668216",
      icon: "linkedin",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/santoshgudeti",
      icon: "github",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:santoshgudeti@gmail.com",
      icon: "mail",
      external: false,
    },
  ],
};
