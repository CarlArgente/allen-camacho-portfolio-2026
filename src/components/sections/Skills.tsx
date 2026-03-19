import { BriefcaseBusiness, Rocket, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionLabel } from '@/components/ui/section-label'
import { portfolioContent } from '@/content/portfolio-content.js'
import { useInView } from '@/hooks/useInView'

export default function Skills() {
  const { skills } = portfolioContent
  const [ref, inView] = useInView()

  return (
    <section className={`px-6 py-20 md:py-28 section-animate${inView ? ' in-view' : ''}`} ref={ref} id="skills">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionLabel text={skills.sectionLabel} />
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Technical */}
          <Card className="animate-child" style={{ transitionDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BriefcaseBusiness className="size-5 text-accent" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {skills.technical.map((skill) => (
                <div
                  className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-border pb-2"
                  key={skill.tool}
                >
                  <span className="text-slate-700">{skill.tool}</span>
                  <Badge className="shrink-0" variant="secondary">{skill.category}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="animate-child" style={{ transitionDelay: '0.22s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="size-5 text-accent" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              {skills.soft.map((skill) => (
                <p key={skill}>• {skill}</p>
              ))}
            </CardContent>
          </Card>

          {/* Domain */}
          <Card className="animate-child" style={{ transitionDelay: '0.34s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="size-5 text-accent" />
                Domain Expertise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-700">
              {skills.domain.map((skill) => (
                <p key={skill}>• {skill}</p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
