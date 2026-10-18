"use client";

import type Lenis from "lenis";

/**
 * Lenis lives in SmoothScrollProvider, but interactive elements (nav, CTAs) need
 * to trigger eased scrolls. We expose the active instance through this tiny
 * module-level bridge instead of a context, so consumers don't re-render the
 * whole page tree when the instance is created.
 */
let instance: Lenis | null = null;

export function registerLenis(lenis: Lenis | null) {
  instance = lenis;
}

export type ScrollTarget = string | number | HTMLElement;

/** Breathing room between the floating header and the top of a target section. */
export const SCROLL_GAP = 24;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function absoluteTop(target: ScrollTarget): number | null {
  if (typeof target === "number") return target;
  const element =
    typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
  if (!element) return null;
  return element.getBoundingClientRect().top + window.scrollY;
}

/**
 * Eased scroll via Lenis when available; falls back to the native smooth scroll
 * when Lenis is disabled (prefers-reduced-motion → the CSS forces it instant).
 *
 * We always resolve the target to an *absolute* pixel position and hand Lenis a
 * plain number. Passing an element/selector would make Lenis subtract the
 * section's own `scroll-margin-top` on top of our offset, which double-counted
 * the header clearance and landed a section short.
 */
export function scrollToTarget(target: ScrollTarget, offset = 0) {
  if (typeof window === "undefined") return;

  const base = absoluteTop(target);
  if (base === null) return;

  const top = Math.max(0, Math.round(base + offset));

  if (instance) {
    instance.scrollTo(top, { duration: 1.05, easing: easeOutCubic });
    return;
  }

  window.scrollTo({ top, behavior: "smooth" });
}

/**
 * Freeze/unfreeze scrolling. Used while the mobile menu is open so the page
 * behind the overlay can't drift (Lenis ignores `body { overflow: hidden }`).
 */
export function setScrollEnabled(enabled: boolean) {
  if (!instance) return;
  if (enabled) instance.start();
  else instance.stop();
}

/**
 * Bottom edge of the floating header, measured live. The header marks itself
 * with `data-scroll-header`, so anchors land just below it at any viewport size.
 */
export function getHeaderBottom() {
  if (typeof document === "undefined") return 80;
  const header = document.querySelector<HTMLElement>("[data-scroll-header]");
  return header?.getBoundingClientRect().bottom ?? 80;
}

/**
 * Scroll position that places a section just under the header. Single source of
 * truth for both the scroll animation and the scrollspy threshold, so the two
 * can never disagree about which section you are "on".
 */
export function sectionScrollTop(id: string): number | null {
  const element = document.getElementById(id);
  if (!element) return null;
  const top = element.getBoundingClientRect().top + window.scrollY;
  return Math.max(0, top - getHeaderBottom() - SCROLL_GAP);
}

/**
 * Scroll to a section by id and reflect it in the URL. The single entry point
 * shared by the navbar and every in-page CTA (hero buttons included).
 */
export function scrollToSection(id: string) {
  const top = sectionScrollTop(id);
  if (top === null) return;
  scrollToTarget(top);
  if (typeof window !== "undefined") {
    window.history.replaceState(null, "", `#${id}`);
  }
}

/** Ease back to the very top (the MTC monogram's job) and clear the hash. */
export function scrollToTop() {
  scrollToTarget(0);
  if (typeof window !== "undefined") {
    window.history.replaceState(null, "", window.location.pathname);
  }
}
