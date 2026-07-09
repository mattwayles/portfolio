import { skillGroups } from '../data'
import { Section } from './Section'

export function Skills() {
  return (
    <Section
      id="skills"
      index="05"
      title="Skills & technologies"
      lead="Organized by depth of experience — from the languages I think in to the platforms I deploy on."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <div key={group.title} className="reveal card p-6" data-reveal-delay={String((i % 3) * 100)}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan/10 font-mono text-sm text-cyan" aria-hidden="true">
                {group.icon}
              </span>
              <h3 className="font-display text-lg font-semibold text-bright">{group.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
