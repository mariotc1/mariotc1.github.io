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
- **Formato:** PNG con fondo transparente (o SVG si el trazo se puede
  vectorizar), trazo a opacidad completa.
- **Resolución recomendada:** al menos 1200px de ancho para que no pixele en pantallas grandes/retina.
- **Ubicación en el proyecto:** `public/images/wordmarks/`
- **Dónde se usaría:** el nombre en el Hero (como acompañamiento visual del
  `<h1>` real, que se mantiene como texto por accesibilidad/SEO) y "Dream Big"
  en Contact/Footer.
- **Prioridad:** Alta (nombre, ya recibido pero con el fallo de opacidad) /
  Media ("Dream Big", pendiente de dibujar).

## 2. Screenshots de EduFinder CYL

- **Formato:** PNG o WebP
- **Resolución recomendada:** 2400×1500 (o similar 16:10), más 2–3 capturas adicionales para la galería
- **Ubicación:** `public/images/projects/edufinder-cyl/`
- **Sección:** Selected Work (home) + case study `/projects/edufinder-cyl`
- **Prioridad:** Alta (es el proyecto ancla del portfolio)
- **Motivo:** actualmente se usa una tarjeta editorial de marcador de posición (gradiente + número + título) en vez de un pantallazo real del producto.

## 3. Screenshots / material de PlanCine

- **Formato:** PNG o WebP
- **Resolución recomendada:** 2400×1500
- **Ubicación:** `public/images/projects/plancine/`
- **Sección:** Selected Work + case study `/projects/plancine`
- **Prioridad:** Media
- **Motivo:** el proyecto está marcado como "en construcción" con descripción mínima a propósito, para no inventar stack ni funcionalidades no confirmadas. Cuando el producto avance, necesito: stack tecnológico definitivo, funcionalidades reales, capturas y (si procede) URL pública/GitHub.

## 4. Screenshots de Fantasy XI Assistant

- **Formato:** PNG o WebP
- **Resolución recomendada:** 2400×1500 (interfaz Streamlit) + 1 ejemplo del PDF exportado
- **Ubicación:** `public/images/projects/fantasy-xi-assistant/`
- **Sección:** case study `/projects/fantasy-xi-assistant`
- **Prioridad:** Media

## 5. Screenshots de PomodoroProApp

- **Formato:** PNG o WebP (capturas reales de iPhone)
- **Resolución recomendada:** capturas nativas de iOS (ej. 1290×2796) o mockup del dispositivo
- **Ubicación:** `public/images/projects/pomodoroproapp/`
- **Sección:** case study `/projects/pomodoroproapp`
- **Prioridad:** Media

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
