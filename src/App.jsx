import { useEffect } from 'react'
import { RouterProvider, useRouter } from './router'
import { startScroll } from './engine/motion'
import { startDriver } from './engine/driver'
import Loader from './components/Loader'
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
    startDriver()
  }, [])
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Loader />
      <Curtain />
      <div className="hit" aria-hidden="true" />
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
