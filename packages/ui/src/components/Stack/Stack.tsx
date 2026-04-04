/*
1. Use: to arrange elements horzontally or vertically in a line with eaqual gap. 
*/
import React, { forwardRef } from 'react'
import { stackVariants, type StackVariantsType } from './styles.js'
import { cn } from '../../common.js'

//  Extend React.HTMLAttributes to allow standard props (id, onClick, aria-*, etc.)
export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>, StackVariantsType {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

// Wrap the component in forwardRef
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      as: Component = 'div',
      direction,
      gap,
      align,
      justify,
      className,
      ...rest // Collect the rest of the standard HTML props
    },
    ref // Receive the forwarded ref
  ) => {
    return (
      <Component
        ref={ref} // Attach the ref to the DOM element
        className={cn(
          stackVariants({ direction, gap, align, justify }),
          className
        )}
        {...rest} // Spread the remaining standard props
      >
        {children}
      </Component>
    )
  }
)

// Add a displayName for better React DevTools debugging
Stack.displayName = 'Stack'
