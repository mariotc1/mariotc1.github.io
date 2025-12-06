import { Project } from './types';

export const USER_INFO = {
  name: "Mario Tomé Core",
  role: "Desarrollador Full Stack · Especialidad Python",
  subheading: "Construyo productos con código limpio, producto mínimo viable y diseño enfocado en la experiencia.",
  bio: "Soy Mario Tomé Core, desarrollador Full Stack con formación técnica superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y actualmente finalizando Desarrollo de Aplicaciones Web (DAW). He construido aplicaciones reales en entornos de escritorio, web y móvil, trabajando todo el ciclo de desarrollo: arquitectura, lógica, persistencia de datos, interfaz y despliegue. Me caracterizo por una fuerte disciplina, mentalidad profesional desde el primer día y obsesión por el clean code, la claridad y la mantenibilidad. Busco incorporarme a un equipo donde aportar valor real como desarrollador junior, seguir creciendo técnicamente y asumir responsabilidades desde el primer momento.",
  pitch: "Tengo experiencia práctica construyendo y desplegando aplicaciones completas, trabajando con bases de datos, APIs REST, control de versiones y flujos de desarrollo profesionales. Me adapto rápido a nuevos equipos y tecnologías y afronto cada proyecto con mentalidad de responsabilidad, no de estudiante.",
  email: "mariotomecore@gmail.com",
  linkedin: "https://www.linkedin.com/in/mario-tomé-core-114551343/",
  github: "https://github.com/mariotc1"
};

export const PROJECTS: Project[] = [
  {
    slug: "pomodoroapp",
    title: "PomodoroApp",
    image: "/assets/pomodoroapp.png",
    repo: "https://github.com/mariotc1/PomodoroApp",
    tech: ["Swift", "iOS", "Firebase"],
    status: "Destacado",
    private: false,
    short: "Aplicación móvil para gestión de productividad tipo Pomodoro.",
    description: "Una solución para la gestión del tiempo. Incluye bloqueo de aplicaciones, estadísticas de productividad y personalización de temporizadores."
  },
  {
    slug: "pomodoro-landing",
    title: "pomodoro-landing",
    image: "/assets/pomodoro-landing.png",
    repo: "https://github.com/mariotc1/pomodoro-landing",
    demo: "https://pomodoroproapp.site",
    tech: ["HTML", "CSS", "JS"],
    status: "Proyecto",
    private: false,
    short: "Landing page optimizada para la conversión y descarga de la app.",
    description: "Sitio web de marketing diseñado para mostrar las características de la aplicación Pomodoro, con un enfoque en SEO y performance."
  },
  {
    slug: "fantasyhelper",
    title: "fantasyHelper",
    image: "/assets/fantasy-helper.png",
    repo: "https://github.com/mariotc1/fantasyHelper",
    demo: "https://xi-fantasy.streamlit.app",
    tech: ["Python", "Web Scraping", "Pandas"],
    status: "Destacado",
    private: false,
    short: "Asistente que crea alineaciones usando scraping de datos públicos.",
    description: "Herramienta automatizada que extrae estadísticas de jugadores de diversas fuentes web para recomendar alineaciones óptimas en ligas fantasy."
  },
  {
    slug: "crm_python",
    title: "CRM_Python",
    image: "/assets/crm.png",
    repo: "https://github.com/mariotc1/CRM_Python",
    tech: ["Python", "PyQt5", "SQLite"],
    status: "Destacado",
    private: false,
    short: "CRM de escritorio desarrollado en CFGS DAM.",
    description: "Aplicación de escritorio robusta para gestión de clientes, facturación y seguimiento de ventas, implementando patrón MVC."
  },
  {
    slug: "appstockdb",
    title: "AppStockDB-",
    image: "/assets/aplicación-stckdb.png",
    repo: "https://github.com/mariotc1/AppStockDB-",
    tech: ["Python", "Flask", "PyQt5"],
    status: "TFG",
    private: false,
    short: "Gestión de stock con API REST y cliente de escritorio.",
    description: "Proyecto de fin de grado que integra un backend Flask RESTful con un cliente de escritorio PyQt5 para gestión de inventario en tiempo real."
  },
  {
    slug: "capitalquiz",
    title: "CapitalQuiz",
    image: "/assets/capitalquiz.png",
    repo: "https://github.com/mariotc1/CapitalQuiz",
    tech: ["Android", "Java", "Room"],
    status: "Proyecto",
    private: false,
    short: "Juego educativo Android nativo con base de datos local.",
    description: "App Android nativa para aprender geografía. Utiliza Room para persistencia de datos y sigue las guías de Material Design."
  }
];

export const ACADEMIC_REPOS: Project[] = [
  {
    slug: "apptaller",
    title: "appTaller",
    repo: "https://github.com/mariotc1/appTaller",
    tech: ["Java", "Swing", "MySQL"],
    status: "Proyecto",
    private: false,
    short: "Gestión de taller mecánico (Java SE)."
  },
  {
    slug: "dwes",
    title: "Desarrollo Web Servidor",
    repo: "https://github.com/mariotc1/desarrollo_web_entorno_servidor",
    tech: ["PHP", "Laravel", "Docker"],
    status: "Proyecto",
    private: false,
    short: "Prácticas de DWES (Backend)."
  },
  {
    slug: "diw",
    title: "Diseño Interfaces Web",
    repo: "https://github.com/mariotc1/dessing_de_interfaces_web",
    tech: ["HTML5", "CSS3", "JS"],
    status: "Proyecto",
    private: false,
    short: "Prácticas de maquetación y UX."
  },
  {
    slug: "deploy",
    title: "Desarrollo Web Cliente",
    repo: "https://github.com/mariotc1/desarrollo_web_entorno_cliente",
    tech: ["JS", "HTML5", "CSS3"],
    status: "Proyecto",
    private: false,
    short: "Prácticas de DWEC (Cliente)."
  }
];

export const SKILLS = [
  { name: "Python", level: "Avanzado" },
  { name: "Java", level: "Intermedio" },
  { name: "PHP", level: "Intermedio" },
  { name: "JavaScript", level: "Intermedio" },
  { name: "HTML/CSS", level: "Avanzado" },
  { name: "Swift", level: "Básico" },
  { name: "Flask", level: "Avanzado" },
  { name: "MySQL", level: "Intermedio" },
  { name: "SQLite", level: "Intermedio" },
  { name: "Git", level: "Avanzado" },
];
