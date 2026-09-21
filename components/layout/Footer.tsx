import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BrandIconGlyph } from "@/components/ui/BrandIconGlyph";
import { siteConfig, hasLink } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-brand text-2xl text-text-primary">{siteConfig.name}</p>
          <p className="mt-1 font-brand text-sm text-accent-soft">{siteConfig.brandLine}</p>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub de Mario Tomé Core"
            className="text-text-muted transition-colors hover:text-text-primary"
          >
            <BrandIconGlyph icon="github" size={20} />
          </Link>
          {hasLink(siteConfig.links.linkedin) ? (
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
            >
              LinkedIn
            </Link>
          ) : null}
          {hasLink(siteConfig.links.email) ? (
            <Link
              href={`mailto:${siteConfig.links.email}`}
              aria-label="Enviar email a Mario Tomé Core"
              className="text-text-muted transition-colors hover:text-text-primary"
            >
              <Mail size={20} />
            </Link>
          ) : null}
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {siteConfig.name}. Todos los derechos reservados.</p>
        <p>{siteConfig.location}</p>
      </Container>
    </footer>
  );
}
