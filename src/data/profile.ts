import type { Stat, Attribute, Achievement } from '../types'

/**
 * Dados pessoais do Pedro.
 * ⚠️ Placeholder vindo do design original — trocar pelos valores reais (Fase 5).
 */
export const profile = {
  brand: 'PEDRO',
  level: 24,
  role: 'Desenvolvedor Fullstack',

  hero: {
    kicker: 'INSIRA UMA FICHA  •  1 PLAYER',
    tagline:
      'Desenvolvedor Fullstack construindo produtos web do banco de dados à interface — com código limpo e um toque de IA.',
    primaryCta: 'ENTER PORTFOLIO',
    secondaryCta: 'VER QUESTS',
  },

  bio: 'Desenvolvedor fullstack que trata cada projeto como uma fase a ser concluída com capricho. Gosto de transformar ideias em produtos reais — do banco de dados à interface — combinando código limpo, boa experiência de uso e um toque de IA quando faz sentido. Sempre em busca da próxima conquista.',
} as const

export const stats: Stat[] = [
  { label: 'NOME', value: 'Pedro' },
  { label: 'CLASSE', value: 'Desenvolvedor Fullstack' },
  { label: 'ESPECIALIDADE', value: 'Web Apps & APIs' },
  { label: 'NÍVEL', value: 'LV. 24' },
  { label: 'LOCAL', value: 'Colinas de Pituaçu, BA' },
  { label: 'ESTILO', value: 'Remoto / Híbrido' },
]

export const attributes: Attribute[] = [
  { label: 'LÓGICA', value: 88, color: 'cyan' },
  { label: 'CRIATIVIDADE', value: 82, color: 'violet' },
  { label: 'FOCO', value: 90, color: 'emerald' },
  { label: 'CAFEÍNA', value: 99, color: 'pink' },
]

export const achievements: Achievement[] = [
  { icon: '★', name: 'First Commit', desc: 'Primeiro commit em produção', unlocked: true },
  { icon: '⚔', name: 'Bug Slayer', desc: '100+ bugs eliminados', unlocked: true },
  { icon: '☾', name: 'Night Owl', desc: 'Deploy depois da meia-noite', unlocked: true },
  { icon: '⇪', name: 'Deploy Master', desc: '50+ deploys sem rollback', unlocked: true },
  { icon: '⌬', name: 'Open Source', desc: 'Contribuições públicas', unlocked: true },
  { icon: '?', name: '???', desc: 'Conquista secreta bloqueada', unlocked: false },
]
