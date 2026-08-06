import { WORK } from '../constants'
import { useRevealList } from '../lib/useReveal'

export default function Work() {
  const getRef = useRevealList(WORK.length)

  return (
    <section id="work" className="rule">
      <div className="shell py-16 lg:py-20">
        <p className="eyebrow pb-10">Experience</p>

        <div className="border-t border-hair">
          {WORK.map((job, i) => (
            <div
              key={job.company}
              ref={getRef(i)}
              className="reveal grid grid-cols-1 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] gap-x-14 gap-y-4 py-10 border-b border-hair"
            >
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[15px] font-medium text-ink">{job.title}</h3>
                <p className="text-[13.5px] text-ink-soft">{job.company}</p>
                <p className="font-mono text-[11px] text-ink-dim tabular-nums">{job.period}</p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-[14.5px] leading-relaxed text-ink-soft max-w-prose">{job.body}</p>

                <ul className="flex flex-col gap-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-[14px] leading-relaxed text-ink-soft max-w-prose before:absolute before:left-0 before:top-[0.7em] before:w-1.5 before:h-px before:bg-ink-faint"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <p className="meta pt-1">{job.tags.join(' · ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
