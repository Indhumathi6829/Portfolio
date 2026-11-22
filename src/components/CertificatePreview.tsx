import { BadgeCheck, Download, FileText } from 'lucide-react';
import type { Certificate } from '../data/types';
import { Modal } from './common/Modal';
import { ProofLink } from './common/ProofLink';

interface CertificatePreviewProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificatePreview({ certificate, onClose }: CertificatePreviewProps) {
  if (!certificate) return null;

  const imageUrl = certificate.imagePath;
  const pdfUrl = certificate.pdfPath;
  const viewUrl = pdfUrl || imageUrl;
  const downloadUrl = pdfUrl || imageUrl;

  return (
    <Modal open={Boolean(certificate)} onClose={onClose} title={certificate.title} wide>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="clay-inset overflow-hidden rounded-2xl border border-foreground/10 bg-background">
          {imageUrl ? (
            <img src={imageUrl} alt={`${certificate.title} certificate`} className="max-h-[65vh] w-full object-contain" />
          ) : pdfUrl ? (
            <iframe src={pdfUrl} title={`${certificate.title} certificate preview`} className="h-[65vh] w-full" />
          ) : null}
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{certificate.category}</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{certificate.title}</h3>
            <p className="mt-2 text-sm text-muted">{certificate.organization}</p>
            {certificate.year ? <p className="mt-1 text-sm text-subtle">Year: {certificate.year}</p> : null}
          </div>

          <p className="leading-7 text-muted">{certificate.description}</p>
          {certificate.credentialId ? <p className="text-sm text-subtle">Credential ID: {certificate.credentialId}</p> : null}

          <div className="flex flex-wrap gap-3">
            {viewUrl ? (
              <a
                href={viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:brightness-110"
              >
                <FileText className="h-4 w-4" />
                View Certificate
              </a>
            ) : null}
            <ProofLink href={certificate.verificationUrl} label="Verify Credential" icon={BadgeCheck} />
            {downloadUrl ? (
              <a
                href={downloadUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-foreground"
              >
                <Download className="h-4 w-4" />
                Download Certificate
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </Modal>
  );
}
