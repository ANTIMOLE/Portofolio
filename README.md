# Angello Khara Sitanggang — Portfolio

React + TypeScript + Vite, no UI framework — hand-written CSS so it doesn't
look like every other template. Single page, five sections: hero, about,
experience, work (2 case studies), skills, contact.

## Run it locally

```
npm install
npm run dev
```

## Before you deploy — 3 links to fill in

Open `src/data.ts`. Three placeholders need your real GitHub info:

CARI:
```
export const GITHUB_USERNAME = 'your-github-username' // GANTI
```
GANTI:
```
export const GITHUB_USERNAME = 'angellokhs'  // <- your actual GitHub username
```

CARI:
```
export const SIAKAD_REPO_URL = 'https://github.com/your-github-username/siakad-diakonos' // GANTI
```
GANTI: point it at the actual SIAKAD repo URL (make it public, or this link will 404 for visitors).

CARI:
```
export const ZENIT_REPO_URL = 'https://github.com/your-github-username/zenit' // GANTI
```
GANTI: point it at the actual ZENIT/thesis repo URL.

Everything else in `data.ts` (email, phone, LinkedIn, the SIAKAD live URL) is
already filled in from your CV — check it's still current before you deploy.

The CV file itself is `public/Angello-Khara-Sitanggang-CV.pdf` — replace that
file (keep the same name, or update `CV_PATH` in `data.ts`) whenever you
update your resume.

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `portfolio`) and push this project to it:
   ```
   git init
   git add .
   git commit -m "portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub
   Actions**. That's it — the workflow in `.github/workflows/deploy.yml`
   builds and deploys on every push to `main`.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`
   after the first Action run finishes (check the **Actions** tab).

`vite.config.ts` uses a relative base path (`base: './'`), so it works at
that subpath without any extra config — no need to touch it, even if you
rename the repo.

## Project structure

```
src/
  data.ts           all real content lives here — edit this, not the components
  components/
    Nav.tsx
    Hero.tsx
    About.tsx
    Experience.tsx  work history + org experience + education, one timeline
    Projects.tsx     the two case studies
    Skills.tsx
    Footer.tsx
  index.css          all styling — design tokens at the top
```
