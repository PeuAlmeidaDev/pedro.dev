import type { NavItem } from '../types'
import { scrollToSection } from '../hooks/useScrollSpy'

interface MiniMapProps {
  items: NavItem[]
  activeId: string
}

/** Mini-mapa lateral (desktop) — pontos por seção, rótulo na ativa. */
export default function MiniMap({ items, activeId }: MiniMapProps) {
  return (
    <div className="fixed right-4 top-1/2 z-60 hidden -translate-y-1/2 flex-col items-end gap-3.5 nav:flex">
      {items.map((item) => {
        const active = item.id === activeId
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            title={item.label}
            className="flex items-center gap-2"
          >
            <span className="font-pixel text-[7px] text-cyan [text-shadow:0_0_8px_rgba(34,211,238,.5)]">
              {active ? item.label : ''}
            </span>
            <span
              className={`h-2.5 w-2.5 border-2 transition-all ${
                active
                  ? 'border-cyan bg-cyan shadow-[0_0_8px_#22d3ee]'
                  : 'border-edge bg-transparent'
              }`}
            />
          </button>
        )
      })}
    </div>
  )
}
