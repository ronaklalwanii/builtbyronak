import { ArrowRight, CalendarDays } from 'lucide-react'
import { PERSONAL } from '../constants'

/**
 * Hero stack is capped at 4 text elements: eyebrow, headline, subtext, CTAs.
 * The identity row above the eyebrow is the person, not a fifth claim. The
 * stat row lives in <Credibility> directly below, which is where proof belongs.
 */
export default function Hero() {
  return (
    <section id="hero" className="pt-[68px]">
      <div className="shell grid grid-cols-1 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,480px)_minmax(0,1fr)] gap-x-10 xl:gap-x-14 gap-y-12 items-center pt-10 lg:pt-12 pb-16 lg:pb-24">
        {/* -- Copy --------------------------------- */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 animate-rise-in">
            {PERSONAL.photo ? (
              <img
                src={PERSONAL.photo}
                srcSet="/images/ronak-160.webp 160w, /images/ronak-640.webp 640w"
                sizes="44px"
                alt={PERSONAL.name}
                width="44"
                height="44"
                className="h-11 w-11 rounded-full border border-hair object-cover object-[center_25%]"
              />
            ) : (
              <span
                aria-hidden="true"
                className="grid h-11 w-11 place-items-center rounded-full border border-hair bg-surface font-mono text-[12px] tracking-[0.08em] text-ink-dim"
              >
                {PERSONAL.initials}
              </span>
            )}

            <div className="flex flex-col gap-0.5">
              <span className="text-[13.5px] font-medium text-ink">{PERSONAL.name}</span>
              {PERSONAL.available && (
                <span className="flex items-center gap-1.5 text-[12px] text-live">
                  <span className="h-1.5 w-1.5 rounded-full bg-live animate-pulse-dot" />
                  Available for freelance work
                </span>
              )}
            </div>
          </div>

          <p className="eyebrow-accent animate-rise-in" style={{ animationDelay: '60ms' }}>
            Freelance · Shopify + React
          </p>

          <h1
            className="text-display font-semibold text-ink text-balance animate-rise-in"
            style={{ animationDelay: '120ms' }}
          >
            Shopify stores and React apps, built by one senior engineer.
          </h1>

          <p
            className="text-lede text-ink-soft max-w-[46ch] animate-rise-in"
            style={{ animationDelay: '180ms' }}
          >
            7+ years building Shopify stores and React/Next.js apps with AI. You work
            with me directly.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 pt-2 animate-rise-in"
            style={{ animationDelay: '240ms' }}
          >
            {PERSONAL.calendly ? (
              <a
                href={PERSONAL.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <CalendarDays size={15} aria-hidden="true" />
                Book a call
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            ) : (
              <a href="#contact" className="btn-primary group">
                Get in touch
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            )}

            <a href="#projects" className="btn-ghost">
              See the work
            </a>
          </div>
        </div>

        {/* -- Product shots -------------------------
            The Shopify storefront is the LCP element: eager, high priority,
            WebP with explicit dimensions. srcSet sits on the img so Chrome
            does not also fetch the fallback, and the app shot overlaps below
            it and stays lazy so it cannot compete for bandwidth. */}
        <div className="min-w-0">
          <figure className="shot">
            <img
              src="/images/projects/shopify/cozy-skies/cozy-skies-homepage-hero-800.webp"
              srcSet="/images/projects/shopify/cozy-skies/cozy-skies-homepage-hero-800.webp 800w, /images/projects/shopify/cozy-skies/cozy-skies-homepage-hero.webp 1280w"
              sizes="(min-width: 1280px) 720px, (min-width: 1024px) 500px, 100vw"
              alt="Cozy Skies Shopify storefront with a hero product, benefits and a shop button"
              width="1280"
              height="703"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="block w-full h-auto"
            />
          </figure>

          <figure className="shot relative z-10 -mt-10 ml-auto w-[78%] sm:w-[62%] lg:w-[64%]">
            <img
              src="/images/projects/Chronology-Timeline-800.webp"
              alt="MedicalEase case timeline with an AI-generated summary and linked medical records"
              width="800"
              height="450"
              loading="lazy"
              fetchPriority="low"
              decoding="async"
              className="block w-full h-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
