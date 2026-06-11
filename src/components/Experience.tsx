import { experiences } from '../data/experiences'
import SectionHeading from './SectionHeading'

/**
 * Seção "Jornada" (#experience) — JOURNEY MAP.
 * Timeline vertical da trajetória, em fases.
 */
export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1180px] px-[22px] pt-20 pb-[50px]">
      <SectionHeading number="04" title="JOURNEY MAP" accent="pink" />

      <div className="relative pl-[30px]">
        {/* trilha vertical tracejada */}
        <div className="absolute top-1.5 bottom-1.5 left-[9px] w-1 bg-[repeating-linear-gradient(180deg,#6d28d9_0_8px,transparent_8px_14px)]" />

        <div className="flex flex-col gap-[18px]">
          {experiences.map((ex) => {
            const accent = ex.current ? 'var(--color-gold)' : 'var(--color-emerald)'
            const dotBg = ex.current
              ? 'var(--color-gold)'
              : ex.done
                ? 'var(--color-emerald)'
                : 'var(--color-edge)'
            const statusLabel = ex.current ? 'EM PROGRESSO' : 'CONCLUÍDA'

            return (
              <div key={ex.phase} className="relative">
                {/* nó da timeline */}
                <span
                  className="absolute top-[14px] left-[-30px] h-4 w-4 border-[3px] border-bg"
                  style={{ background: dotBg, boxShadow: `0 0 0 2px ${accent}, 0 0 12px ${accent}` }}
                />
                <div className="border-2 border-edge bg-[linear-gradient(180deg,#1b1430,#131019)] p-5 shadow-[0_0_0_2px_#0b0813]">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2.5">
                    <span className="font-pixel text-[9px] text-violet">
                      {ex.phase} &nbsp;•&nbsp; {ex.year}
                    </span>
                    <span
                      className="border-2 px-[7px] py-[5px] font-pixel text-[7px]"
                      style={{ color: accent, borderColor: accent }}
                    >
                      {statusLabel}
                    </span>
                  </div>
                  <h3 className="mb-1 font-body text-[19px] font-bold text-[#f5f3ff]">{ex.title}</h3>
                  {ex.org && <p className="mb-2.5 font-body text-[13px] text-cyan">{ex.org}</p>}
                  <p className="m-0 font-body text-sm leading-relaxed text-ink-soft">{ex.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
