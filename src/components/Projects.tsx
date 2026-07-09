import { useState } from 'react'
import { projectCategories, projects } from '../data'
import type { Project } from '../data'
import { Section } from './Section'
import { ExternalIcon, GitHubIcon } from './Icons'

function ProjectLinks({ project, size = 18 }: { project: Project; size?: number }) {
  return (
    <div className="flex items-center gap-3">
      {project.source && (
        <a
          aria-label={`${project.name} source on GitHub`}
          href={project.source}
          target="_blank"
          rel="noreferrer"
          className="text-body transition-colors hover:text-cyan"
        >
          <GitHubIcon size={size} />
        </a>
      )}
      {project.live && (
        <a
          aria-label={`${project.name} live site`}
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="text-body transition-colors hover:text-cyan"
        >
          <ExternalIcon size={size} />
        </a>
      )}
    </div>
  )
}

function NewPill() {
  return (
    <span className="rounded-full border border-cyan/50 bg-cyan/10 px-2.5 py-0.5 font-mono text-[0.65rem] font-medium text-cyan">
      {new Date().getFullYear()}
    </span>
  )
}

function Cover({ project, tall = false }: { project: Project; tall?: boolean }) {
  const height = tall ? 'h-44' : 'h-36'
  if (project.image) {
    return (
      <div className={`${height} overflow-hidden border-b border-line`}>
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top saturate-[0.85] transition-all duration-500 group-hover:scale-[1.03] group-hover:saturate-100"
        />
      </div>
    )
  }
  return (
    <div
      className={`${height} flex items-center justify-center border-b border-line`}
      style={{ background: `linear-gradient(135deg, ${project.accent}14, transparent 65%)` }}
      aria-hidden="true"
    >
      <span
        className="flex h-16 w-16 items-center justify-center rounded-2xl font-display text-3xl font-bold"
        style={{ background: `${project.accent}1a`, color: project.accent }}
      >
        {project.name.charAt(0)}
      </span>
    </div>
  )
}

function FeaturedCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <article className="reveal card group relative flex flex-col overflow-hidden" data-reveal-delay={String(delay)}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent 80%)` }}
        aria-hidden="true"
      />
      <Cover project={project} tall />
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <p className="flex items-center gap-2 font-mono text-xs text-cyan">
            Featured · {project.category} {project.isNew && <NewPill />}
          </p>
          <ProjectLinks project={project} />
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-bright transition-colors group-hover:text-cyan">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer">
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="mt-3 leading-relaxed">{project.blurb}</p>
        {project.highlights && (
          <ul className="mt-4 space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.accent }} aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tech.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function GridCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <article className="reveal card group flex flex-col overflow-hidden" data-reveal-delay={String(delay)}>
      <Cover project={project} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-bright transition-colors group-hover:text-cyan">
            {project.name} {project.isNew && <NewPill />}
          </h3>
          <ProjectLinks project={project} />
        </div>
        <p className="mt-2 text-sm leading-relaxed">{project.blurb}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('All')

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter(
    (p) => !p.featured && (filter === 'All' || p.category === filter),
  )

  return (
    <Section
      id="projects"
      index="04"
      title="Things I've built"
      lead="Newest first: AI-native products built on Claude, agentic workflows shipped at scale, enterprise systems for Boeing, and independent apps with real users — from app stores to living-room LED matrices."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {featured.map((project, i) => (
          <FeaturedCard key={project.name} project={project} delay={i * 120} />
        ))}
      </div>

      <div className="reveal mt-14 flex flex-wrap items-center gap-2">
        <span className="mr-2 font-mono text-xs text-body/70">filter:</span>
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
              filter === category
                ? 'border-cyan bg-cyan/10 text-cyan'
                : 'border-line text-body hover:border-cyan/50 hover:text-bright'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <GridCard key={project.name} project={project} delay={(i % 3) * 100} />
        ))}
      </div>

      <p className="reveal mt-12 text-center font-mono text-sm">
        More on{' '}
        <a href="https://github.com/mattwayles" target="_blank" rel="noreferrer" className="text-cyan hover:underline">
          github.com/mattwayles →
        </a>
      </p>
    </Section>
  )
}
