import { BadgeCheck, Briefcase, Building2, CalendarDays, FileText } from 'lucide-react';
import { experience } from '../data/experience';
import { GitHubIcon } from './common/BrandIcons';
import { ProofLink } from './common/ProofLink';
import { Reveal, Section, SectionHeading } from './common/Section';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Learning Through Building."
        description="Internship experiences that contributed to real project work, backend development and frontend implementation."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {experience.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08}>
            <article className="glass flex h-full flex-col rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/30">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950">
                  <Briefcase className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-slate-300">{item.type}</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{item.role}</h3>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-accent" />
                  {item.organization}
                </span>
                {item.duration ? (
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-accent-2" />
                    {item.duration}
                  </span>
                ) : null}
              </div>

              <p className="mt-5 leading-7 text-slate-300">{item.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span key={technology} className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-slate-300">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-7">
                <ProofLink href={item.certificateUrl} label="View Certificate" icon={FileText} />
                <ProofLink href={item.completionLetterUrl} label="Completion Letter" icon={BadgeCheck} />
                <ProofLink href={item.projectRepositoryUrl} label="Project Repository" icon={GitHubIcon} />
                <ProofLink href={item.supportingDocumentationUrl} label="Documentation" icon={FileText} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
