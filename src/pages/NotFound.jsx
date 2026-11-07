import { useEffect, useRef } from 'react'
import { Button, Roll } from '../components/A'
import { subscribe } from '../engine/driver'

// Out of range: the distance readout refuses to land.
export default function NotFound() {
  const num = useRef(null)
  // The number flinches on the backbeat.
  useEffect(
    () => subscribe((d) => (num.current.style.webkitTextStrokeColor = `rgba(233, 230, 223, ${(0.14 + 0.5 * d.beat).toFixed(2)})`)),
    [],
  )
  return (
    <section className="nf">
      <p className="nf__num" aria-hidden="true" ref={num}>
        404
      </p>
      <h1 className="nf__title">Out of range.</h1>
      <p className="nf__text">Nothing here. I swung at a page that does not exist. The work is a short step back.</p>
      <div className="nf__actions">
        <Button href="/" className="btn--accent">Back to the start</Button>
        <Roll href="/#work" className="nf__link">See the work</Roll>
      </div>
    </section>
  )
}
