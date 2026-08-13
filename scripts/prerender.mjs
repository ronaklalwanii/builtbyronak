/**
 * Renders the app to static HTML at build time and injects it into
 * dist/index.html, so crawlers and link unfurlers get real markup instead of
 * an empty <div id="root">. The client hydrates over it (see src/main.jsx).
 *
 * Run by `pnpm build` after the client and SSR bundles are built.
 */
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const TEMPLATE = 'dist/index.html'
const SSR_ENTRY = 'dist-ssr/entry-server.js'
const MARKER = '<div id="root"></div>'

const { render } = await import(pathToFileURL(resolve(SSR_ENTRY)).href)
const html = render()

const template = readFileSync(TEMPLATE, 'utf8')

if (!template.includes(MARKER)) {
  throw new Error(`prerender: could not find ${MARKER} in ${TEMPLATE}`)
}

writeFileSync(TEMPLATE, template.replace(MARKER, `<div id="root">${html}</div>`), 'utf8')

// The SSR bundle is a build artefact, not something to deploy.
rmSync('dist-ssr', { recursive: true, force: true })

console.log(`prerender: injected ${html.length.toLocaleString()} chars into ${TEMPLATE}`)
