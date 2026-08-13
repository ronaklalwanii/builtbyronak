import { PROCESS } from '../constants'
import { useRevealList } from '../lib/useReveal'

export default function Process() {
  const getRef = useRevealList(PROCESS.length)

  return (
    <section id="process" className="rule">
      <div className="shell section-pad">
        <h2 className="section-h pb-12">How I work</h2>

        {/* Full-width four-across. The numbers stay because the steps are
            genuinely sequential, not decorative. */}
        <ol className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <li
              key={step.title}
              ref={getRef(i)}
              className="reveal flex flex-col gap-3 border-t border-hair pt-5"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[12px] tabular-nums text-ink-dim">{i + 1}</span>
                <h3 className="text-[15px] font-medium text-ink">{step.title}</h3>
              </div>

              <p className="text-[13.5px] leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
