import { SiGithub, SiLeetcode } from 'react-icons/si';
import { LinkedInIcon } from './common/BrandIcons';
import { profiles } from '../data/profiles';
import { Reveal, Section, SectionHeading } from './common/Section';

const icons = {
  github: SiGithub,
  linkedin: LinkedInIcon,
  leetcode: SiLeetcode,
};

const descriptions: Record<string, string> = {
  github: 'Public repositories, project source code and engineering work.',
  linkedin: 'Professional profile, education and career presence.',
  leetcode: 'Problem-solving practice and coding profile.',
};

export default function Profiles() {
  return (
    <Section id="profiles" className="bg-background-soft/60">
      <SectionHeading
        eyebrow="Coding Profiles"
        title="Find Me Across the Tech Community."
        description="Public profiles for repositories, professional presence and coding practice."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile) => {
          const Icon = icons[profile.id];
          return (
            <Reveal key={profile.id}>
              <article className="glass flex h-full flex-col rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30">
                <div className="flex items-center gap-4">
                  <span className="clay grid h-14 w-14 place-items-center rounded-2xl bg-foreground/5 text-foreground">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{profile.label}</h3>
                    <p className="text-sm text-subtle">{profile.username || 'Profile'}</p>
                  </div>
                </div>
                <p className="mt-5 flex-1 text-sm leading-7 text-muted">{descriptions[profile.id]}</p>
                {profile.url ? (
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
                  >
                    Visit Profile
                  </a>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
