import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/lib/experience";
import { siteConfig, hasLink } from "@/lib/site-config";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 bg-background py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="Experience" title="Trayectoria profesional." />

        <div className="mt-14 divide-y divide-border border-t border-border">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.05}>
              <div className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">{item.company}</h3>
                  <p className="mt-1 text-base text-text-secondary">{item.role}</p>
                  <p className="mt-2 text-sm text-text-muted">{item.areas.join(" · ")}</p>
                </div>
                <span className="font-mono text-sm text-text-muted">{item.period}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {hasLink(siteConfig.links.linkedin) ? (
          <div className="mt-10">
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-accent-soft"
            >
              Ver trayectoria completa en LinkedIn
              <ArrowUpRight size={16} />
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
