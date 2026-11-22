# Indhumathi Selvakumar — Portfolio

A premium claymorphism portfolio built with **React + Vite + TypeScript + Tailwind CSS**, featuring light/dark themes, smooth animations and a fully data-driven content layer.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React + React Icons

## Features

- Light and dark theme with system-preference detection and persistent toggle
- Hero with professional photo frame, typewriter roles and social profiles
- About, Skills (technology logos), Projects (filters + detail modal), Certifications, Achievements, Experience, Education, Profiles and Contact
- Certificate preview modal with image/PDF support
- Back-to-top button, sticky navbar with scroll-spy and mobile menu
- Fully responsive and recruiter-friendly

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

Other commands:

```bash
npm run build      # type-check + production build
npm run typecheck  # TypeScript only
npm run preview    # preview production build
```

## Content Management

All content lives in `src/data/`:

- `profile.ts` — name, headline, summary, links, resume path
- `skills.ts` — skill categories
- `projects.ts` — projects with problem/solution/contribution/architecture
- `certificates.ts` — certifications with `imagePath`, `pdfPath`, `verificationUrl`
- `achievements.ts` — milestones with proof links
- `experience.ts`, `education.ts`, `profiles.ts`

## Assets

Place files in `public/`:

- Profile photo: `public/images/profile/profile-photo.png`
- Resume: `public/resume/Indhumathi_Resume.pdf`
- Certificates: `public/certificates/<category>/`
- Achievements proof: `public/achievements/`
- Project media: `public/projects/`

Reference them from data files using absolute paths like `/images/profile/profile-photo.png`.

## Deployment

Build and deploy the `dist/` folder to Vercel, Netlify, GitHub Pages or any static host.

## Notes

- No placeholder or invented metrics are used.
- Proof links render only when real URLs/files are provided.
- The contact form uses FormSubmit; set `VITE_FORMSUBMIT_ENDPOINT` if needed.
