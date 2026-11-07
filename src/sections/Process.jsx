import { PROCESS } from '../constants'
import { usePage, gsap, ScrollTrigger, reduced, EASE } from '../engine/motion'

// Four rounds, a staircase: each one steps closer.
export default function Process() {
  const ref = usePage((root) => {
    if (reduced()) return
    const steps = [...root.querySelectorAll('.round')]
    gsap.set(steps, { autoAlpha: 0, xPercent: -4 })
    steps.forEach((s) =>
      ScrollTrigger.create({
        trigger: s,
        start: 'top 88%',
        once: true,
        onEnter: () => gsap.to(s, { autoAlpha: 1, xPercent: 0, duration: 0.9, ease: EASE }),
      }),
    )
  }, [])

  return (
    <section className="process" id="process" ref={ref}>
      <h2>Process</h2>
      <ol className="rounds">
        {PROCESS.map((s, i) => (
          <li className="round" key={s.title} style={{ '--i': i }}>
            <span className="round__n">
              <small>Round</small>
              {i + 1}
            </span>
            <div className="round__body">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
