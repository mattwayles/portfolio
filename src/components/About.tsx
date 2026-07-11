import { about } from '../data'
import { Section } from './Section'
import travelImg from '../assets/travel.jpg'

export function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="reveal space-y-5 leading-relaxed">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <figure className="reveal group relative mx-auto w-full max-w-sm self-start" data-reveal-delay="150">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-cyan/40 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
          <img
            src={travelImg}
            alt="Matt hiking under Double Arch in Arches National Park, Utah"
            className="relative rounded-2xl border border-line object-cover saturate-[0.85] transition-all duration-300 group-hover:saturate-100"
          />
        </figure>
      </div>
    </Section>
  )
}
