import { WORK, PERSONAL } from '../constants'
import { usePage, gsap, ScrollTrigger, getLenis, revealLines, reduced, EASE } from '../engine/motion'

const WORDS = ['Jazz', 'Blues', 'Whiskey', 'MMA', 'Travel', 'Quiet']

// Clinch: close and dense. Portrait, the long version of the story, the jobs.
export default function About() {
  const ref = usePage((root) => {
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))

    const track = root.querySelector('.marquee__track')
    if (reduced()) return
    const fig = root.querySelector('.about__portrait')
    gsap.fromTo(
      fig,
      { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 1.2,
        ease: EASE,
        scrollTrigger: { trigger: fig, start: 'top 85%', once: true },
      },
    )
    gsap.fromTo(
      fig.querySelector('img'),
      { yPercent: -7 },
      { yPercent: 7, ease: 'none', scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true } },
    )

    // Marquee crawls on the one clock; scroll speed pushes it.
    let x = 0
    let on = false
    const half = () => track.scrollWidth / 2
    const crawl = (_, dt) => {
      if (!on) return
      const v = getLenis()?.velocity ?? 0
      x -= (dt / 1000) * 70 + v * 0.35
      const w = half()
      if (x <= -w) x += w
      if (x > 0) x -= w
      gsap.set(track, { x })
    }
    gsap.ticker.add(crawl)
    const st = ScrollTrigger.create({
      trigger: root.querySelector('.marquee'),
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (s) => (on = s.isActive),
    })
    return () => {
      gsap.ticker.remove(crawl)
      st.kill()
    }
  }, [])

  const words = [...WORDS, ...WORDS, ...WORDS, ...WORDS]

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__grid">
        <figure className="about__portrait">
          <img
            src="/images/ronak-640.webp"
            srcSet="/images/ronak-320.webp 320w, /images/ronak-640.webp 640w"
            sizes="(min-width: 769px) 40vw, 92vw"
            width="640"
            height="768"
            loading="lazy"
            decoding="async"
            ref={(el) => el?.complete && el.naturalWidth > 0 && el.parentElement.classList.add('is-ready')}
            onLoad={(e) => e.currentTarget.parentElement.classList.add('is-ready')}
            alt="Ronak coding on a laptop on a bench, in the hills"
          />
        </figure>
        <div className="about__text">
          <h2>About</h2>
          <p className="about__lead" data-lines>
            Seven years of frontend work, and since April 2026 my own practice. Fifteen brand launches in, I still do every part myself.
          </p>
          <p data-lines>
            Before going independent I built admin dashboards that run in more than 2,000 deployments, healthcare portals for 5,000+ medical practices and a multi-tenant platform for 500+ retailers. Now founders hire me for the whole store: sourcing the product, shaping the brand, building the theme in Liquid and launching it.
          </p>
          <p data-lines>
            Off the clock I train MMA, listen to jazz and blues, and pour whiskey slowly. I travel a lot and work wherever the Wi-Fi holds. I'm an introvert, so I prefer email to meetings and a working build to a pitch deck. Fighting taught me to stay calm when something is coming at me, which covers most of freelancing.
          </p>
        </div>
      </div>

      <ol className="jobs">
        {WORK.map((j) => (
          <li className="job" key={j.period}>
            <p className="job__period">{j.period}</p>
            <div className="job__who">
              <h3>{j.company}</h3>
              <p>{j.title}</p>
            </div>
            <ul className="job__what">
              {j.bullets.slice(0, 3).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {words.map((w, i) => (
            <span key={i}>
              {w}
              <i />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
