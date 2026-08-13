import { ExternalLink } from 'lucide-react'
import { PROJECTS, ALSO_SHIPPED } from '../constants'
import { useRevealList } from '../lib/useReveal'
import Shots from '../components/Shots'

const totalShots = PROJECTS.reduce((n, p) => n + (p.carouselImages?.length || 0), 0)

export default function Projects() {
  const getRef = useRevealList(PROJECTS.length)

  return (
    <section id="projects" className="rule">
      <div className="shell section-pad">
        <div className="flex items-baseline justify-between gap-6 pb-12">
          <h2 className="section-h">Featured work</h2>
          <p className="meta">{totalShots} screenshots</p>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <article
              key={project.name}
              ref={getRef(i)}
              className="reveal grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] gap-x-14 gap-y-7 py-12 first:pt-0 border-b border-hair last:border-b-0"
            >
              <div className="flex flex-col gap-4 lg:pt-1">
                <h3 className="text-title font-semibold text-ink text-balance">{project.name}</h3>

                <p className="text-[14.5px] leading-relaxed text-ink-soft max-w-prose">
                  {project.description}
                </p>

                <p className="text-sm text-accent">{project.metric}</p>

                <ul className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[13px] text-ink-dim hover:text-ink transition-colors"
                      >
                        {link.label}
                        <ExternalLink size={11} />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <Shots images={project.carouselImages} name={project.name} />
            </article>
          ))}
        </div>

        {ALSO_SHIPPED.length > 0 && (
          <div className="pt-16">
            <h3 className="section-h pb-8">Also shipped</h3>

            {/* Card grid, not another two-column row list: this section
                deliberately breaks the layout family used above. */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ALSO_SHIPPED.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-3 rounded-lg border border-hair bg-surface p-6"
                >
                  <h4 className="text-[15px] font-medium text-ink">{item.name}</h4>

                  <p className="text-[14px] leading-relaxed text-ink-soft">{item.description}</p>

                  <p className="text-[13px] text-accent">{item.metric}</p>

                  <ul className="flex flex-wrap gap-1.5 pt-1 mt-auto">
                    {item.tags.map((tag) => (
                      <li key={tag} className="tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
