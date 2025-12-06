
<div align="center">
  
  <br />
  
  # ⚡ Mario Tomé Core — Portfolio
  
  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Three.js](https://img.shields.io/badge/Three.js-Fiber-black?style=for-the-badge&logo=three.js&logoColor=white)](https://docs.pmnd.rs/react-three-fiber)
  
  <p align="center">
    <strong>Experiencia inmersiva, diseño responsivo y código limpio.</strong><br>
    Un portafolio diseñado para demostrar capacidad técnica en Frontend moderno, optimización de rendimiento y UX.
    <br />
    <br />
    <a href="https://mariotc1.github.io/"><strong>🚀 Ver Demo en Vivo</strong></a>
    ·
    <a href="https://github.com/mariotc1/mariotc1.github.io/issues">Reportar Bug</a>
    ·
    <a href="#contacto">Contactar</a>
  </p>
</div>

---

## 🎨 Sobre el Proyecto

Este proyecto no es solo una tarjeta de presentación; es una demostración de ingeniería de software aplicada al frontend. He construido este sitio para reflejar mi perfil como **Full Stack Developer**, combinando estética visual con un rendimiento técnico sólido.

### Características Principales

*   **Experiencia 3D Interactiva:** Implementación de `Three.js` y `@react-three/fiber` para un fondo de partículas interactivo y reactivo al movimiento.
*   **Mobile-First & Performance:** Optimización agresiva para dispositivos móviles, incluyendo limitación dinámica del DPR (Device Pixel Ratio) y reducción de geometría basada en el viewport para asegurar 60FPS en smartphones.
*   **UI/UX Moderna:** Diseño Glassmorphism (efecto cristal), animaciones fluidas con `Framer Motion` y tipografía cuidada.
*   **Integración GitHub:** Visualización en tiempo real de estadísticas, trofeos y gráfico de contribuciones (Snake Game) mediante APIs y GitHub Actions.
*   **CI/CD Automatizado:** Pipeline de despliegue continuo con GitHub Actions que construye y despliega automáticamente a GitHub Pages en cada push.

---

## 🛠️ Stack Tecnológico

El proyecto utiliza un stack moderno enfocado en la velocidad de desarrollo y el rendimiento en producción:

| Categoría | Tecnologías |
| :--- | :--- |
| **Core** | ![React](https://img.shields.io/badge/-React_18-61DAFB?style=flat-square&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) |
| **Estilos & UI** | ![TailwindCSS](https://img.shields.io/badge/-Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) ![Lucide Icons](https://img.shields.io/badge/-Lucide_Icons-orange?style=flat-square) |
| **3D & Gráficos** | ![Three.js](https://img.shields.io/badge/-Three.js-black?style=flat-square&logo=three.js&logoColor=white) ![R3F](https://img.shields.io/badge/-R3F-black?style=flat-square) |
| **Infraestructura** | ![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/-GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white) |

---

## 🚀 Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/mariotc1/mariotc1.github.io.git
    cd mariotc1.github.io
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Construir para producción:**
    ```bash
    npm run build
    ```

---

## 📂 Estructura del Proyecto

```text
/
├── public/
│   └── assets/          # Imágenes estáticas y recursos (optimizados para Vite)
├── src/
│   ├── components/      # Componentes reutilizables (Hero3D, ProjectCard, etc.)
│   ├── App.tsx          # Componente raíz y layout principal
│   ├── constants.ts     # Datos estáticos (Proyectos, Textos, Links)
│   ├── types.ts         # Definiciones de TypeScript
│   └── index.css        # Estilos globales y Tailwind imports
├── .github/
│   └── workflows/       # Pipelines de CI/CD (Deploy y Snake Game)
└── vite.config.ts       # Configuración de empaquetado
```

---

## ⚡ Optimizaciones Técnicas

### Gestión de Assets
Se ha migrado la carpeta de recursos a `public/assets` para garantizar que Vite sirva las imágenes correctamente tanto en el entorno de desarrollo como en la build de producción, solucionando problemas de rutas relativas comunes en SPAs.

### Renderizado 3D Condicional
Para evitar el sobrecalentamiento en dispositivos móviles, el componente `Hero3D` detecta el user-agent y el tamaño de ventana:
- **Desktop:** Renderiza ~3000 partículas con alta fidelidad.
- **Móvil:** Reduce la geometría a 800 partículas y limita el DPR a 2x máximo para mantener 60FPS constantes sin sacrificar la calidad visual.

---

## 📬 Contacto

**Mario Tomé Core** - Desarrollador Full Stack

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mario-tomé-core-114551343/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mariotomecore@gmail.com)

---

<div align="center">
  <p>Desarrollado con ❤️ y mucho ☕ por Mario Tomé Core</p>
</div>
