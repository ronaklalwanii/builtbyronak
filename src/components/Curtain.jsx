import { useEffect, useRef } from 'react'
import { gsap, wipe, intro } from '../engine/motion'
import { useRouter } from '../router'

// Route transition: an ink panel rises like a sleeve being pulled over the
// page, carries the destination name, then leaves through the top.
export default function Curtain() {
  const { curtain } = useRouter()
  const el = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    const root = el.current
    wipe.hide(root)
    curtain.current = {
      cover(name) {
        label.current.textContent = name
        root.style.visibility = 'visible'
        gsap.fromTo(label.current, { yPercent: 40 }, { yPercent: 0, duration: 0.7, ease: 'power3.out' })
        return wipe.cover(root).then()
      },
      reveal() {
        gsap.delayedCall(0.25, intro.done)
        return wipe.reveal(root, { delay: 0.12, onComplete: () => (root.style.visibility = 'hidden') }).then()
      },
    }
    return () => (curtain.current = null)
  }, [curtain])

  return (
    <div className="curtain" ref={el} aria-hidden="true">
      <p className="curtain__label" ref={label} />
    </div>
  )
}
