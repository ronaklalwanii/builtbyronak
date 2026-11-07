import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../constants'
import { useRevealList } from '../lib/useReveal'

const flagship = SERVICES.filter((s) => s.flagship)
const rest = SERVICES.filter((s) => !s.flagship)

function Card({ service, innerRef, large, className = '' }) {
  return (
    <a
      href="#contact"
      ref={innerRef}
      className={`reveal group flex flex-col gap-3 rounded-lg border p-6 transition-colors ${
        large
          ? 'border-accent-line bg-accent-dim hover:border-accent md:p-7'
          : 'border-hair bg-surface hover:border-hair-strong'
      } ${className}`}
    >
      <h3 className={`font-medium text-ink ${large ? 'text-[16px]' : 'text-[14.5px]'}`}>
        {service.name}
      </h3>

      {/* Pricing hidden for now. Prices still live in SERVICES (constants.js).
      <p
        className={`font-semibold tabular-nums text-ink ${large ? 'text-price' : 'text-[20px] leading-tight tracking-[-0.02em]'}`}
      >
        {service.price.replace('From ', '')}
      </p>
      */}

      <p className="text-[13.5px] leading-relaxed text-ink-soft">{service.short}</p>

      <div className="mt-auto flex items-end justify-between gap-4 pt-3">
        <span className="text-[12px] text-ink-soft">{service.turnaround}</span>
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
          <h2 className="section-h">Services</h2>
          {/* <p className="meta">All prices in USD</p> */}
        </div>

        {/* Seven cells: 2 flagship + 5 supporting. The flagship row is two
            wide accent-tinted cells. The supporting grid is six columns at
            lg: two half-width cells, then three thirds, so no row ends with
            a lone card. At sm, the last card spans both columns. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flagship.map((service, i) => (
            <Card key={service.name} service={service} innerRef={getRef(i)} large />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {rest.map((service, i) => {
            const span =
              i < 2
                ? 'lg:col-span-3'
                : i === rest.length - 1
                  ? 'sm:col-span-2 lg:col-span-2'
                  : 'lg:col-span-2'

            return (
              <Card
                key={service.name}
                service={service}
                innerRef={getRef(i + flagship.length)}
                className={span}
              />
            )
          })}
        </div>

        <p className="pt-6 text-[13px] text-ink-dim">
          Every engagement is scoped and quoted in writing before work starts.
        </p>
      </div>
    </section>
  )
}
