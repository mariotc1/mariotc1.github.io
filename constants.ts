import { Project, SkillCategory } from './types';

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
    slug: "edufinder-cyl",
    title: "EduFinder-CyL",
    image: "/assets/edufinder-cyl.png",
    repo: "https://github.com/mariotc1/edufinder-cyl",
    demo: "https://edufinder-cyl.vercel.app/",
    tech: ["Next.js", "TypeScript", "Laravel", "Docker"],
    status: "TFG DAW",
    private: false,
    short: "Plataforma Full Stack para centralizar la búsqueda de centros educativos en Castilla y León.",
    description: "Plataforma Full Stack para centralizar la búsqueda de centros educativos en Castilla y León."
  },
  {
    slug: "fantasyhelper",
    title: "FantasyHelper",
    image: "/assets/fantasy-helper.png",
    repo: "https://github.com/mariotc1/fantasyHelper",
    demo: "https://xi-fantasy.streamlit.app/",
    tech: ["Python", "Streamlit"],
    status: "Data & Scraping",
    private: false,
    short: "Aplicación de análisis de datos para optimizar alineaciones fantasy mediante scraping.",
    description: "Aplicación de análisis de datos para optimizar alineaciones fantasy mediante scraping."
  },
  {
    slug: "pomodoroapp",
    title: "PomodoroApp",
    image: "/assets/pomodoroapp.png",
    repo: "https://github.com/mariotc1/PomodoroApp",
    tech: ["Swift"],
    status: "En Desarrollo",
    private: false,
    short: "App iOS que educa el uso intencional del móvil mediante sesiones inteligentes y gamificación.",
    description: "App iOS que educa el uso intencional del móvil mediante sesiones inteligentes y gamificación."
  },
  {
    slug: "pomodoro-landing",
    title: "Pomodoro Landing",
    image: "/assets/pomodoro-landing.png",
    repo: "https://github.com/mariotc1/pomodoro-landing",
    demo: "https://pomodoro-landing.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Landing Page",
    private: false,
    short: "Landing estratégica conectada a MailerLite para captación de beta testers.",
    description: "Landing estratégica conectada a MailerLite para captación de beta testers."
  },
  {
    slug: "the-simpsons-explorer",
    title: "The Simpsons Explorer",
    image: "/assets/the-simpsons.jpeg",
    repo: "https://github.com/mariotc1/proyecto-ut6-the-simpsons",
    demo: "https://the-simpsons-pearl.vercel.app/",
    tech: ["Next.js", "React"],
    status: "API Integration",
    private: false,
    short: "Aplicación interactiva que explota la API oficial de Los Simpsons con estadísticas y quiz.",
    description: "Aplicación interactiva que explota la API oficial de Los Simpsons con estadísticas y quiz."
  },
  {
    slug: "appstockdb",
    title: "AppStockDB",
    image: "/assets/aplicación-stckdb.png",
    repo: "https://github.com/mariotc1/AppStockDB-",
    tech: ["Python", "PyQt5", "Flask"],
    status: "TFG DAM",
    private: false,
    short: "Aplicación de escritorio con API para gestión inmobiliaria.",
    description: "Aplicación de escritorio con API para gestión inmobiliaria."
  }
];

export const ACADEMIC_REPOS: Project[] = [
  {
    slug: "dwes",
    title: "Desarrollo de Entorno Servidor",
    repo: "https://github.com/mariotc1/desarrollo_web_entorno_servidor",
    tech: ["PHP", "Laravel", "Docker", "MAMP"],
    status: "Módulo",
    private: false,
    short: "Arquitectura backend, APIs y bases de datos relacionales."
  },
  {
    slug: "dwec",
    title: "Desarrollo de Entorno Cliente",
    repo: "https://github.com/mariotc1/desarrollo_web_entorno_cliente",
    tech: ["React", "Next.js", "Tailwind", "Node"],
    status: "Módulo",
    private: false,
    short: "SPAs, interactividad avanzada y consumo de APIs."
  },
  {
    slug: "diw",
    title: "Diseño de Interfaces Web",
    repo: "https://github.com/mariotc1/dessing_de_interfaces_web",
    tech: ["Figma", "HTML5", "CSS3", "JS"],
    status: "Módulo",
    private: false,
    short: "Prototipado UI/UX, maquetación responsive y animaciones."
  },
  {
    slug: "daw",
    title: "Despliegue de Aplicaciones",
    repo: "https://github.com/mariotc1/despliegue-aplicaciones-web",
    tech: ["Docker", "Vercel", "Render", "Apache"],
    status: "Módulo",
    private: false,
    short: "CI/CD, contenerización y administración de servidores."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Flask", icon: "https://cdn.simpleicons.org/flask/white" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
    ]
  },
  {
    title: "Mobile",
    skills: [
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
    ]
  },
  {
    title: "Desktop",
    skills: [
      { name: "PyQt5", icon: "https://cdn.simpleicons.org/qt/41CD52" },
      { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png" }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Vercel", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/white" }
    ]
  }
];