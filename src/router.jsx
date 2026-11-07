import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'
import { flushSync } from 'react-dom'
import { reduced, getLenis, scrollToTarget, intro } from './engine/motion'
import { routeMeta } from './data/meta'
import { caseBySlug } from './data/work'

const Ctx = createContext(null)
export const useRouter = () => useContext(Ctx)

const labelFor = (path) => {
  const m = path.match(/^\/work\/([^/]+)/)
  return (m && caseBySlug(m[1])?.name) || (path === '/' ? 'Ronak Lalwani' : 'Page not found')
}

function applyMeta(path) {
  const m = routeMeta(path)
  document.title = m.title
  const set = (sel, attr, val) => document.head.querySelector(sel)?.setAttribute(attr, val)
  set('meta[name="description"]', 'content', m.description)
  set('link[rel="canonical"]', 'href', m.canonical)
  set('meta[name="robots"]', 'content', m.robots)
  set('meta[property="og:title"]', 'content', m.title)
  set('meta[property="og:description"]', 'content', m.description)
  set('meta[property="og:url"]', 'content', m.canonical)
  set('meta[name="twitter:title"]', 'content', m.title)
  set('meta[name="twitter:description"]', 'content', m.description)
}

// A small History API router: pages are swapped behind the curtain.
export function RouterProvider({ initialPath, children }) {
  const [path, setPath] = useState(initialPath)
  const pathRef = useRef(initialPath)
  const busy = useRef(false)
  const curtain = useRef(null)

  const go = useCallback(async (to, { push = true } = {}) => {
    const [p, hash] = to.split('#')
    const next = p || pathRef.current
    if (next === pathRef.current) {
      scrollToTarget(hash ? `#${hash}` : 0)
      return
    }
    if (busy.current) return
    busy.current = true
    intro.navigated = true
    const swap = () => {
      flushSync(() => setPath(next))
      pathRef.current = next
      if (push) window.history.pushState({}, '', to)
      getLenis()?.scrollTo(0, { immediate: true })
      window.scrollTo(0, 0)
      applyMeta(next)
      document.getElementById('main')?.focus({ preventScroll: true })
    }
    if (reduced() || !curtain.current) {
      swap()
    } else {
      intro.reset()
      await curtain.current.cover(labelFor(next))
      swap()
      await curtain.current.reveal()
    }
    busy.current = false
    if (hash) scrollToTarget(`#${hash}`, true)
  }, [])

  useEffect(() => {
    const onPop = () => go(window.location.pathname + window.location.hash, { push: false })
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [go])

  return <Ctx.Provider value={{ path, go, curtain }}>{children}</Ctx.Provider>
}
