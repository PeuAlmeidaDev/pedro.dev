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
    title: 'Primeiro Estágio',
    org: 'Colégio Antônio Vieira',
    year: '2020.1',
    desc: 'Desenvolvimento de sistemas com Arduino e suporte aos professores nas aulas de programação mobile com MIT App Inventor.',
    xp: 600,
    done: true,
    current: false,
  },
  {
    phase: 'FASE 03',
    title: 'Especialização em Desenvolvimento Web',
    org: 'Rocketseat e Alura',
    year: '2021.2',
    desc: 'Entrando no mundo do React, TypeScript e Node.js.',
    xp: 1200,
    done: true,
    current: false,
  },
  {
    phase: 'FASE 04',
    title: 'Primeiras Automações',
    org: '',
    year: '2023',
    desc: 'Aplicações de automação para o dia a dia do trabalho: fechamentos automatizados e geração de artes para os designers — consumindo APIs públicas de terceiros e entregando as peças via Telegram.',
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
