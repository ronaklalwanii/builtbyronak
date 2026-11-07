import { PERSONAL } from '../constants'
import { caseBySlug } from './work'

const SITE = `https://${PERSONAL.domain}`
const HOME = {
  title: 'Ronak Lalwani, Freelance React & Next.js Developer (AI, SaaS, Shopify)',
  description:
    'Freelance developer building React and Next.js apps with AI features, admin panels and multi-tenant platforms for startups, plus Shopify stores and themes. 7+ years. You work with me directly.',
}

// Single source for <title>, description and canonical, used by the
// prerender script and by the client router on navigation.
export function routeMeta(path) {
  const m = path.match(/^\/work\/([^/]+)\/?$/)
  const c = m && caseBySlug(m[1])
  if (c) {
    return {
      title: `${c.name}, ${c.sector} | Ronak Lalwani`,
      description: `${c.blurb}. ${c.summary}`.replace(/\.\./g, '.').slice(0, 158).replace(/\s+\S*$/, '') + '.',
      canonical: `${SITE}${c.href}`,
      robots: 'index, follow',
    }
  }
  if (path === '/' || path === '') return { ...HOME, canonical: `${SITE}/`, robots: 'index, follow' }
  return {
    title: 'Page not found | Ronak Lalwani',
    description: "This page doesn't exist. The work is one click back.",
    canonical: `${SITE}/`,
    robots: 'noindex',
  }
}
