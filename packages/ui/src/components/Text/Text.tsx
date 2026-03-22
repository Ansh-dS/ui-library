import React, { forwardRef } from 'react'
import { textVariants, TextVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>, TextVariantsType {
  /** Allows you to change the underlying HTML element (e.g., 'span', 'h1', 'label') */
  as?: React.ElementType
}

export const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const {
    as: Component = 'p', // Defaults to a paragraph tag
    variant,
    color,
    weight,
    align,
    className,
    children,
    ...rest
  } = props

  return (
    <Component
      ref={ref}
      className={cn(textVariants({ variant, color, weight, align }), className)}
      {...rest}
    >
      {children}
    </Component>
  )
})
Text.displayName = 'Text'
