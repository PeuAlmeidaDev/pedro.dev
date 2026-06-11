/**
 * Contratos de dados do portfólio.
 * Fonte única de verdade para a forma do conteúdo consumido pelas seções.
 */

export interface NavItem {
  /** id da <section> correspondente (usado no scroll/âncora) */
  id: string
  label: string
}

export interface Stat {
  label: string
  value: string
}

/** "Buff" opcional num atributo — efeito de status pulsante (ex: ☕ capuccino). */
export interface AttributeBuff {
  icon: string
  label: string
  bonus: string
  /** token de cor do tema (ex: 'coffee') */
  color: string
}

export interface Attribute {
  label: string
  /** 0–100 */
  value: number
  /** cor do token de tema (ex: 'cyan', 'violet') ou hex */
  color: string
  buff?: AttributeBuff
}

export interface Achievement {
  icon: string
  name: string
  desc: string
  unlocked: boolean
}

export interface Skill {
  name: string
  /** rótulo curto exibido no "inventário" */
  short: string
  /** 0–100 */
  level: number
}

export interface SkillBranch {
  name: string
  color: string
  /** nomes de skills que compõem o ramo da árvore */
  skills: string[]
}

export type ProjectStatus = 'COMPLETO' | 'EM PROGRESSO' | 'PROTÓTIPO'

export interface Project {
  name: string
  desc: string
  tech: string[]
  status: ProjectStatus
  xp: number
  /** link da demo/produção (opcional até ter URL real) */
  demoUrl?: string
  /** link do repositório (opcional) */
  repoUrl?: string
}

export interface Experience {
  phase: string
  title: string
  org: string
  year: string
  desc: string
  xp: number
  done: boolean
  current: boolean
}

export interface Social {
  label: string
  handle: string
  color: string
  href: string
}
