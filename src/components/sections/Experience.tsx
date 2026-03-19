import { Star } from 'lucide-react'
import { SectionLabel } from '@/components/ui/section-label'
import { portfolioContent } from '@/content/portfolio-content.js'
import { useInView } from '@/hooks/useInView'

export default function Experience() {
  const { experience } = portfolioContent
  const [ref, inView] = useInView()

  return (
    <section
      className={`relative overflow-hidden bg-foreground px-6 py-20 text-background md:py-28 section-animate${inView ? ' in-view' : ''}`}
      ref={ref}
      id="experience"
    >
      <div className="dark-dots" />
      <div className="mx-auto w-full max-w-3xl space-y-12">
        <SectionLabel dark text={experience.sectionLabel} />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-[10px] top-2 h-[calc(100%-0.5rem)] w-0.5 bg-gradient-to-b from-accent/70 via-accent-secondary/40 to-transparent" />

          <div className="space-y-10">
            {experience.items.map((item, index) => (
              <div
                className="flex gap-6 animate-child"
                key={item.company}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Step dot */}
                <div className="relative z-10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-secondary text-[10px] font-bold text-white shadow-[0_0_0_3px_rgba(0,82,255,0.25)]">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="mb-1 font-mono text-xs uppercase tracking-[0.14em] text-accent-secondary">
                    {item.duration}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>
                  <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                  <p className="mb-4 text-sm font-medium text-slate-400">{item.role}</p>
                  <p className="mb-4 text-sm leading-relaxed text-slate-300">{item.blurb}</p>
                  {item.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {item.highlights.map((highlight) => (
                        <li
                          className="flex gap-2 text-sm text-slate-300"
                          key={highlight.slice(0, 24)}
                        >
                          <Star className="mt-0.5 size-4 shrink-0 text-accent-secondary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
