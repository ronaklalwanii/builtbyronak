import { ArrowRight, ChevronRight } from 'lucide-react'
import { PERSONAL, STATS } from '../constants'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-12 pt-28 pb-20 overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(rgba(99,157,255,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(61,142,240,0.07) 0%, transparent 70%)' }}
      />

      {/* Available badge */}
      {PERSONAL.available && (
        <div
          className="inline-flex items-center gap-2 text-xs font-mono text-green-DEFAULT bg-green-dim border border-[rgba(62,207,142,0.2)] px-4 py-1.5 rounded-full mb-10 w-fit"
          style={{ animationDelay: '0ms' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-DEFAULT animate-[pulseDot_2s_ease_infinite]" />
          Available for freelance projects
        </div>
      )}

      {/* Heading */}
      <h1
        className="text-[clamp(52px,7vw,88px)] font-semibold leading-none tracking-[-0.04em] text-text-primary mb-3"
        style={{ animation: 'fadeUp 0.6s 0.1s ease both' }}
      >
        Freelance{' '}
        <span className="text-blue-accent">Web</span>
        <br />Developer.
      </h1>

      {/* Subheading */}
      <p
        className="text-[clamp(20px,2.5vw,32px)] font-light tracking-tight text-text-secondary mb-10"
        style={{ animation: 'fadeUp 0.6s 0.2s ease both' }}
      >
        {PERSONAL.tagline}
      </p>

      {/* Description */}
      <p
        className="max-w-xl text-base text-text-secondary leading-[1.75] mb-12"
        style={{ animation: 'fadeUp 0.6s 0.3s ease both' }}
      >
        I&apos;m <span className="text-text-primary font-medium">{PERSONAL.name}</span> —{' '}
        {PERSONAL.description}
      </p>

      {/* CTAs */}
      <div
        className="flex gap-4 items-center flex-wrap"
        style={{ animation: 'fadeUp 0.6s 0.4s ease both' }}
      >
        <a href={`mailto:${PERSONAL.email}`} className="btn-primary">
          Get your page built
          <ArrowRight size={16} />
        </a>
        <a href="#projects" className="btn-secondary">
          See my work
          <ChevronRight size={14} />
        </a>
      </div>

      {/* Stats pills */}
      <div
        className="flex gap-2.5 flex-wrap mt-16"
        style={{ animation: 'fadeUp 0.6s 0.5s ease both' }}
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 bg-bg-secondary border border-[rgba(99,157,255,0.1)] rounded-full px-4 py-2.5 hover:border-[rgba(99,157,255,0.22)] transition-colors duration-200"
          >
            <span className="font-mono text-[15px] font-semibold text-text-primary tracking-tight">
              {stat.value}
              <span className="text-blue-accent">{stat.suffix}</span>
            </span>
            <span className="w-px h-3.5 bg-[rgba(99,157,255,0.15)]" />
            <span className="text-xs text-text-secondary">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
