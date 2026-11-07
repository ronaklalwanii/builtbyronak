import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { CASES } from './data/work'
import { routeMeta } from './data/meta'

// Rendered at build time by scripts/prerender.mjs, once per route.
export const routes = ['/', ...CASES.map((c) => c.href)]
export { routeMeta }
export function render(path) {
  return renderToString(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  )
}
