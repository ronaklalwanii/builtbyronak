import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)
export { gsap, ScrollTrigger, SplitText }

export const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// The strike: arrive fast, stop dead.
export const EASE = 'power4.out'

let lenis = null
export const getLenis = () => lenis

// One clock: Lenis rides GSAP's ticker, ScrollTrigger follows Lenis.
export function startScroll() {
  if (lenis || reduced()) return
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
}

export function scrollToTarget(target, immediate = false) {
  if (lenis) lenis.scrollTo(target, { immediate, duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) })
  else if (typeof target === 'number') window.scrollTo({ top: target })
  else document.querySelector(target)?.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth' })
}

// Intro gate: page choreography waits for the loader or the route curtain.
const gate = { promise: Promise.resolve(), resolve: () => {} }
export const intro = {
  late: false,
  wait: () => gate.promise,
  reset() {
    gate.promise = new Promise((r) => (gate.resolve = r))
  },
  done: () => gate.resolve(),
}

// Page-scoped effects. Everything made inside `setup` (tweens, triggers,
// SplitText) is reverted on route change. `setup` may return a cleanup.
export function usePage(setup, deps = []) {
  const ref = useRef(null)
  useEffect(() => {
    let cleanup
    const ctx = gsap.context(() => {
      cleanup = setup(ref.current)
    }, ref)
    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    return () => {
      cleanup?.()
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}

// Mask-line reveal for display type and paragraphs.
export function revealLines(el, vars = {}) {
  if (!el || reduced()) return
  SplitText.create(el, {
    type: 'lines',
    mask: 'lines',
    autoSplit: true,
    onSplit(self) {
      return gsap.from(self.lines, {
        yPercent: 108,
        duration: 0.95,
        ease: EASE,
        stagger: 0.07,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        ...vars,
      })
    },
  })
}

// Slash wipe: a diagonal edge crosses the element (clip-path only).
const poly = (mode, p) =>
  mode === 'in'
    ? `polygon(0 0, ${p + 15}% 0, ${p - 15}% 100%, 0 100%)`
    : `polygon(${p + 15}% 0, 100% 0, 100% 100%, ${p - 15}% 100%)`
export const slashSet = (el, mode, covered) => {
  el.style.clipPath = poly(mode, covered ? 115 : -15)
}
export function slash(el, mode, vars = {}) {
  const o = { p: -15 }
  return gsap.to(o, {
    p: 115,
    duration: 0.8,
    ease: 'power4.inOut',
    ...vars,
    onUpdate: () => (el.style.clipPath = poly(mode, o.p)),
  })
}
