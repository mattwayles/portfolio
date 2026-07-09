# Matthew Wayles — Portfolio

Professional portfolio for Matthew Wayles, Senior Software Engineer.

A single-page site built with **React 19, TypeScript, Vite, and Tailwind CSS v4**. Dark, terminal-inspired design with scroll-reveal animations, a filterable project gallery, an experience timeline, and credential highlights.

## Development

```bash
npm install
npm run dev       # local dev server with HMR
npm run build     # typecheck + production build to dist/
npm run preview   # serve the production build locally
```

## Editing content

All copy lives in [`src/data.ts`](src/data.ts) — profile, about, experience, projects, skills, certifications, education, and awards. Components under `src/components/` render whatever that file contains, so most updates never touch JSX.

- **Résumé**: replace `public/resume.pdf` (the download links pick it up automatically).
- **Years of experience**: computed from a 2013 anchor in `src/data.ts`, so it stays current on its own.
- **Photos**: `src/assets/`.

## Deploying

The build outputs a static `dist/` folder — deployable as-is to Vercel, Netlify, GitHub Pages, or any static host.
