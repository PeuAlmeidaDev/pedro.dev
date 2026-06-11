import { useEffect, useState } from 'react'

interface ScrollSpyState {
  /** progresso de leitura da página, 0–100 */
  progress: number
  /** id da seção atualmente em foco */
  activeId: string
}

/**
 * Observa o scroll da página e reporta o progresso (%) e a seção ativa.
 * Recebe os ids das seções na ordem em que aparecem no documento.
 */
export function useScrollSpy(sectionIds: string[]): ScrollSpyState {
  const [state, setState] = useState<ScrollSpyState>({
    progress: 0,
    activeId: sectionIds[0] ?? '',
  })

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const progress = max > 0 ? Math.min(100, Math.max(0, (doc.scrollTop / max) * 100)) : 0

      let activeId = sectionIds[0] ?? ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 160) activeId = id
      }

      setState((prev) =>
        Math.abs(progress - prev.progress) > 0.3 || activeId !== prev.activeId
          ? { progress, activeId }
          : prev,
      )
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return state
}

/** Rola suavemente até uma seção, compensando a altura do header fixo. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = id === 'home' ? 0 : el.offsetTop - 60
  window.scrollTo({ top, behavior: 'smooth' })
}
