import { GraduationCap, MapPin, Sparkles, Target } from 'lucide-react';
import { aboutHighlights, profile } from '../data/profile';
import ProfilePhoto from './ProfilePhoto';
import { Reveal, Section, SectionHeading } from './common/Section';

const interests = [
  'Artificial intelligence and machine learning',
  'Full-stack product development',
  'Computer vision and explainable AI',
  'REST API design and backend architecture',
  'Human-centered interface design',
];

export default function About() {
  return (
    <Section id="about" className="bg-ink-900/40">
      <SectionHeading eyebrow="About Me" title="More Than a Developer. A Problem Solver." description="A Computer Science and Design journey connecting academic foundations with practical AI, software systems and human-centered products." />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass glow-border h-full rounded-[2rem] p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <ProfilePhoto
                src={profile.photoPath}
                alt={`${profile.name} profile photo`}
                initials="IS"
                className="h-14 w-14 shrink-0 rounded-2xl"
              />
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">{profile.name}</h3>
                <p className="text-sm text-slate-400">{profile.title}</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {aboutHighlights.map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-4 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-4">
                  <span className="text-sm text-slate-400">{item.label}</span>
                  <span className="text-right text-sm font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-3 py-1.5">
                <GraduationCap className="h-4 w-4 text-accent" />
                Graduating 2027
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-3 py-1.5">
                <MapPin className="h-4 w-4 text-accent-2" />
                {profile.location}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.08}>
            <div className="glass rounded-[2rem] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-accent" />
                <h3 className="font-display text-2xl font-bold text-foreground">Professional Summary</h3>
              </div>
              <p className="mt-5 leading-8 text-slate-300">{profile.summary}</p>
              <p className="mt-4 leading-8 text-slate-400">{profile.careerObjective}</p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="glass rounded-[2rem] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-accent-2" />
                <h3 className="font-display text-2xl font-bold text-foreground">What I Learn</h3>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {interests.map((interest) => (
                  <div key={interest} className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-4 text-sm leading-6 text-slate-300">
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
