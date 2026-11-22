import { Download, Mail } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { profile } from '../data/profile';
import { GitHubIcon, LinkedInIcon } from './common/BrandIcons';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-ink-950 px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-black text-slate-950">
              IS
            </span>
            <div>
              <p className="font-display font-bold text-foreground">Indhumathi Selvakumar</p>
              <p className="text-sm text-slate-400">AI & Software Developer</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-500">
            Building intelligent solutions through software engineering, AI/ML and practical full-stack development.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Quick Links</p>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-400 transition hover:text-accent">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Connect</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-foreground/10 bg-foreground/5 text-slate-300 transition hover:border-accent/40 hover:text-foreground"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-foreground/10 bg-foreground/5 text-slate-300 transition hover:border-accent/40 hover:text-foreground"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-foreground/10 bg-foreground/5 text-slate-300 transition hover:border-accent/40 hover:text-foreground"
            >
              <SiLeetcode className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-foreground/10 bg-foreground/5 text-slate-300 transition hover:border-accent/40 hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              aria-label="Download resume"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-foreground/10 bg-foreground/5 text-slate-300 transition hover:border-accent/40 hover:text-foreground"
            >
              <Download className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-foreground/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Indhumathi Selvakumar. All rights reserved.
      </div>
    </footer>
  );
}
