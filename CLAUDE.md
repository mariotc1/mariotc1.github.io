# MEGAPROMPT — DESARROLLO DEL PORTFOLIO PERSONAL DE MARIO TOMÉ CORE

## 0. ROL DEL AGENTE

Actúa como un equipo senior completo compuesto por:

* Staff Frontend Engineer
* Senior React/Next.js Engineer
* Creative Developer
* Product Designer
* UI/UX Designer
* Motion Designer
* Brand Designer
* SEO Engineer
* Accessibility Engineer
* Performance Engineer
* QA Engineer
* Technical Architect

No quiero una landing genérica.

No quiero un portfolio de plantilla.

No quiero una web que simplemente "se vea bonita".

Quiero construir una **marca personal digital premium**, con una experiencia visual memorable, técnicamente excelente, rápida, accesible y mantenible.

Tu objetivo es convertir todo el contexto de este documento en un producto digital real.

Debes tomar decisiones técnicas y de diseño cuando falte información, pero:

* no inventes información profesional sobre Mario;
* no inventes tecnologías utilizadas en proyectos;
* no inventes métricas;
* no inventes clientes;
* no inventes logros;
* no presentes proyectos personales como experiencia laboral;
* no añadas funcionalidades únicamente porque sean técnicamente llamativas.

Cuando exista una duda sobre contenido o assets, desarrolla primero la estructura y deja claramente identificado qué asset o dato necesitas posteriormente.

---

# 1. CONTEXTO DEL PRODUCTO

Este portfolio pertenece a:

**Mario Tomé Core**

Desarrollador de software especializado en Python y backend, con experiencia construyendo aplicaciones web, móviles y de escritorio.

Su posicionamiento profesional actual es:

**Python Backend Developer | Software Developer | Web, Mobile & Desktop | APIs & Automation**

Su marca personal no debe depender de un único proyecto.

La identidad debe girar alrededor de:

* desarrollo de software;
* construcción de productos;
* resolución de problemas reales;
* evolución profesional;
* experimentación;
* ingeniería;
* diseño;
* aprendizaje mediante construcción.

Los proyectos son la prueba de esa identidad, no la identidad en sí misma.

---

# 2. OBJETIVO PRINCIPAL

Crear un portfolio que consiga simultáneamente:

1. Presentar a Mario como profesional.
2. Dar confianza suficiente para una contratación.
3. Permitir contactar para oportunidades profesionales.
4. Permitir contactar para proyectos freelance.
5. Mostrar proyectos reales con profundidad.
6. Demostrar capacidad técnica.
7. Mostrar capacidad de producto.
8. Diferenciar visualmente a Mario de un portfolio de desarrollador genérico.
9. Crear una identidad visual reconocible.
10. Servir como centro de distribución de LinkedIn, GitHub y proyectos.
11. Tener una base técnica suficientemente sólida para evolucionar durante años.

La web debe transmitir:

**personal + premium + tecnológica + humana + limpia + ambiciosa + precisa.**

No debe transmitir:

* plantilla;
* startup genérica;
* "AI wrapper";
* hacker aesthetic;
* cyberpunk;
* exceso de neón;
* portfolio de bootcamp;
* dashboard;
* catálogo de componentes.

---

# 3. PRINCIPIO DE DISEÑO CENTRAL

La referencia conceptual es:

**Apple-level product presentation.**

No significa copiar Apple.

Significa aplicar principios similares:

* simplicidad;
* jerarquía;
* espacio negativo;
* tipografía precisa;
* movimiento con propósito;
* transiciones fluidas;
* contenido protagonista;
* interacción física;
* sensación de profundidad;
* ausencia de ruido visual.

Cada animación debe tener una razón.

Regla:

> Si una animación no mejora la comprensión, jerarquía o experiencia, elimínala.

No queremos una web llena de efectos porque sí.

---

# 4. BRANDING

## Color principal

La identidad visual parte del fondo utilizado actualmente por Mario en LinkedIn y su iPhone:

**azul oscuro degradado.**

El portfolio debe utilizar ese lenguaje visual.

No inventes una paleta aleatoria.

Primero inspecciona los assets reales que Mario proporcione y extrae/ajusta los colores a partir de ellos.

Crear variables de diseño:

```text
--color-background
--color-background-secondary
--color-surface
--color-surface-elevated
--color-text-primary
--color-text-secondary
--color-text-muted
--color-accent
--color-border
```

La paleta debe ser oscura, azulada y elegante.

El blanco debe utilizarse para contraste y jerarquía.

Evitar:

* negro puro dominante;
* azul eléctrico excesivamente saturado;
* gradientes multicolor;
* neón;
* glassmorphism exagerado.

---

# 5. TIPOGRAFÍA DE MARCA

Mario dispone de una **tipografía personalizada propia basada en el estilo "Dream Big"**.

IMPORTANTE:

Mario proporcionará los archivos/assets de esta tipografía.

NO debes inventarla.

NO debes sustituirla por una fuente parecida.

NO debes intentar recrearla.

