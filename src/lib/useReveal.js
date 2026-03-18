import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fallback = setTimeout(() => el.classList.add('visible'), 600)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          clearTimeout(fallback)
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    )

    observer.observe(el)
    return () => { observer.disconnect(); clearTimeout(fallback) }
  }, [])

  return ref
}

export function useRevealList(count) {
  const refs = useRef([])

  useEffect(() => {
    const els = refs.current.filter(Boolean)
    if (!els.length) return

    const fallback = setTimeout(() => {
      els.forEach(el => el.classList.add('visible'))
    }, 700)

    const observers = els.map((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('visible'), i * 80)
            clearTimeout(fallback)
            obs.disconnect()
          }
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      )
      obs.observe(el)
      return obs
    })

    return () => { observers.forEach(o => o.disconnect()); clearTimeout(fallback) }
  }, [count])

  return (i) => (el) => { refs.current[i] = el }
}
