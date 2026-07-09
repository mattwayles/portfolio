import mattBody from '../assets/matt-body.png'
import mattHand from '../assets/matt-hand.png'
import mattBlink from '../assets/matt-blink.png'
import { profile, stats, YEARS_EXPERIENCE } from '../data'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

const terminalLines = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'matt wayles — senior software engineer @ angi' },
  { prompt: true, text: 'career --summary' },
  { prompt: false, text: `${YEARS_EXPERIENCE} yrs · full-stack · enterprise → agentic AI` },
  { prompt: true, text: 'stack --current' },
  { prompt: false, text: 'kotlin · java · react · typescript · agentic ai' },
  { prompt: true, text: 'status' },
]

export function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-16 pt-28 sm:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="reveal font-mono text-cyan">Hi, my name is</p>
          <h1 className="reveal mt-3 font-display text-5xl font-bold leading-tight text-bright sm:text-6xl lg:text-7xl" data-reveal-delay="100">
            Matthew <span className="gradient-text">Wayles</span>.
          </h1>
          <h2 className="reveal mt-3 font-display text-2xl font-semibold text-body sm:text-3xl" data-reveal-delay="200">
            I build software people love to use.
          </h2>
          <p className="reveal mt-6 max-w-xl leading-relaxed" data-reveal-delay="300">
            {profile.tagline}
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-4" data-reveal-delay="400">
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
              View Resume
            </a>
            <div className="flex items-center gap-4 pl-1">
              <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="text-body transition-colors hover:text-cyan">
                <GitHubIcon />
              </a>
              <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="text-body transition-colors hover:text-cyan">
                <LinkedInIcon />
              </a>
              <a aria-label="Email" href={`mailto:${profile.email}`} className="text-body transition-colors hover:text-cyan">
                <MailIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="reveal flex w-full flex-col items-center" data-reveal-delay="500">
          <div className="relative z-10 -mb-[45px] ml-44 w-48 self-start drop-shadow-[0_10px_35px_rgba(34,211,238,0.25)]">
            <img
              src={mattBody}
              alt="Matt's Bitmoji waving, with one arm draped over the terminal window"
              className="w-full"
            />
            <img src={mattHand} alt="" aria-hidden className="bitmoji-hand" />
            <img src={mattBlink} alt="" aria-hidden className="bitmoji-blink" />
          </div>
          <div className="card terminal-card w-full overflow-hidden !rounded-xl font-mono text-[0.83rem] leading-7 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-line bg-panel px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-body/70">matt@portfolio — zsh</span>
            </div>
            <div className="px-5 py-5">
              {terminalLines.map((line, i) => (
                <p key={i} className={line.prompt ? 'text-bright' : 'text-body'}>
                  {line.prompt && <span className="mr-2 text-cyan">$</span>}
                  {line.text}
                </p>
              ))}
              <p className="text-[#34d399]">
                open to new opportunities <span className="cursor-blink" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <dl className="reveal mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4" data-reveal-delay="600">
        {stats.map((stat) => (
          <div key={stat.label} className="card px-5 py-4 text-center">
            <dt className="order-2 mt-1 block font-mono text-xs text-body">{stat.label}</dt>
            <dd className="order-1 block font-display text-3xl font-bold gradient-text">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
