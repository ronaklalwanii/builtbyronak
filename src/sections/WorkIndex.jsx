import { SHOPIFY_CASES, APP_CASES, ALSO } from '../data/work'
import { usePage, gsap, ScrollTrigger, revealLines, reduced, EASE } from '../engine/motion'
import { A } from '../components/A'
import Sleeve from '../components/Sleeve'

function Album({ c, i }) {
  return (
    <article className={`album ${i % 2 ? 'album--r' : ''}`}>
      <A href={c.href} className="album__cover" aria-hidden="true" tabIndex={-1}>
        <span className="album__no">A{i + 1}</span>
        <Sleeve cover={c.cover} sizes="(min-width: 1024px) 46vw, 92vw" mark={c.mark} />
      </A>
      <div className="album__notes">
        <h4 className="album__title">{c.name}</h4>
        <p className="album__sector">{c.sector}</p>
        <div className="album__cols">
          <div>
            <p className="label">Tracklist</p>
            <ol className="tracks">
              {c.tracks.slice(0, 4).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
          </div>
          <div>
            <p className="label">Credits</p>
            <dl className="credits">
              <dt>Sector</dt>
              <dd>{c.sector}</dd>
              <dt>Role</dt>
              <dd>{c.role}</dd>
              <dt>Stack</dt>
              <dd>{c.tags.join(', ')}</dd>
              <dt>Outcome</dt>
              <dd>{c.outcome}</dd>
            </dl>
          </div>
        </div>
        <A href={c.href} className="more">
          Read the {c.name} case study <span aria-hidden="true">→</span>
        </A>
      </div>
    </article>
  )
}

function Spine({ c, i }) {
  return (
    <li>
      <A href={c.href} className="spine">
        <Sleeve cover={c.cover} sizes="(min-width: 1100px) 18vw, (min-width: 700px) 24vw, 46vw" disc={false} />
        <span className="spine__no">B{i + 1}</span>
        <span className="spine__name">{c.name}</span>
        <span className="spine__sector">{c.sector}</span>
      </A>
    </li>
  )
}

export default function WorkIndex() {
  const ref = usePage((root) => {
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))
    const motion = !reduced()

    if (motion) {
      const albums = [...root.querySelectorAll('.album')]
      albums.forEach((a) => {
        const art = a.querySelector('.sleeve')
        gsap.from(art, {
          '--out': 0,
          xPercent: -6,
          autoAlpha: 0,
          duration: 1.1,
          ease: EASE,
          scrollTrigger: { trigger: a, start: 'top 80%', once: true },
        })
      })
      const spines = [...root.querySelectorAll('.spine')]
      gsap.set(spines, { autoAlpha: 0, y: 24 })
      ScrollTrigger.batch(spines, {
        start: 'top 94%',
        once: true,
        onEnter: (b) => gsap.to(b, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.05, ease: EASE }),
      })
    }

    // Touch has no hover: the sleeve nearest the middle of the screen resolves
    // to full colour, so every cover is seen both ways.
    const mm = gsap.matchMedia()
    mm.add('(hover: none)', () => {
      const sleeves = [...root.querySelectorAll('.album__cover, .spine')]
      const sts = sleeves.map((el) =>
        ScrollTrigger.create({
          trigger: el,
          start: 'top 62%',
          end: 'bottom 62%',
          onToggle: (s) => el.classList.toggle('is-lit', s.isActive),
        }),
      )
      return () => sts.forEach((s) => s.kill())
    })
    return () => mm.revert()
  }, [])

  return (
    <section className="work" id="work" ref={ref}>
      <header className="work__head">
        <h2>Work</h2>
        <p data-lines>
          Side A: web apps and platforms for healthcare, legal and retail teams. Side B: fifteen Shopify stores, delivered
          through my studio, The Hive Digital.
        </p>
      </header>

      <div className="side side--a">
        <h3 className="side__label">
          <span className="side__glyph" aria-hidden="true">
            A
          </span>
          Side A · Apps and platforms
        </h3>
        {APP_CASES.map((c, i) => (
          <Album key={c.slug} c={c} i={i} />
        ))}

        <div className="also">
          <p className="label">Also recorded</p>
          <ul>
            {ALSO.map((a) => (
              <li key={a.name}>
                <span className={`typecover typecover--${a.name === 'Laine' ? 'ink' : 'blue'}`} aria-hidden="true">
                  <span className="typecover__side">Also recorded</span>
                  <span className="typecover__name">{a.name}</span>
                  <span className="typecover__meta">{a.tags.slice(0, 3).join(' · ')}</span>
                </span>
                <div className="also__text">
                  <h4>{a.name}</h4>
                  <p>{a.description}</p>
                  <p className="also__meta">
                    {a.sector} · {a.tags.join(', ')}
                  </p>
                  <p className="also__meta">{a.metric}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="side side--b" id="shopify">
        <h3 className="side__label">
          <span className="side__glyph" aria-hidden="true">
            B
          </span>
          Side B · Shopify stores
        </h3>
        <ol className="shelf">
          {SHOPIFY_CASES.map((c, i) => (
            <Spine key={c.slug} c={c} i={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}
