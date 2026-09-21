import type { Project } from "@/lib/projects";

export function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-surface">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 140% at 15% 0%, rgba(54,132,230,0.35) 0%, rgba(11,22,40,0) 55%), linear-gradient(160deg, #0b1424 0%, #070d1a 100%)",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -right-2 font-brand text-[9rem] font-semibold leading-none text-white/[0.04] sm:text-[12rem]"
      >
        {project.number}
      </span>
      <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          {project.category}
        </span>
        <p className="font-brand text-3xl text-text-primary sm:text-4xl">{project.title}</p>
      </div>
    </div>
  );
}
