import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandIconGlyph } from "@/components/ui/BrandIconGlyph";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig, hasLink } from "@/lib/site-config";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="Sobre mí" title="Construyo software con criterio." />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-border bg-surface">
              <Image
                src="/images/profile.webp"
                alt="Retrato de Mario Tomé Core"
                fill
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-text-secondary">
              Soy desarrollador de software especializado en Python y backend, con experiencia
              construyendo aplicaciones web, móviles y de escritorio.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              Me interesa convertir problemas reales en software útil: APIs, automatización de
              procesos, procesamiento de datos, scraping, herramientas internas y productos
              digitales completos.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              Me gusta llevar las ideas desde el problema inicial hasta un producto funcionando.
            </p>

            <div className="mt-4 flex items-center gap-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent-soft hover:text-accent-soft"
              >
                <BrandIconGlyph icon="github" size={16} />
                GitHub
              </Link>
              {hasLink(siteConfig.links.linkedin) ? (
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent-soft hover:text-accent-soft"
                >
                  LinkedIn
                </Link>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
