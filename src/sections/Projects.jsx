import { ArrowRight, ExternalLink } from 'lucide-react'
import { PROJECTS, ALSO_SHIPPED } from '../constants'
import { useRevealList } from '../lib/useReveal'
import Shots from '../components/Shots'

const totalShots = PROJECTS.reduce((n, p) => n + (p.carouselImages?.length || 0), 0)

export default function Projects() {
  const getRef = useRevealList(PROJECTS.length)

  return (
    <section id="projects" className="rule">
      <div className="shell py-16 lg:py-20">
        {/* Section head: label left, count right. No display heading. */}
        <div className="flex items-baseline justify-between gap-6 pb-10">
          <p className="eyebrow">Featured work</p>
          <a href="#projects" className="link-accent font-mono text-[11px] tracking-[0.1em] uppercase">
            {totalShots} screenshots
            <ArrowRight size={12} />
          </a>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <article
              key={project.name}
              ref={getRef(i)}
              className="reveal grid grid-cols-1 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] gap-x-14 gap-y-7 py-12 first:pt-0 border-b border-hair last:border-b-0"
            >
              <div className="flex flex-col gap-4 lg:pt-1">
                <h3 className="text-title font-semibold text-ink text-balance">{project.name}</h3>

                <p className="meta">{project.tags.join(' · ')}</p>

                <p className="text-[14.5px] leading-relaxed text-ink-soft max-w-prose">
                  {project.description}
                </p>

                <p className="text-sm text-accent">{project.metric}</p>

                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] uppercase text-ink-dim hover:text-ink transition-colors"
                      >
                        {link.label}
                        <ExternalLink size={10} />
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
            <p className="eyebrow pb-8">Also shipped</p>

            <div className="border-t border-hair">
              {ALSO_SHIPPED.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-1 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] gap-x-14 gap-y-3 py-7 border-b border-hair"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[15px] font-medium text-ink">{item.name}</h3>
                    <p className="meta">{item.tags.join(' · ')}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-[14.5px] leading-relaxed text-ink-soft max-w-prose">
                      {item.description}
                    </p>
                    <p className="font-mono text-[11px] text-ink-dim">{item.metric}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
