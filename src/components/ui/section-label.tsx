import { cn } from '@/lib/utils'

interface SectionLabelProps {
  text: string
  dark?: boolean
  className?: string
}

export function SectionLabel({ text, dark = false, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 rounded-full border px-5 py-2',
        dark ? 'border-white/25 bg-white/5' : 'border-accent/30 bg-accent/5',
        className,
      )}
    >
      <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
      <span
        className={cn(
          'font-mono text-xs uppercase tracking-[0.15em]',
          dark ? 'text-accent-secondary' : 'text-accent',
        )}
      >
        {text}
      </span>
    </div>
  )
}
