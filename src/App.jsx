import { useEffect } from 'react'
import { RouterProvider, useRouter } from './router'
import { startScroll } from './engine/motion'
import { startSpin } from './engine/spin'
import Curtain from './components/Curtain'
import Hud from './components/Hud'
import Home from './pages/Home'
import Case from './pages/Case'
import NotFound from './pages/NotFound'
import { Footer } from './sections/Contact'

function Routes() {
  const { path } = useRouter()
  const m = path.match(/^\/work\/([^/]+)\/?$/)
  if (path === '/' || path === '') return <Home />
  if (m) return <Case slug={m[1]} />
  return <NotFound />
}

function Shell() {
  useEffect(() => {
    startScroll()
    startSpin()
  }, [])
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Curtain />
      <Hud />
      <main id="main" tabIndex={-1}>
        <Routes />
      </main>
      <Footer />
    </>
  )
}

export default function App({ path = '/' }) {
  return (
    <RouterProvider initialPath={path}>
      <Shell />
    </RouterProvider>
  )
}
