import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import { PERSONAL, SOCIAL } from '../constants'
import { useReveal } from '../lib/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="px-12 py-24 border-t border-[rgba(99,157,255,0.08)] bg-bg-secondary text-center">
      <div className="max-w-xl mx-auto">
        <div className="section-label justify-center">Get in touch</div>

        <h2
          className="text-[clamp(40px,5vw,68px)] font-semibold tracking-tight leading-tight mb-6"
          style={{ animation: 'fadeUp 0.6s ease both' }}
        >
          Let&apos;s build<br />
          something <span className="text-blue-accent">great.</span>
        </h2>

        <p className="text-base text-text-secondary leading-[1.75] mb-10">
          Got a project in mind? Landing page, web app, or performance fix —
          I deliver fast, clean work at a price that works for small businesses.
          First draft in 24 hours.
        </p>

        <div ref={ref} className="reveal">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="inline-flex items-center gap-3 font-mono text-sm text-blue-accent border border-blue-border bg-blue-dim px-7 py-3.5 rounded transition-all duration-200 hover:bg-[rgba(61,142,240,0.18)]"
          >
            <Mail size={15} />
            {PERSONAL.email}
          </a>
          <p className="font-mono text-xs text-text-dim mt-3">
            Full payment upfront via Wise or PayPal · Replies within 12 hours
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-8 mt-12 pt-10 border-t border-[rgba(99,157,255,0.08)]">
          {SOCIAL.linkedin && (
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          )}
          {SOCIAL.github && (
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {SOCIAL.twitter && (
            <a
              href={SOCIAL.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              <Twitter size={14} /> Twitter
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
