import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from './utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-0.5 whitespace-nowrap text-black focus-visible:outline-none disabled:pointer-events-none disabled:bg-gray-200 disabled:text-white disabled:border-none',
  {
    variants: {
      size: {
        tiny: 'h-6 text-body-1-r px-2',
        small: 'h-8 text-subhead-2-b px-4',
        medium: 'h-9 text-subhead-2-b px-4',
        large: 'h-11 text-subhead-2-b px-6',
        xlarge: 'h-13 text-subhead-2-b px-6',
        xxlarge: 'h-15 text-subhead-3-b px-6',
      },
      fill: {
        black: 'bg-black text-white',
        gray: 'bg-gray-50 text-black',
        white: 'bg-white text-black',
      },
      line: {
        black: 'border border-black',
        gray: 'border border-gray-100',
        white: 'border border-white text-white',
        orange: 'border border-orange-600', // 주문서 ERROR
      },
      rounded: {
        full: 'rounded-full',
      },
      width: {
        full: 'w-full',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, fill, line, rounded, width, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(
          buttonVariants({
            size,
            fill,
            line,
            rounded,
            width,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
