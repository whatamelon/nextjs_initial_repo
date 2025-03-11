'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as React from 'react'

import { cn } from './utils'

const RadioButton = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />
))
RadioButton.displayName = RadioGroupPrimitive.Root.displayName

const RadioButtonItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      'h-6 w-6 rounded-full ring-2 ring-gray-100 ring-inset data-[state=checked]:bg-black data-[state=checked]:ring-0',
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <i className="ri-radio-button-fill h-6 w-6 text-white" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
RadioButtonItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioButton, RadioButtonItem }
