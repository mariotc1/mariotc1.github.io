# mariotc1.github.io

Portfolio personal de **Mario Tomé Core** — Python Backend Developer & Software
Developer. Construido como marca personal digital, no como plantilla: ver
`CLAUDE.md` para el brief completo de producto/diseño y `DESIGN_SYSTEM.md`
para el sistema de diseño.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS 4
- [Motion](https://motion.dev) para microinteracciones
- GSAP + ScrollTrigger para el storytelling de scroll de "Selected Work"
- [Lenis](https://lenis.darkroom.engineering) para smooth scroll
- Lucide React (iconografía funcional) + iconos de marca propios extraídos de Simple Icons

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run typecheck
npm run build      # genera el export estático en ./out
```

No hay backend, base de datos ni variables de entorno: el sitio es 100%
estático (`output: "export"` en `next.config.ts`), pensado para GitHub Pages.

## Arquitectura

```
app/
  layout.tsx            Fuentes, metadata, JSON-LD, providers globales
  page.tsx               Home (Hero → About → Work → Stack → Experience → Contact)
  projects/[slug]/        Case study de cada proyecto (generateStaticParams)
  sitemap.ts, robots.ts   SEO
  icon.tsx, apple-icon.tsx, opengraph-image.tsx   Generados con next/og

components/
  hero/, about/, projects/, stack/, experience/, contact/   Secciones
  navigation/, layout/    Navbar, Footer, smooth scroll provider
  motion/                 Reveal, MagneticButton (Motion)
  ui/                     Container, Button, SectionHeading, BrandIconGlyph

lib/
  projects.ts, experience.ts, stack.ts, site-config.ts   Contenido estructurado
  brand-icons.ts          Paths SVG oficiales de marcas tecnológicas
  gsap.ts, motion-tokens.ts, use-reduced-motion.ts        Motion system
```

Añadir un proyecto nuevo = un objeto más en `lib/projects.ts`. No hace falta
tocar componentes ni crear páginas a mano (`generateStaticParams` las genera).

## Contenido pendiente

Ver **`ASSETS_REQUIRED.md`**: tipografía de marca real, screenshots de
producto y datos de contacto (LinkedIn, email, WhatsApp) están documentados
ahí con prioridad y ubicación exacta. El sitio funciona y se puede desplegar
sin ellos — los CTAs que dependen de un dato ausente se ocultan automáticamente
(`lib/site-config.ts`) en vez de mostrar enlaces falsos o rotos.

## Despliegue (GitHub Pages)

El workflow `.github/workflows/deploy.yml` construye el sitio y lo publica en
GitHub Pages en cada push a `main`, usando `actions/deploy-pages`.

Antes del primer despliegue, en **Settings → Pages** del repositorio,
selecciona **Source: GitHub Actions** (en vez de "Deploy from a branch").
El sitio quedará publicado en `https://mariotc1.github.io`.
