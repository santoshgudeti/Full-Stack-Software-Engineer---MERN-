import type { Highlight } from "./types";

export const highlights: Highlight[] = [
  {
    icon: "target",
    title: "Reliability over novelty",
    description:
      "Most of my work sits in regulated flows — payments, KYC, credit decisions — where a silent failure is expensive. Schema validation and honest error paths come before clever abstractions.",
  },
  {
    icon: "ai",
    title: "Production AI, not demos",
    description:
      "LLM integrations that downstream systems can actually depend on: enforced JSON schemas, bounded retries, caching, and rate limits. Shipped inside real products at real volume.",
  },
  {
    icon: "lightbulb",
    title: "Measured, then optimised",
    description:
      "12s to 2.5s on resume evaluation, 45min to 8min on deploys, 4.2s to 1.1s on a dashboard. Each one started with finding out where the time actually went.",
  },
];
