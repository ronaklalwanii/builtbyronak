import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Credibility from './sections/Credibility'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Work from './sections/Work'
import Process from './sections/Process'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Credibility />
        <Projects />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
