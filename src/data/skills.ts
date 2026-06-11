import type { Skill, SkillBranch } from '../types'

/**
 * ⚠️ Placeholder vindo do design original — ajustar aos skills reais (Fase 5).
 */
export const skills: Skill[] = [
  { name: 'React', short: 'Re', level: 90 },
  { name: 'Next.js', short: 'Nx', level: 88 },
  { name: 'TypeScript', short: 'TS', level: 86 },
  { name: 'JavaScript', short: 'JS', level: 92 },
  { name: 'Node.js', short: 'No', level: 83 },
  { name: 'PostgreSQL', short: 'PG', level: 78 },
  { name: 'Tailwind', short: 'Tw', level: 85 },
  { name: 'REST APIs', short: '{ }', level: 84 },
  { name: 'Git', short: 'Git', level: 80 },
  { name: 'IA aplicada', short: 'AI', level: 70 },
]

/** Ramos da "árvore de skills" — referenciam skills por nome. */
export const skillBranches: SkillBranch[] = [
  { name: 'FRONTEND', color: 'cyan', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { name: 'BACKEND', color: 'violet', skills: ['Node.js', 'PostgreSQL', 'REST APIs'] },
  { name: 'TOOLS / IA', color: 'pink', skills: ['JavaScript', 'Git', 'IA aplicada'] },
]
