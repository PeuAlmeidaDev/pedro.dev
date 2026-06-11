import { navItems } from '../data/nav'
import { scrollToSection } from '../hooks/useScrollSpy'

/** Rodapé do portfólio — fecha o tema arcade com links rápidos e voltar-ao-topo. */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t-2 border-line bg-bg/60">
      <div className="mx-auto max-w-[1180px] px-[22px] py-10">
        {/* marca + voltar ao topo */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3">
            <img
              src="/assets/avatar.webp"
              alt=""
              className="h-8 w-8 border-2 border-violet object-cover [image-rendering:pixelated]"
            />
            <span className="font-pixel text-xs tracking-wider text-violet">
              PEDRO<span className="text-cyan">.dev</span>
            </span>
          </button>

          <button
            onClick={() => scrollToSection('home')}
            className="border-2 border-cyan bg-surface px-3.5 py-2.5 font-pixel text-[9px] text-cyan shadow-[3px_3px_0_#06222b] transition-transform active:translate-y-[3px] active:shadow-none"
          >
            ▲ INSERT COIN
          </button>
        </div>

        {/* links rápidos */}
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollToSection(n.id)}
              className="font-pixel text-[8px] tracking-wider text-ink-dim transition-colors hover:text-cyan"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="my-6 h-px bg-line" />

        {/* linha final */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-pixel text-[8px] leading-[1.8] text-[#6b6488]">
            GAME OVER? INSIRA OUTRA FICHA
          </p>
          <p className="font-mono text-base text-ink-dim">
            &gt; © {year} Pedro · feito com React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
