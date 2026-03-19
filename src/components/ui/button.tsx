import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-accent to-accent-secondary px-5 py-2.5 text-accent-foreground shadow-[0_4px_14px_rgba(0,82,255,0.25)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(0,82,255,0.35)]',
        outline:
          'border border-border bg-transparent px-5 py-2.5 text-foreground hover:-translate-y-0.5 hover:border-accent/35 hover:bg-muted',
      },
      size: {
        default: 'h-11',
        sm: 'h-9 px-3 text-xs',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }