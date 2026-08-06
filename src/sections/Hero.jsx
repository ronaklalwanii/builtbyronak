import { ArrowRight } from 'lucide-react'
import { HERO_STATS } from '../constants'

export default function Hero() {
  return (
    <section id="hero" className="pt-[68px]">
      <div className="shell grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] gap-x-14 gap-y-10 items-center py-16 lg:py-20">
        {/* -- Copy --------------------------------- */}
        <div className="flex flex-col gap-6">
          <p className="eyebrow-accent">AI integration for web products</p>

          <h1 className="text-display font-semibold text-ink text-balance">
            Ship AI features.
            <br />
            Ship reliable UI.
          </h1>

          <p className="text-lede text-ink-soft max-w-measure">
            I help startups and agencies build production web apps with AI that users
            actually trust.
          </p>

          <dl className="flex items-stretch gap-6 pt-2">
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1 ${i > 0 ? 'pl-6 border-l border-hair' : ''}`}
              >
                <dt className="text-stat font-semibold text-ink tabular-nums">{stat.value}</dt>
                <dd className="text-[12.5px] text-ink-dim">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <a href="#contact" className="group eyebrow-accent inline-flex items-center gap-2 w-fit pt-2">
            Open for contract work
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* -- Product shot ------------------------- */}
        <div className="shot">
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
        </div>
      </div>
    </section>
  )
}
