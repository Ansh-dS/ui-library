import React from 'react'
import { cn } from '../../common.js'
import { HeadingVariantsTypes, headingVariants } from './styles.js'

interface HeadingProps extends HeadingVariantsTypes {
  as?: React.ElementType
  children: React.ReactNode
}

export function Heading({
  as: Component = 'div',
  children,
  size,
  color,
}: HeadingProps) {
  return (
    <Component className={cn(headingVariants({ size, color }))}>
      {children}
    </Component>
  )
}
