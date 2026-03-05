import React from 'react'
import { textVariants, TextVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface TextProps
  extends
    Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    TextVariantsType {
  as?: React.ElementType
}

export function Text(props: TextProps): React.ReactElement {
  const {
    size,
    color,
    as: Component = 'span',
    className,
    children,
    ...rest
  } = props
  return (
    <Component
      className={cn(textVariants({ size, color }), className)}
      {...rest}
    >
      {children}
    </Component>
  )
}
