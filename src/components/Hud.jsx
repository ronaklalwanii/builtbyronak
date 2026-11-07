import { useEffect, useRef, useState } from 'react'
import { useRouter } from '../router'
import { ScrollTrigger } from '../engine/motion'
import { PERSONAL } from '../constants'
import { Roll, A } from './A'

const NAV = [
  ['Work', '/#work', 'work'],
  ['Services', '/#services', 'services'],
  ['About', '/#about', 'about'],
  ['Contact', '/#contact', 'contact'],
]

const ist = () =>
  new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })

// "Available for work" and the live IST time. Rendered in the header on wide
// screens and in the hero on phones (see .status--bar / .status--hero).
export function Status({ className = '' }) {
  const [time, setTime] = useState('')
  useEffect(() => {
    setTime(ist())
    const id = setInterval(() => setTime(ist()), 20000)
    return () => clearInterval(id)
  }, [])
  return (
    <p className={`status ${className}`}>
      {PERSONAL.available && (
        <span className="status__av">
          <i aria-hidden="true" />
          Available for work
        </span>
      )}
      {time && <span className="status__t">IST {time}</span>}
    </p>
  )
}

// Fixed header on a solid ground, so it stays legible over every section.
// It steps aside while scrolling down and returns on the way up.
export default function Hud() {
  const { path } = useRouter()
  const bar = useRef(null)
  const nav = useRef(null)

  useEffect(() => {
    const away = ScrollTrigger.create({
      start: 240,
      end: 'max',
      onUpdate: (self) => bar.current?.classList.toggle('is-away', self.direction === 1),
      onLeaveBack: () => bar.current?.classList.remove('is-away'),
    })
    const marks = ['work', 'services', 'about', 'contact'].map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      return ScrollTrigger.create({
        trigger: el,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle: (s) => {
          const a = nav.current?.querySelector(`[data-id="${id}"]`)
          if (!a) return
          if (s.isActive) a.setAttribute('aria-current', 'location')
          else a.removeAttribute('aria-current')
        },
      })
    })
    return () => {
      away.kill()
      marks.forEach((m) => m?.kill())
    }
  }, [path])

  const onCase = path.startsWith('/work/')

  return (
    <header className="hud" ref={bar}>
      <A href="/" className="hud__name" aria-label="Ronak Lalwani, home">
        Ronak Lalwani
      </A>
      <Status className="status--bar" />
      <nav className="hud__nav" aria-label="Primary" ref={nav}>
        {NAV.map(([label, href, id]) => (
          <Roll key={id} href={href} data-id={id} {...(onCase && id === 'work' ? { 'aria-current': 'page' } : {})}>
            {label}
          </Roll>
        ))}
      </nav>
    </header>
  )
}
