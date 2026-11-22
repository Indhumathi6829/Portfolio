import type { ComponentType } from 'react';
import { safeExternalUrl } from '../../utils/url';

interface ProofLinkProps {
  href?: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  variant?: 'primary' | 'secondary';
}

export function ProofLink({ href, label, icon: Icon, variant = 'secondary' }: ProofLinkProps) {
  const url = safeExternalUrl(href);
  if (!url) return null;

  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/60';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 hover:brightness-110'
      : 'border border-foreground/10 bg-foreground/5 text-slate-200 hover:border-accent/40 hover:text-foreground';

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
