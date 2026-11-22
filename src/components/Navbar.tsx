import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((element): element is Element => Boolean(element));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.15, 0.4, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-300 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-3">
          <span className="clay grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition group-hover:-translate-y-0.5">
            IS
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold text-foreground">Indhumathi Selvakumar</span>
            <span className="text-xs text-muted">AI & Software Developer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 xl:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3 py-2 text-sm transition ${
                  isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.resumePath}
            download={profile.resumeFileName}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:brightness-110 sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            className="clay grid h-10 w-10 place-items-center rounded-full text-foreground lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass border-t border-border px-5 pb-6 pt-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  active === link.href ? 'bg-surface text-foreground' : 'text-muted hover:bg-surface hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 text-sm font-bold text-slate-950"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
