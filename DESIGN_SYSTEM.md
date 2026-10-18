# Design System — Mario Tomé Core

Sistema de diseño centralizado del portfolio. Todo valor visual vive aquí
(o en `app/globals.css` / `lib/motion-tokens.ts`, que son la fuente de verdad);
no hay valores mágicos sueltos por los componentes.

## Color

Definido como tokens CSS en `app/globals.css` (`@theme`), generados a partir del
degradado de marca real de Mario (`assets/fondo.jpg`), no inventados:

| Token | Valor | Uso |
|---|---|---|
| `--color-background` | `#04070d` | Fondo base del sitio |
| `--color-background-secondary` | `#070d1a` | Fondo de secciones alternas (Stack, bloques secundarios) |
| `--color-surface` | `#0b1424` | Tarjetas, pills, previews de proyecto |
| `--color-surface-elevated` | `#111e33` | Superficies elevadas (hover, modales futuros) |
| `--color-text-primary` | `#f4f6fb` | Texto principal |
| `--color-text-secondary` | `#aebbd1` | Texto de apoyo |
| `--color-text-muted` | `#64738c` | Metadata, timestamps, texto terciario |
| `--color-accent` | `#3684e6` | Acento interactivo (botones, enlaces activos) |
| `--color-accent-strong` | `#0b60ba` | Azul de marca real (muestreado del asset), degradados |
| `--color-accent-soft` | `#7db0ee` | Texto de acento sobre fondo oscuro |
| `--color-border` | `#18233a` | Bordes y separadores |

Cada token genera automáticamente utilidades Tailwind (`bg-background`,
`text-text-secondary`, `border-border`, etc.) vía el motor de temas de
Tailwind CSS 4 — no hay clases arbitrarias con colores hardcodeados.

`.brand-gradient-surface` (en `globals.css`) es el único lugar donde se usa el
asset `fondo.jpg` como imagen de fondo (Hero y Contact/CTA final) — el resto
del sitio es plano y oscuro a propósito, para no saturar.

## Tipografía

- `--font-sans` → Inter (`next/font/google`), cuerpo de texto, navegación, UI.
- `--font-brand` → marcador de posición **Bricolage Grotesque** hasta recibir
  la tipografía real "Dream Big" (ver `ASSETS_REQUIRED.md`). Se usa solo para:
  nombre "Mario Tomé Core" y títulos de sección. Nunca en párrafos, navegación,
  botones pequeños o metadata. El CTA final **no** usa la fuente: encabeza con
  el wordmark dibujado a mano `Construyamos algo juntos` (imagen).

- Los **títulos de proyecto** (home y case studies) usan los wordmarks dibujados
  a mano de Mario (`public/images/projects/<slug>/title.webp`) a través de
  `components/projects/ProjectTitleMark.tsx`, dentro de su `<h1>`/`<h3>` real y
  con el título como `alt`. Las imágenes se procesan sin fondo, recortadas al
  trazo y **normalizadas a la misma altura** para que se lean como texto. El
  mismo tratamiento (limpieza de alfa, recorte al trazo) se aplica a los wordmarks
  de `public/images/wordmarks/` — marca del Hero, "Descubre mis redes" del About
  y el titular del CTA final.

## Motion

Tokens en `:root` (`globals.css`) y su espejo en JS (`lib/motion-tokens.ts`
para Motion, valores directos en GSAP):

| Token | Valor | Uso |
|---|---|---|
| `--motion-fast` | 150ms | hover, feedback inmediato |
| `--motion-normal` | 350ms | transiciones de navbar, menú móvil |
| `--motion-slow` | 650ms | entradas de contenido (Hero, Reveal) |
| `--ease-standard` | `cubic-bezier(.4,0,.2,1)` | transiciones de UI generales |
| `--ease-emphasized` | `cubic-bezier(.2,0,0,1)` | entradas de contenido |
| `--ease-spring` | `cubic-bezier(.34,1.4,.64,1)` | botón magnético |

**División de responsabilidades (brief, sección 8):**
- **Motion** (`motion/react`) → microinteracciones: hover, botón magnético,
  reveal de contenido al entrar en viewport, menú móvil.
