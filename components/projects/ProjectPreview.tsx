import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectPreview({ project }: { project: Project }) {
  if (!project.image) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 140% at 15% 0%, rgba(54,132,230,0.35) 0%, rgba(11,22,40,0) 55%), linear-gradient(160deg, #0b1424 0%, #070d1a 100%)",
          }}
        />
        <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            {project.category}
          </span>
          <p className="font-brand text-3xl text-text-primary sm:text-4xl">{project.title}</p>
        </div>
      </div>
    );
  }

  return (
    <figure className="group relative">
      {/* Ambient glow borrowed from the brand gradient, not a random effect */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(55%_55%_at_50%_45%,rgba(54,132,230,0.32),transparent_72%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-surface shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)]">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            sizes="(min-width: 1024px) 640px, 92vw"
            className="object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-emphasized)] group-hover:scale-[1.015]"
          />
        </div>

        {/* Inner hairline + top highlight give the frame a finished, physical edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />
      </div>
    </figure>
  );
}
