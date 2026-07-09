import { aiCertifications, awards, education, legacyCertifications } from '../data'
import { Section } from './Section'

export function Credentials() {
  return (
    <Section
      id="credentials"
      index="03"
      title="Education, certifications & awards"
      lead="The degrees and agentic-AI credentials up front — backed by a decade of enterprise and systems certifications."
    >
      {/* Featured tier: education and agentic AI certifications side by side */}
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="reveal flex flex-col">
          <h3 className="font-mono text-sm uppercase tracking-widest text-cyan">Education</h3>
          <div className="mt-4 grid flex-1 grid-rows-2 gap-5">
            {education.map((entry) => (
              <div key={entry.degree} className="card flex items-center gap-5 p-5">
                <img
                  src={entry.logo}
                  alt={`${entry.school} seal`}
                  className="h-20 w-20 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-lg font-semibold leading-snug text-bright">{entry.degree}</p>
                  <p className="mt-1.5 text-sm">{entry.school}</p>
                  <p className="mt-1 font-mono text-xs text-body/70">{entry.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal flex flex-col" data-reveal-delay="100">
          <h3 className="font-mono text-sm uppercase tracking-widest text-cyan">AI certifications</h3>
          <div className="mt-4 grid flex-1 grid-rows-2 gap-5">
            {aiCertifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="card group flex items-center gap-5 p-5"
              >
                <img
                  src={cert.badge}
                  alt={`${cert.issuer} certification badge`}
                  className="h-20 w-20 shrink-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-wider text-cyan">{cert.issuer}</p>
                  <h4 className="mt-1 font-display text-base font-semibold leading-snug text-bright">{cert.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed">{cert.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Supporting tier: earlier certifications and awards */}
      <div className="mt-14 grid gap-10 border-t border-line pt-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal">
          <h3 className="font-mono text-sm uppercase tracking-widest text-cyan">Enterprise & systems certifications</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {legacyCertifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="card group flex items-center gap-4 p-4"
              >
                <img
                  src={cert.badge}
                  alt={`${cert.issuer} badge`}
                  loading="lazy"
                  className="h-14 w-14 shrink-0 rounded-md object-contain saturate-[0.7] transition-all duration-300 group-hover:scale-105 group-hover:saturate-100"
                />
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-body/70">{cert.issuer}</p>
                  <p className="font-display text-[0.92rem] font-semibold leading-snug text-bright">{cert.title}</p>
                  <p className="mt-1 text-[0.78rem] leading-relaxed text-body">{cert.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="reveal" data-reveal-delay="150">
          <h3 className="font-mono text-sm uppercase tracking-widest text-cyan">Awards</h3>
          <ul className="mt-4 space-y-3">
            {awards.map((award) => (
              <li key={award.title} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 text-sm">
                <span className="text-bright">{award.title}</span>
                <span className="font-mono text-xs text-body/70">{award.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
