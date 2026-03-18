import * as React from 'react'
import { cn } from '../../lib/utils'

const Separator = React.forwardRef(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <div
      ref={ref}
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation === 'vertical' ? 'vertical' : undefined}
      className={cn(
        'shrink-0 bg-[rgba(99,157,255,0.08)]',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = 'Separator'

export { Separator }
