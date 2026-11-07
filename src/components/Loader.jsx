import { useEffect, useRef } from 'react'
import { gsap, slash, intro } from '../engine/motion'

// Shown once per full page load (html.has-loader is set by an inline script
// in index.html, never under reduced motion). The count is pure CSS, so it
// runs before any script arrives; here we only wait for the count and the
// fonts, then a slash wipe hands over to the hero. If the script is so late
// that CSS already dismissed the loader, the intro is skipped (intro.late).
export default function Loader() {
  const root = useRef(null)

  useEffect(() => {
    const html = document.documentElement
    const el = root.current
    if (!html.classList.contains('has-loader')) {
      intro.done()
      return
    }
    if (getComputedStyle(el).visibility === 'hidden') {
      html.classList.remove('has-loader')
      intro.late = true
      intro.done()
      return
    }
    intro.reset()
    let dead = false
    const counted = new Promise((r) => setTimeout(r, Math.max(0, 600 - performance.now())))
    Promise.all([counted, document.fonts?.ready]).then(() => {
      if (dead) return
      gsap.delayedCall(0.15, intro.done)
      slash(el, 'out', {
        duration: 0.42,
        onComplete: () => {
          html.classList.remove('has-loader')
          el.hidden = true
        },
      })
    })
    return () => {
      dead = true
    }
  }, [])

  return (
    <div className="loader" id="loader" ref={root} aria-hidden="true">
      <p className="loader__top">Ronak Lalwani</p>
      <p className="loader__top loader__top--r">Shopify + React</p>
      <div className="loader__bar">
        <span />
      </div>
      <p className="loader__count" />
    </div>
  )
}
