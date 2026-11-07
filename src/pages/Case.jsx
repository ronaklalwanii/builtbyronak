import { caseBySlug, nextCase, CLASSES } from '../data/work'
import { usePage, gsap, ScrollTrigger, SplitText, intro, revealLines, reduced, EASE } from '../engine/motion'
import { A, Button } from '../components/A'
import NotFound from './NotFound'

const FULL = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
const CLOSED = 'polygon(0 0, 0 0, 0 100%, 0 100%)'

// Rhythm for the screen stack: the first is full width, then two side by side,
// then one full, and so on. A lone last screen goes full width.
const half = (i, n) => i > 0 && (i - 1) % 3 !== 2 && !(i === n - 1 && (i - 1) % 3 === 0)

export default function Case({ slug }) {
  const c = caseBySlug(slug)
  const ref = usePage((root) => {
    if (!c) return
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))
    if (reduced() || intro.late) return
    const title = SplitText.create(root.querySelector('.case__title'), { type: 'chars', mask: 'chars' })
    gsap.set(title.chars, { yPercent: 110 })
    const first = root.querySelector('.shot')
    gsap.set(first, { clipPath: CLOSED })
    let alive = true
    intro.wait().then(() => {
      if (!alive) return
      gsap
        .timeline({ defaults: { ease: EASE } })
        .to(title.chars, { yPercent: 0, duration: 1, stagger: 0.025 }, 0)
        .to(first, { clipPath: FULL, duration: 1 }, 0.1)
    })
    root.querySelectorAll('.shot').forEach((s, i) => {
      if (i === 0) return
      gsap.fromTo(
        s,
        { clipPath: CLOSED },
        { clipPath: FULL, duration: 1.1, ease: EASE, scrollTrigger: { trigger: s, start: 'top 88%', once: true } },
      )
    })
    return () => (alive = false)
  }, [slug])

  if (!c) return <NotFound />
  const next = nextCase(slug)
  const weight = CLASSES.find((k) => k.name === c.service)?.weight
  const n = c.images.length

  const shot = (im, i) => (
    <figure className={`shot${half(i, n) ? ' shot--half' : ''}`} key={im.src}>
      <img
        src={im.src}
        srcSet={`${im.small} 800w, ${im.src} ${im.w}w`}
        sizes="(min-width: 1024px) 94vw, 100vw"
        width={im.w}
        height={im.h}
        alt={`${c.name}: ${im.caption}`}
        loading={i === 0 ? 'eager' : 'lazy'}
        fetchPriority={i === 0 ? 'high' : undefined}
        decoding="async"
      />
      <figcaption>{im.caption}</figcaption>
    </figure>
  )

  return (
    <article className="case" ref={ref}>
      <header className="case__head">
        <A href="/#work" className="case__back">
          <span aria-hidden="true">←</span> All work
        </A>
        <h1 className="case__title">{c.name}</h1>
        <dl className="case__meta">
          <div>
            <dt>Sector</dt>
            <dd>{c.sector}</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>{c.tags.join(', ')}</dd>
          </div>
          <div>
            <dt>Weight class</dt>
            <dd>
              {weight}, {c.service.toLowerCase()}
            </dd>
          </div>
          <div>
            <dt>Shown</dt>
            <dd>{c.images.length} screens</dd>
          </div>
        </dl>
      </header>

      <div className="case__shots case__shots--first">
        {c.images.slice(0, 1).map((im, i) => shot(im, i))}
      </div>

      <section className="case__intro" aria-label="About this project">
        <p className="case__lead" data-lines>
          {c.blurb}
        </p>
        <p data-lines>{c.summary}</p>
        {c.result && (
          <p className="case__flow">
            <b>Result</b>
            {c.result}
          </p>
        )}
        <p className="case__flow">
          <b>Screens, in order</b>
          {c.images.map((im) => im.caption).join(', ')}
        </p>
        {c.links?.length > 0 && (
          <p className="case__links">
            {c.links.map((l) => (
              <A key={l.url} href={l.url}>
                {l.label}
              </A>
            ))}
          </p>
        )}
      </section>

      <div className="case__shots">
        {c.images.slice(1).map((im, i) => shot(im, i + 1))}
      </div>

      <nav className="case__next" aria-label="Next project">
        <p>Next bout</p>
        <A href={next.href} className="case__nextlink">
          <span className="roll"><span className="roll__in" data-text={next.name}>{next.name}</span></span>
        </A>
        <Button href="/#contact">Start a project</Button>
      </nav>
    </article>
  )
}
