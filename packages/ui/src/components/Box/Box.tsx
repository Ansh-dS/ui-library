import React from 'react'
import { cn } from '../../common.js'

interface BoxProps {
  children?: React.ReactNode
  className?: string
  as?: React.ElementType // elementType: can be component or just a name
  style?: React.CSSProperties
  // as we didn't use CVA and not extending 'BoxProps' so we need to mention the below.
  elevation?: 'none' | 'sm' | 'md' | 'lg'
  interactive?: boolean
}

// the below is the way we can provide the default values even after interface is defined.
// we are also renaming the old value:
// 'as' to 'Component'.
export function Box({
  as: Component = 'div',
  style,
  className,
  children, // Fixed typo
  elevation = 'none',
  interactive = false,
}: BoxProps) {
  return (
    <Component
      style={style} // no need to add in 'cn' function driectly adding into html.
      className={cn(
        // 1. BASE RULES
        'box-border min-w-0 transition-all',

        // 2. SHADOW RULES (since we didn't use CVA so we need to map the values)
        {
          'shadow-none': elevation === 'none',
          'shadow-raised': elevation === 'sm', // Maps to --shadows-sm
          'shadow-overlay': elevation === 'md', // Maps to --shadows-md
          'shadow-modal': elevation === 'lg', // Maps to --shadows-lg
        },

        // 3. INTERACTIVE RULES
        interactive &&
          'hover:-translate-y-0.5 hover:shadow-overlay cursor-pointer',

        className
      )}
    >
      {children}
    </Component>
  )
}
