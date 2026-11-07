import { caseBySlug, nextCase } from '../data/work'
import { usePage, gsap, SplitText, intro, revealLines, reduced, EASE } from '../engine/motion'
import { A, Button } from '../components/A'
import Sleeve from '../components/Sleeve'
import NotFound from './NotFound'

const OPEN = 'inset(0% 0% 0% 0%)'
const SHUT = 'inset(0% 0% 100% 0%)'

// Rhythm for the screen stack: first full width, then two side by side, then
// one full, and so on. A lone last screen goes full width.
const half = (i, n) => i > 0 && (i - 1) % 3 !== 2 && !(i === n - 1 && (i - 1) % 3 === 0)

const NOTES = [
  ['problem', 'Problem'],
  ['built', 'What I built'],
  ['architecture', 'Architecture and stack'],
  ['outcome', 'Outcome'],
]

export default function Case({ slug }) {
  const c = caseBySlug(slug)
  const ref = usePage((root) => {
    if (!c) return
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))
    if (reduced()) return

    let stop
    // Record out: when the case opens from the index, the sleeve is already in
    // place and the record slides out of it behind the transition panel.
    // On a direct load there is nothing to hide, so it simply stays out.
    if (intro.navigated) {
      const sleeve = root.querySelector('.case__art .sleeve')
      const rest = parseFloat(getComputedStyle(sleeve).getPropertyValue('--out')) || 0.34
      const title = SplitText.create(root.querySelector('.case__title'), { type: 'chars', mask: 'chars', aria: 'none' })
      gsap.set(sleeve, { '--out': 0 })
      gsap.set(title.chars, { yPercent: 110 })
      let alive = true
      intro.wait().then(() => {
        if (!alive) return
        gsap
          .timeline({ defaults: { ease: EASE } })
          .to(title.chars, { yPercent: 0, duration: 0.9, stagger: 0.025 }, 0)
          .to(sleeve, { '--out': rest, duration: 1.5 }, 0.2)
      })
      stop = () => (alive = false)
    }

    root.querySelectorAll('.shot').forEach((s) => {
      gsap.fromTo(
        s,
        { clipPath: SHUT },
        { clipPath: OPEN, duration: 1.1, ease: EASE, scrollTrigger: { trigger: s, start: 'top 88%', once: true } },
      )
    })
    return () => stop?.()
  }, [slug])

  if (!c) return <NotFound />
  const next = nextCase(slug)
  const n = c.images.length
  const isApp = c.kind === 'app'
  const tracks = isApp ? c.tracks : c.images.map((im) => im.caption)

  const shot = (im, i) => (
    <figure className={`shot${half(i, n) ? ' shot--half' : ''}`} key={im.src}>
      <img
        src={im.src}
        srcSet={`${im.small} 800w, ${im.src} ${im.w}w`}
        sizes="(min-width: 1024px) 94vw, 100vw"
        width={im.w}
        height={im.h}
        alt={`${c.name}: ${im.caption}`}
        loading="lazy"
        decoding="async"
      />
      <figcaption>{im.caption}</figcaption>
    </figure>
  )

  return (
    <article className="case" ref={ref}>
      <header className="case__head">
        <div className="case__id">
          <A href="/#work" className="case__back">
            <span aria-hidden="true">←</span> All work
          </A>
          <h1 className="case__title">{c.name}</h1>
          <p className="case__sector">{c.sector}</p>
        </div>
        <div className="case__art">
          <Sleeve cover={c.cover} alt={`${c.name}: ${c.cover.caption}`} eager sizes="(min-width: 1024px) 46vw, 92vw" />
        </div>
      </header>

      <div className="case__body">
        {isApp ? (
          <div className="notes">
            {NOTES.map(([key, label]) => (
              <section className="note" key={key}>
                <h2>{label}</h2>
                <p data-lines>{c.study[key]}</p>
              </section>
            ))}
          </div>
        ) : (
          <div className="notes">
            <section className="note">
              <h2>The build</h2>
              <p data-lines>{c.summary}</p>
            </section>
          </div>
        )}

        <div className="liner">
          <section>
            <h2 className="label">Tracklist</h2>
            <ol className="tracks tracks--full">
              {tracks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
          </section>
          <section>
            <h2 className="label">Credits</h2>
            <dl className="credits">
              <dt>Sector</dt>
              <dd>{c.sector}</dd>
              <dt>{isApp ? 'Role' : 'Delivered by'}</dt>
              <dd>{c.role}</dd>
              <dt>{isApp ? 'Stack' : 'Scope'}</dt>
              <dd>{c.tags.join(', ')}</dd>
              {c.outcome && (
                <>
                  <dt>Outcome</dt>
                  <dd>{c.outcome}</dd>
                </>
              )}
              {c.links?.length > 0 && (
                <>
                  <dt>Live demos</dt>
                  <dd className="credits__links">
                    {c.links.map((l) => (
                      <A key={l.url} href={l.url}>
                        {l.label}
                      </A>
                    ))}
                  </dd>
                </>
              )}
            </dl>
          </section>
        </div>
      </div>

      <div className="case__shots">{c.images.map((im, i) => shot(im, i))}</div>

      <nav className="case__next" aria-label="Next project">
        <p className="label">Next on {isApp ? 'Side A' : 'Side B'}</p>
        <A href={next.href} className="case__nextlink">
          <span className="roll">
            <span className="roll__in" data-text={next.name}>
              {next.name}
            </span>
          </span>
        </A>
        <Button href="/#contact">Start a project</Button>
      </nav>
    </article>
  )
}
