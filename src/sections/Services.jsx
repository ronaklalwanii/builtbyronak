import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../constants'
import { useRevealList } from '../lib/useReveal'

// Short forms for the row layout. The long copy lives in the proposal,
// not on the page, because five cards side by side have to stay scannable.
const BLURB = {
  'Admin Panel Build': 'Scalable admin panels with modern stack.',
  'AI Integration': 'Integrate AI into your existing products.',
  'Landing Page': 'High-converting, responsive pages.',
  'Performance Audit & Fix': 'Detailed audit with actionable fixes.',
  'Monthly Retainer': 'Ongoing development and support.',
}

export default function Services() {
  const getRef = useRevealList(SERVICES.length)

  return (
    <section id="services" className="rule">
      <div className="shell py-16 lg:py-20">
        <div className="flex items-baseline justify-between gap-6 pb-10">
          <p className="eyebrow">Services &amp; pricing</p>
          <p className="meta">All prices in USD</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-hair border border-hair rounded-xl overflow-hidden">
          {SERVICES.map((service, i) => (
            <a
              key={service.name}
              href="#contact"
              ref={getRef(i)}
              className="reveal group bg-canvas hover:bg-surface transition-colors p-6 flex flex-col gap-3 min-h-[190px]"
            >
              <h3 className="text-[14px] font-medium text-ink">{service.name}</h3>

              <p className="text-price font-semibold text-ink tabular-nums">
                {service.price.replace('From ', '')}
              </p>

              <p className="text-[13px] leading-relaxed text-ink-dim">
                {BLURB[service.name] ?? service.description}
              </p>

              <span className="mt-auto self-end text-ink-faint group-hover:text-accent transition-colors">
                <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
        </div>

        <p className="meta pt-5">
          Every engagement is scoped and priced in writing before work starts.
        </p>
      </div>
    </section>
  )
}
