import type { Skill, SkillBranch } from '../types'

/**
 * ⚠️ Placeholder vindo do design original — ajustar aos skills/níveis reais (Fase 5).
 * Os nós do ramo IA (SKILLS, AGENTS…) têm níveis provisórios.
 */
export const skills: Skill[] = [
  // FRONTEND
  { name: 'React', short: 'Re', level: 90 },
  { name: 'Next.js', short: 'Nx', level: 88 },
  { name: 'TypeScript', short: 'TS', level: 86 },
  { name: 'Tailwind', short: 'Tw', level: 85 },
  // BACKEND
  { name: 'Node.js', short: 'No', level: 83 },
  { name: 'PostgreSQL', short: 'PG', level: 78 },
  { name: 'REST APIs', short: '{ }', level: 84 },
  // IA
  { name: 'SKILLS', short: 'Sk', level: 88 },
  { name: 'AGENTS', short: 'Ag', level: 85 },
  { name: 'PROMPT ENGINEER', short: 'PE', level: 90 },
  { name: 'PLUGINS', short: 'Pl', level: 82 },
]

/** Ramos da árvore de skills — referenciam skills por nome. */
export const skillBranches: SkillBranch[] = [
  { name: 'FRONTEND', color: 'cyan', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
  { name: 'BACKEND', color: 'violet', skills: ['Node.js', 'PostgreSQL', 'REST APIs'] },
  { name: 'IA', color: 'pink', skills: ['SKILLS', 'AGENTS', 'PROMPT ENGINEER', 'PLUGINS'] },
]
