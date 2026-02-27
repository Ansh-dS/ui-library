import React from 'react'
import { tooltipVariants, TooltipVariantsType } from './styles.js'
import { cn } from '../../common.js'
export interface TooltipProps extends TooltipVariantsType {
  content: React.ReactNode
  children: React.ReactNode
}
export function Tooltip(props: TooltipProps): React.ReactElement {
  const { position, content, children } = props
  return (
    <div className="relative inline-block group">
      {children}
      <div
        className={cn(
          tooltipVariants({ position }),
          'invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100'
        )}
      >
        {content}
      </div>
    </div>
  )
}
