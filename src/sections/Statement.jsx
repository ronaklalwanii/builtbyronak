import { usePage, revealLines } from '../engine/motion'

export default function Statement() {
  const ref = usePage((root) => {
    root.querySelectorAll('[data-lines]').forEach((el) => revealLines(el))
  }, [])
  return (
    <section className="statement" ref={ref}>
      <p className="statement__text" data-lines>
        Apps that hold up in production: an AI litigation platform that cut case review from about{' '}
        <span className="statement__k"><mark>40 hours to 6</mark>,</span> a multi-tenant core for{' '}
        <span className="statement__k"><mark>500+ retailers</mark>,</span> and admin templates behind{' '}
        <span className="statement__k"><mark>2,000+ deployments</mark>.</span>
      </p>
      <p className="statement__note">
        Based in Ahmedabad, India (IST). Overlap with UK afternoons and US mornings. Working with startups and product
        teams in the UK, US and Europe.
      </p>
    </section>
  )
}
