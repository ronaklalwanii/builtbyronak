import { useEffect, useRef, useState } from 'react'
import { useRouter } from '../router'
import { driver, subscribe, distance } from '../engine/driver'
import { toggleSound } from '../engine/sound'
import { PERSONAL } from '../constants'
import { Roll, A } from './A'

const NAV = [
  ['Work', '/#work', 'work'],
  ['Services', '/#services', 'services'],
  ['About', '/#about', 'about'],
  ['Contact', '/#contact', 'contact'],
]

const rangeLabel = (r) =>
  r < 0.16 ? 'Long range' : r < 0.45 ? 'Mid range' : r < 0.78 ? 'Striking range' : r < 0.97 ? 'Clinch' : 'Contact'

const ist = () =>
  new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })

// Fixed frame: wordmark and nav up top, the range readout and status below.
// The readout is driven, not decorative: it is the distance driver's number.
export default function Hud() {
  const { path } = useRouter()
  const num = useRef(null)
  const lab = useRef(null)
  const nav = useRef(null)
  const bar = useRef(null)
  const dot = useRef(null)
  const [time, setTime] = useState('')
  const [sound, setSound] = useState(false)

  useEffect(() => {
    setTime(ist())
    const id = setInterval(() => setTime(ist()), 20000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    let last = ''
    let lastLabel = ''
    let lastSection = null
    let lastY = 0
    let hidden = false
    return subscribe((d) => {
      const s = distance().toFixed(2)
      if (s !== last && num.current) {
        last = s
        num.current.textContent = s
      }
      const l = rangeLabel(d.range)
      if (l !== lastLabel && lab.current) {
        lastLabel = l
        lab.current.textContent = l
      }
      if (d.section !== lastSection && nav.current) {
        lastSection = d.section
        nav.current.querySelectorAll('a').forEach((a) => {
          if (a.dataset.id === d.section) a.setAttribute('aria-current', 'location')
          else a.removeAttribute('aria-current')
        })
      }
      // Top bar steps aside while scrolling down, returns on the way up.
      const y = window.scrollY
      const shouldHide = y > 240 && y > lastY + 1
      if (y < lastY - 1 || y < 240) hidden = false
      else if (shouldHide) hidden = true
      lastY = y
      if (dot.current) dot.current.style.opacity = (0.3 + 0.7 * d.beat).toFixed(2)
      bar.current?.classList.toggle('is-away', hidden)
      bar.current?.classList.toggle('is-solid', y > 40)
    })
  }, [])

  const onCase = path.startsWith('/work/')

  return (
    <>
      <header className="hud" ref={bar}>
        <A href="/" className="hud__name" aria-label="Ronak Lalwani, home">
          <span className="hud__dot" aria-hidden="true" ref={dot} />
          <span className="roll">
            <span className="roll__in" data-text="Ronak Lalwani">
              Ronak Lalwani
            </span>
          </span>
        </A>
        <nav className="hud__nav" aria-label="Primary" ref={nav}>
          {NAV.map(([label, href, id]) => (
            <Roll
              key={id}
              href={href}
              data-id={id}
              {...(onCase && id === 'work' ? { 'aria-current': 'page' } : {})}
            >
              {label}
            </Roll>
          ))}
        </nav>
      </header>

      <div className="hud-range" aria-hidden="true">
        <span className="hud-range__label" ref={lab}>
          Long range
        </span>
        <span className="hud-range__num">
          <span ref={num}>4.00</span> m
        </span>
      </div>

      <div className="hud-status">
        {PERSONAL.available && <span className="hud-status__av">Available for work</span>}
        {time && <span className="hud-status__t">IST {time}</span>}
        <button
          type="button"
          className="hud-status__sound"
          aria-pressed={sound}
          onClick={() => setSound(toggleSound())}
        >
          Sound {sound ? 'on' : 'off'}
        </button>
      </div>
    </>
  )
}
