# Nancy Medina Portfolio

Personal portfolio site, built with [Astro](https://astro.build).

Live: https://nancy982.github.io/Web-Portfolio/

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:4321/Web-Portfolio.

## Build

```bash
npm run build      # outputs static site to ./dist
npm run preview    # preview the production build locally
```

## Deploy to GitHub Pages

Two options. Pick one:

### Option A: GitHub Actions (recommended)

Push this folder to the `main` branch of the `Web-Portfolio` repo. The workflow
at `.github/workflows/deploy.yml` will build and deploy automatically.

One-time setup in the GitHub repo:
1. Settings → Pages → **Source: GitHub Actions**.

### Option B: manual deploy via `gh-pages`

```bash
npm run deploy
```

This builds and pushes `./dist` to the `gh-pages` branch.

If you go this route, set Settings → Pages → **Source: Deploy from a branch →
gh-pages → / (root)**.

## Updating content

- **Résumé PDF**: replace `public/Resume_Nancy_Medina.pdf`.
- **Profile photo**: replace `public/profile.webp`.
- **Copy / sections**: edit the components in `src/components/`.
- **Colors & typography**: edit CSS variables at the top of `src/styles/global.css`.

## Structure

```
site/
├── astro.config.mjs       # base path = /Web-Portfolio for GH Pages
├── public/                # static assets (resume, photo, favicon)
└── src/
    ├── layouts/Layout.astro
    ├── pages/index.astro
    ├── components/
    │   ├── Hero.astro
    │   ├── About.astro
    │   ├── Skills.astro
    │   ├── Experience.astro
    │   ├── Projects.astro
    │   └── Contact.astro
    └── styles/global.css
```
