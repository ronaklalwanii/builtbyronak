import { TESTIMONIALS } from '../constants'
import { useRevealList } from '../lib/useReveal'

// Metrics live in the hero now. This section only appears once there are
// real testimonials to show. No empty state, no placeholder.
export default function Trust() {
  const getRef = useRevealList(TESTIMONIALS.length)

  if (TESTIMONIALS.length === 0) return null

  return (
    <section id="trust" className="px-12 py-24 border-t border-[rgba(99,157,255,0.08)]">
      <div className="section-label">Client feedback</div>
      <h2 className="section-title">
        What people <span className="text-blue-accent">say</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[rgba(99,157,255,0.08)] border border-[rgba(99,157,255,0.08)] rounded-lg overflow-hidden">
        {TESTIMONIALS.map((item, i) => (
          <figure key={item.name} ref={getRef(i)} className="reveal bg-bg-primary p-6 flex flex-col gap-4">
            <blockquote className="text-sm text-text-primary leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="font-mono text-xs text-text-secondary mt-auto">
              {item.name}
              {item.role && <span className="text-text-dim"> · {item.role}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
