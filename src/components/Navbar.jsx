import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { PERSONAL, NAV_LINKS } from '../constants'
import { cn } from '../lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 transition-all duration-300',
      scrolled
        ? 'border-b border-[rgba(99,157,255,0.1)] bg-[rgba(8,12,18,0.88)] backdrop-blur-xl'
        : 'bg-transparent'
    )}>
      {/* Logo */}
      <a href="#" className="font-semibold tracking-tight text-text-primary text-[15px]">
        {PERSONAL.name}
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs text-text-secondary tracking-[0.05em] uppercase hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={`mailto:${PERSONAL.email}`}
        className="hidden md:inline-flex items-center text-xs font-medium px-4 py-2 border border-blue-accent text-blue-accent rounded transition-all duration-200 hover:bg-blue-accent hover:text-white tracking-wide"
      >
        Hire me
      </a>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-text-secondary hover:text-text-primary"
        onClick={() => setMenuOpen(o => !o)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-secondary border-b border-[rgba(99,157,255,0.1)] flex flex-col p-6 gap-5 md:hidden">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${PERSONAL.email}`}
            className="text-sm font-medium text-blue-accent"
          >
            {PERSONAL.email}
          </a>
        </div>
      )}
    </nav>
  )
}
