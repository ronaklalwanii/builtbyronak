// Derived content for the index and the case pages. Source of truth stays in
// ../constants.js; this file only adds what the design needs on top of it:
// slugs, a one-line sector, image sizes and weight-class labels.
import { SHOPIFY_STORES, PROJECTS, SERVICES, ALSO_SHIPPED } from '../constants'
import dims from './dims.json'

const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const SECTORS = {
  'cozy-skies': 'Outdoor sleep',
  snatched: 'Beauty tech',
  soluna: 'Sauna and cold plunge',
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
  soluna: 'High-ticket buying',
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

const image = (src, slug) => {
  const s = toWebp(src)
  const [w, h] = dims[s] || [1280, 720]
  // Every capture has an 800 px sibling (cwebp -resize 800 0) for phones.
  return { src: s, small: s.replace(/\.webp$/, '-800.webp'), w, h, caption: caption(s, slug) }
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
    href: `/work/${slug}`,
    service: 'Shopify Store Development',
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
    href: `/work/${slug}`,
    service: 'Admin Panel Build',
  }
})

export const CASES = [...shopify, ...apps]
export const caseBySlug = (slug) => CASES.find((c) => c.slug === slug)
export const nextCase = (slug) => CASES[(CASES.findIndex((c) => c.slug === slug) + 1) % CASES.length]
export const SHOPIFY_CASES = shopify
export const APP_CASES = apps
const ALSO_SECTOR = {
  'Healthcare Portal Suite': 'Healthcare portals',
  Laine: 'AI marketing platform',
}
export const ALSO = ALSO_SHIPPED.map((a) => ({ ...a, sector: ALSO_SECTOR[a.name] || a.metric }))

// Services framed as weight classes, lightest job to heaviest. The turnaround
// is the real scope signal; the class is just the framing.
const CLASS_BY_SERVICE = {
  'Landing Page': 'Flyweight',
  'Performance Audit & Fix': 'Bantamweight',
  'Shopify Theme Development': 'Welterweight',
  'AI Integration': 'Middleweight',
  'Admin Panel Build': 'Light heavyweight',
  'Shopify Store Development': 'Heavyweight',
  'Monthly Retainer': 'Training camp',
}
export const CLASSES = Object.entries(CLASS_BY_SERVICE).map(([name, weight]) => ({
  weight,
  ...SERVICES.find((s) => s.name === name),
}))
