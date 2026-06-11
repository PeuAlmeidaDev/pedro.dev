import type { Project } from '../types'

/**
 * "Quests" — projetos reais do Pedro.
 */
export const projects: Project[] = [
  // Projeto real (../mindforge).
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
    desc: 'Landing page de venda de bolões oficiais da Caixa para a Lotérica Central. O painel administrativo, com acesso protegido por 2FA, coleta os bolões disponíveis no marketplace da Caixa via web scraping e libera lotes para venda online.',
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
    status: 'PROTÓTIPO',
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
  // Este próprio portfólio (meta).
  {
    name: 'PORTFÓLIO RPG',
    desc: 'Este próprio site: um portfólio com tema de RPG/arcade que apresenta minha jornada como dev. Migrado de um design gerado por IA para uma base React própria — componentes tipados, tema retro/modern e mídia otimizada.',
    tech: ['Vite', 'React', 'TypeScript', 'Tailwind'],
    status: 'EM PROGRESSO',
    xp: 1000,
    // demoUrl: adicionar após o deploy (Vercel/Netlify)
    // repoUrl: adicionar após publicar no GitHub
  },
]
