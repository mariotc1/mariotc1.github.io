export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  areas: string[];
  /** Public company website. Never internal/private URLs (see brief). */
  url?: string;
  /** White monochrome logo mark, processed for the dark theme. */
  logo?: { src: string; width: number; height: number };
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    company: "Proxima Systems",
    role: "Software Developer — Python",
    period: "2026 — Actualidad",
    areas: ["Visión artificial", "Automatización", "Gemelos digitales"],
    url: "https://www.proximasystems.net",
    logo: { src: "/images/companies/proxima-systems/logo.webp", width: 64, height: 59 },
    current: true,
  },
  {
    company: "db Inmuebles Property Manager",
    role: "Python Developer — Freelance",
    period: "2025",
    areas: ["Automatización", "Desktop", "Python"],
    url: "https://www.dbroomsandflats.com",
    logo: { src: "/images/companies/db-rooms-and-flats/logo.webp", width: 63, height: 64 },
  },
  {
    company: "Serbatic",
    role: "Backend Developer — Prácticas",
    period: "2025",
    areas: ["Python", "NLP", "Procesamiento documental"],
    url: "https://www.serbatic.es",
    logo: { src: "/images/companies/serbatic/logo.webp", width: 64, height: 21 },
  },
];

export const education = [
  "CFGS Desarrollo de Aplicaciones Web — IES Galileo",
  "CFGS Desarrollo de Aplicaciones Multiplataforma — Colegio San Viator",
  "Bachillerato Ciencias Tecnológicas — IES Delicias",
];
