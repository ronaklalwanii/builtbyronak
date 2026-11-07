import { PERSONAL } from '../constants'
import { usePage, gsap, SplitText, intro, reduced, EASE } from '../engine/motion'
import { subscribe } from '../engine/driver'
import { Button, Roll } from '../components/A'
import Haze from '../components/Haze'

// Long range: a void, a small figure far away, a wide thin name.
export default function Hero() {
  const ref = usePage((root) => {
    if (reduced()) return
    const q = gsap.utils.selector(root)
    let alive = true
    if (!intro.late) {
      const split = SplitText.create(q('.hero__name')[0], { type: 'chars', mask: 'chars', charsClass: 'ch' })
      const sub = SplitText.create(q('.hero__sub')[0], { type: 'lines', mask: 'lines' })
      gsap.set(split.chars, { yPercent: 112 })
      gsap.set(sub.lines, { yPercent: 108 })
      gsap.set(q('.hero__portrait'), { autoAlpha: 0, scale: 0.8 })
      gsap.set(q('.hero__cta > *'), { autoAlpha: 0, y: 14 })
      intro.wait().then(() => {
        if (!alive) return
        gsap
          .timeline({ defaults: { ease: EASE } })
          .to(q('.hero__portrait'), { autoAlpha: 1, scale: 1, duration: 1.4 }, 0)
          .to(split.chars, { yPercent: 0, duration: 1.15, stagger: 0.035 }, 0.05)
          .to(sub.lines, { yPercent: 0, duration: 0.9, stagger: 0.08 }, 0.55)
          .to(q('.hero__cta > *'), { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.8)
      })
    }

    // Stance: the figure bounces on the backbeat, like a fighter on his toes,
    // and the range-finder brackets around it flash with the same pulse.
    const fig = q('.hero__portrait')[0]
    const off = subscribe((d) => {
      fig.style.translate = `0 ${(-6 * d.beat).toFixed(2)}px`
      fig.style.setProperty('--beat', d.beat.toFixed(2))
    })

    // Closing in: the figure rushes the viewer and the name slips away.
    gsap.to(q('.hero__portrait'), {
      scale: 5.5,
      autoAlpha: 0,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom 25%', scrub: true },
    })
    gsap.to(q('.hero__name'), {
      yPercent: -35,
      ease: 'none',
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
    })
    return () => {
      alive = false
      off()
    }
  }, [])

  return (
    <section className="hero" ref={ref}>
      <div className="hero__bg">
        <Haze />
      </div>
      <div className="hero__portrait">
        <figure className="hero__photo">
          <img
            src="/images/ronak-160.webp"
            srcSet="/images/ronak-160.webp 160w, /images/ronak-320.webp 320w, /images/ronak-640.webp 640w"
            sizes="(min-width: 1024px) 9vw, 96px"
            width="640"
            height="768"
            alt="Ronak working on a laptop outdoors, hills behind him"
            fetchPriority="low"
          />
        </figure>
        <span className="hero__finder" aria-hidden="true" />
        <p className="hero__tag" aria-hidden="true">
          Subject
          <br />
          Long range
        </p>
      </div>
      <h1 className="hero__name">
        <span>Ronak</span> <span>Lalwani</span>
      </h1>
      <div className="hero__foot">
        <p className="hero__sub">
          Freelance Shopify and React developer. I work alone, so the person you brief is the person who builds it.
        </p>
        <div className="hero__cta">
          {PERSONAL.calendly && (
            <Button href={PERSONAL.calendly} className="btn--accent">
              Book a 30 minute call
            </Button>
          )}
          <Roll href={`mailto:${PERSONAL.email}`}>Or email me</Roll>
        </div>
      </div>
    </section>
  )
}
