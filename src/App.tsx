import { navItems } from './data/nav'
import { useScrollSpy } from './hooks/useScrollSpy'
import Background from './components/Background'
import Navbar from './components/Navbar'
import MiniMap from './components/MiniMap'
import Hero from './components/Hero'

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

        {/* Seções ainda não migradas — placeholders para nav/scroll funcionarem.
            Serão substituídas nas próximas fases. */}
        {navItems
          .filter((n) => n.id !== 'home')
          .map((n) => (
            <Placeholder key={n.id} id={n.id} label={n.label} />
          ))}
      </main>
    </div>
  )
}

function Placeholder({ id, label }: { id: string; label: string }) {
  return (
    <section
      id={id}
      className="mx-auto flex min-h-[70vh] max-w-[1180px] flex-col items-center justify-center gap-4 px-[22px] text-center"
    >
      <span className="font-pixel text-[11px] text-cyan">{label}</span>
      <p className="font-mono text-2xl text-ink-dim">// seção em construção</p>
    </section>
  )
}
