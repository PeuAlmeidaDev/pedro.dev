import { navItems } from './data/nav'
import { useScrollSpy } from './hooks/useScrollSpy'
import Background from './components/Background'
import Navbar from './components/Navbar'
import MiniMap from './components/MiniMap'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MusicCoin from './components/MusicCoin'
import WhatsappButton from './components/WhatsappButton'

const SECTION_IDS = navItems.map((n) => n.id)

export default function App() {
  const { progress, activeId } = useScrollSpy(SECTION_IDS)

  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar items={navItems} activeId={activeId} progress={progress} />
      <MiniMap items={navItems} activeId={activeId} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <WhatsappButton />
      <MusicCoin />
    </div>
  )
}
