import { useEffect, useRef } from 'react'
import { gsap, slash, slashSet } from '../engine/motion'
import { intro } from '../engine/motion'
import { useRouter } from '../router'

// Route transition: a whiskey slash carries the destination name across.
export default function Curtain() {
  const { curtain } = useRouter()
  const el = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    const root = el.current
    curtain.current = {
      cover(name) {
        label.current.textContent = name
        root.style.visibility = 'visible'
        slashSet(root, 'in', false)
        gsap.fromTo(label.current, { xPercent: -6 }, { xPercent: 0, duration: 0.9, ease: 'power4.out' })
        return slash(root, 'in', { duration: 0.7 }).then()
      },
      reveal() {
        slashSet(root, 'out', false)
        gsap.delayedCall(0.28, intro.done)
        return slash(root, 'out', {
          duration: 0.8,
          delay: 0.18,
          onComplete: () => (root.style.visibility = 'hidden'),
        }).then()
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
