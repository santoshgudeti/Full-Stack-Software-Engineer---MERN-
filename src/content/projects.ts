import type { Project } from "./types";

import skillMatrix640Avif from "@/assets/skillmatrix-640.avif";
import skillMatrix640Webp from "@/assets/skillmatrix-640.webp";
import skillMatrix640Jpg from "@/assets/skillmatrix-640.jpg";
import skillMatrix1152Avif from "@/assets/skillmatrix-1152.avif";
import skillMatrix1152Webp from "@/assets/skillmatrix-1152.webp";
import skillMatrix1152Jpg from "@/assets/skillmatrix-1152.jpg";

import delivery640Avif from "@/assets/delivery-640.avif";
import delivery640Webp from "@/assets/delivery-640.webp";
import delivery640Jpg from "@/assets/delivery-640.jpg";
import delivery1152Avif from "@/assets/delivery-1152.avif";
import delivery1152Webp from "@/assets/delivery-1152.webp";
import delivery1152Jpg from "@/assets/delivery-1152.jpg";

export const projects: Project[] = [
  {
    slug: "loan-origination-system",
    title: "Loan Origination System",
    subtitle: "Multi-tenant lending platform",
    org: "8byte.ai",
    kind: "company",
    domain: "Fintech",
    year: "2026",
    featured: true,
    order: 1,
    summary:
      "Multi-tenant loan origination platform serving five lender brands from one codebase — onboarding, KYC, payments, and credit assessment.",
    stack: [
      "React 18",
      "TypeScript",
      "Redux",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "AWS S3",
      "Docker",
      "JWT",
    ],
    highlights: [
      "Production LOS managing 1000+ loan applications per month across three portals (Customer, Partner, Admin).",
      "KYC workflow integrating eight financial APIs — Signzy, DigiLocker, CIBIL, Razorpay, Penny Drop, and the Account Aggregator framework.",
      "Multi-brand SaaS architecture supporting four independent brands with zero-code configuration.",
      "Credit assessment and collections features: CAM Calculator, FOIR validation, payment gateways, and Reloan workflows.",
    ],
    metrics: [
      { value: "1000+", label: "loan applications per month" },
      { value: "8", label: "financial APIs integrated" },
      { value: "5", label: "lender brands", detail: "one shared flow engine" },
    ],
    links: [],
    detail: {
      overview:
        "A white-labelled loan origination system where five lender brands share a single codebase but diverge in onboarding flow, KYC depth, and credit policy. Three separate portals — customer, partner, and admin — sit on top of the same core.",
      problem:
        "Each brand had effectively forked its own onboarding UI, so a single policy change meant five separate edits and five separate regressions. Third-party verification calls were also uncached, so the same domain or PAN could be billed repeatedly within one application.",
      architecture:
        "A config-driven V2 onboarding shell: one flow engine reads a per-brand step manifest, so brand differences become data rather than code branches. Verification results are cached in PostgreSQL behind composite indexes, and cold Account Aggregator data is tiered out to S3.",
      outcomes: [
        "700+ lines of duplicated onboarding UI collapsed into a single configurable flow, with backward compatibility preserved for all five existing brands.",
        "Signzy domain-verification caching removed roughly 90% of redundant third-party calls.",
        "15GB+ of Account Aggregator data moved to S3, cutting PostgreSQL storage cost by 40%.",
        "KYC funnel instrumentation across 10+ steps exposed a 25% drop-off at bank verification — a problem the product team could not previously see.",
        "FOIR enforcement in the CAM Calculator blocked 15+ non-compliant approvals in its first month.",
      ],
    },
  },
  {
    slug: "skillmatrix-ats",
    title: "SkillMatrix",
    subtitle: "AI-powered applicant tracking system",
    org: "Cognitbotz",
    kind: "company",
    domain: "AI & LLM",
    year: "2025",
    featured: true,
    order: 2,
    summary:
      "Enterprise ATS that ranks candidates by semantic fit using Sentence Transformer embeddings, pgvector search, and LLM scoring pipelines.",
    stack: [
      "FastAPI",
      "Python",
      "MongoDB",
      "pgvector",
      "Sentence Transformers",
      "OpenAI GPT-4",
      "Groq LLaMA3",
      "Pydantic",
    ],
    highlights: [
      "Semantic resume-to-job-description matching using all-MiniLM-L6-v2 embeddings and pgvector approximate nearest neighbour search, ranking pools of 200+ resumes with sub-second latency.",
      "50+ resumes processed in parallel by async background workers with exponential-backoff retry, reaching a 98% success rate across 10K+ evaluations.",
      "RAG-style evaluation workflow: semantic search extracts relevant experience, GPT-4 produces a structured assessment, and Pydantic validates the JSON before anything downstream consumes it.",
      "Processed 500+ resumes per day at 95% uptime across a six-month period.",
    ],
    metrics: [
      { value: "99.2%", label: "structured-output reliability", detail: "across 10K+ LLM calls" },
      { value: "500+", label: "resumes per day" },
      { value: "98%", label: "processing success rate" },
    ],
    cover: {
      alt: "SkillMatrix applicant tracking dashboard",
      avif: [
        [skillMatrix640Avif, 640],
        [skillMatrix1152Avif, 1152],
      ],
      webp: [
        [skillMatrix640Webp, 640],
        [skillMatrix1152Webp, 1152],
      ],
      jpg: [
        [skillMatrix640Jpg, 640],
        [skillMatrix1152Jpg, 1152],
      ],
    },
    links: [],
    detail: {
      overview:
        "An enterprise applicant tracking system whose core question is deceptively hard: given a job description and two hundred resumes, which ten are actually worth a recruiter's time?",
      problem:
        "Keyword matching ranks the candidate who copied the job description to the top. Sending every resume to an LLM is accurate but slow and expensive, and a model asked for free-form judgement returns prose that no downstream system can consume reliably.",
      architecture:
        "A two-stage pipeline. Sentence Transformer embeddings in pgvector do cheap approximate nearest-neighbour retrieval to narrow 200+ resumes to a shortlist; only that shortlist reaches GPT-4, with the semantically relevant experience passed as context. Every model response is validated against a Pydantic schema, so malformed output fails loudly at the boundary instead of corrupting a candidate record.",
      outcomes: [
        "Sub-second ranking across 200+ candidate pools.",
        "Evaluation latency cut from 12s to 2.5s by moving inference into async background workers handling 50+ concurrent requests.",
        "99.2% structured-output reliability over 10K+ API calls, with exponential-backoff retry absorbing transient provider failures.",
        "Five backend services containerised with Docker and GitHub Actions, cutting deploys from 45 minutes to 8.",
      ],
      deltas: [
        { before: "12s", after: "2.5s", label: "resume evaluation latency" },
        { before: "45min", after: "8min", label: "deployment time" },
      ],
    },
  },
  {
    slug: "ai-resume-to-portfolio",
    title: "AI Resume-to-Portfolio Generator",
    subtitle: "AI SaaS platform",
    org: "Personal project",
    kind: "personal",
    domain: "AI & LLM",
    year: "2025",
    featured: true,
    order: 3,
    summary:
      "End-to-end AI SaaS that turns an uploaded resume into a generated portfolio website, with schema-enforced LLM parsing and content versioning.",
    stack: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Groq LLaMA3",
      "React",
      "TailwindCSS",
      "JWT",
    ],
    highlights: [
      "Converts uploaded PDF/DOCX resumes into dynamically generated portfolio sites — 100+ resumes processed during beta at ~200ms average API response time.",
      "Modular FastAPI backend with a layered architecture (routers → services → schemas → models) and a resume parsing pipeline built on Groq LLaMA3 with enforced JSON schema validation.",
      "Async inference workflows with structured error handling, logging, and rate limiting at 10 req/min.",
      "PostgreSQL schema covering JWT auth, portfolio persistence, and content versioning — 99% uptime across a two-week beta with retry logic for transient LLM failures.",
    ],
    metrics: [
      { value: "100+", label: "resumes processed in beta" },
      { value: "200ms", label: "average API response" },
      { value: "99%", label: "uptime during beta" },
    ],
    links: [],
    detail: {
      overview:
        "A SaaS platform that takes a resume as a file and returns a working portfolio website. The interesting problem is not generation — it is getting reliable, structured data out of a document whose layout follows no rules.",
      problem:
        "Resumes are visually structured but semantically unstructured. Two candidates describing the same job will use different section names, date formats, and orderings. An LLM handles that variance well but returns confidently malformed JSON often enough that naive parsing breaks in production.",
      architecture:
        "A layered FastAPI backend (routers → services → schemas → models) with the parsing pipeline isolated behind a service boundary. Groq LLaMA3 runs against an enforced JSON schema; validation failures trigger bounded retries rather than propagating. Rate limiting caps inference at 10 req/min, and portfolio content is versioned so a bad regeneration is recoverable.",
      outcomes: [
        "100+ resumes processed during the beta period at roughly 200ms average API response time.",
        "99% uptime across a two-week beta, with retry logic absorbing transient LLM provider failures.",
        "Content versioning meant a poor parse could be rolled back rather than lost.",
      ],
    },
  },
  {
    slug: "real-time-tracking-platform",
    title: "Real-Time Tracking Platform",
    subtitle: "On-demand services & delivery",
    org: "Cognitbotz",
    kind: "company",
    domain: "Real-time",
    year: "2025",
    featured: false,
    order: 4,
    summary:
      "Unified GPS tracking for delivery agents and on-demand service providers, streaming location over Redis Pub/Sub and Socket.IO.",
    stack: [
      "Node.js",
      "Express",
      "Redis Pub/Sub",
      "Socket.IO",
      "MongoDB",
      "React",
      "JWT",
    ],
    highlights: [
      "Unified real-time tracking for delivery agents and on-demand providers (plumbers, electricians, cleaners), handling 100+ concurrent providers with sub-second broadcast latency.",
      "MongoDB geospatial indexing for proximity matching, bringing 'find nearest provider' queries down to 150ms.",
      "End-to-end booking workflow with live status transitions (Requested → Assigned → En Route → In Progress → Completed), payment gateway integration, and WebSocket customer notifications.",
      "Tuned for high-frequency updates — one location write per agent every five seconds — using Redis channel isolation and MongoDB time-series collections.",
    ],
    metrics: [
      { value: "100+", label: "concurrent providers" },
      { value: "150ms", label: "nearest-provider query" },
    ],
    cover: {
      alt: "Live delivery tracking map interface",
      avif: [
        [delivery640Avif, 640],
        [delivery1152Avif, 1152],
      ],
      webp: [
        [delivery640Webp, 640],
        [delivery1152Webp, 1152],
      ],
      jpg: [
        [delivery640Jpg, 640],
        [delivery1152Jpg, 1152],
      ],
    },
    links: [],
    detail: {
      overview:
        "One tracking system serving two different businesses: parcel delivery and on-demand home services. Both need live location, proximity matching, and a booking state machine — but their movement patterns differ enough that a single naive design serves neither well.",
      problem:
        "A location update every five seconds per agent, fanned out to every watching customer, saturates a naive socket broadcast quickly. Proximity queries over a growing provider set degrade fast without the right index, and booking state has to stay consistent even when a socket drops mid-transition.",
      architecture:
        "GPS updates publish to per-channel Redis Pub/Sub topics so a customer only receives the agents they are actually watching, with Socket.IO handling delivery to the browser. MongoDB geospatial indexes back proximity matching, and time-series collections absorb the high-frequency write load without bloating the primary collections.",
      outcomes: [
        "100+ concurrent providers tracked with sub-second broadcast latency.",
        "'Find nearest provider' queries reduced to 150ms via geospatial indexing.",
        "Redis channel isolation kept fan-out proportional to actual watchers rather than total agents.",
      ],
    },
  },
];