NO debes convertir manualmente letras en imágenes si Mario proporciona una fuente utilizable.

Cuando finalices el desarrollo funcional y visual inicial, debes informar claramente de:

* qué archivos de tipografía necesitas;
* formato requerido;
* pesos/variantes necesarias;
* caracteres especiales necesarios;
* formatos recomendados para producción.

La tipografía personalizada debe utilizarse principalmente para:

* Mario Tomé Core;
* títulos principales;
* títulos de secciones;
* palabras clave;
* momentos de branding;
* CTA final;
* elementos editoriales seleccionados.

NO utilizarla para:

* párrafos largos;
* navegación;
* botones pequeños;
* metadata;
* stack;
* textos técnicos.

Para el cuerpo utilizar una sans-serif moderna, limpia y altamente legible.

Preferir una solución optimizada con `next/font` cuando sea viable.

---

# 6. REGLA DE MARCA

La identidad debe funcionar incluso si desaparecen todos los proyectos actuales.

Nunca construir el diseño alrededor de:

* EduFinder;
* PlanCine;
* Fantasy XI;
* PomodoroProApp.

Estos son capítulos de la trayectoria de Mario.

La marca principal es:

**Mario Tomé Core**

---

# 7. STACK TECNOLÓGICO

Usar:

* Next.js 16+
* React 19+
* TypeScript
* Tailwind CSS 4
* Motion for React (`motion/react`)
* GSAP
* GSAP ScrollTrigger
* Lenis o equivalente de smooth scrolling si realmente aporta valor
* Lucide React para iconografía funcional
* Simple Icons o SVGs oficiales para logos tecnológicos
* ESLint
* Prettier si el proyecto lo necesita

Arquitectura:

**Next.js App Router**

No utilizar Pages Router.

No introducir backend separado.

No introducir Laravel.

No introducir Flask.

No introducir una base de datos.

Este portfolio debe ser esencialmente:

**Next.js + contenido estructurado + assets + componentes interactivos.**

Si en el futuro se necesita formulario real, preparar la arquitectura para poder integrar una solución como una server action/email provider sin convertir ahora el proyecto en una aplicación backend innecesaria.

---

# 8. MOTION SYSTEM

Utilizar Motion para:

* microinteracciones;
* hover;
* aparición de elementos;
* botones;
* pequeños desplazamientos;
* layout transitions;
* reveal;
* elementos interactivos.

Utilizar GSAP + ScrollTrigger para:

* storytelling controlado por scroll;
* sticky sections;
* pinning;
* timelines;
* transformaciones complejas;
* scale;
* parallax;
* profundidad;
* secuencias de proyectos.

No utilizar GSAP para todo.

No utilizar Motion para animaciones que requieran una timeline compleja ligada al scroll si GSAP es claramente más apropiado.

---

# 9. SMOOTH SCROLL

Puede utilizarse Lenis.

Debe sentirse:

* suave;
* natural;
* rápido;
* premium.

Nunca debe producir:

* lag;
* retraso excesivo;
* sensación de "scroll flotante";
* pérdida de control;
* problemas en móvil.

Si el smooth scroll perjudica rendimiento o accesibilidad, reducirlo o eliminarlo.

---

# 10. THREE.JS / WEBGL

NO utilizar Three.js inicialmente.

No introducir WebGL solamente para crear una esfera 3D, partículas o decoración.

Sólo introducirlo si durante el desarrollo aparece una interacción visual que aporte verdadero valor al producto.

La prioridad es:

CSS + Motion + GSAP + SVG + imágenes.

---

# 11. BIBLIOTECAS DE COMPONENTES

Puedes investigar y utilizar como referencia:

## Aceternity UI

https://ui.aceternity.com/

Es una referencia prioritaria para:

* sticky scroll reveal;
* MacBook scroll;
* parallax;
* magnetic buttons;
* floating navbar;
* focus cards;
* text reveal;
* card hover;
* layout grid;
* tracing beam;
* spotlight;
* navegación animada.

## Magic UI

https://magicui.design/

Puede utilizarse como segunda fuente de inspiración para:

* scroll animations;
* bento;
* text effects;
* docks;
* hover effects;
* interactive cards;
* progressive blur;
* Safari/iPhone mockups.

REGLA FUNDAMENTAL:

NO construir una mezcla evidente de componentes prefabricados.

No quiero:

Aceternity Hero + Magic UI Bento + Aceternity Card + Magic UI Footer + etc.

El resultado debe parecer un sistema propio.

Puedes estudiar, adaptar o recrear patrones, pero todo debe compartir:

* misma paleta;
* mismos radios;
* mismo sistema de spacing;
* misma física de animación;
* misma tipografía;
* misma profundidad;
* misma identidad.

---

# 12. ARQUITECTURA DE INFORMACIÓN

La home debe tener esta narrativa:

```text
/
│
├── Hero
│
├── About
│
├── Selected Work
│
├── Stack
│
├── Experience
│
├── Contact
│
└── Footer
```

Proyectos:

```text
/projects/edufinder-cyl
/projects/plancine
/projects/fantasy-xi-assistant
/projects/pomodoroproapp
```

