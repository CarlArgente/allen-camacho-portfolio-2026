import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-10% 0px -60% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border/70 bg-background/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent transition hover:opacity-70"
        >
          Allen Camacho
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`rounded-lg px-4 py-2 text-sm transition-colors hover:bg-accent/5 hover:text-accent ${
                activeId === id ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-muted-foreground transition hover:text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur md:hidden">
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`block w-full py-3 text-left text-sm transition-colors hover:text-accent ${
                activeId === id ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
