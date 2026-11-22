import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';
import { ProofLink } from './common/ProofLink';
import { Reveal, Section, SectionHeading } from './common/Section';
import { BadgeCheck } from 'lucide-react';

export default function Education() {
  return (
    <Section id="education" className="bg-ink-900/40">
      <SectionHeading
        eyebrow="Education"
        title="My Academic Journey."
        description="Engineering education and senior secondary results that support the technical and analytical foundation of this portfolio."
      />

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-accent/60 via-accent-2/40 to-transparent sm:left-6" />
        <div className="space-y-6">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <article className="relative pl-14 sm:pl-16">
                <div className="absolute left-0 top-6 grid h-11 w-11 place-items-center rounded-2xl border border-accent/20 bg-ink-900 text-accent sm:h-12 sm:w-12">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="glass rounded-[1.5rem] p-6 transition duration-300 hover:border-accent/30 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">{item.degree}</h3>
                      <p className="mt-2 text-sm font-medium text-slate-300">{item.institution}</p>
                    </div>
                    {item.score ? <span className="rounded-full border border-accent-2/20 bg-accent-2/10 px-3 py-1 text-sm font-semibold text-accent-2">{item.score}</span> : null}
                  </div>
                  {item.period ? <p className="mt-3 text-sm text-slate-500">{item.period}</p> : null}
                  {item.description ? <p className="mt-4 leading-7 text-slate-400">{item.description}</p> : null}
                  <div className="mt-5">
                    <ProofLink href={item.proofUrl} label="View Academic Proof" icon={BadgeCheck} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