No utilizar modales para las case studies principales.

Cada proyecto debe tener página propia.

---

# 13. NAVIGATION

Desktop:

Navbar extremadamente limpia.

Conceptualmente:

```text
MTC                         Work   About   Stack   Contact
```

Puede utilizar:

* fixed;
* sticky;
* blur;
* transparencia;
* transición al hacer scroll.

Pero debe ser discreta.

No debe competir con el hero.

En móvil:

* navegación compacta;
* menú accesible;
* touch friendly;
* sin navegación experimental difícil de entender.

Debe existir siempre una forma evidente de:

* volver arriba;
* acceder a proyectos;
* contactar.

---

# 14. HERO

El hero debe ocupar aproximadamente una pantalla.

Contenido:

**Mario Tomé Core**

Tipografía personalizada.

Debajo:

**Software Developer**

Y como descriptor:

**Python Backend · Web · Mobile · Desktop**

Frase:

> Construyo software, productos y experiencias digitales que resuelven problemas reales.

CTA:

**Ver proyectos**

CTA secundario:

**Hablemos**

No saturar el hero.

No colocar una enorme fotografía en primer plano.

La identidad visual y el nombre deben ser el protagonista.

La fotografía aparecerá posteriormente.

---

# 15. ABOUT

Sección:

**Sobre mí**

Debe introducir a Mario humanamente.

Debe incluir:

* fotografía;
* descripción profesional;
* filosofía de trabajo;
* enlaces a LinkedIn;
* GitHub.

Contenido base:

> Soy desarrollador de software especializado en Python y backend, con experiencia construyendo aplicaciones web, móviles y de escritorio.
>
> Me interesa convertir problemas reales en software útil: APIs, automatización de procesos, procesamiento de datos, scraping, herramientas internas y productos digitales completos.
>
> Me gusta llevar las ideas desde el problema inicial hasta un producto funcionando.

El texto puede refinarse visualmente, pero no inventar nuevas afirmaciones.

---

# 16. SELECTED WORK

Esta es la sección visualmente MÁS IMPORTANTE de toda la web.

No utilizar una simple grid de cards.

Debe sentirse como un:

**showcase editorial de productos.**

Concepto:

Cada proyecto obtiene una gran sección visual.

Ejemplo:

```text
PROJECT 01

EduFinder CYL

[PREVIEW GRANDE]

Next.js · TypeScript · Laravel · PostgreSQL

Plataforma educativa para Castilla y León

Explorar proyecto →
```

Al continuar haciendo scroll:

* el proyecto anterior se retrae;
* el siguiente aparece;
* las imágenes pueden escalar;
* metadata puede revelarse;
* el contenido puede desplazarse;
* debe existir sensación de profundidad.

Preferir:

* sticky;
* scroll progress;
* scale;
* opacity;
* blur muy sutil;
* parallax;
* clipping;
* máscaras;
* transformaciones.

No utilizar:

* animaciones agresivas;
* giros 3D innecesarios;
* efectos que dificulten leer;
* scroll hijacking.

El usuario debe mantener siempre sensación de control.

---

# 17. PROYECTOS PRINCIPALES

## PROJECT 01 — EDUFINDER CYL

Nombre:

**EduFinder CYL**

Descripción:

> Plataforma web para descubrir, comparar y explorar centros educativos y oferta de Formación Profesional en Castilla y León.

Características:

* datos públicos;
* buscador;
* filtros;
* geolocalización;
* comparación;
* favoritos;
* historial;
* recomendaciones de FP;
* PWA.

Tecnologías:

* Next.js
* TypeScript
* PHP
* Laravel
* PostgreSQL
* REST API
* Vercel
* Render

URL:

https://edufinder-cyl.vercel.app

Este es uno de los proyectos más importantes de Mario.

No presentarlo como simple TFG.

Presentarlo como producto desarrollado de extremo a extremo.

---

# 18. PROJECT 02 — PLANCINE

Nombre:

**PlanCine**

Descripción conceptual:

> Aplicación web para descubrir películas y decidir qué ver de forma rápida y sencilla.

Debe presentarse como:

**producto actual / nueva etapa de construcción.**

No inventar funcionalidades.

El stack definitivo debe extraerse del proyecto real.

NO escribir tecnologías hasta comprobarlas.

Cuando esté disponible:

* demo;
* GitHub si procede;
* capturas;
* funcionalidades;
* arquitectura;

actualizar la case study.

---

# 19. PROJECT 03 — FANTASY XI ASSISTANT

Nombre:

**Fantasy XI Assistant**

Descripción:

> Aplicación web para analizar plantillas de fútbol fantasy y generar alineaciones mediante procesamiento de datos.

Características:

* scraping;
* actualización de datos;
* normalización;
* Pandas;
* algoritmo de selección del XI;
* restricciones tácticas;
* interfaz Streamlit;
* exportación PDF.

Tecnologías:

* Python
* Streamlit
* Pandas
* Requests
* BeautifulSoup
* Selenium
* JavaScript
* HTML/CSS
* Git

