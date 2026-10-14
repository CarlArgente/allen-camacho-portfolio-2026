import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionLabel } from '@/components/ui/section-label'
import { portfolioContent } from '@/content/portfolio-content.js'
import { useInView } from '@/hooks/useInView'

export default function Skills() {
  const { skills } = portfolioContent
  const [ref, inView] = useInView()

  return (
    <section className={`px-6 py-20 md:py-28 section-animate${inView ? ' in-view' : ''}`} ref={ref} id="skills">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <SectionLabel text={skills.sectionLabel} />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.expertise.map((skill, i) => (
            <Card className="animate-child" key={skill.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <CardHeader>
                <CardTitle className="text-lg">{skill.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-slate-600">
                  {skill.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="space-y-5">
          <h3>{skills.toolsLabel}</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {skills.tools.map((group) => (
              <Card className="animate-child" key={group.category}>
                <CardHeader>
                  <CardTitle className="text-base">{group.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
