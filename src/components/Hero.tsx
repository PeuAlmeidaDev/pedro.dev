import { profile } from '../data/profile'
import { scrollToSection } from '../hooks/useScrollSpy'

/**
 * Seção de abertura (#home) — título arcade, avatar e CTAs.
 * (O seletor LAYOUT A/B do design original foi descartado: mantivemos
 * só o título arcade, o mais icônico, por decisão de produto.)
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* backdrop cyberpunk */}
      <div aria-hidden className="absolute inset-0 overflow-hidden bg-bg">
        <img
          src="/assets/city-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-bottom [image-rendering:pixelated]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,8,19,.7)_0%,rgba(11,8,19,.55)_35%,rgba(11,8,19,.72)_78%,rgba(11,8,19,.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(115%_90%_at_50%_42%,rgba(11,8,19,.25)_30%,rgba(11,8,19,.78)_100%)]" />
        {/* scrim uniforme para garantir leitura do texto sobre a cidade */}
        <div className="absolute inset-0 bg-bg/35" />
      </div>

      {/* moedas/pixels flutuantes */}
      <FloatingPixel className="left-[9%] top-[26%] animate-floaty">
        <span className="flex h-[26px] w-[26px] items-center justify-center border-[3px] border-[#b45309] bg-gold font-pixel text-xs text-[#b45309] shadow-[0_0_16px_rgba(251,191,36,.6)]">
          $
        </span>
      </FloatingPixel>
      <FloatingPixel className="bottom-[30%] right-[14%] animate-floaty-slow">
        <span className="block h-[22px] w-[22px] border-[3px] border-[#0e7490] bg-cyan shadow-[0_0_16px_rgba(34,211,238,.6)]" />
      </FloatingPixel>
      <FloatingPixel className="right-[22%] top-[38%] animate-floaty">
        <span className="block h-[18px] w-[18px] rotate-45 bg-pink shadow-[0_0_16px_rgba(244,114,182,.6)]" />
      </FloatingPixel>

      {/* conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-[22px] pt-24 pb-[60px] text-center">
        {/* avatar */}
        <div className="mb-[26px] inline-block animate-floaty-slow">
          <div className="relative inline-block border-[3px] border-cyan bg-[#0e0a18] p-1.5 shadow-[0_0_0_3px_#0b0813,0_0_28px_rgba(34,211,238,.5)]">
            <img
              src="/assets/avatar.png"
              alt="Avatar pixelado de Pedro"
              className="block object-cover [image-rendering:pixelated] [height:clamp(120px,22vw,170px)] [width:clamp(120px,22vw,170px)]"
            />
            <span className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 whitespace-nowrap border-2 border-[#fde68a] bg-gold px-[7px] py-1 font-pixel text-[8px] text-bg">
              LV. {profile.level}
            </span>
          </div>
        </div>

        <p className="mb-4 font-pixel text-[11px] tracking-[2px] text-cyan">
          {profile.hero.kicker}
        </p>

        <h1 className="m-0 font-pixel leading-[1.12] text-[#f5f3ff] [font-size:clamp(30px,8vw,76px)] [text-shadow:4px_4px_0_#6d28d9,8px_8px_0_rgba(34,211,238,.35)]">
          {profile.brand}
        </h1>

        <p className="mx-auto mt-[22px] max-w-[560px] font-body text-[clamp(15px,2.5vw,22px)] font-semibold text-ink-soft text-balance">
          {profile.hero.tagline}
        </p>

        <div className="mt-[38px] flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection('about')}
            className="border-[3px] border-[#a5f3fc] bg-cyan px-[26px] py-[18px] font-pixel text-[13px] text-bg shadow-[0_6px_0_#0e7490,0_0_24px_rgba(34,211,238,.5)] transition-transform active:translate-y-1.5"
          >
            ▶ {profile.hero.primaryCta}
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="border-[3px] border-violet-deep bg-transparent px-[26px] py-[18px] font-pixel text-[13px] text-[#f5f3ff] shadow-[0_6px_0_#3b1075] transition-[transform,border-color] hover:border-violet active:translate-y-1.5 active:shadow-none"
          >
            {profile.hero.secondaryCta}
          </button>
        </div>

        <p className="mt-[34px] animate-blink font-pixel text-[10px] text-ink-dim">
          PRESS START
        </p>
      </div>

      {/* seta para descer */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Descer"
        className="absolute bottom-[22px] left-1/2 z-10 -translate-x-1/2 animate-floaty2 font-pixel text-base text-cyan"
      >
        ▼
      </button>
    </section>
  )
}

function FloatingPixel({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}) {
  return (
    <div aria-hidden className={`absolute z-[5] ${className}`}>
      {children}
    </div>
  )
}
