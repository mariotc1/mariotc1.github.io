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
    role: "Desarrollador Software Test y Automatización",
    period: "Feb. 2026 — Actualidad",
    areas: ["Python", "AOI", "OpenCV", "Digital Twins", "Streamlit"],
    url: "https://www.proximasystems.net",
    logo: { src: "/images/companies/proxima-systems/logo.webp", width: 64, height: 59 },
    current: true,
  },
  {
    company: "db Inmuebles Property Manager",
    role: "Desarrollador Python (Freelancer)",
    period: "Feb. 2025 - Jul. 2025",
    areas: ["Python", "Automatización", "Desktop", "PyQt"],
    url: "https://www.dbroomsandflats.com",
    logo: { src: "/images/companies/db-rooms-and-flats/logo.webp", width: 63, height: 64 },
  },
  {
    company: "Serbatic",
    role: "Desarrollador Backend (Prácticas)",
    period: "Feb. 2025 - May. 2025",
    areas: ["Python", "NLP", "Spacy", "Rasa", "Procesamiento PDF"],
    url: "https://www.serbatic.es",
    logo: { src: "/images/companies/serbatic/logo.webp", width: 64, height: 21 },
  },
];

export const education = [
  "CFGS Desarrollo de Aplicaciones Web — IES Galileo",
  "CFGS Desarrollo de Aplicaciones Multiplataforma — Colegio San Viator",
];
