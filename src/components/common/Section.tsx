import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 ${className}`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
