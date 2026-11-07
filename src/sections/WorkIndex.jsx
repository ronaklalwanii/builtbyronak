import { SHOPIFY_CASES, APP_CASES, ALSO } from '../data/work'
import { usePage, gsap, ScrollTrigger, getLenis, reduced, EASE } from '../engine/motion'
import { A } from '../components/A'

function Row({ c }) {
  return (
    <li>
      <A href={c.href} className="row" data-img={c.images[0].src}>
        <span className="row__line" aria-hidden="true" />
        <span className="row__mask">
          <span className="row__name">{c.name}</span>
        </span>
        <span className="row__sector">{c.sector}</span>
        <span className="row__scope">{c.hook}</span>
      </A>
    </li>
  )
}

// Striking range: the index. On a mouse, a preview follows the pointer and
// leans with its speed; on touch the row in the middle of the screen lights up.
export default function WorkIndex() {
  const ref = usePage((root) => {
    const rows = [...root.querySelectorAll('.row')]
    const motion = !reduced()

    if (motion) {
      gsap.set(root.querySelectorAll('.row__name'), { yPercent: 105 })
      gsap.set(root.querySelectorAll('.row__line'), { scaleX: 0 })
      ScrollTrigger.batch(rows, {
        start: 'top 93%',
        once: true,
        onEnter: (batch) => {
          gsap.to(batch.map((r) => r.querySelector('.row__name')), {
            yPercent: 0, duration: 0.9, stagger: 0.05, ease: EASE,
          })
          gsap.to(batch.map((r) => r.querySelector('.row__line')), {
            scaleX: 1, duration: 1.1, stagger: 0.05, ease: EASE,
          })
        },
      })
    }

    const mm = gsap.matchMedia()
    mm.add('(hover: hover) and (pointer: fine)', () => {
      const prev = root.querySelector('.preview')
      const img = prev.querySelector('img')
      gsap.set(prev, { xPercent: 0, autoAlpha: 0, scale: 0.9 })
      const xTo = gsap.quickTo(prev, 'x', { duration: 0.6, ease: 'power3.out' })
      const yTo = gsap.quickTo(prev, 'y', { duration: 0.6, ease: 'power3.out' })
      const rTo = gsap.quickTo(prev, 'rotation', { duration: 0.7, ease: 'power3.out' })
      let current = null
      let lastX = 0
      let px = 0
      let py = 0
      let settle

      const show = (row) => {
        if (row === current) return
        current = row
        if (row) {
          if (img.getAttribute('src') !== row.dataset.img) img.src = row.dataset.img
          gsap.to(prev, { autoAlpha: 1, scale: 1, duration: 0.4, ease: EASE, overwrite: 'auto' })
        } else {
          gsap.to(prev, { autoAlpha: 0, scale: 0.9, duration: 0.25, ease: 'power2.in', overwrite: 'auto' })
        }
      }
      const move = (e) => {
        px = e.clientX
        py = e.clientY
        xTo(px + 36)
        yTo(py - 120)
        rTo(gsap.utils.clamp(-10, 10, (px - lastX) * 0.5))
        lastX = px
        settle?.kill()
        settle = gsap.delayedCall(0.09, () => rTo(0))
        show(e.target.closest?.('.row'))
      }
      const recheck = () => show(document.elementFromPoint(px, py)?.closest('.row') || null)
      const focusIn = (e) => {
        const r = e.target.closest?.('.row')
        if (!r) return
        const b = r.getBoundingClientRect()
        xTo(b.right - 420)
        yTo(b.top - 40)
        rTo(0)
        show(r)
      }
      root.addEventListener('pointermove', move)
      root.addEventListener('pointerleave', () => show(null))
      root.addEventListener('focusin', focusIn)
      root.addEventListener('focusout', () => show(null))
      const st = ScrollTrigger.create({ trigger: root, start: 'top bottom', end: 'bottom top', onUpdate: recheck })
      return () => {
        root.removeEventListener('pointermove', move)
        root.removeEventListener('focusin', focusIn)
        st.kill()
      }
    })

    // Touch: light the row nearest the middle of the screen.
    mm.add('(hover: none)', () => {
      rows.forEach((r) =>
        ScrollTrigger.create({
          trigger: r,
          start: 'top 58%',
          end: 'bottom 58%',
          onToggle: (s) => r.classList.toggle('is-lit', s.isActive),
        }),
      )
    })
    return () => mm.revert()
  }, [])

  return (
    <section className="work" id="work" ref={ref}>
      <header className="sec-head">
        <h2>
          Work <sup>{SHOPIFY_CASES.length + APP_CASES.length}</sup>
        </h2>
        <p className="sec-head__note">
          Fifteen Shopify stores for UK brands, and the apps behind healthcare, legal and retail teams. Every one built by me.
        </p>
      </header>

      <h3 className="grp">Shopify stores</h3>
      <ol className="rows">
        {SHOPIFY_CASES.map((c) => (
          <Row key={c.slug} c={c} />
        ))}
      </ol>

      <h3 className="grp">Apps and platforms</h3>
      <ol className="rows">
        {APP_CASES.map((c) => (
          <Row key={c.slug} c={c} />
        ))}
        {ALSO.map((a) => (
          <li key={a.name}>
            <div className="row row--static">
              <span className="row__line" aria-hidden="true" />
              <span className="row__mask">
                <span className="row__name">{a.name}</span>
              </span>
              <span className="row__sector">{a.sector}</span>
              <span className="row__scope">{a.tags.slice(0, 3).join(', ')}</span>
            </div>
          </li>
        ))}
      </ol>

      <div className="preview" aria-hidden="true">
        <img alt="" width="1280" height="703" decoding="async" />
      </div>
    </section>
  )
}
