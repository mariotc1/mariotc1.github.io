import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-strong shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
  secondary:
    "bg-surface text-text-primary border border-border hover:border-accent-soft hover:bg-surface-elevated hover:text-accent-soft",
  ghost: "bg-transparent text-text-secondary hover:text-text-primary",
};

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-[var(--motion-fast)] ease-[var(--ease-standard)] ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
