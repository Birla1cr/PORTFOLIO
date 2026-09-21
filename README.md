# Ankit Birla — Portfolio

A React + Tailwind CSS portfolio built around the AI-Powered CRM & Sales
Intelligence Dashboard as the featured project, following the structure:
Home → About → Skills → AI → Projects → Experience → Education → Contact.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (scroll-in animations)
- react-icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
```

## Personalize

Everything editable — text, links, projects, skills, experience — lives in
one file: [`src/data/content.js`](src/data/content.js). Update:

- `profile` — email, GitHub, LinkedIn, resume path
- `about`, `skills`, `aiFeatures`
- `featuredProject`, `otherProjects` — add real `links.live` / `links.github`
  once deployed
- `experience`, `education`

To wire up the resume download button, drop a file at `public/resume.pdf`
(the `profile.resumeUrl` already points there).

Colors/fonts are defined as design tokens in [`src/index.css`](src/index.css)
under `@theme` — change `--color-accent`, `--color-accent-2`, etc. to
re-theme the whole site from one place.

## Deploy

Static build — deploy `/dist` to Vercel, Netlify, GitHub Pages, or any
static host after running `npm run build`.
