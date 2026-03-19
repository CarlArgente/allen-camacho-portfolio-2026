import { Card, CardContent } from '@/components/ui/card'
import { SectionLabel } from '@/components/ui/section-label'
import { portfolioContent } from '@/content/portfolio-content.js'
import { useInView } from '@/hooks/useInView'

export default function Testimonials() {
  const { testimonials } = portfolioContent
  const [ref, inView] = useInView()

  return (
    <section className={`px-6 py-20 md:py-28 section-animate${inView ? ' in-view' : ''}`} ref={ref} id="testimonials">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <SectionLabel text={testimonials.sectionLabel} />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <Card
              className="flex h-full flex-col border-accent/25 animate-child"
              key={item.name}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <CardContent className="flex flex-1 flex-col justify-between space-y-5 p-6">
                <p className="text-sm leading-relaxed text-slate-700">"{item.quote}"</p>
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.07em] text-slate-500">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
