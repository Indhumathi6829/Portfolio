import { useState } from 'react';
import { certificates } from '../data/certificates';
import type { Certificate } from '../data/types';
import CertificateCard from './CertificateCard';
import CertificatePreview from './CertificatePreview';
import { Reveal, Section, SectionHeading } from './common/Section';

export default function Certifications() {
  const [previewCertificate, setPreviewCertificate] = useState<Certificate | null>(null);

  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials That Reflect My Journey."
        description="Every certification represents a step forward in my continuous learning journey."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate, index) => (
          <Reveal key={certificate.id} delay={index * 0.05}>
            <CertificateCard certificate={certificate} onPreview={setPreviewCertificate} />
          </Reveal>
        ))}
      </div>

      <CertificatePreview certificate={previewCertificate} onClose={() => setPreviewCertificate(null)} />
    </Section>
  );
}
