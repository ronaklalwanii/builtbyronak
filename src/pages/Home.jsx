import { ScrollTrigger } from '../engine/motion'
import { usePage } from '../engine/motion'
import { driver } from '../engine/driver'
import Hero from '../sections/Hero'
import Statement from '../sections/Statement'
import WorkIndex from '../sections/WorkIndex'
import Services from '../sections/Services'
import About from '../sections/About'
import Process from '../sections/Process'
import Contact from '../sections/Contact'

export default function Home() {
  // Tell the HUD which section is in view so the nav can say where you are.
  const ref = usePage((root) => {
    const sections = ['work', 'services', 'about', 'process', 'contact']
    sections.forEach((id) => {
      const el = root.querySelector(`#${id}`)
      ScrollTrigger.create({
        trigger: el,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle: (s) => {
          if (s.isActive) driver.section = id
          else if (driver.section === id) driver.section = ''
        },
      })
    })
    return () => (driver.section = '')
  }, [])

  return (
    <div ref={ref}>
      <Hero />
      <Statement />
      <WorkIndex />
      <Services />
      <About />
      <Process />
      <Contact />
    </div>
  )
}
