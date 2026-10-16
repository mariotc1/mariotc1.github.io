import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandIconGlyph } from "@/components/ui/BrandIconGlyph";
import { Reveal } from "@/components/motion/Reveal";
import { stackGroups } from "@/lib/stack";

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-20 bg-background-secondary py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="Stack" title="Herramientas que uso para construir" />

        {/*
          Ancho fijo por tarjeta + `justify-center` para que una última fila
          incompleta (5 grupos en 3 columnas) quede centrada en lugar de
          colgando a la izquierda. Se adapta solo si se añaden más grupos.
        */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {stackGroups.map((group, index) => (
            <Reveal
              key={group.label}
              delay={index * 0.05}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition-colors duration-[var(--motion-normal)] ease-[var(--ease-standard)] hover:border-accent/40">
                {/* Ambient brand glow, only on hover — same physical language as the project covers */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[var(--motion-normal)] ease-[var(--ease-standard)] group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(70% 90% at 50% 0%, rgba(54,132,230,0.16), transparent 70%)",
                  }}
                />
                {/* Top hairline highlight: the "finished edge" signature */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                />

                <h3 className="relative text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">
                  {group.label}
                </h3>

                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <li
                      key={tech.name}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3.5 py-1.5 text-sm text-text-secondary transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:border-accent-soft/50 hover:text-text-primary"
                    >
                      {tech.icon ? (
                        <BrandIconGlyph icon={tech.icon} size={16} className="text-accent-soft" />
                      ) : null}
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