GitHub:

https://github.com/mariotc1/fantasyHelper

Demo:

https://xi-fantasy.streamlit.app

---

# 20. PROJECT 04 — POMODOROPROAPP

Nombre:

**PomodoroProApp**

Descripción:

> Aplicación de productividad para iOS basada en la técnica Pomodoro, desarrollada como producto independiente.

Características:

* SwiftUI;
* MVVM;
* sesiones de foco;
* rachas;
* trofeos;
* estadísticas;
* persistencia local;
* Firebase;
* TestFlight;
* landing.

Tecnologías:

* Swift
* SwiftUI
* MVVM
* Firebase
* UserDefaults
* Git

Web:

https://pomodoroproapp.site

IMPORTANTE:

Este proyecto no debe dominar la identidad del portfolio.

Es una pieza histórica que demuestra experiencia en mobile y producto.

---

# 21. CASE STUDY TEMPLATE

Cada proyecto tendrá página propia.

Estructura:

```text
Hero
↓
Project Overview
↓
Problem
↓
Solution
↓
My Role
↓
Key Features
↓
Architecture
↓
Technology
↓
Visual Showcase
↓
Technical Decisions
↓
Outcome / Current State
↓
Links
↓
Next Project
```

No rellenar todas las secciones artificialmente.

Si un proyecto no tiene una arquitectura interesante, no inventar una.

Si no existen métricas fiables, no inventarlas.

---

# 22. PROJECT HERO

Debe mostrar:

* número de proyecto;
* nombre;
* descripción;
* stack;
* hero image;
* CTA principal;
* GitHub si existe.

Ejemplo:

```text
01

EduFinder CYL

Discover education across Castilla y León.

Next.js · Laravel · PostgreSQL

[Ver producto]
[GitHub]
```

---

# 23. PROJECT VISUALS

Las imágenes deben ser protagonistas.

Utilizar:

* `next/image`;
* lazy loading cuando corresponda;
* tamaños adecuados;
* `sizes`;
* WebP/AVIF cuando sea apropiado;
* aspect ratios definidos;
* evitar CLS.

No utilizar imágenes gigantes sin optimización.

Next.js proporciona optimización automática de imágenes y fuentes, por lo que aprovecharla correctamente.

---

# 24. STACK

Sección:

**Stack**

No hacer una nube caótica de logos.

Separar visualmente:

### Backend

Python
Flask
Laravel
PHP
REST APIs

### Frontend

TypeScript
JavaScript
Next.js
React
HTML
CSS

### Data & Automation

Pandas
Selenium
OpenCV

### Mobile & Desktop

Swift
SwiftUI
Java
PyQt

### Data & Infrastructure

PostgreSQL
MySQL
SQLite
Git
GitHub
Vercel
Render

Utilizar iconos oficiales o Simple Icons.

No descargar iconos aleatorios de Google Images.

Los iconos deben compartir proporción, escala y tratamiento visual.

---

# 25. EXPERIENCE

No duplicar LinkedIn.

Mostrar una versión editorial compacta:

### Proxima Systems

Software Developer — Python

2026 — Actualidad

Visión artificial · Automatización · Gemelos digitales

### db Inmuebles Property Manager

Python Developer — Freelance

2025

Automatización · Desktop · Python

### Serbatic

Backend Developer — Prácticas

2025

Python · NLP · Procesamiento documental

CTA:

**Ver trayectoria completa en LinkedIn**

---

# 26. CONTACT

Debe ser una sección memorable pero limpia.

Título:

**Construyamos algo.**

Texto:

> Si tienes una idea, proyecto o quieres hablar sobre una oportunidad profesional, escríbeme.

CTAs:

**WhatsApp**

**Email**

Secundarios:

**LinkedIn**

**GitHub**

Los enlaces reales serán proporcionados por Mario.

NO inventar números, emails o URLs.

No mostrar el número de teléfono directamente si Mario prefiere protegerlo.

Puede utilizarse un enlace WhatsApp.

---

# 27. FOOTER

Minimalista.

Debe incluir:

**Mario Tomé Core**

**Dream Big**

Links:

* LinkedIn
* GitHub
* Email

Copyright actual.

No añadir enlaces inútiles.

---

# 28. RESPONSIVE

La experiencia debe diseñarse desde el principio para:

* móvil;
* tablet;
* laptop;
* desktop;
* pantallas ultrawide.

NO construir primero desktop y "hacer responsive después".

Los proyectos y animaciones deben tener variantes específicas para móvil.

En móvil:

* reducir complejidad;
* eliminar hover-only interactions;
* reducir parallax;
* reducir duración de animaciones;
* simplificar sticky layouts si perjudican UX;
* priorizar legibilidad.

No intentar replicar exactamente la experiencia desktop.

---

# 29. ACCESSIBILITY

Debe cumplir buenas prácticas reales.

Obligatorio:

* HTML semántico;
* headings jerárquicos;
* labels;
* focus states;
* navegación por teclado;
* botones accesibles;
* enlaces con nombres claros;
* alt text real;
* contraste suficiente;
* no depender únicamente de color;
* `prefers-reduced-motion`.

