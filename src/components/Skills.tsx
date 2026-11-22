import { useState } from 'react';
import type { ComponentType } from 'react';
import { BrainCircuit, Code2, Database, Globe, Server, Wrench } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { TechIcon } from './common/TechIcon';
import { Reveal, Section, SectionHeading } from './common/Section';

const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  programming: Code2,
  frontend: Globe,
  backend: Server,
  database: Database,
  'ai-ml': BrainCircuit,
  tools: Wrench,
};

export default function Skills() {
  const [selectedId, setSelectedId] = useState(skillCategories[0].id);
  const selected = skillCategories.find((category) => category.id === selectedId) ?? skillCategories[0];
  const SelectedIcon = categoryIcons[selected.id] ?? Code2;

  return (
    <Section id="skills">
      <SectionHeading eyebrow="Technical Skills" title="My Technology Stack" description="Authentic technology logos grouped by domain, demonstrated through academic projects, internships and research work." />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="glass rounded-[2rem] p-4 sm:p-5">
            {skillCategories.map((category) => {
              const Icon = categoryIcons[category.id] ?? Code2;
              const active = category.id === selectedId;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedId(category.id)}
                  className={`mb-3 flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition last:mb-0 ${
                    active
                      ? 'border-accent/40 bg-accent/10 text-foreground'
                      : 'border-foreground/10 bg-foreground/[0.03] text-muted hover:border-foreground/20 hover:text-foreground'
                  }`}
                  aria-pressed={active}
                >
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${active ? 'bg-accent text-slate-950' : 'bg-foreground/5 text-accent'}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold">{category.title}</span>
                    <span className="mt-1 block text-xs text-subtle">{category.skills.length} technologies</span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass glow-border h-full rounded-[2rem] p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950">
                <SelectedIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">{selected.title}</h3>
                <p className="mt-1 text-sm text-muted">{selected.description}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {selected.skills.map((skill) => {
                return (
                  <div
                    key={skill}
                    className="clay group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[var(--clay-shadow)]"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground/5 text-foreground transition group-hover:bg-accent/10 group-hover:text-accent">
                      <TechIcon name={skill} className="h-7 w-7" />
                    </span>
                    <span className="text-sm font-semibold leading-5 text-foreground">{skill}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </Reveal>
      </div>
    </Section>
  );
}
