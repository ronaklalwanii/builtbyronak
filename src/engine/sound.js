// Opt-in sound. Off until the visitor asks. Everything is synthesised, no files.
let ctx = null
let noise = null
let on = false

export const soundOn = () => on

export function toggleSound() {
  on = !on
  if (on && !ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)()
    const len = ctx.sampleRate * 0.2
    noise = ctx.createBuffer(1, len, ctx.sampleRate)
    const d = noise.getChannelData(0)
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1
  }
  if (on) ctx?.resume()
  return on
}

// Ride-cymbal tick on the backbeat.
export function tick() {
  if (!on || !ctx) return
  const src = ctx.createBufferSource()
  src.buffer = noise
  const hp = ctx.createBiquadFilter()
  hp.type = 'highpass'
  hp.frequency.value = 7000
  const g = ctx.createGain()
  const t = ctx.currentTime
  g.gain.setValueAtTime(0.05, t)
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16)
  src.connect(hp).connect(g).connect(ctx.destination)
  src.start(t)
}

// Low thump when the distance hits zero.
export function thump() {
  if (!on || !ctx) return
  const o = ctx.createOscillator()
  const g = ctx.createGain()
  const t = ctx.currentTime
  o.frequency.setValueAtTime(110, t)
  o.frequency.exponentialRampToValueAtTime(38, t + 0.25)
  g.gain.setValueAtTime(0.35, t)
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35)
  o.connect(g).connect(ctx.destination)
  o.start(t)
  o.stop(t + 0.4)
}
