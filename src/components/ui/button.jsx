import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:   'bg-blue-accent text-white hover:opacity-85 hover:-translate-y-px',
        outline:   'border border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white',
        ghost:     'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary',
        secondary: 'bg-bg-tertiary text-text-primary hover:bg-bg-secondary border border-[rgba(99,157,255,0.1)]',
        link:      'text-blue-accent underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm:      'h-8 px-3 text-xs',
        lg:      'h-12 px-8',
        icon:    'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size:    'default',
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
