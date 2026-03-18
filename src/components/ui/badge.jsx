import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border font-mono text-xs transition-colors',
  {
    variants: {
      variant: {
        default:  'border-blue-border bg-blue-dim text-blue-accent px-2.5 py-0.5',
        outline:  'border-[rgba(99,157,255,0.2)] text-text-secondary px-2.5 py-0.5',
        green:    'border-[rgba(62,207,142,0.2)] bg-green-dim text-green-DEFAULT px-2.5 py-0.5',
        ghost:    'border-transparent bg-bg-tertiary text-text-dim px-2.5 py-0.5',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
