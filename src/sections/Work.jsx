import { ArrowRight } from 'lucide-react'
import { WORK } from '../constants'
import { useRevealList } from '../lib/useReveal'

export default function Work() {
  const getRef = useRevealList(WORK.length)

  return (
    <section id="work" className="px-12 py-24 border-t border-[rgba(99,157,255,0.08)]">
      <div className="section-label">Experience</div>
      <h2 className="section-title">
        Where I&apos;ve <span className="text-blue-accent">worked</span>
      </h2>

      <div className="flex flex-col">
        {WORK.map((job, i) => (
          <div
            key={i}
            ref={getRef(i)}
            className="reveal grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 py-10 border-t border-[rgba(99,157,255,0.08)] first:border-t last:border-b"
          >
            {/* Meta */}
            <div className="pt-1">
              <div className="font-mono text-xs text-text-secondary mb-2">{job.period}</div>
              <div className="text-xs text-text-dim">{job.company}</div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-3">{job.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">{job.body}</p>

              <ul className="flex flex-col gap-2.5 mb-6">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                    <ArrowRight size={14} className="text-blue-accent flex-shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{
                      __html: b.replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary font-medium">$1</strong>')
                           .replace(/(65% efficiency gain|zero downtime|\$750K ARR|4\.8\/5\.0)/g,
                             '<strong class="text-text-primary font-medium">$1</strong>')
                    }} />
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {job.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
