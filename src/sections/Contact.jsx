import { PERSONAL, SOCIAL } from '../constants'
import { usePage, gsap, ScrollTrigger, slash, slashSet, revealLines, reduced } from '../engine/motion'
import { thump } from '../engine/sound'
import { Button, Roll } from '../components/A'

const FIELD = { '--ground': '#e8932a', '--ink': '#090b11', '--hl': '#090b11', '--muted': 'rgba(9,11,17,.72)', '--line': 'rgba(9,11,17,.22)' }
const ROOM = { '--ground': '#090b11', '--ink': '#e9e6df', '--hl': '#e8932a', '--muted': '#8e95a4', '--line': 'rgba(233,230,223,.14)' }

// Contact: the hit. A slash crosses the screen, the field flips to whiskey
// through the global color variables, and the page shakes once.
export default function Contact() {
  const ref = usePage((root) => {
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))
    const html = document.documentElement
    const hit = document.querySelector('.hit')
    let tl

    const flip = (on) => {
      tl?.kill()
      if (reduced()) return gsap.set(html, on ? FIELD : ROOM)
      tl = gsap.timeline()
      hit.style.visibility = 'visible'
      slashSet(hit, 'in', false)
      tl.add(slash(hit, 'in', { duration: 0.3, ease: 'power3.in' }))
      tl.add(() => {
        gsap.set(html, on ? FIELD : ROOM)
        slashSet(hit, 'out', false)
        if (on) {
          thump()
          gsap.fromTo(
            '#main',
            { y: 0 },
            { keyframes: [{ y: -8, duration: 0.04 }, { y: 5, duration: 0.05 }, { y: -3, duration: 0.05 }, { y: 0, duration: 0.09 }], clearProps: 'transform' },
          )
        }
      })
      tl.add(slash(hit, 'out', { duration: 0.5, ease: 'power3.out', onComplete: () => (hit.style.visibility = 'hidden') }))
    }

    const st = ScrollTrigger.create({
      trigger: root,
      start: 'top 55%',
      onEnter: () => flip(true),
      onLeaveBack: () => flip(false),
    })
    return () => {
      st.kill()
      tl?.kill()
      gsap.set(html, ROOM)
    }
  }, [])

  return (
    <section className="contact" id="contact" ref={ref}>
      <h2 className="contact__title">
        <span>Close the</span> <span>distance.</span>
      </h2>
      <div className="contact__row">
        <p className="contact__lead" data-lines>
          Tell me what you are launching or what is broken. I read every email myself and I answer it myself.
        </p>
        <div className="contact__actions">
          <Roll className="contact__mail" href={`mailto:${PERSONAL.email}`}>
            {PERSONAL.email}
          </Roll>
          {PERSONAL.calendly && <Button href={PERSONAL.calendly}>Book a 30 minute call</Button>}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="foot">
      <p>
        © {__BUILD_YEAR__} {PERSONAL.name}
      </p>
      <p className="foot__links">
        {SOCIAL.linkedin && <Roll href={SOCIAL.linkedin}>LinkedIn</Roll>}
        <Roll href="/">Back to start</Roll>
      </p>
      <p>{PERSONAL.footerNote}</p>
    </footer>
  )
}
