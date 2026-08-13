import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../constants'
import { useRevealList } from '../lib/useReveal'

const flagship = SERVICES.filter((s) => s.flagship)
const rest = SERVICES.filter((s) => !s.flagship)

function Card({ service, innerRef, large }) {
  return (
    <a
      href="#contact"
      ref={innerRef}
      aria-label={`${service.name}, ${service.price}. Get in touch.`}
      className={`reveal group flex flex-col gap-3 rounded-lg border p-6 transition-colors ${
        large
          ? 'border-accent-line bg-accent-dim hover:border-accent md:p-7'
          : 'border-hair bg-surface hover:border-hair-strong'
      }`}
    >
      <h3 className={`font-medium text-ink ${large ? 'text-[16px]' : 'text-[14.5px]'}`}>
        {service.name}
      </h3>

      <p
        className={`font-semibold tabular-nums text-ink ${large ? 'text-price' : 'text-[20px] leading-tight tracking-[-0.02em]'}`}
      >
        {service.price.replace('From ', '')}
      </p>

      <p className="text-[13.5px] leading-relaxed text-ink-soft">{service.short}</p>

      <div className="mt-auto flex items-end justify-between gap-4 pt-3">
        <span className="text-[12px] text-ink-dim">{service.turnaround}</span>
        <ArrowUpRight
          size={15}
          aria-hidden="true"
          className="shrink-0 text-ink-faint transition-colors group-hover:text-accent"
        />
      </div>
    </a>
  )
}

export default function Services() {
  const getRef = useRevealList(SERVICES.length)

  return (
    <section id="services" className="rule">
      <div className="shell section-pad">
        <div className="flex items-baseline justify-between gap-6 pb-12">
          <h2 className="section-h">Services and pricing</h2>
          <p className="meta">All prices in USD</p>
        </div>

        {/* Exactly five cells, 2 + 3. The two flagship engagements get the
            wider cells and the accent tint, so the grid has rhythm rather
            than five identical columns. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flagship.map((service, i) => (
            <Card key={service.name} service={service} innerRef={getRef(i)} large />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((service, i) => (
            <Card key={service.name} service={service} innerRef={getRef(i + flagship.length)} />
          ))}
        </div>

        <p className="pt-6 text-[13px] text-ink-dim">
          Every engagement is scoped and priced in writing before work starts.
        </p>
      </div>
    </section>
  )
}
