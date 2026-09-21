export const siteConfig = {
  name: "Mario Tomé Core",
  brandLine: "Dream Big",
  role: "Software Developer",
  tagline: "Python Backend · Web · Mobile · Desktop",
  positioning:
    "Python Backend Developer | Software Developer | Web, Mobile & Desktop | APIs & Automation",
  location: "Valladolid, Castilla y León, España",
  url: "https://mariotc1.github.io",
  description:
    "Portfolio de Mario Tomé Core, desarrollador de software especializado en Python y backend, con experiencia construyendo aplicaciones web, móviles y de escritorio.",
  links: {
    github: "https://github.com/mariotc1",
    linkedin: "https://www.linkedin.com/in/mario-tome-core/",
    email: "mariotomecore@gmail.com",
    whatsapp: "34644071074",
  },
} as const;

export function hasLink(value: string): value is string {
  return value.trim().length > 0;
}
