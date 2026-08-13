import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Rendered once at build time by scripts/prerender.mjs. No CSS import here:
// the client build already emits the stylesheet and links it in index.html.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
