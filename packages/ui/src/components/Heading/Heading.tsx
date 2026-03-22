import React from 'react'
import { cn } from '../../common.js'
import { HeadingVariantsTypes, headingVariants } from './styles.js'

//1. why aren't we using string for 'children':
// as it could have:
// Inline Highlights: using 'span' in-between.
// Icons.
// Forced line breaks: having <br/>
//2. React.HTMLAttributes: to inherit standard props like id, style, aria-attributes
//3. why 'omit'?
// as there were collision b/w the name 'color'
// so we are omiting 'color' attribute to get added from 'React.HTML........'
interface HeadingProps
  extends
    Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    HeadingVariantsTypes {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  children: React.ReactNode
  className?: string
}

export function Heading({
  as: Component = 'h2',
  children,
  size,
  color,
  className,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(headingVariants({ size, color }), className)}
      {...props}
    >
      {children}
    </Component>
  )
}
