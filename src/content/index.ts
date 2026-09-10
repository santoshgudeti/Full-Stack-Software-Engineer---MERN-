export * from "./types";

export { site } from "./site";
export { profile } from "./profile";
export { experiences } from "./experience";
export { projects } from "./projects";
export { skillCategories } from "./skills";
export { education, certifications } from "./education";
export { proofMetrics } from "./metrics";
export { highlights } from "./highlights";

import { profile } from "./profile";
import { experiences } from "./experience";
import { projects } from "./projects";
import { skillCategories } from "./skills";

const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.4375;

/**
 * Years of experience, floored to the nearest half year so the figure is never
 * rounded up beyond what has actually been worked.
 */
export const yearsOfExperience = (): number => {
  const start = new Date(`${profile.careerStart}-01T00:00:00Z`).getTime();
  const months = (Date.now() - start) / MS_PER_MONTH;
  return Math.floor(months / 6) / 2;
};

export const currentRole = () => experiences.find((role) => role.end === null);

export const pastRoles = () => experiences.filter((role) => role.end !== null);

export const featuredProjects = () =>
  projects.filter((project) => project.featured).sort((a, b) => a.order - b.order);

export const sortedProjects = () => [...projects].sort((a, b) => a.order - b.order);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const projectDomains = () => [
  ...new Set(sortedProjects().map((project) => project.domain)),
];

/** Previous/next project for the detail-page footer navigation. */
export const adjacentProjects = (slug: string) => {
  const ordered = sortedProjects();
  const index = ordered.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: ordered[index - 1],
    next: ordered[index + 1],
  };
};

export const featuredSkills = () =>
  skillCategories.filter((category) => category.featured);
