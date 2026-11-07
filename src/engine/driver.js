// The driver: one module, one clock, one idea. `range` (0 long range to 1
// contact) comes from scroll; `beat` is a swing pulse (96 bpm, backbeat on 2
// and 4) that keeps the page breathing while the visitor does nothing. Every
// visual that carries the concept subscribes here, so they always agree.
import { gsap, reduced } from './motion'
import { tick } from './sound'

export const DISTANCE_MAX = 4 // metres at the top of the page

export const driver = {
  range: 0,
  beat: 0,
  px: 0, // pointer, -1..1
  py: 0,
  label: 'Long range',
  section: '',
}

const subs = new Set()
export const subscribe = (fn) => {
  subs.add(fn)
  return () => subs.delete(fn)
}

export const distance = () => {
  const d = DISTANCE_MAX * (1 - driver.range)
  return Math.max(0, d + 0.012 * driver.beat * Math.min(1, d))
}

let started = false
export function startDriver() {
  if (started || typeof window === 'undefined') return
  started = true
  const still = reduced()
  const period = 60 / 96
  let lastIdx = -1

  window.addEventListener(
    'pointermove',
    (e) => {
      driver.px = (e.clientX / window.innerWidth) * 2 - 1
      driver.py = (e.clientY / window.innerHeight) * 2 - 1
    },
    { passive: true },
  )

  gsap.ticker.add((time) => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const target = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    driver.range += (target - driver.range) * 0.14
    if (Math.abs(target - driver.range) < 0.0004) driver.range = target

    if (!still) {
      const pos = time / period
      const idx = Math.floor(pos)
      const back = idx % 2 === 1
      driver.beat = back ? Math.exp(-(pos - idx) * 5) : 0
      if (idx !== lastIdx) {
        lastIdx = idx
        if (back) tick()
      }
    }
    subs.forEach((fn) => fn(driver))
  })
}
