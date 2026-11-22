import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { GitHubIcon, LinkedInIcon } from './common/BrandIcons';
import ProfilePhoto from './ProfilePhoto';
import { heroRoles, profile } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';

const socialLinks = [
  { label: 'GitHub', href: profile.links.github, icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: LinkedInIcon },
  { label: 'LeetCode', href: profile.links.leetcode, icon: SiLeetcode },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
].filter((item) => item.href);

export default function Hero() {
  const typedRole = useTypewriter(heroRoles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_78%)]" />
      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent-2/20 blur-[160px]" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent"
          >
            <Sparkles className="h-4 w-4" />
            Open to opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-gradient mt-8 font-display text-4xl font-black tracking-tight sm:text-5xl"
          >
            {profile.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-4 font-display text-4xl font-black leading-[1.02] tracking-tight text-foreground sm:text-6xl"
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-4 max-w-2xl text-base font-medium text-foreground sm:text-lg"
          >
            {profile.supportingHeadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-6 flex min-h-8 items-center gap-3 text-lg text-muted sm:text-xl"
          >
            <span className="text-subtle">Focused on</span>
            <span className="font-semibold text-accent">{typedRole}</span>
            <span className="h-6 w-px bg-foreground/20" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-6 py-3.5 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-foreground/10"
            >
              <Download className="h-4 w-4" />
              View My Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={item.label}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-foreground/10 bg-foreground/5 text-muted transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
            <span className="ml-1 text-sm text-subtle">{profile.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto mt-10 hidden aspect-[4/5] w-full max-w-md sm:block"
        >
          <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-transparent to-accent-2/25 blur-2xl" />
          <div className="absolute inset-10 rounded-full border border-accent/20" />
          <div className="absolute inset-16 rounded-full border border-accent-2/20" />

          <ProfilePhoto
            src={profile.photoPath}
            alt={`${profile.name} professional portrait`}
            initials="IS"
            className="absolute inset-0 h-full w-full rounded-[2rem]"
          />
        </motion.div>
      </div>
    </section>
  );
}
