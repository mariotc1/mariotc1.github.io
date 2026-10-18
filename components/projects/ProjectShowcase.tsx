"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, type PanInfo } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandIconGlyph } from "@/components/ui/BrandIconGlyph";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { ProjectTitleMark } from "@/components/projects/ProjectTitleMark";
import { motionTokens } from "@/lib/motion-tokens";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { projects, type Project } from "@/lib/projects";

// Long, gentle "expo-out" — content glides and settles instead of snapping.
const SLIDE_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SLIDE_DURATION = 0.9;

export function ProjectShowcase() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
  const widthRef = useRef(0);
  const activeRef = useRef(0);
  const x = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const count = projects.length;

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const update = () => {
      widthRef.current = viewport.clientWidth;
      setSlideWidth(viewport.clientWidth);
    };
    update();

    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  // Realign instantly on resize so the active project never drifts mid-layout.
  useEffect(() => {
    if (!slideWidth) return;
    controlsRef.current?.stop();
    x.set(-activeRef.current * slideWidth);
  }, [slideWidth, x]);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(count - 1, index));
      setActive(clamped);
      controlsRef.current?.stop();
      controlsRef.current = animate(x, -clamped * widthRef.current, {
        duration: reducedMotion ? 0 : SLIDE_DURATION,
        ease: SLIDE_EASE,
      });
    },
    [count, reducedMotion, x],
  );

  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const threshold = (widthRef.current || 1) * 0.18;
      const { offset, velocity } = info;
      if (offset.x < -threshold || velocity.x < -450) {
        goTo(activeRef.current + 1);
      } else if (offset.x > threshold || velocity.x > 450) {
        goTo(activeRef.current - 1);
      } else {
        goTo(activeRef.current);
      }
    },
    [goTo],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(activeRef.current - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(activeRef.current + 1);
      }
    },
    [goTo],
  );

  // Keyboard users reach off-screen links; glide the matching slide into view.
  const handleFocusCapture = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const slide = (event.target as HTMLElement).closest<HTMLElement>("[data-slide-index]");
      if (!slide) return;
      const index = Number(slide.dataset.slideIndex);
      if (Number.isNaN(index) || index === activeRef.current) return;
      goTo(index);
    },
    [goTo],
  );

  return (
    <section id="work" className="bg-background py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Proyectos que demuestran cómo construyo"
          description="Una selección de los proyectos que he ido desarrollando y de los que más he aprendido, en una lista que sigue creciendo."
        />
      </Container>

      <div
        ref={viewportRef}
        className="mt-14 overflow-hidden"
        role="group"
        aria-roledescription="carrusel"
        aria-label="Proyectos seleccionados"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onFocusCapture={handleFocusCapture}
      >
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          style={{ x, willChange: "transform" }}
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: -(count - 1) * slideWidth, right: 0 }}
          dragElastic={0.06}
          dragMomentum={false}
          onDragStart={() => controlsRef.current?.stop()}
          onDragEnd={handleDragEnd}
        >
          {projects.map((project, index) => (
            <div
              key={project.slug}
              data-slide-index={index}
              className="w-full shrink-0"
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${count}: ${project.title}`}
            >
              <Container>
                <ProjectPanel project={project} isActive={index === active} />
              </Container>
            </div>
          ))}
        </motion.div>
      </div>

      <Container className="mt-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Ir al proyecto ${project.title}`}
              aria-current={index === active ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-[var(--motion-normal)] ease-[var(--ease-standard)] ${
                index === active ? "w-8 bg-accent-soft" : "w-1.5 bg-border hover:bg-text-muted"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Proyecto anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-primary transition-colors duration-[var(--motion-fast)] hover:border-accent-soft hover:text-accent-soft disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-primary"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === count - 1}
            aria-label="Proyecto siguiente"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-primary transition-colors duration-[var(--motion-fast)] hover:border-accent-soft hover:text-accent-soft disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-primary"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Container>

      <Container className="mt-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted md:hidden">
          Desliza para explorar →
        </p>
      </Container>
    </section>
  );
}

function ProjectPanel({ project, isActive }: { project: Project; isActive: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.35, y: 10 }}
      transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease.emphasized }}
      className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16"
    >
      <div className="order-2 md:order-1">
        <span className="font-mono text-sm text-accent-soft">Project {project.number}</span>
        <h3 className="mt-3">
          <ProjectTitleMark project={project} size="md" />
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg">
          {project.shortDescription}
        </p>

        {project.technologiesLabel.length > 0 ? (
          <p className="mt-6 text-sm text-text-muted">
            {project.technologiesLabel.join(" · ")}
          </p>
        ) : (
          <p className="mt-6 text-sm text-text-muted">En construcción activa</p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-accent-soft"
          >
            Explorar proyecto
            <ArrowRight size={16} />
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              <ExternalLink size={14} />
              Ver producto
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              <BrandIconGlyph icon="github" size={14} />
              GitHub
            </a>
          ) : null}
        </div>
      </div>

      <div className="order-1 md:order-2">
        <ProjectPreview project={project} />
      </div>
    </motion.div>
  );
}
