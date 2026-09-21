"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandIconGlyph } from "@/components/ui/BrandIconGlyph";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { projects } from "@/lib/projects";
import { getGsap } from "@/lib/gsap";

export function ProjectShowcase() {
  const spacerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const previewRefs = useRef<Array<HTMLDivElement | null>>([]);
  const metaRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const { gsap } = getGsap();
    const mm = gsap.matchMedia();

    mm.add(
      { isDesktop: "(min-width: 768px)", reduced: "(prefers-reduced-motion: reduce)" },
      (context) => {
        const { isDesktop, reduced } = context.conditions as {
          isDesktop: boolean;
          reduced: boolean;
        };
        if (!isDesktop || reduced) return;

        const triggers = projects.map((_, index) => {
          const spacer = spacerRefs.current[index];
          const preview = previewRefs.current[index];
          const meta = metaRefs.current[index];
          if (!spacer || !preview || !meta) return null;

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: spacer,
              start: "top top",
              end: "+=65%",
              scrub: 0.6,
            },
          });

          timeline
            .fromTo(preview, { scale: 0.92, opacity: 0.55 }, { scale: 1, opacity: 1, ease: "none" })
            .fromTo(meta, { y: 32, opacity: 0 }, { y: 0, opacity: 1, ease: "none" }, "<");

          return timeline.scrollTrigger ?? null;
        });

        return () => {
          triggers.forEach((trigger) => trigger?.kill());
        };
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section id="work" className="relative scroll-mt-20 bg-background">
      <Container className="pb-16 pt-28 sm:pt-36">
        <SectionHeading
          eyebrow="Selected Work"
          title="Proyectos que demuestran cómo construyo."
          description="Cuatro capítulos de mi trayectoria: de un producto educativo en producción a experimentos de datos y una app publicada en iOS."
        />
      </Container>

      <div className="relative">
        {projects.map((project, index) => (
          <div
            key={project.slug}
            ref={(el) => {
              spacerRefs.current[index] = el;
            }}
            className="relative"
            style={{ height: index === projects.length - 1 ? "100dvh" : "160dvh" }}
          >
            <div
              className="sticky top-0 flex h-[100dvh] items-center border-t border-border bg-background"
              style={{ zIndex: index + 1 }}
            >
              <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div
                  ref={(el) => {
                    metaRefs.current[index] = el;
                  }}
                  className="order-2 lg:order-1"
                >
                  <span className="font-mono text-sm text-accent-soft">
                    Project {project.number}
                  </span>
                  <h3 className="mt-3 font-brand text-4xl text-text-primary sm:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg">
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

                <div
                  ref={(el) => {
                    previewRefs.current[index] = el;
                  }}
                  className="order-1 lg:order-2"
                >
                  <ProjectPreview project={project} />
                </div>
              </Container>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
