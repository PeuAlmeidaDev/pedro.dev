import type { ReactNode } from 'react'

/**
 * Card padrão do portfólio: gradiente escuro, borda pixel e "anel" externo.
 * Reutilizado em todas as seções (Sobre, Skills, Quests…).
 */
export default function Panel({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`border-[3px] border-edge bg-[linear-gradient(180deg,#1b1430,#14101f)] p-6 shadow-[0_0_0_3px_#0b0813] ${className}`}
    >
      {children}
    </div>
  )
}
