import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Work from './sections/Work'
import Trust from './sections/Trust'
import Process from './sections/Process'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Work />
        <Trust />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
