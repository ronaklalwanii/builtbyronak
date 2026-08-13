import { Star } from 'lucide-react'
import { MARKETPLACE, PROOF_STATS } from '../constants'

/**
 * Credibility strip. Sits directly under the hero because the hero is for the
 * value prop, not for proof. Full-width horizontal band, deliberately a
 * different layout family from the two-column grid the rest of the page uses.
 *
 * No client logo row: the only two sourceable marks were an employer and that
 * employer's client, which a single row of peer logos would have misrepresented.
 * The rating below is public and independently verifiable, which the logos
 * would not have been.
 */
export default function Credibility() {
  return (
    <section id="credibility" className="rule">
      <div className="shell py-12 lg:py-14">
        <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[14px] text-ink-soft">
          <Star size={15} aria-hidden="true" className="translate-y-0.5 text-accent" />
          <span className="font-medium text-ink tabular-nums">{MARKETPLACE.rating}</span>
          <span className="text-ink-dim">{MARKETPLACE.detail}</span>
        </p>

        <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-hair pt-9 md:grid-cols-4">
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
