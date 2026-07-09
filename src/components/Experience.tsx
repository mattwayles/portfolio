import { experience } from '../data'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" index="02" title="Where I've worked">
      <ol className="relative ml-2 space-y-10 border-l border-line pl-8">
        {experience.map((job, i) => (
          <li key={job.company} className="reveal relative" data-reveal-delay={String(i * 100)}>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="card p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-bright">
                  {job.role} <span className="text-cyan">@ {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-body">{job.period}</p>
              </div>
              <p className="mt-1 font-mono text-xs text-body/70">{job.location}</p>
              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-[0.95rem] leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/70" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
