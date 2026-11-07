import { usePage, revealLines } from '../engine/motion'

export default function Statement() {
  const ref = usePage((root) => {
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))
  }, [])
  return (
    <section className="statement" ref={ref}>
      <p className="statement__text" data-lines>
        Apps that hold up in production: an AI litigation platform that cut case review from about{' '}
        <mark>40 hours to 6</mark>, a multi-tenant core for <mark>500+ retailers</mark>, and admin templates behind{' '}
        <mark>2,000+ deployments</mark>.
      </p>
      <p className="statement__note">
        Based in Ahmedabad, India (IST). Overlap with UK afternoons and US mornings. Working with startups and product
        teams in the UK, US and Europe.
      </p>
    </section>
  )
}
