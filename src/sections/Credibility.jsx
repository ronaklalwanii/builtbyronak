import { Star } from 'lucide-react'
import { LOGOS, MARKETPLACE, PROOF_STATS } from '../constants'

/**
 * Credibility strip. Sits directly under the hero because the hero is for
 * the value prop, not for proof. Full-width horizontal band, deliberately a
 * different layout family from the two-column grid the rest of the page uses.
 */
export default function Credibility() {
  return (
    <section id="credibility" className="rule">
      <div className="shell py-12 lg:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* Logos only. No category labels underneath. */}
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
            <p className="text-[12.5px] text-ink-dim">Products I&apos;ve built for</p>
            <ul className="flex flex-wrap items-center gap-x-9 gap-y-5">
              {LOGOS.map((logo) => (
                <li key={logo.name}>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height="24"
                    loading="lazy"
                    decoding="async"
                    className="logo-mark h-[22px] w-auto"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Public, verifiable third-party rating. Was buried in a metric
              string on the templates project; it does more work up here. */}
          <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[13.5px] text-ink-soft">
            <Star size={14} aria-hidden="true" className="translate-y-0.5 text-accent" />
            <span className="font-medium text-ink tabular-nums">{MARKETPLACE.rating}</span>
            <span className="text-ink-dim">{MARKETPLACE.detail}</span>
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-hair pt-10 md:grid-cols-4">
          {PROOF_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <dt className="text-stat font-semibold tabular-nums text-ink">{stat.value}</dt>
              <dd className="text-[13px] text-ink-dim">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
