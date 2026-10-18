"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  getHeaderBottom,
  SCROLL_GAP,
  scrollToSection,
  scrollToTop,
  setScrollEnabled,
} from "@/lib/smooth-scroll";

// Order matches the real page: Hero → About → Work → Stack → Experience → Contact.
const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    setScrollEnabled(!open);
    return () => {
      document.body.style.overflow = "";
      setScrollEnabled(true);
    };
  }, [open]);

  // Scrollspy: a section is active once its top clears the header line, which
  // matches exactly where `scrollToSection` lands it (header bottom + SCROLL_GAP).
  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      const line = getHeaderBottom() + SCROLL_GAP + 6;
      let current: string | null = null;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= line) current = section.id;
      }
      // The last section can never clear the line when the page bottoms out.
      const bottom = document.documentElement;
      if (window.innerHeight + window.scrollY >= bottom.scrollHeight - 2) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  /**
   * Close the mobile menu *synchronously* and re-enable scrolling before we
   * navigate. `setOpen(false)` alone is async, so Lenis would still be stopped
   * (its `scrollTo` bails out while stopped) and the tap would do nothing.
   */
  const closeMenu = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
    setScrollEnabled(true);
  }, []);

  const handleNav = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      closeMenu();
      if (!isHome) return; // let the router navigate to /#id
      event.preventDefault();
      scrollToSection(id);
    },
    [closeMenu, isHome],
  );

  const handleLogo = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      closeMenu();
      if (!isHome) return; // let the router navigate home
      event.preventDefault();
      scrollToTop();
    },
    [closeMenu, isHome],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* `data-scroll-header` marks the bar (not the header, which also holds the
          mobile panel) so anchors clear the bar itself. */}
      <div
        data-scroll-header
        className={`border-b transition-[background-color,border-color,box-shadow] duration-[var(--motion-normal)] ease-[var(--ease-standard)] ${
          scrolled || open
            ? "border-white/[0.07] bg-background/90 shadow-[0_8px_30px_-22px_rgba(0,0,0,0.95)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-[var(--header-height)] items-center justify-between gap-4">
            <Link
              href="/"
              onClick={handleLogo}
              aria-label="Mario Tomé Core, volver arriba"
              className="group flex items-center gap-2.5 rounded-full"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-strong font-brand text-sm font-bold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-transform duration-[var(--motion-normal)] ease-[var(--ease-spring)] group-hover:-translate-y-0.5 group-hover:scale-105">
                M
              </span>
              <span className="font-brand text-base font-semibold tracking-tight text-text-primary transition-colors duration-[var(--motion-fast)] group-hover:text-accent-soft">
                MTC
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
              {sections.map((section) => {
                const isActive = active === section.id;
                return (
                  <Link
                    key={section.id}
                    href={`/#${section.id}`}
                    onClick={(event) => handleNav(event, section.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-[var(--motion-fast)] ${
                      isActive ? "text-accent-soft" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden="true"
                        className="absolute inset-0 z-0 rounded-full bg-accent/15 ring-1 ring-inset ring-accent/30"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    ) : null}
                    <span className="relative z-10">{section.label}</span>
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full text-text-primary transition-colors duration-[var(--motion-fast)] hover:bg-white/5 lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Navegación móvil"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
            className="lg:hidden"
          >
            <Container>
              <div className="mt-2 max-h-[70svh] overflow-y-auto rounded-3xl border border-white/10 bg-background/95 p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                {sections.map((section, index) => {
                  const isActive = active === section.id;
                  return (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * index, duration: 0.2 }}
                    >
                      <Link
                        href={`/#${section.id}`}
                        onClick={(event) => handleNav(event, section.id)}
                        aria-current={isActive ? "true" : undefined}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-[var(--motion-fast)] ${
                          isActive
                            ? "bg-accent/15 text-accent-soft"
                            : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
                        }`}
                      >
                        {section.label}
                        {isActive ? (
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-accent-soft"
                          />
                        ) : null}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
