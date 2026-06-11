import type { Project, ProjectStatus } from '../types'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'

/** Cor (token de tema) de cada status de quest. */
const STATUS_COLOR: Record<ProjectStatus, string> = {
  COMPLETO: 'emerald',
  'EM PROGRESSO': 'gold',
  PROTÓTIPO: 'cyan',
}

/**
 * Seção "Quests" (#projects) — QUEST LOG.
 * Cada projeto é uma missão com status, tech, XP e ações.
 */
export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1180px] px-[22px] pt-20 pb-[50px]">
      <SectionHeading number="03" title="QUEST LOG" accent="emerald" />
      <p className="mt-[-12px] mb-7 font-body text-[15px] text-ink-dim">
        Missões concluídas, em andamento e protótipos. Cada quest concede XP.
      </p>

      <div className="grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(310px,1fr))]">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const statusColor = `var(--color-${STATUS_COLOR[project.status]})`

  return (
    <article className="flex flex-col border-[3px] border-edge bg-[linear-gradient(180deg,#1b1430,#131019)] p-[22px] shadow-[0_0_0_3px_#0b0813] transition-transform hover:-translate-y-1">
      <div className="mb-3.5 flex items-start justify-between gap-2.5">
        <h3 className="m-0 font-pixel text-[13px] leading-[1.4] text-[#f5f3ff]">{project.name}</h3>
        <span
          className="shrink-0 whitespace-nowrap border-2 px-[7px] py-1.5 font-pixel text-[7px]"
          style={{ color: statusColor, borderColor: statusColor }}
        >
          {project.status}
        </span>
      </div>

      <p className="mb-4 flex-1 font-body text-sm leading-relaxed text-ink-soft">{project.desc}</p>

      <div className="mb-[18px] flex flex-wrap gap-[7px]">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="border border-edge bg-[#170f28] px-2 py-1.5 font-pixel text-[7px] text-violet"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span className="font-pixel text-[8px] text-gold">★ +{project.xp} XP</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <CardLink href={project.demoUrl} variant="primary">
          VER
        </CardLink>
        <CardLink href={project.repoUrl} variant="ghost">
          GITHUB
        </CardLink>
      </div>
    </article>
  )
}

function CardLink({
  href,
  variant,
  children,
}: {
  href?: string
  variant: 'primary' | 'ghost'
  children: React.ReactNode
}) {
  const external = Boolean(href)
  const cls =
    variant === 'primary'
      ? 'border-2 border-[#a5f3fc] bg-cyan text-bg shadow-[0_3px_0_#0e7490] active:translate-y-[3px] active:shadow-none'
      : 'border-2 border-violet-deep bg-transparent text-ink hover:border-violet hover:text-violet'

  return (
    <a
      href={href ?? '#'}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`px-[11px] py-2.5 font-pixel text-[8px] no-underline transition-transform ${cls}`}
    >
      {children}
    </a>
  )
}
