import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Work from './sections/Work'
import Projects from './sections/Projects'
import Trust from './sections/Trust'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Projects />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
