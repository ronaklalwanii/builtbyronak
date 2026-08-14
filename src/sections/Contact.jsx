import { Mail, Linkedin, Twitter, ArrowUpRight, CalendarDays } from 'lucide-react'
import { PERSONAL, SOCIAL } from '../constants'

const SOCIALS = [
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { key: 'twitter', label: 'Twitter', Icon: Twitter },
]

export default function Contact() {
  return (
    <section id="contact" className="rule">
      <div className="shell section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] gap-x-14 gap-y-12 items-start">
          <div className="flex flex-col gap-5">
            <h2 className="text-title font-semibold text-ink text-balance max-w-[18ch]">
              Got an AI feature that needs a real interface?
            </h2>

            <p className="text-[15px] leading-relaxed text-ink-soft max-w-prose">
              Or an admin panel you&apos;d rather not build in-house. Tell me what
              you&apos;re shipping and by when, and I&apos;ll come back with scope, price,
              and a start date. Usually the same day.
            </p>

            {/* Calendar first for people ready to talk, address second for people
                who'd rather write. Falls back to email-only if calendly is empty. */}
            <div className="flex flex-wrap items-center gap-3 mt-1">
              {PERSONAL.calendly && (
                <a
                  href={PERSONAL.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  <CalendarDays size={15} aria-hidden="true" />
                  Book a 30-min call
                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              )}

              <a
                href={`mailto:${PERSONAL.email}`}
                className={PERSONAL.calendly ? 'btn-ghost' : 'btn-primary group'}
              >
                <Mail size={15} aria-hidden="true" />
                {PERSONAL.email}
              </a>
            </div>
          </div>

          <dl className="flex flex-col divide-y divide-hair border-y border-hair">
            <div className="flex items-baseline justify-between gap-4 py-3.5">
              <dt className="meta">Availability</dt>
              <dd className="text-[13.5px] text-live">Open, starting now</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-3.5">
              <dt className="meta">Based in</dt>
              <dd className="text-[13.5px] text-ink-soft">Ahmedabad, India</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-3.5">
              <dt className="meta">Overlap</dt>
              <dd className="text-[13.5px] text-ink-soft">US mornings, UK afternoons</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 py-3.5">
              <dt className="meta">Elsewhere</dt>
              <dd className="flex items-center gap-4">
                {SOCIALS.filter(({ key }) => SOCIAL[key]).map(({ key, label, Icon }) => (
                  <a
                    key={key}
                    href={SOCIAL[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[13px] text-ink-soft hover:text-ink transition-colors"
                  >
                    <Icon size={13} aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
