import { Fragment, useState } from 'react'
import type { Skill } from '../types'
import { skills, skillBranches } from '../data/skills'
import { rarityFor } from '../lib/rarity'
import Panel from './Panel'
import SectionHeading from './SectionHeading'

type SkillsView = 'inventory' | 'tree'

const skillByName = new Map(skills.map((s) => [s.name, s]))

/**
 * Seção "Skills" (#skills) — dois modos de visualização:
 * Inventário (grid com raridade por nível) e Árvore (ramos por área).
 */
export default function Skills() {
  const [view, setView] = useState<SkillsView>('inventory')

  return (
    <section id="skills" className="mx-auto max-w-[1180px] px-[22px] pt-20 pb-[50px]">
      <SectionHeading
        number="02"
        title="SKILLS"
        accent="violet"
        action={<ViewToggle view={view} onChange={setView} />}
      />

      {view === 'inventory' ? <Inventory /> : <Tree />}
    </section>
  )
}

function ViewToggle({
  view,
  onChange,
}: {
  view: SkillsView
  onChange: (v: SkillsView) => void
}) {
  return (
    <div className="flex border-2 border-line bg-surface p-[3px]">
      {(
        [
          ['inventory', 'INVENTÁRIO', 'cyan'],
          ['tree', 'ÁRVORE', 'violet'],
        ] as const
      ).map(([value, label, accent]) => {
        const active = view === value
        return (
          <button
            key={value}
            onClick={() => onChange(value)}
            className="px-[9px] py-2 font-pixel text-[8px] transition-colors"
            style={{
              color: active ? '#0b0813' : 'var(--color-ink-dim)',
              background: active ? `var(--color-${accent})` : 'transparent',
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

function Inventory() {
  return (
    <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))]">
      {skills.map((sk) => (
        <SkillCard key={sk.name} skill={sk} />
      ))}
    </div>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  const rarity = rarityFor(skill.level)
  return (
    <div className="border-2 border-edge bg-[linear-gradient(180deg,#1b1430,#131019)] p-4 shadow-[0_0_0_2px_#0b0813] transition-transform hover:-translate-y-1">
      <div className="mb-3.5 flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center border-2 bg-[#0e0a18] font-pixel text-[11px]"
          style={{ color: rarity.color, borderColor: rarity.color }}
        >
          {skill.short}
        </span>
        <div>
          <p className="mb-1 font-body text-base font-bold text-[#f5f3ff]">{skill.name}</p>
          <p className="font-pixel text-[6px] tracking-wider" style={{ color: rarity.color }}>
            {rarity.label}
          </p>
        </div>
      </div>
      <div className="mb-[5px] flex justify-between font-pixel text-[7px]">
        <span className="text-ink-dim">XP</span>
        <span style={{ color: rarity.color }}>{skill.level}%</span>
      </div>
      <div className="h-3 border-2 border-line bg-[#0e0a18] p-0.5">
        <div
          className="h-full"
          style={{
            width: `${skill.level}%`,
            background: rarity.color,
            boxShadow: `0 0 8px ${rarity.color}`,
          }}
        />
      </div>
    </div>
  )
}

function Tree() {
  return (
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
  )
}
