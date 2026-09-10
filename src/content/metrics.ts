import type { Metric } from "./types";

/** The Home hero proof bar — the four numbers that best summarise the work. */
export const proofMetrics: Metric[] = [
  {
    value: "99.2%",
    label: "LLM output reliability",
    detail: "across 10K+ calls",
  },
  {
    value: "1000+",
    label: "loan applications / month",
    detail: "production LOS",
  },
  {
    value: "500+",
    label: "resumes processed / day",
    detail: "95% uptime",
  },
  {
    value: "15GB+",
    label: "data migrated to S3",
    detail: "40% lower storage cost",
  },
];
