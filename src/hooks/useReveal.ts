import { useEffect } from 'react'

/**
 * Adds `.is-visible` to every `.reveal` element as it scrolls into view.
 * Elements can set `data-reveal-delay` (ms) for staggered entrances.
 * A MutationObserver picks up elements mounted after initial render
 * (e.g. project cards revealed by a filter change).
 */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          const delay = Number(el.dataset.revealDelay ?? 0)
          setTimeout(() => el.classList.add('is-visible'), delay)
          io.unobserve(el)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' },
    )

    const observeAll = () =>
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
        .forEach((el) => io.observe(el))

    observeAll()
    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
