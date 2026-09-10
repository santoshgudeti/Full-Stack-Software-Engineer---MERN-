import type { Certification, Education } from "./types";

export const education: Education = {
  degree: "B.Tech",
  field: "Information Technology",
  institution: "CVR College of Engineering",
  affiliation: "JNTU Hyderabad",
  location: "Hyderabad, India",
  displayPeriod: "2019 – 2023",
  cgpa: "8.07 / 10",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Database Systems",
    "Web Development",
  ],
};

export const certifications: Certification[] = [
  {
    name: "Oracle Certified Associate (OCA) — Java SE 8 Programmer",
    issuer: "Oracle",
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google / Coursera",
  },
  {
    name: "Full Stack Web Development Certification",
    issuer: "MyCaptain",
  },
  {
    name: "Database Foundations",
    issuer: "Oracle Academy",
  },
];
