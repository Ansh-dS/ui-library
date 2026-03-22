import React, { forwardRef } from 'react'
import { videoGridVariants, VideoGridVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface ResponsiveVideoGridProps
  extends React.HTMLAttributes<HTMLDivElement>, VideoGridVariantsType {
  count: number
}

export const ResponsiveVideoGrid = forwardRef<
  HTMLDivElement,
  ResponsiveVideoGridProps
>((props, ref) => {
  const { className, count, children, ...rest } = props

  // Map count to variants, capping at 4 for the specialized grid logic
  const gridKey = count <= 4 ? (count as 1 | 2 | 3 | 4) : 'default'

  return (
    <div
      ref={ref}
      className={cn(
        videoGridVariants({ participantCount: gridKey }),
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
})

ResponsiveVideoGrid.displayName = 'ResponsiveVideoGrid'
