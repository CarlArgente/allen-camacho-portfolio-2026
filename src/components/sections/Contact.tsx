import { Mail, MapPin, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SectionLabel } from '@/components/ui/section-label'
import { portfolioContent } from '@/content/portfolio-content.js'
import { useInView } from '@/hooks/useInView'

export default function Contact() {
  const { contact } = portfolioContent
  const [ref, inView] = useInView()

  return (
    <section className={`relative overflow-hidden bg-foreground px-6 py-20 text-background md:py-28 section-animate${inView ? ' in-view' : ''}`} ref={ref} id="contact">
      <div className="dark-dots" />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10">
        <div className="space-y-4 text-center">
          <SectionLabel dark text={contact.sectionLabel} />
          <h2 className="text-white">Let's Connect</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300">{contact.intro}</p>
        </div>

        <Card className="w-full max-w-sm border-white/15 bg-white/5 backdrop-blur">
          <CardContent className="space-y-5 p-8 text-slate-200">
            <p className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-accent-secondary" />
              {contact.location}
            </p>
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Phone className="size-4 shrink-0 text-accent-secondary" />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Mail className="size-4 shrink-0 text-accent-secondary" />
              {contact.email}
            </a>
          </CardContent>
        </Card>

        <div className="flex flex-wrap justify-center gap-3">
          <a href={`mailto:${contact.email}`} className={buttonVariants()}>
            Email Me
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: 'outline',
              className: 'border-white/30 text-white hover:bg-white/10 hover:text-white',
            })}
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
