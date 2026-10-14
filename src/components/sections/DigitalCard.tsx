import { SectionLabel } from '@/components/ui/section-label'
import { portfolioContent } from '@/content/portfolio-content.js'
import { useInView } from '@/hooks/useInView'
import qrCode from '@/assets/allen_camacho_qr.jpg'

export default function DigitalCard() {
  const { digitalCard } = portfolioContent
  const [ref, inView] = useInView()

  return (
    <section
      className={`bg-muted px-6 py-20 md:py-28 section-animate${inView ? ' in-view' : ''}`}
      ref={ref}
      id="digital-card"
    >
      <div className="mx-auto grid w-full max-w-4xl items-center gap-10 md:grid-cols-[1fr_auto]">
        <div className="space-y-5">
          <SectionLabel text={digitalCard.sectionLabel} />
          <h2>{digitalCard.heading}</h2>
          <p className="text-base leading-relaxed text-slate-700 md:text-lg">{digitalCard.description}</p>
        </div>
        <div className="mx-auto w-56 rounded-2xl border border-border bg-white p-3 shadow-sm md:w-64">
          <img
            src={qrCode}
            alt="QR code linking to Allen Camacho's digital business card"
            className="block h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
