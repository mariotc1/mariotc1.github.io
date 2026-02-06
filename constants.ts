import { Project } from './types';

export const USER_INFO = {
  name: "Mario Tomé Core",
  role: "Junior Full Stack Developer",
  subheading: "Transformando ideas complejas en productos digitales de alto impacto. Código limpio, arquitectura escalable y diseño futurista.",
  bio: "Soy un desarrollador obsesionado con la calidad del software y la experiencia de usuario. No solo escribo código; diseño soluciones que escalan. Mi enfoque combina la robustez de la ingeniería de backend con la finura visual del frontend moderno. Busco un equipo donde la excelencia sea el estándar, no la excepción.",
  pitch: "No busco solo un empleo, busco un desafío donde pueda desplegar todo mi potencial técnico y creativo.",
  email: "mariotomecore@gmail.com",
  github: "https://github.com/mariotc1",
  linkedin: "https://www.linkedin.com/in/mariotomecore/",
  cv: "/assets/Mario-Tome-Core-cv.pdf"
};

export const PROJECTS: Project[] = [
  {
    slug: "edufinder-cyl",
    title: "Edufinder CyL",
    image: "/assets/edufinder.png",
    repo: "https://github.com/mariotc1/edufinder-cyl.git",
    demo: "https://edufinder-cyl.vercel.app",
    tech: ["Next.js", "Laravel", "PostgreSQL", "Docker", "Leaflet"],
    status: "TFG - Excelencia",
    private: false,
    short: "Plataforma premiada para la centralización de oferta educativa y búsqueda de centros en Castilla y León.",
    description: "Desarrollo Full Stack integral. Backend robusto en Laravel sirviendo una API RESTful a un frontend moderno en Next.js. Sistema de geolocalización avanzado con Leaflet para mapear centros educativos y ofertas de FP en tiempo real."
  },
  {
    slug: "the-simpsons",
    title: "The Simpsons Pearl",
    image: "/assets/the-simpsons.jpeg",
    repo: "https://github.com/mariotc1/proyecto-ut6-the-simpsons.git",
    demo: "https://the-simpsons-pearl.vercel.app",
    tech: ["Next.js", "React", "API Integration", "Tailwind"],
    status: "Featured",
    private: false,
    short: "Experiencia interactiva consumiendo la API de Los Simpsons.",
    description: "Aplicación SPA de alto rendimiento que explora el universo de Los Simpsons. Diseño meticuloso, navegación fluida y consumo eficiente de API externa. Incluye modo Quiz y enciclopedia de personajes."
  },
  {
    slug: "pomodoroapp",
    title: "PomodoroApp",
    image: "/assets/pomodoroapp.png",
    repo: "https://github.com/mariotc1/PomodoroApp",
    tech: ["Swift", "iOS", "Firebase"],
    status: "Mobile",
    private: false,
    short: "Productividad iOS nativa con sincronización en la nube.",
    description: "Aplicación nativa para iOS construida con Swift. Implementa patrones de diseño MVVM, sincronización en tiempo real con Firebase y una interfaz de usuario pulida enfocada en la retención del usuario."
  }
];

export const ACADEMIC_REPOS: Project[] = []; // Cleared for "No Fluff" policy
export const SKILLS: any[] = []; // Using minimal presentation in About instead