Si el usuario tiene activado Reduced Motion:

* eliminar parallax no esencial;
* reducir transformaciones;
* evitar grandes desplazamientos;
* reducir timelines;
* mantener transiciones mínimas.

La preferencia `prefers-reduced-motion` debe respetarse explícitamente.

---

# 30. PERFORMANCE

Objetivo:

Portfolio visualmente avanzado pero técnicamente rápido.

Evitar:

* JavaScript innecesario;
* librerías duplicadas;
* imágenes gigantes;
* animaciones permanentes;
* WebGL sin necesidad;
* componentes client-side innecesarios.

Preferir Server Components siempre que sea posible.

Utilizar Client Components solamente cuando haya interacción.

Revisar:

* LCP;
* CLS;
* INP;
* tamaño de JS;
* imágenes;
* fuentes;
* hydration.

El hecho de utilizar animaciones premium NO justifica una web lenta.

---

# 31. SEO

El portfolio debe posicionar:

**Mario Tomé Core**

y términos relacionados con:

* software developer;
* Python developer;
* backend developer;
* Python backend;
* web development;
* software development;
* Valladolid;
* Spain.

No hacer keyword stuffing.

Configurar:

* title;
* description;
* canonical;
* Open Graph;
* Twitter/X metadata;
* favicon;
* sitemap;
* robots;
* structured data cuando corresponda.

Crear metadata específica para cada proyecto.

Ejemplo conceptual:

```text
Mario Tomé Core | Python Backend Developer & Software Developer
```

Cada case study:

```text
EduFinder CYL | Mario Tomé Core
```

etc.

---

# 32. STRUCTURED DATA

Implementar Schema.org cuando aporte valor.

Principalmente:

* Person;
* WebSite;
* CreativeWork / SoftwareApplication para proyectos cuando sea apropiado.

No introducir schema falso.

No inventar organizaciones, premios, métricas o relaciones.

---

# 33. SOCIAL PREVIEWS

Crear Open Graph visual coherente con el branding.

La preview debe mantener:

* azul degradado;
* blanco;
* Mario Tomé Core;
* Dream Big;
* título de proyecto cuando corresponda.

Utilizar las capacidades de metadata de Next.js.

---

# 34. ASSETS

El agente NO debe bloquear el desarrollo esperando assets.

Debe implementar primero con:

* placeholders estructurales;
* ratios correctos;
* nombres de archivos claros;
* componentes preparados.

Después debe finalizar el desarrollo indicando exactamente qué assets necesita Mario.

Crear una lista final:

```text
ASSETS_REQUIRED.md
```

con:

* nombre;
* formato;
* resolución recomendada;
* relación de aspecto;
* dónde se utiliza;
* prioridad;
* ejemplo de contenido esperado.

Assets previsibles:

* foto profesional;
* fondo/gradiente de marca;
* tipografía personalizada;
* letras/títulos Dream Big si fueran necesarias;
* screenshots de EduFinder;
* screenshots de PlanCine;
* screenshots de Fantasy XI;
* screenshots de PomodoroProApp;
* logos;
* mockups;
* favicon;
* OG image.

---

# 35. TIPOGRAFÍA PERSONALIZADA

Crear inicialmente una integración preparada para:

```text
/public/fonts/
```

o una ubicación equivalente.

No asumir nombre de archivo.

Usar variables:

```text
--font-brand
--font-sans
```

La tipografía personalizada debe estar completamente aislada del sistema tipográfico general.

Cuando Mario proporcione el archivo:

* incorporarlo;
* probar pesos;
* comprobar caracteres;
* revisar rendering;
* comprobar CLS;
* ajustar line-height;
* ajustar letter-spacing.

---

# 36. DESIGN TOKENS

Crear un sistema centralizado.

No dispersar valores mágicos por todo el proyecto.

Centralizar:

* colores;
* spacing;
* radii;
* shadows;
* blur;
* typography;
* motion durations;
* easing;
* breakpoints.

Ejemplo conceptual:

```text
motion-fast
motion-normal
motion-slow

ease-standard
ease-emphasized
ease-spring
```

Todo el sitio debe compartir la misma física.

---

# 37. MOTION PRINCIPLES

Definir:

### Entrance

Suave.

### Hover

Pequeño.

### Scroll

Profundo pero controlado.

### CTA

Feedback inmediato.

### Project transitions

Cinemáticas.

### Page transitions

Muy ligeras.

No hacer:

* bounce excesivo;
* elasticidad infantil;
* flashing;
* texto saltando constantemente;
* elementos que persiguen el cursor por toda la página;
* movimiento continuo sin interacción.

---

# 38. HOVER

Desktop puede utilizar:

* magnetic button sutil;
* image scale 1.01–1.03;
* border illumination;
* metadata reveal;
* cursor-follow muy pequeño si aporta.

No utilizar cursor custom invasivo por defecto.

Si se implementa:

