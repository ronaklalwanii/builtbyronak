import { ArrowRight } from 'lucide-react'

/**
 * Hero stack is capped at 4 text elements: eyebrow, headline, subtext, CTAs.
 * The stat row that used to live here moved into <Credibility> directly below,
 * which is where proof belongs.
 */
export default function Hero() {
  return (
    <section id="hero" className="pt-[68px]">
      <div className="shell grid grid-cols-1 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] gap-x-14 gap-y-10 items-center pt-10 lg:pt-12 pb-20 lg:pb-24">
        {/* -- Copy --------------------------------- */}
        <div className="flex flex-col gap-6">
          <p className="eyebrow-accent animate-rise-in">AI integration for web products</p>

          <h1
            className="text-display font-semibold text-ink text-balance animate-rise-in"
            style={{ animationDelay: '60ms' }}
          >
            Ship AI features.
            <br />
            Ship reliable UI.
          </h1>

          <p
            className="text-lede text-ink-soft max-w-measure animate-rise-in"
            style={{ animationDelay: '120ms' }}
          >
            I help startups and agencies build production web apps with AI that users
            actually trust.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 pt-2 animate-rise-in"
            style={{ animationDelay: '180ms' }}
          >
            <a href="#contact" className="btn-primary group">
              Get in touch
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a href="#projects" className="btn-ghost">
              See the work
            </a>
          </div>
        </div>

        {/* -- Product shot -------------------------
            LCP element. Eager + high priority, WebP with a JPEG fallback. */}
        <div className="shot animate-rise-in" style={{ animationDelay: '100ms' }}>
          <picture>
            <source
              type="image/webp"
              srcSet="/images/projects/Chronology-Timeline-800.webp 800w, /images/projects/Chronology-Timeline-1280.webp 1280w, /images/projects/Chronology-Timeline-1920.webp 1920w"
              sizes="(min-width: 1024px) 720px, 100vw"
            />
            <img
              src="/images/projects/Chronology-Timeline.jpg"
              alt="Medical chronology timeline with AI-generated summaries and linked source documents"
              width="1920"
              height="1080"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block w-full h-auto"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
