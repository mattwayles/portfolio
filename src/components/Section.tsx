import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: string
  title: string
  lead?: string
  children: ReactNode
}

export function Section({ id, index, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
      <div className="reveal mb-12">
        <p className="font-mono text-sm text-cyan">
          <span className="mr-2 opacity-60">{index}.</span>
          {'//'} {id}
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-bright sm:text-4xl">{title}</h2>
        {lead && <p className="mt-4 max-w-2xl text-base leading-relaxed">{lead}</p>}
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-cyan to-transparent" />
      </div>
      {children}
    </section>
  )
}
