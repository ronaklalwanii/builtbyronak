import { ArrowRight, Mail } from 'lucide-react'
import { PROCESS, PERSONAL } from '../constants'

export default function Process() {
  return (
    <section id="process" className="rule">
      <div className="shell py-16 lg:py-20">
        <p className="eyebrow pb-10">How I work</p>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] gap-x-14 gap-y-10">
          {/* Steps, with connectors. Numbered because it is a real sequence. */}
          <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-8">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="relative flex flex-col gap-2 pr-6">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[13px] text-ink-faint tabular-nums">{i + 1}</span>
                  <h3 className="text-[14px] font-medium text-ink">{step.title}</h3>
                </div>

                <p className="text-[13px] leading-relaxed text-ink-dim max-w-[26ch]">{step.body}</p>

                {i < PROCESS.length - 1 && (
                  <ArrowRight
                    size={13}
                    aria-hidden="true"
                    className="hidden xl:block absolute right-1 top-1 text-ink-faint"
                  />
                )}
              </li>
            ))}
          </ol>

          {/* Contact block, mirroring the mockup's inline CTA */}
          <div className="bg-surface border border-hair rounded-xl p-6 flex flex-col gap-3 self-start">
            <h3 className="text-[15px] font-medium text-ink">Have a project in mind?</h3>
            <p className="text-[13.5px] leading-relaxed text-ink-soft">
              Tell me what you&apos;re shipping and by when. I&apos;ll come back with scope,
              price, and a start date.
            </p>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="link-accent font-mono text-[12.5px] mt-1"
            >
              <Mail size={13} />
              {PERSONAL.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
