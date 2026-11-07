import { CLASSES } from '../data/work'
import { usePage, gsap, ScrollTrigger, revealLines, reduced, EASE } from '../engine/motion'

// Services as weight classes: the lightest job first, the heaviest last.
export default function Services() {
  const ref = usePage((root) => {
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))
    if (reduced()) return
    const items = [...root.querySelectorAll('.class')]
    gsap.set(items, { autoAlpha: 0, y: 26 })
    ScrollTrigger.batch(items, {
      start: 'top 92%',
      once: true,
      onEnter: (b) => gsap.to(b, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.06, ease: EASE }),
    })
  }, [])

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services__side">
        <h2>Services</h2>
        <p data-lines>
          Seven ways to hire me, sorted by weight class: a quick fix is a flyweight, a full store is a heavyweight. Every job is scoped in writing before it starts.
        </p>
      </div>
      <ul className="classes">
        {CLASSES.map((s) => (
          <li className="class" key={s.name}>
            <span className="class__weight">{s.weight}</span>
            <div className="class__body">
              <h3>{s.name}</h3>
              <p>{s.short}</p>
            </div>
            <span className="class__time">{s.turnaround.split('·')[0].trim()}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
