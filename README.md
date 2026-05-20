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

```bash
npm run deploy
```

This builds the site and pushes `./dist` to the `gh-pages` branch of the repo
(which is what GitHub Pages serves from). Re-run any time you want to publish
updates.

Repo Pages setting: Settings → Pages → **Source: Deploy from a branch →
gh-pages → / (root)**. This should already be set.

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
