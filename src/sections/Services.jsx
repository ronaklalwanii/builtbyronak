import { SERVICES } from '../constants'
import { usePage, gsap, ScrollTrigger, revealLines, reduced, EASE } from '../engine/motion'

// Prices stay in SERVICES but are not shown.
export default function Services() {
  const ref = usePage((root) => {
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))
    if (reduced()) return
    const items = [...root.querySelectorAll('.svc')]
    gsap.set(items, { autoAlpha: 0, y: 22 })
    ScrollTrigger.batch(items, {
      start: 'top 92%',
      once: true,
      onEnter: (b) => gsap.to(b, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.06, ease: EASE }),
    })
  }, [])

  return (
    <section className="services" id="services" ref={ref}>
      <header className="services__side">
        <h2>Services</h2>
        <p data-lines>
          Engagements from a one-week audit to a full product build. Every one is scoped and quoted in writing before work
          starts.
        </p>
      </header>
      <ul className="svcs">
        {SERVICES.map((s) => (
          <li className="svc" key={s.name}>
            <h3>{s.name}</h3>
            <p>{s.short}</p>
            <span className="svc__time">{s.turnaround}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