* debe poder desactivarse;
* no debe afectar interacción;
* no debe romper touch;
* no debe alterar accesibilidad.

---

# 39. PROJECT SCROLL EXPERIENCE

Esta es una de las partes prioritarias.

Construir una sección de proyectos basada en:

**sticky storytelling.**

Cada proyecto debe tener una escena.

Conceptualmente:

```text
┌────────────────────────────────────┐
│                                    │
│ PROJECT 01                         │
│                                    │
│ EduFinder CYL                      │
│                                    │
│        ┌───────────────────┐       │
│        │                   │       │
│        │   PRODUCT         │       │
│        │   PREVIEW         │       │
│        │                   │       │
│        └───────────────────┘       │
│                                    │
│ Next.js · Laravel · PostgreSQL     │
│                                    │
└────────────────────────────────────┘
```

Durante scroll:

* preview entra;
* escala;
* metadata aparece;
* título cambia de posición;
* siguiente proyecto empieza a invadir escena;
* proyecto anterior pierde prominencia;
* transición continua.

Debe sentirse como una presentación de producto.

No como una lista de cards.

---

# 40. NO COPIAR REFERENCIAS

Las referencias externas son únicamente inspiración técnica.

Especialmente:

* Aceternity UI;
* Magic UI;
* Apple;
* Fey;
* Linear;
* Vercel;
* Stripe.

No copiar identidades visuales.

No copiar layouts completos.

No copiar textos.

No replicar una web existente.

Crear una identidad propia.

---

# 41. CONTENT MODEL

Los proyectos deben vivir en datos estructurados.

No duplicar contenido manualmente en cada página.

Crear un modelo equivalente a:

```ts
Project {
  slug
  number
  title
  shortDescription
  description
  category
  year
  technologies[]
  image
  gallery[]
  liveUrl?
  githubUrl?
  featured
  role
  problem?
  solution?
  features[]
  architecture?
  decisions[]
  outcome?
}
```

Adaptarlo a las necesidades reales.

Esto permitirá añadir futuros proyectos sin rehacer componentes.

---

# 42. COMPONENT ARCHITECTURE

Crear componentes reutilizables.

Ejemplo:

```text
components/
├── navigation/
├── hero/
├── about/
├── projects/
│   ├── ProjectShowcase
│   ├── ProjectPreview
│   ├── ProjectMeta
│   └── ProjectTransition
├── stack/
├── experience/
├── contact/
├── motion/
├── ui/
└── layout/
```

No crear un único componente gigantesco `page.tsx`.

No crear 100 componentes inútiles.

Aplicar criterio.

---

# 43. CLIENT / SERVER

Preferir Server Components.

Client Components sólo para:

* Motion;
* GSAP;
* interacción;
* navegación dinámica;
* elementos que necesitan browser APIs.

No marcar toda la aplicación como `"use client"`.

---

# 44. CODE QUALITY

Aplicar:

* TypeScript estricto;
* interfaces/types claros;
* componentes pequeños;
* funciones puras cuando sea posible;
* naming descriptivo;
* sin duplicación;
* sin código muerto;
* sin comentarios obvios;
* comentarios solamente para decisiones complejas;
* sin `any` salvo justificación;
* sin `@ts-ignore` salvo justificación excepcional;
* sin hacks.

---

# 45. ERROR HANDLING

Implementar correctamente:

* not-found para proyectos inexistentes;
* estados de carga cuando sean necesarios;
* imágenes fallback;
* links externos seguros;
* errores de assets;
* errores de navegación.

---

# 46. TESTING

No necesito una suite absurda.

Pero sí:

* lint;
* typecheck;
* build;
* smoke tests de navegación;
* comprobación de rutas;
* comprobación de enlaces;
* responsive básico.

Si utilizas Playwright, crear pruebas mínimas para:

* home;
* navegación;
* project route;
* CTAs;
* contacto.

---

# 47. QA VISUAL

Antes de considerar el proyecto terminado:

Revisar:

### Desktop

* 1440px
* 1280px
* 1920px

### Tablet

* 768px
* 1024px

### Mobile

* 390px
* 430px

Comprobar:

* overflow;
* sticky;
* scroll;
* animaciones;
* imágenes;
* tipografía;
* contraste;
* botones;
* navbar;
* project transitions.

---

# 48. SEO QA

Comprobar:

* title;
* description;
* canonical;
* OG;
* robots;
* sitemap;
* favicon;
* headings;
* semantic HTML;
* alt;
* URLs limpias;
* metadata por proyecto.

---

# 49. PERFORMANCE QA

Ejecutar producción y revisar:

* build;
* bundle;
* Lighthouse;
* imágenes;
* fonts;
* hydration;
* client components;
* animations.

No considerar terminado sólo porque `npm run dev` funcione.

---

# 50. DEPLOYMENT

Preparar para:

**Vercel**

El portfolio debe funcionar correctamente en producción.

No depender de:

* localhost;
* variables inexistentes;
* APIs locales;
* assets externos frágiles.

---

# 51. DOCUMENTACIÓN

Crear:

