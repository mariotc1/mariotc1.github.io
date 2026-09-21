import type { BrandIconKey } from "@/lib/brand-icons";

export interface Project {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  year: string;
  technologies: BrandIconKey[];
  technologiesLabel: string[];
  featured: boolean;
  role: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  decisions?: string[];
  outcome?: string;
  liveUrl?: string;
  githubUrl?: string;
  status: "live" | "in-progress";
}

export const projects: Project[] = [
  {
    slug: "edufinder-cyl",
    number: "01",
    title: "EduFinder CYL",
    shortDescription:
      "Plataforma para descubrir, comparar y explorar centros educativos y oferta de Formación Profesional en Castilla y León.",
    description:
      "Plataforma web para descubrir, comparar y explorar centros educativos y oferta de Formación Profesional en Castilla y León.",
    category: "Producto web",
    year: "2024",
    technologies: ["nextjs", "typescript", "php", "laravel", "postgresql"],
    technologiesLabel: ["Next.js", "TypeScript", "PHP", "Laravel", "PostgreSQL"],
    featured: true,
    role: "Desarrollo end-to-end: arquitectura, backend, frontend y despliegue.",
    problem:
      "Encontrar información fiable y comparable sobre centros educativos y Formación Profesional en Castilla y León está disperso entre múltiples fuentes públicas, sin una forma sencilla de buscar, filtrar o comparar opciones.",
    solution:
      "Construí una plataforma que centraliza datos públicos de centros y ciclos formativos, con buscador, filtros, geolocalización, comparación entre centros, favoritos, historial y recomendaciones de FP, disponible como PWA.",
    features: [
      "Buscador y filtros avanzados sobre datos públicos de centros y ciclos",
      "Geolocalización de centros educativos",
      "Comparación de centros y de oferta formativa",
      "Favoritos e historial de búsqueda",
      "Recomendaciones de Formación Profesional",
      "Progressive Web App instalable",
    ],
    architecture:
      "Frontend en Next.js y TypeScript consumiendo una API REST construida con Laravel y PHP sobre PostgreSQL. El frontend se despliega en Vercel y el backend en Render.",
    decisions: [
      "Separar frontend y backend en servicios independientes para desplegar cada uno donde mejor encaja (Vercel para el cliente, Render para la API).",
      "Modelar el catálogo de centros y ciclos como datos estructurados reutilizables para búsqueda, comparación y recomendaciones desde una única fuente de verdad.",
    ],
    outcome:
      "Producto en producción, usado como referencia de un desarrollo completo de extremo a extremo: desde el modelado de datos públicos hasta una interfaz pensada para estudiantes y familias.",
    liveUrl: "https://edufinder-cyl.vercel.app",
    status: "live",
  },
  {
    slug: "plancine",
    number: "02",
    title: "PlanCine",
    shortDescription:
      "Aplicación web para descubrir películas y decidir qué ver de forma rápida y sencilla.",
    description:
      "Aplicación web para descubrir películas y decidir qué ver de forma rápida y sencilla.",
    category: "Producto en construcción",
    year: "2025",
    technologies: [],
    technologiesLabel: [],
    featured: true,
    role: "Diseño y desarrollo del producto.",
    outcome:
      "Proyecto en construcción activa. El stack definitivo, capturas y funcionalidades se documentarán aquí en cuanto estén disponibles para no adelantar información sin confirmar.",
    status: "in-progress",
  },
  {
    slug: "fantasy-xi-assistant",
    number: "03",
    title: "Fantasy XI Assistant",
    shortDescription:
      "Aplicación para analizar plantillas de fútbol fantasy y generar alineaciones mediante procesamiento de datos.",
    description:
      "Aplicación web para analizar plantillas de fútbol fantasy y generar alineaciones mediante procesamiento de datos.",
    category: "Data & automatización",
    year: "2023",
    technologies: ["python", "streamlit", "pandas", "selenium"],
    technologiesLabel: [
      "Python",
      "Streamlit",
      "Pandas",
      "Requests",
      "BeautifulSoup",
      "Selenium",
      "JavaScript",
      "HTML/CSS",
      "Git",
    ],
    featured: true,
    role: "Desarrollo individual: scraping, procesamiento de datos, algoritmo e interfaz.",
    problem:
      "Elegir el mejor XI en un juego de fútbol fantasy exige cruzar estadísticas de muchos jugadores y comprobar restricciones tácticas, algo lento de hacer a mano cada jornada.",
    solution:
      "Desarrollé una herramienta que actualiza datos de jugadores mediante scraping, los normaliza con Pandas y aplica un algoritmo de selección que respeta restricciones tácticas para proponer la mejor alineación posible.",
    features: [
      "Scraping y actualización periódica de datos de jugadores",
      "Normalización de datos con Pandas",
      "Algoritmo de selección del XI con restricciones tácticas",
      "Interfaz interactiva construida con Streamlit",
      "Exportación de la alineación a PDF",
    ],
    architecture:
      "Scripts de scraping con Requests, BeautifulSoup y Selenium que alimentan un pipeline de procesamiento en Pandas; la interfaz se sirve con Streamlit y permite exportar el resultado a PDF.",
    outcome:
      "Herramienta funcional publicada como demo pública, usada para generar alineaciones jornada a jornada.",
    liveUrl: "https://xi-fantasy.streamlit.app",
    githubUrl: "https://github.com/mariotc1/fantasyHelper",
    status: "live",
  },
  {
    slug: "pomodoroproapp",
    number: "04",
    title: "PomodoroProApp",
    shortDescription:
      "Aplicación de productividad para iOS basada en la técnica Pomodoro, desarrollada como producto independiente.",
    description:
      "Aplicación de productividad para iOS basada en la técnica Pomodoro, desarrollada como producto independiente.",
    category: "Producto mobile",
    year: "2023",
    technologies: ["swift"],
    technologiesLabel: ["Swift", "SwiftUI", "MVVM", "Firebase", "UserDefaults", "Git"],
    featured: true,
    role: "Desarrollo individual del producto para iOS, de principio a fin.",
    problem:
      "Quería llevar una app de productividad más allá de un ejercicio de aprendizaje: convertirla en un producto real, publicable y usable por otras personas.",
    solution:
      "Construí una app iOS en SwiftUI con arquitectura MVVM que implementa sesiones de foco con la técnica Pomodoro, rachas, trofeos y estadísticas, con persistencia local y sincronización con Firebase.",
    features: [
      "Sesiones de foco basadas en la técnica Pomodoro",
      "Rachas y trofeos para mantener la constancia",
      "Estadísticas de uso",
      "Persistencia local con UserDefaults",
      "Sincronización con Firebase",
      "Distribución beta mediante TestFlight",
    ],
    architecture:
      "App nativa en Swift y SwiftUI con arquitectura MVVM, persistencia local vía UserDefaults y sincronización de datos con Firebase.",
    outcome:
      "Producto publicado en beta mediante TestFlight, con landing propia. Pieza histórica que demuestra experiencia en desarrollo mobile y de producto de principio a fin.",
    liveUrl: "https://pomodoroproapp.site",
    status: "live",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  const nextIndex = (index + 1) % projects.length;
  return projects[nextIndex];
}
