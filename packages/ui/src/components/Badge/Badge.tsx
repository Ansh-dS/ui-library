import React from 'react'
import { badgeVariants, BadgeVariantsType } from './styles.js'
import { cn } from '../../common.js'
export interface BadgeProps
  extends
    Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    BadgeVariantsType {}
export function Badge(props: BadgeProps): React.ReactElement {
  const { color, className, children, ...rest } = props
  return (
    <span className={cn(badgeVariants({ color }), className)} {...rest}>
      {children}
    </span>
  )
}