- **Motion** (`motion/react`) → el showcase de proyectos
  (`components/projects/ProjectShowcase.tsx`) es un **carrusel de una
  diapositiva a la vez**: un track animado con `animate()` y un easing
  "expo-out" largo y suave (0.9 s) para que el paso entre proyectos se
  sienta premium, nunca un salto. Se navega con flechas, puntos, teclado
  (←/→) y arrastre (`drag="x"` con inercia controlada), mientras el scroll
  vertical de la página sigue su curso normal. La diapositiva activa se
  resalta con un fade + desplazamiento sutil y las inactivas bajan a
  `opacity` reducida. Las portadas de cada proyecto viven en
  `public/images/projects/<slug>/cover.webp` (16:9, WebP).
- **GSAP + ScrollTrigger** → reservado para storytelling de scroll. Hoy no
  hace pinning: solo aporta el ticker que sincroniza Lenis.
- **Lenis** → smooth scroll global, sincronizado con el ticker de GSAP. Las
  anclas internas (`#seccion`) no se dejan al navegador: `lib/smooth-scroll.ts`
  expone el instance activo y `scrollToSection()` / `scrollToTop()` para que el
  nav, el logotipo y los CTAs hagan un desplazamiento eased. El destino se
  compensa con la altura real de la barra (`data-scroll-header`), así que
  ninguna sección queda tapada, sea cual sea el viewport. El nav le pasa a
  Lenis un **número absoluto** (no un elemento) y añade su propio margen
  `SCROLL_GAP`; si le pasara el elemento, Lenis restaría por su cuenta el
  `scroll-margin-top` de la sección y el ancla aterrizaría una sección antes.
  Para que una carga directa con `#hash` (enlace compartido, o volver desde una
  página de proyecto) aterrice igual, `globals.css` define la misma holgura en
  CSS (`--header-clearance`) y la aplica con `section[id] { scroll-margin-top }`.

### Reduced motion

Reduced motion (brief, sección 29): `MotionConfig reducedMotion="user"`
(en `SmoothScrollProvider`) neutraliza automáticamente todas las animaciones
de Motion cuando el sistema operativo tiene activado "reducir movimiento".
Lenis y el scrub de GSAP se desactivan explícitamente vía
`useReducedMotion()` (media query `prefers-reduced-motion`), y el carrusel de
proyectos pasa a salto instantáneo sin gliding, manteniéndose navegable.

## Navegación

El header es una **barra fija a todo el ancho** (`components/navigation/Navbar.tsx`):
logo MTC a la izquierda, enlaces en el centro-derecha y hamburguesa en móvil
(por debajo de `lg`, 1024 px). Es fixed y se mide a sí misma con
`data-scroll-header` (puesto en la barra, no en el `<header>`, que también
contiene el panel móvil). Arriba del todo es transparente sobre el Hero; al
hacer scroll (`scrolled`) o al abrir el menú gana fondo `bg-background/90` con
`backdrop-blur-xl` y una línea inferior de 1 px `border-white/[0.07]`, de modo
que el contenido no se ve a través con un blur sucio.

- **Orden = orden real de la página**: About → Work → Stack → Experience →
  Contact. Nunca un orden inventado que desoriente.
- **Scrollspy**: se resalta la sección activa (texto `accent-soft` + píldora
  de acento) mediante un indicador que se desliza entre enlaces
  (`layoutId="nav-active"`). Fuera de secciones (en el Hero) no hay resalte.
  El umbral es exactamente el punto donde aterrizan las anclas
  (`getHeaderBottom() + SCROLL_GAP + 6`), y al llegar al fondo de la página se
  fuerza la última sección (Contact), que nunca alcanzaría el umbral.
- **Anclas eased**: los enlaces, el logotipo (→ arriba) y los CTAs usan
  `scrollToSection()` / `scrollToTop()` de `lib/smooth-scroll.ts`, no el salto
  nativo del navegador.
- **Móvil**: menú de cristal con entrada escalonada, punto de sección activa y
  bloqueo real del scroll (Lenis se detiene, no solo `body { overflow }`). Al
  pulsar un enlace se cierra el menú y se reanuda Lenis **de forma síncrona**
  antes de desplazar; si no, `scrollTo` se saldría al estar Lenis parado y el
  toque no haría nada.
