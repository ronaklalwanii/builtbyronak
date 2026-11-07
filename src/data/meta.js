import { PERSONAL } from '../constants'
import { caseBySlug } from './work'

const SITE = `https://${PERSONAL.domain}`
const HOME = {
  title: 'Ronak Lalwani, Freelance Shopify & React Developer',
  description:
    'Freelance developer building Shopify stores and custom themes, and React and Next.js apps with AI features and admin panels. 7+ years. You work with me directly.',
}

// Single source for <title>, description and canonical, used by the
// prerender script and by the client router on navigation.
export function routeMeta(path) {
  const m = path.match(/^\/work\/([^/]+)\/?$/)
  const c = m && caseBySlug(m[1])
  if (c) {
    return {
      title: `${c.name}, ${c.sector} | Ronak Lalwani`,
      description: `${c.blurb} ${c.summary}`.slice(0, 158).replace(/\s+\S*$/, '') + '.',
      canonical: `${SITE}${c.href}`,
      robots: 'index, follow',
    }
  }
  if (path === '/' || path === '') return { ...HOME, canonical: `${SITE}/`, robots: 'index, follow' }
  return {
    title: 'Out of range | Ronak Lalwani',
    description: 'This page does not exist. Head back to the start.',
    canonical: `${SITE}/`,
    robots: 'noindex',
  }
}
