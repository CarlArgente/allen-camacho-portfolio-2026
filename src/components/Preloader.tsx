import { useEffect, useState } from 'react'

const LETTERS = 'Allen Camacho'.split('')

interface PreloaderProps {
  visible: boolean
}

export default function Preloader({ visible }: PreloaderProps) {
  const [mounted, setMounted] = useState(true)
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 400)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (!visible) {
      setPhase('out')
      const timer = setTimeout(() => setMounted(false), 750)
      return () => clearTimeout(timer)
    }
  }, [visible])

  if (!mounted) return null

  return (
    <div className={`preloader${phase === 'out' ? ' preloader-hide' : ''}`}>
      <div className="preloader-content">
        {/* Orbital rings */}
        <div className="preloader-orbits">
          <div className="preloader-orbit preloader-orbit-1" />
          <div className="preloader-orbit preloader-orbit-2" />
          <div className="preloader-orbit preloader-orbit-3" />
          {/* Central disc */}
          <div className="preloader-disc">
            <span className="preloader-initials">AC</span>
          </div>
        </div>

        {/* Staggered name */}
        <p className="preloader-name" aria-label="Allen Camacho">
          {LETTERS.map((ch, i) =>
            ch === ' ' ? (
              <span key={i} className="preloader-space" />
            ) : (
              <span
                key={i}
                className="preloader-letter"
                style={{ animationDelay: `${300 + i * 55}ms` }}
              >
                {ch}
              </span>
            )
          )}
        </p>
      </div>
    </div>
  )
}
