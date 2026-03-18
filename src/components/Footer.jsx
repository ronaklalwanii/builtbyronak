import { PERSONAL } from '../constants'

export default function Footer() {
  return (
    <footer className="px-12 py-6 border-t border-[rgba(99,157,255,0.08)] flex justify-between items-center font-mono text-xs text-text-dim flex-wrap gap-3">
      <span>© {new Date().getFullYear()} {PERSONAL.name} · {PERSONAL.domain}</span>
      <span>{PERSONAL.footerNote}</span>
    </footer>
  )
}
