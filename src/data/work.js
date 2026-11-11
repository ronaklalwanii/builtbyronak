// Derived content for the index and the case pages. Source of truth stays in
// ../constants.js; this file only adds what the design needs on top of it:
// slugs, a one-line sector, cover crops and image sizes.
import { SHOPIFY_STORES, PROJECTS, ALSO_SHIPPED, STUDIO_BUILDS } from '../constants'
import dims from './dims.json'

const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const SECTORS = {
  'cozy-skies': 'Outdoor sleep',
  snatched: 'Beauty tech',
  'soluna-wellness': 'Sauna and cold plunge',
  kovari: 'Haircare',
  'dear-glow': 'Beauty tools',
  elqorin: 'Contrast therapy',
  'consent-in-practice': 'Training consultancy',
  'pj-soul': 'Family sleepwear',
  'milo-and-mae': 'Parenting',
  'fig-and-mouse': 'Dog accessories',
  albies: 'Dog gear',
  'scented-drive': 'Car fragrance',
  'oryn-wellness': 'Home recovery',
  'elevate-her': 'Supplements',
  'avor-wellness': 'Home sauna',
  medicalease: 'Healthcare litigation AI',
  'react-admin-templates': 'Admin dashboards',
  'cyncly-homebase': 'Multi-tenant platform',
}

// One line on what each store is built around, taken from its summary.
const HOOKS = {
  'cozy-skies': 'One hero product',
  snatched: 'A device range',
  'soluna-wellness': 'High-ticket buying',
  kovari: 'Three product ranges',
  'dear-glow': 'Best-seller bundle',
  elqorin: 'Three priced paths',
  'consent-in-practice': 'Five programmes',
  'pj-soul': 'A seasonal launch',
  'milo-and-mae': 'One smart product',
  'fig-and-mouse': 'A giving-back story',
  albies: 'Control, freedom, safety',
  'scented-drive': 'Six scents',
  'oryn-wellness': 'A home ritual',
  'elevate-her': 'Ingredient education',
  'avor-wellness': 'Infrared saunas',
}

// "cozy-skies-homepage-hero.webp" -> "Homepage hero"
const caption = (src, slug) => {
  const base = src.split('/').pop().replace(/\.\w+$/, '')
  const words = base.replace(/-\d+$/, '').split('-')
  const prefix = slug.split('-')
  let i = 0
  while (i < prefix.length && words[i] === prefix[i]) i++
  const rest = (i ? words.slice(i) : words).join(' ')
  return rest.charAt(0).toUpperCase() + rest.slice(1)
}

const toWebp = (src) => {
  const w = src.replace(/\.(jpg|png)$/i, '.webp')
  return dims[w] ? w : src
}

const image = (src, slug, cap) => {
  const s = toWebp(src)
  const [w, h] = dims[s] || [1280, 720]
  // Every capture has an 800 px sibling (cwebp -resize 800 0) for phones.
  return { src: s, small: s.replace(/\.webp$/, '-800.webp'), w, h, caption: cap || caption(s, slug) }
}

const shopify = SHOPIFY_STORES.map((s) => {
  const slug = slugify(s.name)
  return {
    slug,
    kind: 'shopify',
    name: s.name,
    sector: SECTORS[slug],
    hook: HOOKS[slug],
    result: s.result,
    blurb: s.blurb,
    summary: s.summary,
    tags: s.tags,
    images: s.images.map((i) => image(i, slug)),
    cover: { ...image(s.images[0], slug), position: '50% 0%' },
    href: `/work/${slug}`,
    role: 'Design and build, The Hive Digital',
    live: s.live || '',
  }
})

const apps = PROJECTS.map((p) => {
  const slug = slugify(p.name)
  return {
    slug,
    kind: 'app',
    name: p.name,
    sector: SECTORS[slug],
    hook: p.tags.slice(0, 3).join(', '),
    blurb: p.metric,
    summary: p.description,
    tags: p.tags,
    links: p.links,
    images: p.carouselImages.map((i) => image(i, slug)),
    cover: { ...image(p.cover, slug), position: p.coverPosition },
    href: `/work/${slug}`,
    role: p.role,
    tracks: p.tracks,
    study: p.study,
    outcome: p.study.outcome,
  }
})

// Side C: sites and mobile apps from the studio. Slug, sector and captions are
// written out in constants.js, so nothing is derived here.
const studio = STUDIO_BUILDS.map((p) => {
  const images = p.images.map(([src, cap]) => image(src, p.slug, cap))
  return {
    slug: p.slug,
    kind: 'studio',
    name: p.name,
    sector: p.sector,
    blurb: p.blurb,
    summary: p.summary,
    tags: p.tags,
    images,
    cover: { ...images[0], position: '50% 0%' },
    href: `/work/${p.slug}`,
    role: p.role,
    live: p.live || '',
    tracks: p.tracks,
    study: { problem: p.problem, built: p.summary, outcome: p.outcome },
    outcome: p.outcome,
  }
})

// Side A order: the case studies, strongest first.
const ORDER = ['medicalease', 'cyncly-homebase', 'react-admin-templates']
export const APP_CASES = ORDER.map((slug) => apps.find((a) => a.slug === slug))
export const SHOPIFY_CASES = shopify
export const STUDIO_CASES = studio

// Record centre label: the project's initials and its place on the record (A1, B3...).
const initials = (name) => (name.match(/[A-Z]/g) || [name[0]]).slice(0, 3).join('')
APP_CASES.forEach((c, i) => (c.mark = { initials: initials(c.name), no: `A${i + 1}` }))
SHOPIFY_CASES.forEach((c, i) => (c.mark = { initials: initials(c.name), no: `B${i + 1}` }))
STUDIO_CASES.forEach((c, i) => (c.mark = { initials: initials(c.name), no: `C${i + 1}` }))
export const CASES = [...APP_CASES, ...SHOPIFY_CASES, ...STUDIO_CASES]
export const caseBySlug = (slug) => CASES.find((c) => c.slug === slug)
// "Next" stays on the same side of the record.
export const nextCase = (slug) => {
  const side = { app: APP_CASES, shopify: SHOPIFY_CASES, studio: STUDIO_CASES }[caseBySlug(slug).kind]
  return side[(side.findIndex((c) => c.slug === slug) + 1) % side.length]
}
const ALSO_SECTOR = {
  'Healthcare Portal Suite': 'Healthcare portals',
  Laine: 'AI marketing platform',
}
export const ALSO = ALSO_SHIPPED.map((a) => ({ ...a, sector: ALSO_SECTOR[a.name] || a.metric }))
