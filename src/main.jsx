import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const path = window.location.pathname.replace(/\/index\.html$/, '') || '/'

const tree = (
  <StrictMode>
    <App path={path} />
  </StrictMode>
)

// The production build is prerendered per route (scripts/prerender.mjs), so
// #root already has markup and we hydrate over it. In dev it is empty.
if (root.hasChildNodes()) hydrateRoot(root, tree)
else createRoot(root).render(tree)
