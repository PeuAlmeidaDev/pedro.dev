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
    desc: 'Landing page de venda de bolões oficiais da Caixa para a Lotérica Central de Alagoinhas. O painel administrativo, com acesso protegido por 2FA, coleta os bolões disponíveis no marketplace da Caixa via web scraping e libera lotes para venda online.',
    tech: ['Next.js', 'TypeScript', 'Web Scraping', '2FA', 'Railway'],
    status: 'EM PROGRESSO',
    xp: 900,
    demoUrl: 'https://landingpage-lotericacentral-production.up.railway.app/',
    // repoUrl: privado (404) — adicionar quando o repositório for público
  },
  // Projeto real — landing em produção (Vercel).
  {
    name: 'BEATRIZ STROBEL',
    desc: 'Landing page para a esteticista Beatriz Strobel divulgar e vender seus atendimentos — vitrine de serviços com preços, depoimentos e agendamento direto por formulário de contato e WhatsApp.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    status: 'EM PROGRESSO',
    xp: 700,
    demoUrl: 'https://beatrizstrobel-estetica.vercel.app/',
    repoUrl: 'https://github.com/PeuAlmeidaDev/beatrizstrobel-estetica',
  },
  // Projeto real — dashboard restrito em produção (Railway, repo privado).
  {
    name: 'SISTEMA AFILIADOS',
    desc: 'Painel de gestão da rede de afiliados do Bolão Caixa (Lotérica Central). Acesso restrito com login por e-mail/senha para a equipe e por CPF para afiliados, administrando a venda dos bolões.',
    tech: ['Next.js', 'TypeScript', 'Auth', 'Railway'],
    status: 'EM PROGRESSO',
    xp: 800,
    demoUrl: 'https://lotericacentral.up.railway.app/',
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
