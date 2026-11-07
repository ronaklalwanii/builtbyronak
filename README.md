# builtbyronak.com

Portfolio for Ronak Lalwani, freelance Shopify and React developer. The concept, palette, type and motion rules are in [DESIGN.md](DESIGN.md).

**Closing Distance:** the page starts at long range (wide, light, quiet) and closes to contact as you scroll. One driver (`src/engine/driver.js`) turns scroll into the distance readout and keeps a swing pulse going at rest.

## Stack
Vite, React 19, GSAP (ScrollTrigger, SplitText), Lenis, OGL (lazy), Archivo variable and Geist Mono (self-hosted, subset). Plain CSS with tokens in `src/index.css`. No router library: a small History API router in `src/router.jsx`.

## Run
```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # client + SSR bundle, then prerender every route into dist/
pnpm preview
```
`pnpm build` writes `dist/index.html`, `dist/work/<slug>/index.html` for every project, `dist/404.html` and `dist/sitemap.xml`, so any static host serves them without rewrites.

## Edit content
Everything is in `src/constants.js` (personal info, services, work history, Shopify stores, projects). `src/data/work.js` derives slugs, sectors and weight-class labels from it; add a sector line there for any new project. Add screenshots under `public/images/projects/` and run `pnpm images` if you need new sizes.

## Deploy
Static output in `dist/`. On Vercel: framework preset Vite, build command `pnpm build`, output `dist`.
