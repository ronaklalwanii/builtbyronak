import { WORK } from '../constants'
import { useRevealList } from '../lib/useReveal'

export default function Work() {
  const getRef = useRevealList(WORK.length)

  return (
    <section id="work" className="rule">
      <div className="shell section-pad">
        <h2 className="section-h pb-12">Experience</h2>

        {/* One vertical spine instead of a horizontal rule under every row,
            and a different layout family from the sections above. */}
        <ol className="flex flex-col">
          {WORK.map((job, i) => (
            <li
              key={job.company}
              ref={getRef(i)}
              className="reveal relative border-l border-hair pb-14 pl-8 last:pb-0 md:pl-10"
            >
              {/* Entry tick on the spine. Structural, not a status marker. */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.6rem] h-px w-4 bg-hair-strong md:w-5"
              />

              <div className="flex flex-col gap-1 pb-5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-[17px] font-medium text-ink">{job.title}</h3>
                  <p className="text-[14px] text-accent">{job.company}</p>
                </div>
                <p className="font-mono text-[11.5px] tabular-nums text-ink-dim">{job.period}</p>
              </div>

              <div className="flex flex-col gap-5">
                <p className="max-w-prose text-[14.5px] leading-relaxed text-ink-soft">
                  {job.body}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative max-w-prose pl-4 text-[14px] leading-relaxed text-ink-soft before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-1.5 before:bg-ink-faint"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {job.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
