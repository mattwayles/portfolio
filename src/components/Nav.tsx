import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-ink/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <a href="#top" className="font-mono text-lg font-medium text-bright">
          <span className="gradient-text">mw</span>
          <span className="text-cyan">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group font-mono text-[0.82rem] text-body transition-colors hover:text-cyan"
              >
                <span className="mr-1 text-cyan/60">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 !text-sm">
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-0.5 w-6 bg-bright transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-bright transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-bright transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-b border-line bg-ink/95 px-6 pb-6 pt-2 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-3 py-2.5 font-mono text-sm text-body hover:bg-cyan/10 hover:text-cyan"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost w-full justify-center">
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
