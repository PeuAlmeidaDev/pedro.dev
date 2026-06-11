import type { Project } from '../types'

/**
 * "Quests" — projetos.
 * ⚠️ Placeholder vindo do design original — trocar pelos projetos reais (Fase 5).
 */
export const projects: Project[] = [
  // Projeto real (../mindforge) — não é placeholder.
  {
    name: 'CRAFTMIND',
    desc: 'Jogo multiplayer de batalha por turnos no navegador onde os hábitos saudáveis cumpridos na vida real evoluem os atributos do personagem. Quem vive melhor, joga melhor.',
    tech: ['Next.js', 'TypeScript', 'Socket.io', 'Prisma', 'PostgreSQL'],
    status: 'EM PROGRESSO',
    xp: 1500,
    demoUrl: 'https://craftmind-production.up.railway.app/',
    repoUrl: 'https://github.com/PeuAlmeidaDev/CraftMind',
  },
  // Projeto real — landing em produção (../não-clonado; repo privado).
  {
    name: 'LOTÉRICA CENTRAL',
    desc: 'Landing page de venda de bolões oficiais da Caixa para a Lotérica Central de Alagoinhas. Um painel admin faz web scraping dos bolões no marketplace da Caixa e libera uma quantidade para venda online.',
    tech: ['Next.js', 'TypeScript', 'Web Scraping', 'Railway'],
    status: 'EM PROGRESSO',
    xp: 900,
    demoUrl: 'https://landingpage-lotericacentral-production.up.railway.app/',
    // repoUrl: privado (404) — adicionar quando o repositório for público
  },
  {
    name: 'NEON COMMERCE',
    desc: 'Plataforma de e-commerce com checkout em tempo real, carrinho persistente e painel administrativo completo.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    status: 'COMPLETO',
    xp: 1200,
  },
  {
    name: 'API GUILD',
    desc: 'Conjunto de microsserviços com autenticação, rate-limiting e documentação automática gerada por código.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    status: 'EM PROGRESSO',
    xp: 800,
  },
  {
    name: 'PIXEL DASH',
    desc: 'Dashboard de analytics em tempo real com gráficos interativos e exportação de relatórios.',
    tech: ['React', 'TypeScript', 'WebSocket', 'Tailwind'],
    status: 'COMPLETO',
    xp: 1000,
  },
  {
    name: 'AI QUEST LOG',
    desc: 'Assistente de IA que organiza tarefas de devs e sugere os próximos passos no código.',
    tech: ['Next.js', 'OpenAI', 'Prisma'],
    status: 'PROTÓTIPO',
    xp: 500,
  },
]