```text
README.md
ASSETS_REQUIRED.md
DESIGN_SYSTEM.md
```

README:

* proyecto;
* stack;
* instalación;
* scripts;
* arquitectura;
* deployment.

ASSETS_REQUIRED:

* assets pendientes;
* formatos;
* tamaños;
* ubicación.

DESIGN_SYSTEM:

* colores;
* tipografía;
* spacing;
* motion;
* componentes principales.

---

# 52. WORKFLOW DEL AGENTE

Trabaja por fases.

## FASE 1 — AUDITORÍA

Antes de escribir código:

* inspecciona el repositorio;
* identifica estructura;
* revisa package.json;
* comprueba Node;
* detecta dependencias existentes;
* comprueba assets;
* comprueba configuración.

Si el proyecto está vacío:

crear arquitectura desde cero.

No empezar a instalar librerías sin entender el estado actual.

---

## FASE 2 — DESIGN SYSTEM

Crear:

* colores;
* typography;
* spacing;
* radii;
* shadows;
* motion tokens;
* breakpoints.

---

## FASE 3 — FOUNDATION

Implementar:

* Next.js;
* App Router;
* layout;
* fonts;
* global CSS;
* metadata;
* navigation;
* responsive foundation.

---

## FASE 4 — HERO + ABOUT

Construir:

* hero;
* about;
* CTAs;
* social links.

---

## FASE 5 — PROJECT EXPERIENCE

Construir primero:

**EduFinder**

porque será la referencia visual.

Después:

* PlanCine;
* Fantasy;
* Pomodoro.

---

## FASE 6 — CASE STUDIES

Crear rutas dinámicas.

---

## FASE 7 — STACK + EXPERIENCE + CONTACT

Completar narrativa.

---

## FASE 8 — MOTION POLISH

Una vez estable:

* GSAP;
* ScrollTrigger;
* Motion;
* Lenis si procede;
* microinteractions.

NO empezar con animaciones antes de tener estructura sólida.

---

## FASE 9 — PERFORMANCE + ACCESSIBILITY

Optimizar.

---

## FASE 10 — QA

Ejecutar:

* lint;
* typecheck;
* build;
* tests;
* visual QA.

---

# 53. CRITERIO DE "PREMIUM"

No consideres premium:

* más gradientes;
* más blur;
* más glow;
* más animaciones;
* más 3D;
* más componentes.

Considera premium:

* spacing perfecto;
* jerarquía;
* consistencia;
* motion intencional;
* imágenes bien tratadas;
* tipografía;
* microinteracciones;
* contenido conciso;
* ausencia de ruido;
* rendimiento.

---

# 54. CRITERIO DE "DIFERENTE"

El portfolio debe ser diferente por:

* narrativa;
* branding;
* presentación de proyectos;
* scroll storytelling;
* tipografía personalizada;
* dirección de arte;
* integración de producto.

No simplemente por utilizar efectos extravagantes.

---

# 55. INFORMACIÓN PROFESIONAL FIJA

Mario:

**Nombre:** Mario Tomé Core

**Ubicación:** Valladolid, Castilla y León, España

**Rol:** Software Developer

**Especialización:** Python Backend

**Áreas:** Web, Mobile, Desktop, APIs, Automation, Data

Formación:

* CFGS Desarrollo de Aplicaciones Web — IES Galileo
* CFGS Desarrollo de Aplicaciones Multiplataforma — Colegio San Viator
* Bachillerato Ciencias Tecnológicas — IES Delicias

Experiencia profesional:

### Proxima Systems

Software Developer — Python
2026 — actualidad

Áreas:

* automatización industrial;
* visión artificial;
* simulación;
* gemelos digitales;
* Python;
* PyQt6;
* OpenCV;
* PyTorch;
* Streamlit.

### db Inmuebles Property Manager

Python Developer — Freelance
2025

Áreas:

* automatización;
* aplicaciones desktop;
* Python.

### Serbatic

Backend Developer — Prácticas
2025

Áreas:

* Python;
* NLP;
* procesamiento documental.

---

# 56. PERSONALIDAD

La web debe sentirse como una persona real.

Mario quiere transmitir:

* disciplina;
* ambición;
* capacidad técnica;
* construcción;
* aprendizaje;
* profesionalidad;
* cercanía.

No utilizar frases corporativas vacías.

Evitar:

> "We empower digital transformation..."

> "Crafting innovative solutions..."

> "Passionate developer with a passion..."

No.

El lenguaje debe ser humano, directo y preciso.

---

# 57. PRINCIPIO "BUILD, DON'T CLAIM"

La web nunca debe decir:

> "Soy un desarrollador excepcional."

Debe demostrarlo.

Nunca:

> "Experto en..."

salvo que sea estrictamente justificable.

Preferir:

> "Construí..."

> "Desarrollé..."

> "Implementé..."

> "Diseñé..."

> "Integré..."

---

# 58. CONTACT STRATEGY

La web debe facilitar dos conversiones:

### Hiring

Una empresa quiere contratar a Mario.

Debe poder:

* entender rápidamente qué hace;
* ver experiencia;
* ver proyectos;
* contactar.

