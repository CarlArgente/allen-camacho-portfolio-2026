import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionLabel } from '@/components/ui/section-label'
import { portfolioContent } from '@/content/portfolio-content.js'
import { useInView } from '@/hooks/useInView'

export default function About() {
  const { about } = portfolioContent
  const [ref, inView] = useInView()

  return (
    <section className={`bg-muted px-6 py-20 md:py-28 section-animate${inView ? ' in-view' : ''}`} ref={ref} id="about">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <SectionLabel text={about.sectionLabel} />
          {about.story.map((paragraph, i) => (
            <p className="text-base leading-relaxed text-slate-700 md:text-lg" key={i}>
              {paragraph}
            </p>
          ))}
        </div>

        <Card className="animate-child h-fit">
          <CardHeader>
            <CardTitle>{about.strengthsLabel}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-slate-700">
              {about.strengths.map((strength) => (
                <li className="flex gap-3" key={strength}>
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
