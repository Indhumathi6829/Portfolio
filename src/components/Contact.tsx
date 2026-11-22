import { useState } from 'react';
import type { FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Download, Loader2, Mail, MapPin, Send } from 'lucide-react';
import { profile } from '../data/profile';
import { Reveal, Section, SectionHeading } from './common/Section';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
type FormErrors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>;

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || `https://formsubmit.co/${profile.email}`;

function validate(form: typeof initialForm): FormErrors {
  const errors: FormErrors = {};
  if (form.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Please enter a valid email address.';
  if (form.subject.trim().length < 3) errors.subject = 'Please enter a subject.';
  if (form.message.trim().length < 10) errors.message = 'Please enter at least 10 characters.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    try {
      const body = new FormData();
      body.append('name', form.name.trim());
      body.append('email', form.email.trim());
      body.append('subject', form.subject.trim());
      body.append('message', form.message.trim());
      body.append('_subject', `Portfolio contact from ${form.name.trim()}`);
      body.append('_template', 'table');
      body.append('_captcha', 'false');

      const response = await fetch(endpoint, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      setForm(initialForm);
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Have an Idea? Let's Make It Happen."
        description="Reach out for placement opportunities, project collaboration, internships or technical discussions."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-6">
            <div className="glass rounded-[2rem] p-7">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a href={`mailto:${profile.email}`} className="font-semibold text-foreground transition hover:text-accent">
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-2/10 text-accent-2">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-semibold text-foreground">{profile.location}</p>
                </div>
              </div>
              <a
                href={profile.resumePath}
                download={profile.resumeFileName}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass rounded-[2rem] p-7 sm:p-9" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-200">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:border-accent/50"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name ? <p id="name-error" className="mt-2 text-xs text-rose-300">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-200">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:border-accent/50"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email ? <p id="email-error" className="mt-2 text-xs text-rose-300">{errors.email}</p> : null}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-200">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={(event) => updateField('subject', event.target.value)}
                className="w-full rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:border-accent/50"
                placeholder="Opportunity, collaboration or question"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject ? <p id="subject-error" className="mt-2 text-xs text-rose-300">{errors.subject}</p> : null}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-200">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                className="w-full resize-none rounded-2xl border border-foreground/10 bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-slate-500 focus:border-accent/50"
                placeholder="Tell me about the opportunity or project you have in mind."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message ? <p id="message-error" className="mt-2 text-xs text-rose-300">{errors.message}</p> : null}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' ? (
                <p className="inline-flex items-center gap-2 text-sm text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent successfully.
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="inline-flex items-center gap-2 text-sm text-rose-300">
                  <AlertCircle className="h-4 w-4" />
                  Unable to send right now. Please email me directly.
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
