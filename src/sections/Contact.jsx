import { PERSONAL, SOCIAL } from '../constants'
import { usePage, revealLines } from '../engine/motion'
import { Button, Roll } from '../components/A'

// The last sleeve: full-bleed accent, one question, two ways to answer it.
export default function Contact() {
  const ref = usePage((root) => {
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))
  }, [])

  return (
    <section className="contact is-blue" id="contact" ref={ref}>
      <h2 className="contact__title">Have something to build?</h2>
      <div className="contact__row">
        <p className="contact__lead" data-lines>
          Tell me what you're building or what's broken. I reply to every email myself, usually within a day.
        </p>
        <div className="contact__actions">
          <Roll className="contact__mail" href={`mailto:${PERSONAL.email}`}>
            {PERSONAL.email}
          </Roll>
          {PERSONAL.calendly && <Button href={PERSONAL.calendly}>Book a 30-minute call</Button>}
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
        <Roll href="/">Back to the top</Roll>
      </p>
      <p>{PERSONAL.footerNote}</p>
    </footer>
  )
}
