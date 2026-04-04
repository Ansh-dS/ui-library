import React from 'react'
import { tooltipVariants, TooltipVariantsType } from './styles.js'
import { cn } from '../../common.js'
import { Text } from '@components'
import { TextVariantsType } from '../Text/styles.js'

export interface TooltipProps extends TooltipVariantsType {
  content: React.ReactNode
  children: React.ReactNode
  className?: string // Added so developers can pass custom utility classes
  forceVisible?: boolean // Allows the tooltip to stay open for validation errors
}

/*
invinsible: make the element invincible by default. 
group: enables state based styling of the child element when the parent is interacted with.
group-hover:visitble: these things applied to the child so it get visible when then state of parent changes.
*/
export function Tooltip(props: TooltipProps): React.ReactElement {
  const { position, variant = 'dark', size = 'md', className, content, children, forceVisible = false } = props

  // Map tooltip size to the exact Text component variant
  const textVariant: TextVariantsType['variant'] = size === 'lg' ? 'label' : 'caption'

  // Map tooltip visual theme to the exact Text component color
  let textColor: TextVariantsType['color'] = 'primary'
  if (variant === 'dark' || variant === 'brand') {
    textColor = 'inverted'
  }

  // If there is no content, don't render the tooltip wrapper at all
  if (!content) return <>{children}</>

  return (
    /*parent*/
    <div className="relative inline-block group w-full">
      {children}
      {/* child */}
      <div
        className={cn(
          tooltipVariants({ position, variant, size }),

          /* 
          forceVisible: 
            if this is true then tooltip shows up.
            if not then tooltip only shows up on hover.
          */
          forceVisible
            ? 'visible opacity-100'
            : 'invisible opacity-0 group-hover:visible group-hover:opacity-100',
          className
        )}
      >
        {/* Delegating all font logic to the Foundation Text component */}
        <Text as="div" variant={textVariant} color={textColor} weight="medium" >
          {content}
        </Text>
      </div>
    </div>
  )
}