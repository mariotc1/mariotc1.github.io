"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, type ComponentProps, type MouseEvent } from "react";
import { scrollToSection } from "@/lib/smooth-scroll";

type AnchorLinkProps = ComponentProps<typeof Link>;

function hashTarget(href: unknown): string | null {
  if (typeof href !== "string") return null;
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  const id = href.slice(hashIndex + 1);
  return id || null;
}

/**
 * A router Link that plays nicely with Lenis: when the target is a hash on the
 * page we're already on (`#id` or `/#id` on home), it eases to the section
 * instead of letting the browser jump and fight the smooth scroller. Anything
 * else (external URL, another route, modified clicks) behaves as a normal link.
 */
export function AnchorLink({ href, onClick, ...props }: AnchorLinkProps) {
  const pathname = usePathname();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const id = hashTarget(href);
      if (!id) return;

      const isSamePage =
        typeof href === "string" && href.startsWith("#") ? true : pathname === "/";
      if (!isSamePage) return;
      if (!document.getElementById(id)) return;

      event.preventDefault();
      scrollToSection(id);
    },
    [href, onClick, pathname],
  );

  return <Link href={href} onClick={handleClick} {...props} />;
}
