import { profile, stats, attributes, achievements } from '../data/profile'
import Panel from './Panel'
import SectionHeading from './SectionHeading'

/**
 * Seção "Sobre" (#about) — CHARACTER PROFILE.
 * Painel de stats, bio, atributos (barras) e conquistas.
 */
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1180px] px-[22px] pt-24 pb-[50px]">
      <SectionHeading number="01" title="CHARACTER PROFILE" accent="cyan" />

      <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {/* painel de stats */}
        <Panel>
          <div className="mb-[22px] flex items-center gap-[18px] border-b-2 border-line pb-5">
            <div className="shrink-0 border-2 border-edge bg-[#0e0a18] p-1.5 shadow-[0_0_0_2px_#0b0813]">
              <img
                src="/assets/avatar.png"
                alt="Avatar pixelado de Pedro"
                className="block h-[84px] w-[84px] object-cover [image-rendering:pixelated]"
              />
            </div>
            <div>
              <p className="mb-2 font-pixel text-sm text-[#f5f3ff]">{profile.brand}</p>
              <span className="border-2 border-gold bg-[#2a1f08] px-[7px] py-[5px] font-pixel text-[8px] text-gold">
                LV. {profile.level}
              </span>
            </div>
          </div>

          <dl className="flex flex-col gap-[13px]">
            {stats.map((st) => (
              <div key={st.label} className="flex items-baseline justify-between gap-3">
                <dt className="font-pixel text-[8px] tracking-wide text-ink-dim">{st.label}</dt>
                <dd className="m-0 text-right font-body text-[15px] font-semibold text-ink">
                  {st.value}
                </dd>
              </div>
            ))}
          </dl>
        </Panel>

        {/* bio + atributos */}
        <div className="flex flex-col gap-[22px]">
          <Panel>
            <p className="mb-4 font-pixel text-[9px] text-cyan">▸ BIO</p>
            <p className="m-0 font-body text-base leading-[1.7] text-ink-soft text-pretty">
              {profile.bio}
            </p>
          </Panel>

          <Panel>
            <p className="mb-[18px] font-pixel text-[9px] text-pink">▸ ATRIBUTOS</p>
            <div className="flex flex-col gap-4">
              {attributes.map((at) => {
                const color = `var(--color-${at.color})`
                return (
                  <div key={at.label}>
                    <div className="mb-1.5 flex justify-between">
                      <span className="font-pixel text-[8px] text-ink-soft">{at.label}</span>
                      <span className="font-pixel text-[8px]" style={{ color }}>
                        {at.value}
                      </span>
                    </div>
                    <div className="h-3.5 border-2 border-line bg-[#0e0a18] p-0.5">
                      <div
                        className="h-full"
                        style={{
                          width: `${at.value}%`,
                          background: color,
                          boxShadow: `0 0 8px ${color}`,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </Panel>
        </div>
      </div>

      {/* conquistas */}
      <Panel className="mt-[22px]">
        <p className="mb-[18px] font-pixel text-[9px] text-gold">▸ CONQUISTAS</p>
        <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(150px,1fr))]">
          {achievements.map((ac) => (
            <div
              key={ac.name}
              title={ac.desc}
              className={`flex items-center gap-[11px] border-2 border-line bg-[#0e0a18] p-[11px] ${
                ac.unlocked ? '' : 'opacity-45'
              }`}
            >
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center border-2 border-edge bg-panel text-[17px] text-gold">
                {ac.icon}
              </span>
              <div className="min-w-0">
                <p className="mb-1 truncate font-pixel text-[7px] text-ink">{ac.name}</p>
                <p className="m-0 truncate font-body text-[11px] text-ink-dim">{ac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </section>
  )
}
