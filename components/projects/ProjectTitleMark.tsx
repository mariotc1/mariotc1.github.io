import Image from "next/image";
import type { Project } from "@/lib/projects";

const sizeClasses = {
  sm: "h-7 sm:h-9",
  md: "h-9 sm:h-12",
  lg: "h-12 sm:h-16",
} as const;

/**
 * Renders a project title using Mario's hand-drawn "Dream Big" wordmark.
 * Kept inside a real heading element, with the title as `alt`, so semantics and
 * the accessible name survive even though the glyphs are an image.
 *
 * The image is sized by height (`width: auto`) so the box always hugs the
 * glyphs — a fixed-height box with `object-contain` left dead space under
 * longer titles.
 */
export function ProjectTitleMark({
  project,
  size = "md",
  className = "",
}: {
  project: Project;
  size?: keyof typeof sizeClasses;
  className?: string;
}) {
  if (!project.titleImage) {
    return <span className={`font-brand ${className}`}>{project.title}</span>;
  }

  return (
    <Image
      src={project.titleImage.src}
      alt={project.title}
      width={project.titleImage.width}
      height={project.titleImage.height}
      sizes="(min-width: 1024px) 520px, 85vw"
      className={`block w-auto max-w-full ${sizeClasses[size]} ${className}`}
    />
  );
}
