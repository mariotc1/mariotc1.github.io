import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-secondary">
      <Container className="flex flex-col gap-2 py-8 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}
        </p>
        <p>{siteConfig.location}</p>
      </Container>
    </footer>
  );
}
