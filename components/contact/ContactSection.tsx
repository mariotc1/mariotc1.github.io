import { Mail } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandIconGlyph } from "@/components/ui/BrandIconGlyph";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig, hasLink } from "@/lib/site-config";

export function ContactSection() {
  const whatsappHref = hasLink(siteConfig.links.whatsapp)
    ? `https://wa.me/${siteConfig.links.whatsapp.replace(/[^0-9]/g, "")}`
    : "";

  return (
    <section
      id="contact"
      className="brand-gradient-surface scroll-mt-20 relative flex min-h-[100svh] items-center overflow-hidden py-24"
    >
      <Container className="relative z-10 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[320px] sm:max-w-[480px] lg:max-w-[600px]">
            <Image
              src="/images/wordmarks/construyamos-algo-juntos.webp"
              alt="Construyamos algo juntos"
              width={1100}
              height={133}
              className="block h-auto w-full"
            />
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-text-secondary">
            Si tienes una idea, un proyecto o una oportunidad en mente, me encantaría
            escucharte.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {whatsappHref ? (
              <Button href={whatsappHref} external variant="primary">
                <BrandIconGlyph icon="whatsapp" size={16} />
                WhatsApp
              </Button>
            ) : null}
            {hasLink(siteConfig.links.email) ? (
              <Button href={`mailto:${siteConfig.links.email}`} variant="primary">
                <Mail size={16} />
                Email
              </Button>
            ) : null}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            {hasLink(siteConfig.links.linkedin) ? (
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                <BrandIconGlyph icon="linkedin" size={16} />
                LinkedIn
              </a>
            ) : null}
            {hasLink(siteConfig.links.github) ? (
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                <BrandIconGlyph icon="github" size={16} />
                GitHub
              </a>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
