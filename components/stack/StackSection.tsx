import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandIconGlyph } from "@/components/ui/BrandIconGlyph";
import { Reveal } from "@/components/motion/Reveal";
import { stackGroups } from "@/lib/stack";

export function StackSection() {
  return (
    <section id="stack" className="scroll-mt-20 bg-background-secondary py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Stack"
          title="Herramientas que uso para construir."
          description="Sin nube de logos: cada tecnología está donde realmente la aplico."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.05}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-muted">
                {group.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((tech) => (
                  <li
                    key={tech.name}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-secondary"
                  >
                    {tech.icon ? (
                      <BrandIconGlyph icon={tech.icon} size={16} className="text-accent-soft" />
                    ) : null}
                    {tech.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
