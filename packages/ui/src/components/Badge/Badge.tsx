import React from 'react'
import { badgeVariants, BadgeVariantsType } from './styles.js'
import { cn } from '../../common.js'
import { Text } from '../Text/Text.js'

export interface BadgeProps
  extends
    Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    BadgeVariantsType {}

export function Badge(props: BadgeProps): React.ReactElement {
  // FIX : Added default values here so the JS logic doesn't break if props are omitted
  const { color = 'default', className, size = 'sm', children, ...rest } = props

  // Map Badge size to Text variant
  const textVariant = size === 'sm' ? 'caption' : 'label'

  // FIX : Map the Badge color to the exact string the <Text> component expects
  const textColorMap: Record<
    string,
    'secondary' | 'success' | 'warning' | 'danger'
  > = {
    default: 'secondary',
    success: 'success',
    warning: 'warning',
    error: 'danger', // Translates 'error' to 'danger'
  }

  return (
    <span className={cn(badgeVariants({ color, size }), className)} {...rest}>
      <Text
        as="span"
        variant={textVariant}
        weight="medium"
        color={color ? textColorMap[color] : 'secondary'}
        className="truncate" // Ensures long badge text doesn't break layout
      >
        {children}
      </Text>
    </span>
  )
}
