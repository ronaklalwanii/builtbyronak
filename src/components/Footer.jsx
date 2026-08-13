import { PERSONAL } from '../constants'

// __BUILD_YEAR__ is injected by Vite (see vite.config.js). Using it instead
// of new Date() keeps the prerendered HTML and the hydrated client identical,
// which a runtime year cannot guarantee across a New Year boundary.
export default function Footer() {
  return (
    <footer className="rule">
      <div className="shell py-7 flex flex-wrap items-center justify-between gap-3 text-[12px] text-ink-dim">
        <span>
          © {__BUILD_YEAR__} {PERSONAL.name} · {PERSONAL.domain}
        </span>
        <span>{PERSONAL.footerNote}</span>
      </div>
    </footer>
  )
}
