import { Globe } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { SectionLabel } from '@/components/ui/section-label'
import { portfolioContent } from '@/content/portfolio-content.js'
import { useInView } from '@/hooks/useInView'

export default function Regional() {
  const { regional } = portfolioContent
  const [ref, inView] = useInView()

  return (
    <section
      className={`bg-muted px-6 py-20 md:py-28 section-animate${inView ? ' in-view' : ''}`}
      ref={ref}
      id="regional"
    >
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <SectionLabel text={regional.sectionLabel} />
        <p className="text-base leading-relaxed text-slate-700 md:text-lg">{regional.description}</p>
        <div className="space-y-4">
          <h3 className="flex items-center gap-2">
            <Globe className="size-5 text-accent" />
            {regional.marketsLabel}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {regional.markets.map((market) => (
              <li key={market}>
                <Badge className="px-4 py-1.5 text-sm" variant="secondary">
                  {market}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
