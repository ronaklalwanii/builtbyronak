import { useEffect, useRef, useState } from 'react'
import { PERSONAL, NAV_LINKS } from '../constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const sentinel = useRef(null)

  // IntersectionObserver instead of a scroll listener: the callback fires
  // twice over the life of the page rather than on every scroll frame.
  useEffect(() => {
    const el = sentinel.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Zero-height trip wire just below the fold line. */}
      <div ref={sentinel} aria-hidden="true" className="absolute top-2 h-px w-full" />

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
          scrolled
            ? 'bg-canvas/85 backdrop-blur-md border-b border-hair'
            : 'border-b border-transparent'
        }`}
      >
        <div className="shell flex items-center justify-between gap-6 h-[68px]">
          <a href="#hero" className="flex flex-col leading-none gap-1">
            <span className="text-[13px] font-semibold tracking-[0.06em] uppercase text-ink">
              {PERSONAL.name}
            </span>
            <span className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-ink-dim">
              Senior Frontend Engineer
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-ink-soft hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {PERSONAL.available && (
              <span className="hidden sm:flex items-center gap-2 text-[12.5px] text-live">
                <span className="w-1.5 h-1.5 rounded-full bg-live animate-pulse-dot" />
                Available now
              </span>
            )}

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation"
              className="md:hidden flex flex-col gap-[5px] p-1"
            >
              <span className="block w-5 h-px bg-ink-soft" />
              <span className="block w-5 h-px bg-ink-soft" />
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" className="md:hidden border-t border-hair bg-canvas">
            <div className="shell py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[14px] text-ink-soft"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
