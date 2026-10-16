import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { experience, education } from "@/lib/experience";
import { siteConfig, hasLink } from "@/lib/site-config";

/** "Proxima Systems" → "PS", "db Inmuebles…" → "DI". Used as a lightweight logo. */
function companyInitials(name: string) {
  const words = name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const letters = words
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
  return (letters || name.slice(0, 1)).toUpperCase();
}

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 bg-background py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="Experience" title="Trayectoria profesional" />

        <div className="relative mt-12">
          {/* Timeline rail — fades out at the end so it feels intentional, not clipped */}
          <span
            aria-hidden="true"
            className="absolute left-[6.5px] top-3 bottom-3 w-px bg-gradient-to-b from-accent/50 via-border to-transparent"
          />

          <ol className="space-y-5">
            {experience.map((item, index) => (
              <li key={item.company} className="relative pl-7 sm:pl-12">
                {/* Node: solid accent + halo marks the current role */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-8 h-3.5 w-3.5 rounded-full border-2 bg-background ${
                    item.current
                      ? "border-accent shadow-[0_0_0_4px_rgba(54,132,230,0.18)]"
                      : "border-border"
                  }`}
                />

                <Reveal delay={index * 0.05}>
                  <article className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface p-5 transition-colors duration-[var(--motion-normal)] ease-[var(--ease-standard)] hover:border-accent/40">
                    {/* Ambient brand glow on hover — same language as stack & covers */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[var(--motion-normal)] ease-[var(--ease-standard)] group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(70% 90% at 50% 0%, rgba(54,132,230,0.16), transparent 70%)",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    />

                    <div className="relative flex flex-col gap-3.5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div className="flex items-start gap-3.5">
                        <span
                          aria-hidden="true"
                          className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-[var(--radius-sm)] border border-border bg-background/60 p-1.5"
                        >
                          {item.logo ? (
                            <Image
                              src={item.logo.src}
                              alt=""
                              width={item.logo.width}
                              height={item.logo.height}
                              className="h-auto w-auto max-h-[24px] max-w-[26px] object-contain"
                            />
                          ) : (
                            <span className="font-mono text-sm font-semibold text-accent-soft">
                              {companyInitials(item.company)}
                            </span>
                          )}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary">
                            {item.url ? (
                              <Link
                                href={item.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-soft"
                              >
                                {item.company}
                                <ArrowUpRight
                                  size={16}
                                  className="text-text-muted transition-colors group-hover:text-accent-soft"
                                />
                              </Link>
                            ) : (
                              item.company
                            )}
                          </h3>
                          <p className="mt-1 text-base text-text-secondary">{item.role}</p>
                        </div>
                      </div>

                      <span className="font-mono text-sm text-text-muted sm:whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    <ul className="relative mt-4 flex flex-wrap gap-2">
                      {item.areas.map((area) => (
                        <li
                          key={area}
                          className="inline-flex items-center rounded-full border border-border bg-background/50 px-3.5 py-1.5 text-sm text-text-secondary transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:border-accent-soft/50 hover:text-text-primary"
                        >
                          {area}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Formación: una sola línea, solo lo que aporta (DAW y DAM) — mínimo scroll */}
        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-baseline sm:gap-5">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            Formación
          </span>
          <p className="text-sm text-text-secondary">{education.join(" · ")}</p>
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
