import { PROCESS } from '../constants'
import { usePage, gsap, ScrollTrigger, reduced, EASE } from '../engine/motion'

// Four steps in order, so the numbers carry information.
export default function Process() {
  const ref = usePage((root) => {
    if (reduced()) return
    const steps = [...root.querySelectorAll('.step')]
    gsap.set(steps, { autoAlpha: 0, y: 22 })
    ScrollTrigger.batch(steps, {
      start: 'top 90%',
      once: true,
      onEnter: (b) => gsap.to(b, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, ease: EASE }),
    })
  }, [])

  return (
    <section className="process" id="process" ref={ref}>
      <h2>Process</h2>
      <ol className="steps">
        {PROCESS.map((s, i) => (
          <li className="step" key={s.title}>
            <span className="step__n">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
