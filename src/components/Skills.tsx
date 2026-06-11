import { Fragment } from 'react'
import type { Skill } from '../types'
import { skills, skillBranches } from '../data/skills'
import Panel from './Panel'
import SectionHeading from './SectionHeading'

const skillByName = new Map(skills.map((s) => [s.name, s]))

/**
 * Seção "Skills" (#skills) — árvore de skills agrupada por área
 * (FRONTEND / BACKEND / IA).
 */
export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1180px] px-[22px] pt-20 pb-[50px]">
      <SectionHeading number="02" title="SKILLS" accent="violet" />

      <div className="grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {skillBranches.map((branch) => {
          const color = `var(--color-${branch.color})`
          const nodes = branch.skills
            .map((name) => skillByName.get(name))
            .filter((s): s is Skill => Boolean(s))
          return (
            <Panel key={branch.name}>
              <div className="flex flex-col items-center">
                <div
                  className="border-2 bg-[#0e0a18] px-3.5 py-2.5 font-pixel text-[10px]"
                  style={{ color, borderColor: color, boxShadow: `0 0 18px ${color}` }}
                >
                  {branch.name}
                </div>
                {nodes.map((nd) => (
                  <Fragment key={nd.name}>
                    <div className="h-[22px] w-[3px] opacity-50" style={{ background: color }} />
                    <div className="flex w-full items-center gap-3 border-2 border-line bg-[#0e0a18] px-3 py-[11px]">
                      <span
                        className="flex h-[34px] w-[34px] shrink-0 items-center justify-center border-2 font-pixel text-[9px]"
                        style={{ color, borderColor: color }}
                      >
                        {nd.short}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="mb-[5px] font-body text-sm font-semibold text-[#f5f3ff]">
                          {nd.name}
                        </p>
                        <div className="h-[9px] border border-line bg-panel">
                          <div className="h-full" style={{ width: `${nd.level}%`, background: color }} />
                        </div>
                      </div>
                      <span className="font-pixel text-[8px]" style={{ color }}>
                        {nd.level}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </Panel>
          )
        })}
      </div>
    </section>
  )
}
