import { profile } from '../data'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center sm:px-8">
      <p className="reveal font-mono text-sm text-cyan">
        <span className="mr-2 opacity-60">06.</span>
        {'//'} contact
      </p>
      <h2 className="reveal mt-3 font-display text-4xl font-bold text-bright sm:text-5xl" data-reveal-delay="100">
        Let's build something <span className="gradient-text">great</span>.
      </h2>
      <p className="reveal mx-auto mt-6 max-w-xl leading-relaxed" data-reveal-delay="200">
        I'm open to senior engineering roles, consulting engagements, and interesting freelance projects.
        Whether you have a role in mind or just want to talk shop, my inbox is always open — I'll get back
        to you quickly.
      </p>
      <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4" data-reveal-delay="300">
        <a href={`mailto:${profile.email}`} className="btn-primary">
          <MailIcon size={18} /> Say hello
        </a>
        <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
          View Resume
        </a>
      </div>
      <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-sm" data-reveal-delay="400">
        <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-cyan">
          <MailIcon size={16} /> {profile.email}
        </a>
        <a href={`tel:+1${profile.phone.replaceAll('-', '')}`} className="flex items-center gap-2 transition-colors hover:text-cyan">
          <PhoneIcon size={16} /> {profile.phone}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-cyan">
          <GitHubIcon size={16} /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-cyan">
          <LinkedInIcon size={16} /> LinkedIn
        </a>
      </div>
    </section>
  )
}
