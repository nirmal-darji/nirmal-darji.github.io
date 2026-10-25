# nirmal-darji.github.io

Personal portfolio: profile, experience, projects and certificates. Built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

## Editing content

All content lives in a few files — no code changes needed:

| What | Where |
|---|---|
| Name, headline, about, skills, stats, links | `src/data/profile.ts` |
| Employment history | `src/data/experience.yaml` |
| Certificates | `src/data/certificates.yaml` |
| Project case studies (one file each) | `src/content/projects/*.md` |
| CV download | `public/cv.pdf` |
| Link-preview image (1200×630) | `public/og.png` |
| Project screenshots | `src/assets/` (reference via `cover: ../../assets/name.png`) |

The schema in `src/content.config.ts` validates everything at build time, so a typo in a date or URL fails the build instead of shipping.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `http://localhost:4321` |
| `npm run check` | Type-check and validate content |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the production build |
