import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')

const tree = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The production build is prerendered (scripts/prerender.mjs), so #root
// already has markup and we hydrate over it. In dev it is empty, so we mount.
if (root.hasChildNodes()) {
  hydrateRoot(root, tree)
} else {
  createRoot(root).render(tree)
}
