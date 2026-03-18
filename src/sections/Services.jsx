import {
  Zap, Rocket, Gauge, Wrench, LayoutDashboard,
  ArrowUpRight,
} from 'lucide-react'
import { SERVICES } from '../constants'
import { useRevealList } from '../lib/useReveal'

const ICON_MAP = { Zap, Rocket, Gauge, Wrench, LayoutDashboard }

export default function Services() {
  const getRef = useRevealList(SERVICES.length)

  return (
    <section id="services" className="px-12 py-24 border-t border-[rgba(99,157,255,0.08)]">
      <div className="section-label">What I offer</div>
      <h2 className="section-title">
        Services &amp; <span className="text-blue-accent">Pricing</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[rgba(99,157,255,0.08)] border border-[rgba(99,157,255,0.08)] rounded-lg overflow-hidden">
        {SERVICES.map((svc, i) => {
          const Icon = ICON_MAP[svc.icon] ?? Zap
          return (
            <div
              key={i}
              ref={getRef(i)}
              className="reveal group relative bg-bg-secondary hover:bg-bg-tertiary p-10 flex flex-col transition-colors duration-200 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-blue-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              <Icon size={22} className="text-blue-accent mb-5" strokeWidth={1.5} />

              <h3 className="text-base font-medium text-text-primary mb-2">{svc.name}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">{svc.description}</p>

              <div>
                <div className="font-mono text-sm text-blue-accent">{svc.price}</div>
                <div className="font-mono text-xs text-text-dim mt-1">{svc.turnaround}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
