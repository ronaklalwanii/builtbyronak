# DESIGN.md: Ronak Lalwani, "Closing Distance"

## Brief
- Subject: Ronak Lalwani, freelance Shopify and React developer, Ahmedabad. Introvert. Jazz, blues, whiskey, MMA, travel.
- Audience: founders and brand owners (Shopify), product teams (React, admin panels, AI).
- Job: get booked (email, 30 minute call).
- Assets: one portrait, 15 Shopify store captures, 3 app case sets, real bio and experience (src/constants.js).
- Stack: existing Vite + React 19 (prerendered). Added GSAP (ScrollTrigger, SplitText), Lenis, OGL, Archivo variable. Tailwind dropped for plain CSS tokens.

## Concepts (3 territories)
| | Idea | Anchor | Signature | O / F / Fe / P |
|---|---|---|---|---|
| A. Personal world | **Closing distance.** MMA range management read through jazz rests: the page starts at long range, quiet and almost empty, and closes to contact as you scroll | Ronak is an introvert who trains MMA and plays space like jazz does | scroll closes the gap; type compresses from wide and light to condensed and heavy; contact lands as a hit | 5 / 5 / 4 / 1 |
| B. Material | The 12 bar blues as page structure, 12 bars of 4 beats | blues form | a chord grid | 3 / 4 / 3 / 3 |
| C. Name | Lalwani as a ledger/monogram | name | none strong | 2 / 3 / 4 / 3 |

Pick A. Steal from B for the idle pulse: a swing tempo with a backbeat on 2 and 4.

## Concept Card
```
Idea:        An introvert's portfolio: it starts at long range and closes the distance as you scroll, until contact.
Metaphor:    MMA range (long range, striking, clinch, contact) plus jazz rests (the silence is part of the piece).
Signature:   The distance driver. One variable (range 0..1) sets the readout, the width/weight of the type per section,
             and the field color. Contact lands as a hit: slash flash, field flips to whiskey, short shake.
Emotion:     Calm, controlled, a little dangerous. A quiet room before something happens.
Motion verb: Strike and settle. Fast arrivals (power4.out), dead stops, long holds. Nothing wobbles after it lands.
Screenshot:  The void hero (tiny portrait, wide thin name) and the amber contact field with the condensed headline.
```

## Palette
| Role | Hex | Source |
|---|---|---|
| ground | #090b11 | the room at midnight, Blue Note blue-black |
| ink | #e9e6df | bone, bar lamp on paper |
| muted | #8e95a4 | smoke (6.1:1 on ground) |
| line | ink at 14% | hairlines |
| accent / curtain | #e8932a | whiskey in the glass |
Contact flips ground to whiskey and ink to midnight through global vars on `<html>` (`--ground --ink --muted --line`).
Genericness: dark ground plus one warm accent is common, so the accent is used for one thing only: the hit (curtain slash, contact field, focus ring, primary button). Ground leans blue, not neutral black.

## Type
- Archivo variable, with width axis 62..125 and weight 100..900. Display and text. `--w` and `--wt` are set per section: hero 125/200 (far), statement 100/300, work 75/700, services 70/750, about 62/800, contact 62/900 (close). Distance is typographic.
- Geist Mono (self-hosted) for the HUD readout, labels, data. Tabular figures.
- Scale (fluid): xl clamp(3rem, 9.4vw, 11rem) for the hero line; display clamp(3.4rem, 14vw, 17rem) for contact; l clamp(2.4rem, 6.4vw, 7rem) for work names; body 17px/1.55.
- Tracking: display -0.015em, caps labels +0.08em at 12px mono.

## Grid and rhythm
12 columns, 16 px gutter (24 px from 1024), page padding clamp(16px, 2.6vw, 44px). Alignment: left edges on column 1, secondary text on column 8 (7 on mobile it stacks). Section rhythm alternates void, wall of type, list, ruled table, split portrait, stair, field.

## Shape
Zero radius. One recurring cut: the slash (8 degree diagonal) on the curtain, the preview image, the primary button, the contact field edge.

## Motion language
- ease `strike` = power4.out (CSS cubic-bezier(.16,1,.3,1)); durations small .25, medium .55, large .95.
- Hover verbs (one per role): nav and utility = letter roll (inner text moves, CSS pseudo duplicate), primary button = slash fill sweep, work rows = row shifts 1.2rem, others dim, preview image follows with velocity skew, links in body keep an underline.
- Idle: swing pulse at 96 bpm on one GSAP ticker. `--beat` spikes on beats 2 and 4. It drives the lamp in the hero haze, the HUD dot, the readout wobble, a hairline. Marquee crawls (speed follows scroll velocity). Off under reduced motion, paused off screen.
- Transitions: loader counter then slash wipe; page change is a slash panel carrying the destination name.
- Sound: opt in, off by default. Ride tick on 2 and 4, thump on contact.

## Composition plan
```
HERO (long range)            STATEMENT (wall)           WORK (index)
+--------------------+       +--------------------+     +--------------------+
|HUD            nav  |       | I stay at range,   |     |Work                |
|                    |       | measure the        |     | COZY SKIES    tags |
|          [portrait]|       | problem, and       |     | SNATCHED      tags |
|                    |       | close only when    |     | (hover: preview)   |
|R o n a k  L a l w a|       | the strike lands.  | meta|                    |
|sub                 |       +--------------------+     +--------------------+

SERVICES (weight classes)    ABOUT (clinch)             PROCESS (stair)       CONTACT (field)
+--------------------+       +--------------------+     +--------------------+ +------------+
|sticky| FLYWEIGHT   |       |[portrait] | bio    |     |R1                  | |CLOSE THE   |
|title | Landing ... |       |  duotone  | timeline|    |   R2               | |DISTANCE.   |
|      | BANTAM ...  |       +--MARQUEE jazz blues+     |      R3            | |email  call |
+--------------------+       +--------------------+     |         R4         | +------------+
```

## Decisions and assumptions
- Single page plus `/work/<slug>` case pages for all 18 projects (15 Shopify, 3 apps) and a designed 404. Tiny History API router, prerendered per route, `dist/work/<slug>/index.html` so static hosts serve them without rewrites.
- Pricing stays hidden (existing decision). Service turnarounds shown.
- Copy about Ronak's tastes (jazz, blues, whiskey, MMA, travel, introvert) comes from the prompt. Keep the lines honest; edit anything that is not literally true. No artist names are claimed.
- Idle motion is a decision, not a decoration: the page keeps a swing pulse like a room with music on.
- Weight-class labels for services are a playful framing of the real turnaround; the labels are not claims about skill.

## Built (as shipped)
- Fixed frame: name and nav top (steps aside on scroll down), range readout in the left margin rail, status and sound in the right margin rail (rotated, so corners stay empty and nothing fixed lands on content). On phones: a thumb-reach bottom tab bar and the readout top right.
- Contact flips `--ground --ink --hl --muted --line` on `<html>` behind a slash wipe (the hit). Any accent-colored text uses `--hl`, which turns midnight on the whiskey field.
- Loader: CSS count (runs before JS), JS only handles the slash exit; bails out by itself after 1.8 s if the script is late (then the intro is skipped, content stays visible).
- Phones get one still frame of the hero haze (battery, and the first screen settles); the beat still moves the portrait and its range-finder brackets.
- Case pages are still at rest apart from the rail; hover, the curtain and the next-bout roll carry the life there. Decision, not an omission.
- `result` is an optional field on a Shopify store in constants.js; when set it shows as a Result line on the case page. Add real outcomes there.
