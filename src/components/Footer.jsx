import { PERSONAL } from '../constants'

export default function Footer() {
  return (
    <footer className="rule">
      <div className="shell py-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-ink-faint">
        <span>
          © {new Date().getFullYear()} {PERSONAL.name} · {PERSONAL.domain}
        </span>
        <span>{PERSONAL.footerNote}</span>
      </div>
    </footer>
  )
}
