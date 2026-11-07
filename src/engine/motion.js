import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)
export { gsap, ScrollTrigger, SplitText }

export const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Sleeve motion: slide out fast, settle softly.
export const EASE = 'power3.out'

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
  navigated: false, // true after the first client-side route change
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
    aria: 'none',
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

// Panel wipe for route changes (clip-path only): the panel rises over the
// page, then keeps going and leaves through the top.
export const wipe = {
  hide: (el) => gsap.set(el, { clipPath: 'inset(100% 0% 0% 0%)' }),
  cover: (el, vars = {}) =>
    gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.55, ease: 'power3.inOut', ...vars }),
  reveal: (el, vars = {}) =>
    gsap.fromTo(el, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.6, ease: 'power3.inOut', ...vars }),
}
