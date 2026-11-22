import { ExternalLink, FileText, Layers, Play, Target, Wrench, Workflow } from 'lucide-react';
import type { Project } from '../data/types';
import { GitHubIcon } from './common/BrandIcons';
import { TechIcon } from './common/TechIcon';
import { Modal } from './common/Modal';
import { ProofLink } from './common/ProofLink';

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  if (!project) return null;

  const screenshots = project.screenshots?.filter(Boolean) ?? [];
  const hasProofLinks = Boolean(
    project.githubUrl || project.liveDemoUrl || project.documentationUrl || project.videoUrl || project.architectureUrl,
  );

  return (
    <Modal open={Boolean(project)} onClose={onClose} title={project.title} wide>
      <div className="space-y-8">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              {project.category}
            </span>
            {project.status ? (
              <span className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-muted">
                {project.status}
              </span>
            ) : null}
          </div>
          {project.subtitle ? <p className="mt-4 text-lg font-medium text-foreground">{project.subtitle}</p> : null}
          <p className="mt-4 leading-8 text-muted">{project.description}</p>
        </div>

        {project.problem ? (
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-accent" />
              <h4 className="font-display text-lg font-bold text-foreground">Problem Statement</h4>
            </div>
            <p className="mt-3 leading-7 text-muted">{project.problem}</p>
          </div>
        ) : null}

        {project.solution ? (
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
            <div className="flex items-center gap-3">
              <Wrench className="h-5 w-5 text-accent-2" />
              <h4 className="font-display text-lg font-bold text-foreground">Proposed Solution</h4>
            </div>
            <p className="mt-3 leading-7 text-muted">{project.solution}</p>
          </div>
        ) : null}

        <div>
          <h4 className="font-display text-lg font-bold text-foreground">Key Features</h4>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-4 text-sm text-muted">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold text-foreground">Technology Stack</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 text-sm text-muted">
                <TechIcon name={technology} className="h-4 w-4" />
                {technology}
              </span>
            ))}
          </div>
        </div>

        {project.contribution ? (
          <div>
            <h4 className="font-display text-lg font-bold text-foreground">My Contribution</h4>
            <p className="mt-3 leading-7 text-muted">{project.contribution}</p>
          </div>
        ) : null}

        {project.architecture ? (
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5">
            <div className="flex items-center gap-3">
              <Workflow className="h-5 w-5 text-accent" />
              <h4 className="font-display text-lg font-bold text-foreground">Architecture / Workflow</h4>
            </div>
            <p className="mt-3 leading-7 text-muted">{project.architecture}</p>
          </div>
        ) : null}

        {screenshots.length > 0 ? (
          <div>
            <h4 className="font-display text-lg font-bold text-foreground">Screenshots</h4>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {screenshots.map((screenshot) => (
                <img
                  key={screenshot}
                  src={screenshot}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="rounded-2xl border border-foreground/10 object-cover"
                />
              ))}
            </div>
          </div>
        ) : null}

        {hasProofLinks ? (
          <div>
            <h4 className="font-display text-lg font-bold text-foreground">Proof & Resources</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              <ProofLink href={project.githubUrl} label="View GitHub Repository" icon={GitHubIcon} variant="primary" />
              <ProofLink href={project.liveDemoUrl} label="Live Demo" icon={ExternalLink} />
              <ProofLink href={project.documentationUrl} label="View Documentation" icon={FileText} />
              <ProofLink href={project.videoUrl} label="Watch Project Demo" icon={Play} />
              <ProofLink href={project.architectureUrl} label="Architecture Diagram" icon={Layers} />
            </div>
          </div>
        ) : null}
      </div>
    </Modal>
  );
}
