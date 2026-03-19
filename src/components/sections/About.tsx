import { Radar } from 'lucide-react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionLabel } from '@/components/ui/section-label'
import { portfolioContent } from '@/content/portfolio-content.js'
import { useInView } from '@/hooks/useInView'

export default function About() {
  const { about } = portfolioContent
  const [ref, inView] = useInView()

  return (
    <section className={`px-6 py-20 md:py-28 section-animate${inView ? ' in-view' : ''}`} ref={ref} id="about">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <SectionLabel text={about.sectionLabel} />
          {about.story.map((paragraph, i) => (
            <p className="text-lg leading-relaxed text-slate-700" key={i}>
              {paragraph}
            </p>
          ))}
         
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {about.stats.map((stat, i) => (
            <Card
              className="group border-border bg-card transition hover:-translate-y-1 hover:shadow-lg animate-child"
              key={stat.metric}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <CardHeader>
                <CardTitle className="font-sans font-bold text-4xl text-slate-900">{stat.value}</CardTitle>
                <CardDescription className="text-sm uppercase tracking-[0.08em] text-slate-500">
                  {stat.metric}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
