import { Award, ExternalLink, FileText, Image as ImageIcon } from 'lucide-react';
import { achievements } from '../data/achievements';
import { Reveal, Section, SectionHeading } from './common/Section';

function isExternal(url?: string) {
  return Boolean(url && /^https?:\/\//i.test(url));
}

export default function Achievements() {
  return (
    <Section id="achievements" className="bg-background-soft/60">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones & Recognition."
        description="Recognizing the experiences, challenges and achievements that have shaped my technical journey."
      />

      <div className="mx-auto mt-14 max-w-4xl space-y-5">
        {achievements.map((achievement, index) => {
          const proofLinks = [
            achievement.certificatePDF
              ? { href: achievement.certificatePDF, label: 'Certificate', icon: FileText }
              : null,
            achievement.proofImage
              ? { href: achievement.proofImage, label: 'Certificate', icon: ImageIcon }
              : null,
            achievement.officialURL
              ? { href: achievement.officialURL, label: 'Official Result', icon: ExternalLink }
              : null,
            achievement.projectURL
              ? { href: achievement.projectURL, label: 'View Project', icon: ExternalLink }
              : null,
          ].filter(Boolean) as { href: string; label: string; icon: typeof FileText }[];

          return (
            <Reveal key={achievement.id} delay={index * 0.06}>
              <article className="glass flex flex-col gap-5 rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 sm:flex-row sm:items-start sm:p-7">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-300 to-violet-500 text-slate-950">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold leading-7 text-foreground sm:text-2xl">
                      {achievement.title}
                    </h3>
                    {achievement.year ? <span className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-semibold text-muted">{achievement.year}</span> : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent-2">{achievement.organization}</p>
                  <p className="mt-3 leading-7 text-muted">{achievement.description}</p>
                  {proofLinks.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {proofLinks.map((link) => {
                        const Icon = link.icon;
                        const external = isExternal(link.href);
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target={external ? '_blank' : undefined}
                            rel={external ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-foreground"
                          >
                            <Icon className="h-4 w-4" />
                            {link.label}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
