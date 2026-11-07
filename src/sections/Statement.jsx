import { usePage, revealLines } from '../engine/motion'

export default function Statement() {
  const ref = usePage((root) => {
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))
  }, [])
  return (
    <section className="statement" ref={ref}>
      <p className="statement__text" data-lines>
        I stay at range, measure the problem, and close in only when the strike will land.
      </p>
      <p className="statement__meta" data-lines>
        Based in Ahmedabad, India. Building for brands in the UK and beyond, and for product teams who need a React engineer without the hiring.
      </p>
    </section>
  )
}
