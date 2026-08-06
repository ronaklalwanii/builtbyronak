import { Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'
import { PERSONAL, SOCIAL } from '../constants'

const SOCIALS = [
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { key: 'twitter', label: 'Twitter', Icon: Twitter },
]

export default function Contact() {
  return (
    <section id="contact" className="rule">
      <div className="shell py-16 lg:py-20">
        <p className="eyebrow pb-10">Get in touch</p>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] gap-x-14 gap-y-10 items-start">
          <div className="flex flex-col gap-5">
            <h2 className="text-title font-semibold text-ink text-balance max-w-[18ch]">
              Got an AI feature that needs a real interface?
            </h2>

            <p className="text-[14.5px] leading-relaxed text-ink-soft max-w-prose">
              Or an admin panel you&apos;d rather not build in-house. Tell me what
              you&apos;re shipping and by when, and I&apos;ll come back with scope, price,
              and a start date. Usually the same day.
            </p>

            <a
              href={`mailto:${PERSONAL.email}`}
              className="group inline-flex items-center gap-2.5 w-fit border border-hair-strong rounded-lg px-5 py-3 font-mono text-[13px] text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <Mail size={14} />
              {PERSONAL.email}
              <ArrowUpRight
                size={14}
                className="text-ink-faint group-hover:text-accent transition-colors"
              />
            </a>
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
                    className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] uppercase text-ink-soft hover:text-ink transition-colors"
                  >
                    <Icon size={12} />
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
