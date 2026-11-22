import { BadgeCheck, Eye } from 'lucide-react';
import type { Certificate } from '../data/types';
import { ProofLink } from './common/ProofLink';

interface CertificateCardProps {
  certificate: Certificate;
  onPreview: (certificate: Certificate) => void;
}

export default function CertificateCard({ certificate, onPreview }: CertificateCardProps) {
  const hasFile = Boolean(certificate.imagePath || certificate.pdfPath);

  return (
    <article className="glass flex h-full flex-col rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {certificate.category}
        </span>
        {certificate.year ? <span className="text-sm text-subtle">{certificate.year}</span> : null}
      </div>

      <h3 className="mt-5 font-display text-xl font-bold leading-7 text-foreground">{certificate.title}</h3>
      <p className="mt-2 text-sm font-medium text-muted">{certificate.organization}</p>
      <p className="mt-4 text-sm leading-7 text-muted">{certificate.description}</p>
      {certificate.credentialId ? <p className="mt-4 text-xs text-subtle">Credential ID: {certificate.credentialId}</p> : null}

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        {hasFile ? (
          <button
            type="button"
            onClick={() => onPreview(certificate)}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            <Eye className="h-4 w-4" />
            Certificate
          </button>
        ) : null}
        <ProofLink href={certificate.verificationUrl} label="Verify Credential" icon={BadgeCheck} />
      </div>
    </article>
  );
}
