import { useTheme } from '../theme/ThemeProvider'

/**
 * Camada de fundo fixa da página.
 * O gradiente-base muda conforme o tema (via var --base-bg).
 * No modo RETRO, adiciona scanlines + vinheta CRT.
 */
export default function Background() {
  const { theme } = useTheme()

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 z-0"
        style={{ background: 'var(--base-bg)' }}
      />
      {theme === 'retro' && (
        <>
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[80]"
            style={{
              background:
                'repeating-linear-gradient(0deg, rgba(0,0,0,.16) 0px, rgba(0,0,0,.16) 1px, transparent 2px, transparent 3px)',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[81]"
            style={{
              background:
                'radial-gradient(125% 125% at 50% 50%, transparent 58%, rgba(0,0,0,.5) 100%)',
            }}
          />
        </>
      )}
    </>
  )
}
