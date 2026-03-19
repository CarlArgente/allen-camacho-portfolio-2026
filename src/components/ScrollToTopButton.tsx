import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Button
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-50 size-12 rounded-full p-0 shadow-lg transition-all duration-300 md:bottom-7 md:right-7 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      onClick={scrollToTop}
      type="button"
    >
      <ArrowUp className="size-5" />
    </Button>
  )
}