import { GraduationCap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionLabel } from '@/components/ui/section-label'
import { portfolioContent } from '@/content/portfolio-content.js'
import { useInView } from '@/hooks/useInView'

export default function Education() {
  const { education } = portfolioContent
  const [ref, inView] = useInView()

  return (
    <section className={`px-6 py-20 md:py-28 section-animate${inView ? ' in-view' : ''}`} ref={ref} id="education">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <SectionLabel text={education.sectionLabel} />
        <div className="grid gap-5 md:grid-cols-3">
          {education.items.map((item, i) => (
            <Card key={item.credential} className="animate-child" style={{ transitionDelay: `${i * 120}ms` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <GraduationCap className="size-5 text-accent" />
                  {item.year}
                </CardTitle>
                <CardDescription>{item.institution}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">{item.credential}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
