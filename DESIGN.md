# DESIGN.md: Ronak Lalwani, "Liner Notes"

## Brief
- Subject: Ronak Lalwani, freelance React / Next.js developer (AI features, admin panels, multi-tenant platforms) for startups and SaaS teams. Shopify stores and themes are the secondary offer, delivered through his studio, The Hive Digital.
- Job: get booked (email, 30-minute call). Audience: startup founders and product teams.
- Stack: existing Vite + React 19, prerendered per route (scripts/prerender.mjs). GSAP (ScrollTrigger, SplitText) and Lenis. Plain CSS tokens. No WebGL, no sound, no loader.
- The jazz influence is visual only. All copy is plain and professional.

## Concept Card
```
Idea:        The portfolio as a Blue Note record sleeve and its liner notes: Side A is the apps, Side B is the Shopify shelf, Side C is the studio's sites and mobile apps.
Metaphor:    Reid Miles-era sleeves: heavy condensed type, duotone photography, one blue, cream and warm black.
Signature:   Case open. The cover sleeve sits in place and the record slides out of it (the case hero), behind a page
             transition panel that rises like a sleeve being pulled over the page.
Emotion:     Confident, editorial, a little dry. A well-made object rather than a template.
Motion verb: Slide and settle. Sleeves slide, records come out, type rises. Nothing bounces.
Screenshot:  Hero: giant condensed headline beside a stack of blue duotone sleeves with a record peeking out.
```

## Palette
| Role | Hex | Use |
|---|---|---|
| cream (ground) | #f0e6d2 | page, header |
| sand | #e3d6b8 | about |
| ink (warm off-black) | #17120e | statement, Side B, footer, text |
| accent | #1f48d1 | one blue: duotone, highlights, contact field. 5.8:1 on cream, cream on blue 5.8:1 |
| hl on ink | #9db2ff | a lightened tint of the same blue, text on ink only (accent itself fails on ink) |
Section colours come from `--ground --text --muted --line --hl` (`.is-ink`, `.is-blue`), so text follows each ground.

## Type
- Display: Archivo variable at wdth 62, weight 800 (300 for contrast in the hero). Tracking -0.012em, leading 0.84 to 0.95.
- Text: Geist variable, 17 to 18px / 1.55. Labels 12px caps with +0.12em tracking.
- Fluid: hero clamp(2.7rem, 7.4vw, 9.4rem); work and case titles 7 to 13vw; statement clamp(2rem, 5.6vw, 6.8rem).

## Grid and rhythm
12 columns, 16px gutter (24px from 1024), page padding clamp(16px, 4vw, 64px). Alignment rule: display type on column 1, secondary text on column 7. Sections each use a different layout family: poster hero, full-bleed type band (ink), alternating album spreads (cream), compact 5-up shelf (ink), 4-up shelf for Side C (cream), ruled price-less list with sticky title, portrait + credits (sand), four-up numbered steps, full-bleed blue finale.

## Shape
Zero radius for sleeves and buttons; records are circles. Rules are 1px (3px for section tops).

## Motion language
- Ease: power3 / cubic-bezier(.22, 1, .36, 1). Durations small .4s, medium .6 to .9s, large 1.1 to 1.5s.
- One treatment per role: nav and utility = letter roll; primary button = ink block slides up; album and shelf = sleeve slides, record comes out, duotone resolves to colour (hover, focus, or, on touch, the sleeve nearest the middle of the screen).
- Idle: records turn slowly (one listener on GSAP's ticker, `engine/spin.js`); scroll speed pushes them. Paused off screen, off under reduced motion.
- Page transition: ink panel with the destination name rises, then leaves through the top (clip-path only).
- First paint is CSS keyframes only (headline is real text immediately). No loader: it would delay first paint. After a client route change the hero keyframes are held until the panel has gone.
- Reduced motion: no smooth scroll, no spin, no keyframes, no transitions; all content visible.

## Genericness test
A generic "developer portfolio" lands on dark ground, gradient, three feature cards. Changed: cream ground, one flat blue, duotone covers, credits and tracklists as the real information structure for every project.

## Assumptions to replace
- Case study copy (problem, architecture) is drafted from existing site content; check for accuracy.
- Cover crops (`coverPosition` in constants.js) are tuned by eye.
- og-image.png is still the previous design; regenerate with `node ~/.claude/skills/awwwards/scripts/og.mjs <url>`.
