import { METRICS, TESTIMONIALS } from '../constants'
import { useReveal, useRevealList } from '../lib/useReveal'

export default function Trust() {
  const metricsRef = useReveal()
  const getRef = useRevealList(TESTIMONIALS.length)

  return (
    <section id="trust" className="px-12 py-24 border-t border-[rgba(99,157,255,0.08)]">
      <div className="section-label">Social proof</div>
      <h2 className="section-title">
        Numbers that <span className="text-blue-accent">matter</span>
      </h2>

      {/* Metrics grid */}
      <div
        ref={metricsRef}
        className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
      >
        {METRICS.map((m, i) => (
          <div
            key={i}
            className="bg-bg-secondary border border-[rgba(99,157,255,0.08)] rounded-lg p-6"
          >
            <div className="font-mono text-3xl font-semibold text-blue-accent mb-1 tracking-tight">
              {m.value}
            </div>
            <div className="text-sm text-text-secondary mb-1">{m.label}</div>
            <div className="text-xs text-text-dim">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* Testimonials — only shown if array has entries */}
      {TESTIMONIALS.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              ref={getRef(i)}
              className="reveal bg-bg-secondary border border-[rgba(99,157,255,0.08)] rounded-lg p-7"
            >
              <p className="text-base text-text-primary leading-relaxed mb-5">
                <span className="text-blue-accent text-2xl leading-none align-[-6px] mr-1">&ldquo;</span>
                {t.quote}
              </p>
              <div>
                <strong className="block text-sm font-medium text-text-primary">{t.name}</strong>
                <span className="text-xs text-text-secondary">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Placeholder shown when no testimonials yet */}
      {TESTIMONIALS.length === 0 && (
        <div className="border border-dashed border-[rgba(99,157,255,0.15)] rounded-lg p-6 text-center font-mono text-xs text-text-dim">
          ✦ Add client testimonials in <code className="text-blue-accent">src/constants.js</code> → TESTIMONIALS array
        </div>
      )}
    </section>
  )
}
