import type { ReactNode } from 'react'

interface SectionHeadingProps {
  /** número da seção, ex: "01" */
  number: string
  title: string
  /** token de cor do tema: 'cyan' | 'violet' | 'pink'… */
  accent?: string
  /** conteúdo opcional à direita (ex: um toggle de visualização) */
  action?: ReactNode
}

/**
 * Cabeçalho numerado das seções — badge pixel + título.
 * A cor do badge deriva do accent para casar com cada seção.
 */
export default function SectionHeading({
  number,
  title,
  accent = 'cyan',
  action,
}: SectionHeadingProps) {
  const color = `var(--color-${accent})`
  return (
    <div className="mb-7 flex flex-wrap items-center gap-3.5">
      <span
        className="border-2 px-[11px] py-[9px] font-pixel text-[11px]"
        style={{
          color,
          borderColor: color,
          background: `color-mix(in srgb, ${color} 12%, #0b0813)`,
          boxShadow: `3px 3px 0 color-mix(in srgb, ${color} 40%, #0b0813)`,
        }}
      >
        {number}
      </span>
      <h2 className="m-0 font-pixel tracking-wide text-[#f5f3ff] [font-size:clamp(15px,3.2vw,26px)]">
        {title}
      </h2>
      {action && <div className="ml-auto">{action}</div>}
    </div>
  )
}
