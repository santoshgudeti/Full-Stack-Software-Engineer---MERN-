import type { IconName } from "@/components/common/Icon";

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
  external: boolean;
}

export interface NavItem {
  label: string;
  to: string;
  /** Match exactly rather than by prefix — required on "/" or it matches every route. */
  end?: boolean;
}

export interface Metric {
  /** "60%", "15GB+", "12s → 2.5s" */
  value: string;
  label: string;
  detail?: string;
}

/** A before → after pair, rendered differently from a plain metric. */
export interface DeltaMetric {
  before: string;
  after: string;
  label: string;
}

export interface Profile {
  name: string;
  shortName: string;
  initials: string;
  headline: string;
  subHeadline: string;
  location: string;
  email: string;
  phone: string;
  /** ISO month. Years of experience is derived from this, never hardcoded. */
  careerStart: string;
  availability: { available: boolean; label: string };
  summary: string;
  bio: string[];
  focusAreas: { label: string; icon: IconName }[];
  socials: SocialLink[];
}

export type EmploymentType = "Full-time" | "Internship" | "Contract";

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  /** ISO month, e.g. "2026-07" */
  start: string;
  /** null means current */
  end: string | null;
  /** Pre-formatted to avoid locale drift, e.g. "Jul 2026 – Present" */
  displayPeriod: string;
  type: EmploymentType;
  /** One-line framing used on the Home current-role callout. */
  summary: string;
  highlights: string[];
  metrics?: Metric[];
  deltas?: DeltaMetric[];
  stack: string[];
  /** Content is a placeholder awaiting real detail — renders an explicit affordance. */
  draft?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: IconName;
  skills: string[];
  /** Surfaced in the condensed Home capabilities teaser. */
  featured?: boolean;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  affiliation?: string;
  location: string;
  displayPeriod: string;
  cgpa?: string;
  coursework?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: "live" | "source" | "case-study";
}

export type ProjectDomain = "Fintech" | "AI & LLM" | "HR Tech" | "Real-time";

export interface Project {
  /** Route segment for /work/:slug */
  slug: string;
  title: string;
  subtitle: string;
  org: string;
  kind: "company" | "personal";
  domain: ProjectDomain;
  year: string;
  featured: boolean;
  order: number;
  /** <=160 chars — doubles as the card body and the meta description. */
  summary: string;
  stack: string[];
  /** 3-4 bullets — the card's condensed proof. */
  highlights: string[];
  metrics?: Metric[];
  cover?: {
    alt: string;
    avif: [src: string, width: number][];
    webp: [src: string, width: number][];
    jpg: [src: string, width: number][];
  };
  /** Empty array renders nothing at all — never a disabled button. */
  links: ProjectLink[];
  /** Long-form detail page. Every field optional so pages degrade gracefully. */
  detail?: {
    overview?: string;
    problem?: string;
    architecture?: string;
    approach?: string[];
    outcomes?: string[];
    responsibilities?: string[];
    metrics?: Metric[];
    deltas?: DeltaMetric[];
  };
}

export interface Highlight {
  icon: IconName;
  title: string;
  description: string;
}

export interface SiteConfig {
  /** No trailing slash. */
  url: string;
  basePath: string;
  resumeUrl: string;
  ogImage: string;
  nav: NavItem[];
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };
}
