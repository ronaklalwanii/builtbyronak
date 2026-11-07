import { Button } from '../components/A'

export default function NotFound() {
  return (
    <section className="nf">
      <span className="disc nf__disc" aria-hidden="true">
        <i />
      </span>
      <p className="nf__num" aria-hidden="true">
        404
      </p>
      <h1 className="nf__title">Page not found</h1>
      <p className="nf__text">This page doesn't exist. The work is one click back.</p>
      <Button href="/#work">Back to the work</Button>
    </section>
  )
}
