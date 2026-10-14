import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portfolioContent } from '@/content/portfolio-content.js'
import allenPhoto from '@/assets/allen_new_profile.jpg'

export default function Hero() {
  const { hero } = portfolioContent

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] overflow-hidden px-4 pt-8 md:px-8" id="hero">
      <div className="mx-auto grid w-full max-w-[110rem] items-end gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6 self-center py-10">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{hero.fullName}</p>
          <h1 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-bold leading-[1.1] tracking-tight text-foreground">
            {hero.headline}
          </h1>
          <p className="text-xl font-medium leading-snug text-accent">{hero.subHeadline}</p>
          <p className="max-w-2xl text-base leading-relaxed text-slate-700">{hero.intro}</p>
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

        <div className="mx-auto flex w-full max-w-lg justify-center lg:mx-0 lg:max-w-none lg:justify-center">
          <img
            src={allenPhoto}
            alt="Allen Camacho"
            className="block h-auto w-full max-w-[46rem] -translate-x-4 object-contain lg:translate-x-0"
          />
        </div>
      </div>
    </section>
  )
}
