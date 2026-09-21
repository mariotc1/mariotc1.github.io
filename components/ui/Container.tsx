import { type ElementType, type ReactNode } from "react";

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </Tag>
  );
}
