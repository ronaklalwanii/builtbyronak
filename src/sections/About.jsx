import { WORK } from '../constants'
import { usePage, gsap, revealLines, reduced, EASE } from '../engine/motion'

// Portrait in full colour, the story, and the career as credits.
export default function About() {
  const ref = usePage((root) => {
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))
    if (reduced()) return
    const fig = root.querySelector('.about__portrait')
    gsap.fromTo(
      fig,
      { clipPath: 'inset(0% 0% 100% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.2,
        ease: EASE,
        scrollTrigger: { trigger: fig, start: 'top 85%', once: true },
      },
    )
  }, [])

  return (
    <section className="about" id="about" ref={ref} aria-labelledby="about-h">
      <figure className="about__portrait art">
        <img
          src="/images/ronak-640.webp"
          srcSet="/images/ronak-320.webp 320w, /images/ronak-640.webp 640w"
          sizes="(min-width: 900px) 34vw, 92vw"
          width="640"
          height="768"
          loading="lazy"
          decoding="async"
          alt="Ronak coding on a laptop on a bench, in the hills"
        />
      </figure>
      <div className="about__text">
        <h2 id="about-h" data-lines>
          Seven years of frontend engineering. Independent since April 2026.
        </h2>
        <p data-lines>
          Before going independent I spent seven years inside product teams: React admin templates used in 2,000+
          deployments, HIPAA-compliant portals for 5,000+ medical practices, a multi-tenant platform for 500+ retailers,
          and an AI litigation platform that cut case review time from roughly 40 hours to 6. Today I build web apps and
          AI features for startups, and Shopify stores through my studio, The Hive Digital.
        </p>
        <p data-lines>
          Outside work: jazz and blues, MMA training, and a lot of travel. I work async by default: written briefs, clear
          progress updates, and working builds over long meetings.
        </p>
      </div>

      <div className="about__career">
        <p className="label">Career</p>
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
      </div>
    </section>
  )
}
