import { useRef, useEffect } from 'react'
import { PERSONAL } from '../constants'
import { APP_CASES } from '../data/work'
import { intro } from '../engine/motion'
import { Button, Roll, A } from '../components/A'
import { Status } from '../components/Hud'
import Sleeve from '../components/Sleeve'

// First paint is plain HTML plus CSS keyframes, so the headline is real text
// the moment the page loads. After a client-side route change the keyframes
// are held (`.is-held`) until the transition panel has left.
export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    if (!intro.navigated) return
    const el = ref.current
    el.classList.add('is-held')
    let alive = true
    intro.wait().then(() => alive && el.classList.remove('is-held'))
    return () => {
      alive = false
    }
  }, [])

  return (
    <section className="hero" ref={ref}>
      <Status className="status--hero" />
      <p className="hero__who" style={{ '--d': 0 }}>
        Freelance developer · Ahmedabad, India
      </p>
      <h1 className="hero__h" style={{ '--d': 60 }}>
        I build <em>React and Next.js apps</em> with AI for startups and SaaS teams. <span>Shopify stores too.</span>
      </h1>
      <div className="hero__foot" style={{ '--d': 260 }}>
        <p className="hero__sub">
          Seven years shipping production apps for healthcare, legal and SaaS companies. You work with me directly, from
          brief to launch.
        </p>
        <div className="hero__cta">
          <Button href={`mailto:${PERSONAL.email}`}>Email me</Button>
          {PERSONAL.calendly && <Roll href={PERSONAL.calendly}>Book a 30-minute call</Roll>}
        </div>
      </div>
      <div className="hero__stack">
        {APP_CASES.map((c, i) => (
          <A
            key={c.slug}
            href={c.href}
            className={`hero__sleeve hero__sleeve--${i}`}
            aria-label={`${c.name} case study`}
            style={{ '--d': 160 + i * 110 }}
          >
            <Sleeve cover={c.cover} eager={i === 0} sizes="(min-width: 1024px) 36vw, 80vw" disc={i === 0} mark={c.mark} />
          </A>
        ))}
        <A href={APP_CASES[0].href} className="hero__caption">
          <span className="hero__caption-no">A1</span> {APP_CASES[0].name} · {APP_CASES[0].sector}{' '}
          <span aria-hidden="true">→</span>
        </A>
      </div>
    </section>
  )
}
