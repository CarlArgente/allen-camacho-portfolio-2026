import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionLabel } from '@/components/ui/section-label'
import { portfolioContent } from '@/content/portfolio-content.js'
import allenPhoto from '@/components/images/allen.jpg'

export default function Hero({ ready = false }: { ready?: boolean }) {
  const { hero } = portfolioContent

  return (
    <section className={`relative overflow-hidden px-6 py-20 md:py-32${ready ? ' hero-ready' : ''}`} id="hero">
      <div className="hero-glow" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text column */}
        <div className="hero-text-col space-y-7">
          <SectionLabel text="Portfolio" />
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {hero.subHeadline}
            </p>
            <h1 className="text-[clamp(3.2rem,7vw,6rem)] font-bold leading-[1.0] tracking-tight text-slate-950">
              {hero.fullName}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {hero.ctaPrimary}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Photo column */}
        <div className="hero-photo-col relative mx-auto flex w-full max-w-sm items-center justify-center lg:mx-0">
          {/* Outer decorative ring */}
          <div className="hero-ring absolute inset-0 rounded-full" />
          {/* Ambient glow behind photo */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/25 to-accent-secondary/15 blur-2xl" />
          {/* Photo frame */}
          <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-2 border-accent/20 shadow-2xl shadow-accent/10">
            <img
              src={allenPhoto}
              alt="Allen Camacho"
              className="h-full w-full object-cover"
              style={{ aspectRatio: '4/5', maxHeight: '520px' }}
            />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </div>
          {/* Floating badge bottom-left */}
          <div className="hero-float-1 absolute -bottom-4 -left-4 z-20 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">Clients</p>
            <p className="font-sans text-2xl font-bold text-slate-900">20+</p>
          </div>
          {/* Floating badge top-right */}
          <div className="hero-float-2 absolute -right-4 -top-4 z-20 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">Experience</p>
            <p className="font-sans text-2xl font-bold text-slate-900">4+ yrs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