- **Safari**: `overflow-x: clip` en `html`/`body` evita que un desbordamiento
  decorativo descoloque el `fixed`, y `-webkit-backdrop-filter` va incluido.

## Spacing y radios

- Contenedor: `max-w-7xl` con padding responsive (`px-6 sm:px-8 lg:px-12`),
  vía `components/ui/Container.tsx` — un único componente para todo el sitio.
- Radios: `--radius-sm: 8px`, `--radius-md: 14px`, `--radius-lg: 22px`
  (`globals.css`); en componentes se usan las utilidades Tailwind equivalentes
  (`rounded-lg`, `rounded-full` para pills/botones).
- Ritmo vertical de secciones: `py-28 sm:py-36` como estándar.

## Componentes base

- `ui/Container`, `ui/SectionHeading`, `ui/Button`, `ui/BrandIconGlyph`
- `motion/Reveal` (fade + slide-in al entrar en viewport), `motion/MagneticButton`
- `stack/StackSection` — tarjetas por grupo (una por dominio) con el mismo
  lenguaje físico que las portadas de proyecto: borde `border-border`, borde
  superior iluminado (hairline), glow de marca al hover y chips como tokens.
  Sin frase descriptiva: el título de la sección ya explica qué es. Ancho fijo
  por tarjeta con `flex-wrap justify-center`, de modo que una última fila
  incompleta (5 grupos en 3 columnas) queda centrada y no colgando a la
  izquierda — y aguanta si se añaden más grupos.
- `experience/ExperienceSection` — línea de tiempo (rail con degradado que se
  difumina) con un nodo por etapa; el rol actual se marca con nodo en acento +
  halo. Cada etapa es una tarjeta con el mismo lenguaje físico (borde, hairline,
  glow al hover), monograma de iniciales como logo ligero, rol, periodo y áreas
  como chips. Si `ExperienceItem.url` existe, el nombre de la empresa enlaza a su
  web pública (nunca URLs internas, ver brief). Cada empresa muestra su logo
  monocromo blanco (`public/images/companies/<slug>/logo.webp`, procesado a
  partir del original: fondo eliminado, forzado a blanco, recortado y
  normalizado) dentro de la placa oscura; si no hay logo, cae a las iniciales.
  Cierra con una línea compacta de **Formación** (solo DAW y DAM) para no añadir
  scroll: la experiencia práctica manda, la formación acompaña.
- `contact/ContactSection` — CTA final sobre `.brand-gradient-surface`. Encabeza
  con el wordmark dibujado a mano **"Construyamos algo juntos"**
  (`public/images/wordmarks/construyamos-algo-juntos.webp`) dentro de un `<h2>`
  real, con el texto como `alt` y `block h-auto w-full` (sin hueco de línea).
  Debajo, un mensaje **cercano y no imperativo** (evita "escríbeme") y las
  acciones (WhatsApp / Email) seguidas de LinkedIn y GitHub **ambos con icono**
  (WhatsApp usa el icono real de marca, `brandIcons.whatsapp`). Ocupa la vista
  completa (`min-h-[100svh]` + `items-center`) para leerse como una vista final
  propia y que no asome la sección anterior. Sin "Dream Big" ni etiquetas: el
  gancho es el propio wordmark.
- `layout/Footer` — **eliminado a propósito**. La página cierra con el CTA de
  Contact (a vista completa) en la home y con el bloque "Next project" en las
  fichas de proyecto, que ya son cierres fuertes; una línea extra de copyright +
  ubicación solo repetía información del Hero/About y diluía ese final.
- Iconografía de marcas tecnológicas: `lib/brand-icons.ts`, paths oficiales
  extraídos de Simple Icons (CC0) e incrustados como SVG propio — sin añadir
  la librería completa como dependencia de runtime. Iconografía funcional
  (flechas, menú, mail...) vía `lucide-react`.

## Contenido estructurado

- `lib/projects.ts` — modelo `Project` único; añadir un proyecto nuevo no
  requiere tocar componentes, solo un objeto más en el array.
- `lib/experience.ts`, `lib/stack.ts`, `lib/site-config.ts` — misma filosofía:
  datos separados de presentación.