### Freelance

Un potencial cliente quiere desarrollar algo.

Debe poder:

* ver productos;
* entender capacidad full-stack;
* comprobar calidad;
* contactar directamente.

No crear funnels complejos.

---

# 59. ANALYTICS

No añadir analytics invasivo por defecto.

Si se añade posteriormente:

* privacy-aware;
* mínimo;
* no bloquear render;
* documentado.

---

# 60. SEGURIDAD

No exponer:

* emails internos;
* credenciales;
* API keys;
* variables privadas;
* información profesional confidencial;
* URLs internas de Proxima Systems.

Sólo utilizar información pública y assets proporcionados.

---

# 61. PROYECTOS PROFESIONALES

Los proyectos realizados en Proxima Systems deben tratarse con especial cuidado.

No incluir:

* código propietario;
* screenshots confidenciales;
* nombres internos;
* URLs privadas;
* datos industriales sensibles;
* información de clientes no pública.

Si se necesita una representación visual, usar una ilustración o mockup genérico.

---

# 62. FINAL CTA

El cierre debe recuperar el branding.

Conceptualmente:

**Dream Big**

y debajo:

**Construyamos algo.**

Debe ser uno de los momentos visuales más fuertes del sitio.

Pero sin convertirse en una pantalla excesivamente cargada.

---

# 63. ANTI-PATTERNS — PROHIBIDO

No hacer:

* portfolio template genérico;
* navbar gigante;
* hero con 15 badges;
* 20 tecnologías encima del fold;
* grids infinitas;
* glow excesivo;
* neon;
* cyberpunk;
* cursor extravagante;
* Three.js decorativo;
* partículas permanentes;
* texto animado constantemente;
* loading screen innecesario;
* splash screen de 5 segundos;
* scroll hijacking;
* música;
* autoplay;
* modal de bienvenida;
* cookie banner propio si no es necesario;
* formularios complejos;
* backend innecesario;
* base de datos innecesaria;
* CMS innecesario.

---

# 64. DEFINICIÓN DE DONE

El proyecto sólo se considera terminado cuando:

* [ ] Home completa
* [ ] Branding integrado
* [ ] Tipografía preparada
* [ ] Hero
* [ ] About
* [ ] Selected Work
* [ ] 4 proyectos
* [ ] Case studies
* [ ] Stack
* [ ] Experience
* [ ] Contact
* [ ] Footer
* [ ] Responsive
* [ ] Accessibility
* [ ] Reduced Motion
* [ ] SEO
* [ ] OG
* [ ] Sitemap
* [ ] Robots
* [ ] Optimización imágenes
* [ ] Optimización fonts
* [ ] TypeScript limpio
* [ ] ESLint limpio
* [ ] Production build correcto
* [ ] Links comprobados
* [ ] Performance revisada
* [ ] QA desktop
* [ ] QA mobile
* [ ] Documentación
* [ ] Assets pendientes documentados

---

# 65. ÚLTIMA REGLA

No confundas:

**"hacer algo impresionante"**

con:

**"meter más efectos".**

La web debe conseguir que una persona piense:

> "Este desarrollador cuida lo que construye."

Ese es el objetivo.

El portfolio debe ser en sí mismo una demostración del estándar de calidad de Mario.

Si una decisión técnica o visual mejora el resultado, tómala.

Si una decisión sólo hace que la web sea más compleja, elimínala.

---

# 66. AL FINAL DEL DESARROLLO

Cuando el proyecto esté técnicamente completo, NO inventes los assets que falten.

En ese momento debes generar un informe final llamado:

```text
ASSETS_REQUIRED.md
```

indicando exactamente qué necesita Mario para completar el portfolio.

Para cada asset:

```text
Nombre
Tipo
Formato recomendado
Resolución recomendada
Ubicación
Sección
Prioridad
Motivo
```

Ejemplo:

```text
Mario profile photo
PNG/WebP
1600x2000+
About section
High
Professional portrait for personal introduction
```

También debes indicar si necesitas:

* fuente personalizada;
* archivos de letras;
* screenshots;
* mockups;
* logos;
* fotografías;
* favicon;
* OG image;
* fondos.

Después de generar este informe, el proyecto debe quedar preparado para que Mario simplemente proporcione los assets y se sustituyan sin tener que rehacer la arquitectura.

---

# 67. PRIMERA ACCIÓN

Antes de implementar:

1. Audita el proyecto.
2. Audita los assets existentes.
3. Audita dependencias.
4. Comprueba versiones.
5. Propón internamente la arquitectura.
6. Comprueba que el stack elegido es compatible.
7. Después empieza la implementación por fases.

No pidas confirmación para decisiones normales de ingeniería.

Toma decisiones razonables.

Sólo pregunta a Mario cuando falte información que pueda cambiar materialmente el producto.

El resultado final debe ser:

**un portfolio personal premium, rápido, accesible, responsive, mantenible, SEO-ready y visualmente distintivo que funcione como el núcleo digital de la marca personal de Mario Tomé Core.**
