import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { PROJECTS } from '../constants'
import { useRevealList } from '../lib/useReveal'

function MockUI({ accent = false }) {
  return (
    <div className="w-full h-48 bg-[#0f1520] border-b border-[rgba(99,157,255,0.08)] relative overflow-hidden">
      {/* Topbar */}
      <div className="h-8 bg-[#0a0f18] border-b border-[rgba(255,255,255,0.05)] flex items-center px-3 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
      </div>
      {/* Sidebar */}
      <div className="absolute left-0 top-8 bottom-0 w-12 bg-[#080c12] border-r border-[rgba(255,255,255,0.04)] flex flex-col items-center pt-3 gap-2.5">
        {[0, 1, 2, 3].map((j) => (
          <div key={j} className={`w-6 h-6 rounded ${j === 1 ? 'bg-[rgba(61,142,240,0.2)]' : 'bg-[rgba(255,255,255,0.05)]'}`} />
        ))}
      </div>
      {/* Content */}
      <div className="absolute left-12 top-8 right-0 bottom-0 p-3 flex flex-col gap-2">
        <div className="h-2.5 rounded bg-[rgba(255,255,255,0.05)] w-2/5" />
        <div className={`h-2.5 rounded w-3/5 ${accent ? 'bg-[rgba(61,142,240,0.25)]' : 'bg-[rgba(255,255,255,0.05)]'}`} />
        <div className="h-2.5 rounded bg-[rgba(255,255,255,0.04)] w-4/5" />
        <div className="flex gap-1.5 mt-1">
          {[1, 2, 3].map((k) => (
            <div key={k} className="flex-1 h-10 rounded bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.04)]" />
          ))}
        </div>
        <div className="h-2 rounded bg-[rgba(255,255,255,0.03)] w-full" />
      </div>
    </div>
  )
}

function ProjectMedia({ project, index }) {
  const images = project.carouselImages?.length ? project.carouselImages : project.image ? [project.image] : []
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return undefined

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [images.length])

  if (images.length === 0) {
    return <MockUI accent={index % 2 === 0} />
  }

  const nextSlide = () => setActiveIndex((current) => (current + 1) % images.length)
  const prevSlide = () => setActiveIndex((current) => (current - 1 + images.length) % images.length)

  return (
    <div className="w-full h-56 border-b border-[rgba(99,157,255,0.08)] relative overflow-hidden group/media">
      {images.map((image, i) => (
        <img
          key={`${project.name}-${i}`}
          src={image}
          alt={`${project.name} preview ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[rgba(10,15,24,0.65)] text-white border border-[rgba(255,255,255,0.15)] opacity-0 group-hover/media:opacity-100 transition-opacity"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[rgba(10,15,24,0.65)] text-white border border-[rgba(255,255,255,0.15)] opacity-0 group-hover/media:opacity-100 transition-opacity"
          >
            <ChevronRight size={16} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={`${project.name}-dot-${i}`}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full border border-[rgba(255,255,255,0.35)] transition-colors ${
                  i === activeIndex ? 'bg-blue-accent' : 'bg-[rgba(10,15,24,0.5)]'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  const getRef = useRevealList(PROJECTS.length)

  return (
    <section id="projects" className="px-12 py-24 border-t border-[rgba(99,157,255,0.08)] bg-bg-secondary">
      <div className="section-label">Selected projects</div>
      <h2 className="section-title">
        Things I&apos;ve <span className="text-blue-accent">built</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            ref={getRef(i)}
            className="reveal group bg-bg-primary border border-[rgba(99,157,255,0.08)] rounded-lg overflow-hidden hover:border-[rgba(99,157,255,0.2)] hover:-translate-y-1 transition-all duration-200"
          >
            <ProjectMedia project={project} index={i} />

            {/* Body */}
            <div className="p-6">
              <h3 className="text-[15px] font-medium text-text-primary mb-2">{project.name}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">{project.description}</p>

              <span className="inline-block font-mono text-xs text-blue-accent bg-blue-dim border border-blue-border px-2.5 py-1 rounded mb-4">
                {project.metric}
              </span>

              <div className="flex flex-wrap gap-1.5 mb-0">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="flex gap-4 mt-4 pt-4 border-t border-[rgba(99,157,255,0.08)]">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-xs text-text-secondary hover:text-blue-accent transition-colors"
                    >
                      {link.label}
                      <ExternalLink size={11} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
