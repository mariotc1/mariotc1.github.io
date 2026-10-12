# Assets pendientes

El portfolio está funcionalmente completo y desplegable con lo que hay hoy en
`assets/` (fondo de marca, foto de perfil) más placeholders estructurales para
todo lo demás. Esta lista es lo que hace falta para que la identidad visual y
el contenido queden al 100% (nada de esto bloquea el desarrollo ni el deploy).

---

## 1. Tipografía / logotipos de marca ("Dream Big")

Aclarado: no existe (ni existirá por ahora) un archivo de fuente instalable —
el estilo "Dream Big" son **imágenes dibujadas a mano por Mario**, palabra por
palabra (como `nombre.png` con "Mario Tomé Core"). Esto cambia el enfoque:
en vez de una variable font para `--font-brand`, se integran **logotipos
puntuales** (PNG con fondo transparente) solo para los momentos de marca más
repetidos, y el resto de titulares se queda en tipografía real (accesible,
indexable) — no tiene sentido pedir un dibujo a mano por cada titular de
sección, y sustituir un `<h1>`/`<h2>` real por una imagen dañaría SEO y
accesibilidad.

- **Ya recibido:** `assets/branding/nombre-wordmark.png` ("Mario Tomé Core").
  ⚠️ **Con un problema:** el trazo tiene un canal alfa casi nulo (~1/255,
  prácticamente invisible) — el PNG es transparente pero el propio dibujo
  también lo es, así que hoy no se ve. Probablemente sea un fallo al
  exportarlo (opacidad del trazo a 0 en vez de 100). **Necesito que lo
  vuelvas a exportar con el trazo a opacidad completa** (color a tu elección;
  blanco o azul claro funcionarán mejor sobre el fondo oscuro del sitio) antes
  de poder integrarlo.
- **Siguiente prioridad:** un logotipo de **"Dream Big"** en el mismo estilo
  — es la frase de marca que más se repite (footer + CTA final de Contact) y
  el segundo elemento de identidad más importante después del nombre.
- **Recibidos también:** los wordmarks de los **4 títulos de proyecto**
  (`EduFinderCyL.png`, `PlanCine.png`, `XiFantasyAssistant.png`,
  `PomodoroProApp.png`), sin fondo. Procesados (recorte al trazo + altura
  normalizada) en `public/images/projects/<slug>/title.webp` e integrados ya en
  la home y en las case studies.
- **Formato:** PNG con fondo transparente (o SVG si el trazo se puede
  vectorizar), trazo a opacidad completa.
- **Resolución recomendada:** al menos 1200px de ancho para que no pixele en pantallas grandes/retina.
- **Ubicación en el proyecto:** `public/images/wordmarks/`
- **Dónde se usaría:** el nombre en el Hero (como acompañamiento visual del
  `<h1>` real, que se mantiene como texto por accesibilidad/SEO) y "Dream Big"
  en Contact/Footer.
- **Prioridad:** Alta (nombre, ya recibido pero con el fallo de opacidad) /
  Media ("Dream Big", pendiente de dibujar).

## 2. ✅ Portada de EduFinder CYL (recibida)

- **Recibido:** `Portadas Proyectos/EduFinder.jpeg` (3600×2016, 16:9) → optimizada
  a `public/images/projects/edufinder-cyl/cover.webp` (2048×1152, WebP) e
  integrada como preview en Selected Work y en la case study.
- **Pendiente (opcional):** 2–3 capturas adicionales para la galería interna del
  case study. Ubicación: `public/images/projects/edufinder-cyl/`. Prioridad: Media.

## 3. ✅ Portada de PlanCine (recibida)

- **Recibido:** `Portadas Proyectos/PlanCine.jpeg` (3600×2016, 16:9) → optimizada a
  `public/images/projects/plancine/cover.webp` (2048×1152, WebP).
- **Pendiente:** stack tecnológico definitivo, funcionalidades reales y (si
  procede) URL pública/GitHub, para completar la case study sin inventar datos.

## 4. ✅ Portada de Fantasy XI Assistant (recibida)

- **Recibido:** `Portadas Proyectos/FantasyAssistant.jpeg` (3586×2014, 16:9) →
  `public/images/projects/fantasy-xi-assistant/cover.webp` (2048×1152, WebP).
- **Pendiente (opcional):** 1 ejemplo del PDF exportado para la galería.
  Prioridad: Baja.

## 5. ✅ Portada de PomodoroProApp (recibida)

- **Recibido:** `Portadas Proyectos/PomodoroProApp.jpeg` (3592×2016, 16:9) →
  `public/images/projects/pomodoroapp/cover.webp` (2048×1152, WebP).
- **Pendiente (opcional):** capturas nativas de iPhone para la galería interna.
  Prioridad: Baja.

## 6. Foto de perfil en mayor resolución (opcional)

- **Formato:** JPEG/WebP
- **Resolución recomendada:** 1600×2000 o superior
- **Ubicación:** `public/images/profile.webp` (sustituye al actual)
- **Sección:** About
- **Prioridad:** Baja
- **Motivo:** la foto actual (`assets/foto-perfil.jpeg`, 911×1099) ya está integrada y se ve bien; una versión de mayor resolución solo mejora el margen de recorte en pantallas grandes.

## 7. Favicon / OG image definitivos (opcional)

- **Formato:** PNG/SVG
- **Ubicación:** sustituyen a `app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx`
- **Prioridad:** Baja
- **Motivo:** ahora mismo se generan automáticamente (monograma "M" en el degradado de marca) con `next/og`. Funcionan correctamente en producción; si Mario quiere un logo/isotipo propio, se sustituyen sin cambiar el resto del sitio.

## 8. Datos de contacto reales

✅ Resuelto — LinkedIn, email y WhatsApp ya están en `lib/site-config.ts` y
activos en Contact/Footer/About/Experience.

## 9. CV en PDF (opcional, no contemplado en el brief actual)

- **Formato:** PDF
- **Ubicación sugerida:** `public/Mario-Tome-Core-cv.pdf`
- **Prioridad:** Baja
- **Motivo:** no se incluyó ningún CTA de descarga de CV porque no está en el brief ni hay archivo disponible; si se quiere añadir, es una tarjeta más en Contact/About.
