// The one idea that moves at rest: records turn. A single listener on GSAP's
// ticker spins every visible `.disc`; scroll speed pushes it, so the page
// answers the visitor. Paused off screen, off under reduced motion.
import { gsap, reduced, getLenis } from './motion'

const DEG_PER_SEC = 24 // a slow 15 s turn, not a real 33 1/3 rpm
let started = false

export function startSpin() {
  if (started || typeof window === 'undefined' || reduced()) return
  started = true
  const visible = new Set()
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)))
  })
  const watch = () => document.querySelectorAll('.disc').forEach((d) => io.observe(d))
  watch()
  new MutationObserver(watch).observe(document.getElementById('main'), { childList: true, subtree: true })

  const angle = new WeakMap()
  gsap.ticker.add((_, dt) => {
    if (!visible.size) return
    const push = (getLenis()?.velocity ?? 0) * 0.6
    const step = (dt / 1000) * DEG_PER_SEC + push
    visible.forEach((d) => {
      const a = ((angle.get(d) ?? 0) + step) % 360
      angle.set(d, a)
      d.style.rotate = `${a.toFixed(2)}deg`
    })
  })
}
