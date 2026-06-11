import type { Experience } from '../types'

/**
 * "Jornada" — trajetória profissional, em fases.
 * ⚠️ Placeholder vindo do design original — trocar pela trajetória real (Fase 5).
 */
export const experiences: Experience[] = [
  {
    phase: 'FASE 01',
    title: 'Faculdade de Análise e Desenvolvimento de Sistemas',
    org: '',
    year: '2018.1',
    desc: 'Aprendendo os conceitos e a lógica de programação.',
    xp: 300,
    done: true,
    current: false,
  },
  {
    phase: 'FASE 02',
    title: 'Dev Júnior Fullstack',
    org: 'Software house',
    year: '2022',
    desc: 'APIs em Node.js e telas em React. Primeiro deploy sozinho.',
    xp: 600,
    done: true,
    current: false,
  },
  {
    phase: 'FASE 03',
    title: 'Dev Pleno',
    org: 'Produto SaaS',
    year: '2023',
    desc: 'Liderança técnica em features e mentoria de estagiários.',
    xp: 1200,
    done: true,
    current: false,
  },
  {
    phase: 'FASE 04',
    title: 'Freelancer & Projetos próprios',
    org: 'Autônomo',
    year: '2024',
    desc: 'Entrega de produtos completos para clientes e estudos em IA.',
    xp: 900,
    done: true,
    current: false,
  },
  {
    phase: 'FASE 05',
    title: '??? Próxima missão',
    org: 'Em busca',
    year: '2025+',
    desc: 'Procurando o próximo desafio fullstack para upar de nível.',
    xp: 0,
    done: false,
    current: true,
  },
]
