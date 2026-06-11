import { useEffect, useRef, useState } from 'react'

/**
 * Player de música de fundo — "moedinha pixelada" flutuante.
 *
 * Decisões (UX/áudio):
 * - OFF por padrão; áudio só toca após clique (browsers bloqueiam autoplay com som).
 * - Sem controle de volume: toca baixo e fixo. O clique alterna play/pause.
 * - Lazy-load (`preload="none"`): o mp3 (2.8 MB) só é buscado no primeiro play.
 * - Preferência lembrada em localStorage; ao voltar, tenta retomar (se o browser
 *   permitir) — se bloquear, fica em silêncio sem erro.
 *
 * Animação em duas camadas (levitar e girar são ambos `transform`, não cabem no
 * mesmo elemento): a externa leviga sempre (`floaty2`, no mesmo ritmo do WhatsApp);
 * a interna gira estilo "coletar moeda" a cada clique. Ambas respeitam reduced-motion.
 */

const TRACK = '/assets/save-point-garden.mp3'
const VOLUME = 0.18
const STORAGE_KEY = 'portfolio:music'

export default function MusicCoin() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  // muda a cada clique → re-monta o disco interno e reinicia a animação de giro
  const [clicks, setClicks] = useState(0)

  // volume fixo + tentativa de retomar a preferência salva
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = VOLUME

    if (localStorage.getItem(STORAGE_KEY) === 'on') {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          /* autoplay bloqueado pelo browser: segue em silêncio até o clique */
        })
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    setClicks((c) => c + 1)

    if (playing) {
      audio.pause()
      setPlaying(false)
      localStorage.setItem(STORAGE_KEY, 'off')
      return
    }

    audio
      .play()
      .then(() => {
        setPlaying(true)
        localStorage.setItem(STORAGE_KEY, 'on')
      })
      .catch(() => setPlaying(false))
  }

  return (
    <>
      <audio ref={audioRef} src={TRACK} loop preload="none" />

      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Pausar música de fundo' : 'Tocar música de fundo (Save Point Garden)'}
        title={playing ? 'Pausar música' : 'Tocar música — Save Point Garden'}
        className="group fixed bottom-5 right-5 z-50 h-14 w-14 focus:outline-none"
      >
        {/* camada externa: leviga sempre, no mesmo ritmo do botão de WhatsApp */}
        <span className="block h-full w-full animate-floaty2 [perspective:240px] motion-reduce:animate-none">
          {/* camada interna: o disco da moeda, que gira a cada clique */}
          <span
            key={clicks}
            className={`relative flex h-full w-full items-center justify-center rounded-full border-[3px] border-[#7c4a03] bg-[radial-gradient(circle_at_35%_28%,#fde68a,#fbbf24_46%,#b45309_100%)] shadow-[0_4px_0_#5a3602,0_0_18px_rgba(251,191,36,.45)] [transform-style:preserve-3d] transition-transform group-hover:scale-105 group-active:translate-y-1 group-active:shadow-[0_1px_0_#5a3602,0_0_18px_rgba(251,191,36,.45)] ${
              clicks > 0 ? 'animate-coin-flip motion-reduce:animate-none' : ''
            }`}
          >
            {/* anel interno claro — brilho de moeda */}
            <span className="pointer-events-none absolute inset-[3px] rounded-full border border-[#fde68a]/60" />

            {playing ? (
              // pause (❚❚)
              <svg viewBox="0 0 12 12" className="relative h-4 w-4" aria-hidden="true">
                <rect x="2.5" y="2" width="2.5" height="8" fill="#5a3602" />
                <rect x="7" y="2" width="2.5" height="8" fill="#5a3602" />
              </svg>
            ) : (
              // play (▶)
              <svg viewBox="0 0 12 12" className="relative ml-0.5 h-4 w-4" aria-hidden="true">
                <path d="M3 1.8 L10 6 L3 10.2 Z" fill="#5a3602" />
              </svg>
            )}
          </span>
        </span>
      </button>
    </>
  )
}
