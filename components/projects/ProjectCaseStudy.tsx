import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandIconGlyph } from "@/components/ui/BrandIconGlyph";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { Reveal } from "@/components/motion/Reveal";
import type { Project } from "@/lib/projects";

function CaseStudyBlock({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="border-t border-border py-14 sm:py-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr] lg:gap-16">
        <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
          {eyebrow}
        </h2>
        <div className="max-w-2xl text-lg leading-relaxed text-text-secondary">{children}</div>
      </div>
    </Reveal>
  );
}

export function ProjectCaseStudy({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  return (
    <article>
      <header className="border-b border-border bg-background pt-28 sm:pt-36">
        <Container className="pb-16">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            <ArrowLeft size={14} />
            Selected Work
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <span className="font-mono text-sm text-accent-soft">{project.number}</span>
              <h1 className="mt-3 font-brand text-5xl leading-[1.02] text-text-primary sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary">
                {project.description}
              </p>

              {project.technologiesLabel.length > 0 ? (
                <p className="mt-6 text-sm text-text-muted">
                  {project.technologiesLabel.join(" · ")}
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-4">
                {project.liveUrl ? (
                  <Button href={project.liveUrl} external variant="primary">
                    Ver producto
                    <ExternalLink size={16} />
                  </Button>
                ) : null}
                {project.githubUrl ? (
                  <Button href={project.githubUrl} external variant="secondary">
                    <BrandIconGlyph icon="github" size={16} />
                    GitHub
                  </Button>
                ) : null}
              </div>
            </div>

            <ProjectPreview project={project} />
          </div>
        </Container>
      </header>

      <Container>
        {project.problem ? (
          <CaseStudyBlock eyebrow="Problem">
            <p>{project.problem}</p>
          </CaseStudyBlock>
        ) : null}

        {project.solution ? (
          <CaseStudyBlock eyebrow="Solution">
            <p>{project.solution}</p>
          </CaseStudyBlock>
        ) : null}

        <CaseStudyBlock eyebrow="My Role">
          <p>{project.role}</p>
        </CaseStudyBlock>

        {project.features && project.features.length > 0 ? (
          <CaseStudyBlock eyebrow="Key Features">
            <ul className="flex flex-col gap-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                  {feature}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>
        ) : null}

        {project.architecture ? (
          <CaseStudyBlock eyebrow="Architecture">
            <p>{project.architecture}</p>
          </CaseStudyBlock>
        ) : null}

        {project.decisions && project.decisions.length > 0 ? (
          <CaseStudyBlock eyebrow="Technical Decisions">
            <ul className="flex flex-col gap-4">
              {project.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </CaseStudyBlock>
        ) : null}

        {project.outcome ? (
          <CaseStudyBlock eyebrow="Outcome">
            <p>{project.outcome}</p>
          </CaseStudyBlock>
        ) : null}
      </Container>

      <div className="border-t border-border bg-background-secondary py-16">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Next project
            </p>
            <p className="mt-2 font-brand text-3xl text-text-primary">{next.title}</p>
          </div>
          <Link
            href={`/projects/${next.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent-soft hover:text-accent-soft"
          >
            Ver proyecto
            <ArrowRight size={16} />
          </Link>
        </Container>
      </div>
    </article>
  );
}
