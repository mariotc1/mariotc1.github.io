export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  areas: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Proxima Systems",
    role: "Software Developer — Python",
    period: "2026 — Actualidad",
    areas: ["Visión artificial", "Automatización", "Gemelos digitales"],
  },
  {
    company: "db Inmuebles Property Manager",
    role: "Python Developer — Freelance",
    period: "2025",
    areas: ["Automatización", "Desktop", "Python"],
  },
  {
    company: "Serbatic",
    role: "Backend Developer — Prácticas",
    period: "2025",
    areas: ["Python", "NLP", "Procesamiento documental"],
  },
];

export const education = [
  "CFGS Desarrollo de Aplicaciones Web — IES Galileo",
  "CFGS Desarrollo de Aplicaciones Multiplataforma — Colegio San Viator",
  "Bachillerato Ciencias Tecnológicas — IES Delicias",
];
