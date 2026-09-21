import { Mail, MessageCircle } from "lucide-react";
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
      className="brand-gradient-surface scroll-mt-20 relative overflow-hidden py-32 sm:py-40"
    >
      <Container className="relative z-10 text-center">
        <Reveal>
          <p className="font-brand text-xl text-accent-soft">{siteConfig.brandLine}</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-brand text-5xl leading-[1.05] tracking-tight text-text-primary sm:text-6xl">
            Construyamos algo.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
            Si tienes una idea, un proyecto o quieres hablar sobre una oportunidad profesional,
            escríbeme.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {whatsappHref ? (
              <Button href={whatsappHref} external variant="primary">
                <MessageCircle size={16} />
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
                LinkedIn
              </a>
            ) : null}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              <BrandIconGlyph icon="github" size={16} />
              GitHub
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
