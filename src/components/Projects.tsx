import { useState } from 'react';
import { ExternalLink, Eye, Image as ImageIcon } from 'lucide-react';
import { GitHubIcon } from './common/BrandIcons';
import { TechIcon } from './common/TechIcon';
import { projectCategories, projects } from '../data/projects';
import type { Project } from '../data/types';
import { Reveal, Section, SectionHeading } from './common/Section';
import ProjectDetails from './ProjectDetails';

export default function Projects() {
  const [category, setCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    category === 'All' ? projects : projects.filter((project) => project.category === category);

  return (
    <Section id="projects" className="bg-background-soft/60">
      <SectionHeading
        eyebrow="Projects"
        title="From Concept to Creation."
        description="Explore the ideas I've transformed into working applications, intelligent systems and practical technology solutions."
      />

      <Reveal className="mt-10">
        <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Project categories">
          {projectCategories.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                category === item
                  ? 'border-accent/50 bg-accent/15 text-foreground'
                  : 'border-foreground/10 bg-foreground/[0.03] text-muted hover:border-foreground/20 hover:text-foreground'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <article className="glass group flex h-full flex-col overflow-hidden rounded-[1.75rem] transition duration-300 hover:-translate-y-1 hover:border-foreground/15">
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-accent/15 via-transparent to-accent-2/15">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={`${project.title} thumbnail`} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-3xl border border-foreground/10 bg-foreground/5 text-muted">
                      <ImageIcon className="h-7 w-7" />
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{project.category}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span key={tech} className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-muted">
                      <TechIcon name={tech} className="h-3.5 w-3.5" />
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 ? (
                    <span className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-subtle">
                      +{project.technologies.length - 6}
                    </span>
                  ) : null}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
                  >
                    <Eye className="h-4 w-4" />
                    Explore Project
                  </button>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-foreground"
                    >
                      <GitHubIcon className="h-4 w-4" />
                      GitHub
                    </a>
                  ) : null}
                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent/20"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
}
