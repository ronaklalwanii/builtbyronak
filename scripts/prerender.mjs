/**
 * Renders every route to static HTML at build time and writes it next to the
 * client build, so crawlers and link unfurlers get real markup and static
 * hosts serve each route without rewrites:
 *   /            -> dist/index.html
 *   /work/<slug> -> dist/work/<slug>/index.html
 *   unknown      -> dist/404.html
 * The client hydrates over it (see src/main.jsx). Also writes sitemap.xml.
 *
 * Run by `pnpm build` after the client and SSR bundles are built.
 */
import { readFileSync, writeFileSync, rmSync, mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve, dirname } from 'node:path'

const TEMPLATE = readFileSync('dist/index.html', 'utf8')
const MARKER = '<div id="root"></div>'
if (!TEMPLATE.includes(MARKER)) throw new Error(`prerender: could not find ${MARKER} in dist/index.html`)

const { render, routes, routeMeta } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const meta = (html, name, attr, value) =>
  html.replace(new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(")`), `$1${esc(value)}$2`)

function page(path) {
  const m = routeMeta(path)
  let html = TEMPLATE.replace(MARKER, `<div id="root">${render(path)}</div>`)
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(m.title)}</title>`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${m.canonical}$2`)
  html = meta(html, 'description', 'name', m.description)
  html = meta(html, 'robots', 'name', m.robots)
  html = meta(html, 'og:title', 'property', m.title)
  html = meta(html, 'og:description', 'property', m.description)
  html = meta(html, 'og:url', 'property', m.canonical)
  html = meta(html, 'twitter:title', 'name', m.title)
  html = meta(html, 'twitter:description', 'name', m.description)
  return html
}

const write = (file, html) => {
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html, 'utf8')
}

for (const route of routes) {
  write(route === '/' ? 'dist/index.html' : `dist${route}/index.html`, page(route))
}
write('dist/404.html', page('/404'))

const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .map((r) => `  <url>\n    <loc>${routeMeta(r).canonical}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r === '/' ? '1.0' : '0.7'}</priority>\n  </url>`)
  .join('\n')
write('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)

// The SSR bundle is a build artefact, not something to deploy.
rmSync('dist-ssr', { recursive: true, force: true })
console.log(`prerender: ${routes.length} routes + 404 + sitemap`)
