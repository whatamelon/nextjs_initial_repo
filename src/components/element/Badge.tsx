import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from './utils'

const badgeVariants = cva(
  'inline-flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      size: {
        tiny: 'h-[18px] text-body-1-r px-1.5',
        small: 'h-[22px] text-body-1-r px-2',
        medium: 'h-6 text-body-1-r px-2',
        large: 'h-7 text-body-1-r px-3',
      },
      fill: {
        black: 'bg-black text-white',
        white: 'bg-white text-black',
        green: 'bg-caribbean-green-200 text-caribbean-green-950',
        caribbeanGreen: 'bg-caribbean-green-300 text-black',
        orange: 'bg-orange-100 text-orange-600',
        gray: 'bg-gray-50 text-black',
        grayText: 'bg-gray-50 text-gray-600',
        none: 'bg-transparent text-black',
      },
      line: {
        black: 'border border-black',
        gray: 'border border-gray-100',
      },
      rounded: {
        small: 'rounded-[4px]',
        full: 'rounded-full',
      },
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, size, fill, line, rounded, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({
          size,
          fill,
          line,
          rounded,
        }),
        className,
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
