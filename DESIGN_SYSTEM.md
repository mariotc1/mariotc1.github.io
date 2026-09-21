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
| `--color-background-secondary` | `#070d1a` | Fondo de secciones alternas (Stack, Footer) |
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
  nombre "Mario Tomé Core", títulos de sección, y el CTA final "Dream Big".
  Nunca en párrafos, navegación, botones pequeños o metadata.

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
- **GSAP + ScrollTrigger** → storytelling de scroll: el showcase de proyectos
  (`components/projects/ProjectShowcase.tsx`) usa `position: sticky` (CSS) para
  el apilado de paneles y ScrollTrigger con `scrub` para animar la entrada
  (escala del preview + fade de la metadata) dentro del rango de scroll de
  cada proyecto. Sin `pin` de GSAP: el sticky nativo ya resuelve el apilado,
  lo que degrada mejor sin JS y es más barato en móvil.
- **Lenis** → smooth scroll global, sincronizado con el ticker de GSAP.

**Reduced motion (brief, sección 29):** `MotionConfig reducedMotion="user"`
(en `SmoothScrollProvider`) neutraliza automáticamente todas las animaciones
de Motion cuando el sistema operativo tiene activado "reducir movimiento".
Lenis y el scrub de GSAP se desactivan explícitamente vía
`useReducedMotion()` (media query `prefers-reduced-motion`), dejando el
showcase de proyectos en su estado final estático pero perfectamente legible.

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
- Iconografía de marcas tecnológicas: `lib/brand-icons.ts`, paths oficiales
  extraídos de Simple Icons (CC0) e incrustados como SVG propio — sin añadir
  la librería completa como dependencia de runtime. Iconografía funcional
  (flechas, menú, mail...) vía `lucide-react`.

## Contenido estructurado

- `lib/projects.ts` — modelo `Project` único; añadir un proyecto nuevo no
  requiere tocar componentes, solo un objeto más en el array.
- `lib/experience.ts`, `lib/stack.ts`, `lib/site-config.ts` — misma filosofía:
  datos separados de presentación.
