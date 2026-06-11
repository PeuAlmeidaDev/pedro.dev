import { useState } from 'react'
import type { NavItem } from '../types'
import { useTheme } from '../theme/ThemeProvider'
import { scrollToSection } from '../hooks/useScrollSpy'

interface NavbarProps {
  items: NavItem[]
  activeId: string
  /** 0–100 */
  progress: number
}

export default function Navbar({ items, activeId, progress }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (id: string) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-70 border-b-2 border-line bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center gap-3 px-[18px] py-[11px]">
        {/* logo */}
        <button
          onClick={() => go('home')}
          className="flex cursor-[inherit] items-center gap-3"
        >
          <img
            src="/assets/avatar.webp"
            alt=""
            className="h-[34px] w-[34px] border-2 border-violet object-cover [image-rendering:pixelated] shadow-[0_0_10px_rgba(167,139,250,.5)]"
          />
          <span className="font-pixel text-xs tracking-wider text-violet">
            PEDRO<span className="text-cyan">.dev</span>
          </span>
        </button>

        {/* nav desktop */}
        <nav className="ml-auto hidden gap-0.5 nav:flex">
          {items.map((item) => {
            const active = item.id === activeId
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`border-2 px-[11px] py-[9px] font-pixel text-[9px] tracking-wider transition-colors ${
                  active
                    ? 'border-cyan text-cyan'
                    : 'border-transparent text-ink-dim hover:border-line hover:text-cyan'
                }`}
              >
                {active ? '▸ ' : ''}
                {item.label}
              </button>
            )
          })}
        </nav>

        {/* theme toggle desktop */}
        <div className="hidden items-center border-2 border-line bg-surface p-[3px] nav:flex">
          <ThemeTab label="RETRO" active={theme === 'retro'} onClick={() => setTheme('retro')} activeBg="bg-cyan" />
          <ThemeTab label="MODERN" active={theme === 'modern'} onClick={() => setTheme('modern')} activeBg="bg-violet" />
        </div>

        {/* botão menu mobile */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="ml-auto border-2 border-cyan bg-surface px-3 py-[9px] font-pixel text-[10px] text-cyan shadow-[3px_3px_0_#06222b] nav:hidden"
        >
          MENU
        </button>
      </div>

      {/* barra de progresso */}
      <div className="relative h-[5px] overflow-hidden bg-surface">
        <div
          className="h-full bg-[linear-gradient(90deg,#6d28d9,#22d3ee,#f472b6)] shadow-[0_0_10px_rgba(34,211,238,.6)] transition-[width] duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* dropdown mobile */}
      {menuOpen && (
        <div className="flex flex-col gap-2 border-b-2 border-line bg-bg/98 p-[14px] nav:hidden">
          {items.map((item) => {
            const active = item.id === activeId
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`border-2 bg-panel p-[14px] text-left font-pixel text-[11px] tracking-wider ${
                  active ? 'border-cyan text-cyan' : 'border-transparent text-ink-dim'
                }`}
              >
                {active ? '▸ ' : ''}
                {item.label}
              </button>
            )
          })}
          <div className="mt-1 flex gap-2">
            <button
              onClick={() => setTheme('retro')}
              className={`flex-1 border-2 border-cyan p-3 font-pixel text-[9px] ${
                theme === 'retro' ? 'bg-cyan text-bg' : 'text-ink-dim'
              }`}
            >
              RETRO
            </button>
            <button
              onClick={() => setTheme('modern')}
              className={`flex-1 border-2 border-violet p-3 font-pixel text-[9px] ${
                theme === 'modern' ? 'bg-violet text-bg' : 'text-ink-dim'
              }`}
            >
              MODERN
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

function ThemeTab({
  label,
  active,
  onClick,
  activeBg,
}: {
  label: string
  active: boolean
  onClick: () => void
  activeBg: string
}) {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-[7px] font-pixel text-[8px] tracking-wider transition-colors ${
        active ? `${activeBg} text-bg` : 'bg-transparent text-ink-dim'
      }`}
    >
      {label}
    </button>
  )
}
