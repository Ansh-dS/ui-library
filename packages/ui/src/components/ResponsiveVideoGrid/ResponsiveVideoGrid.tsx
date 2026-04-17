import React, { forwardRef } from 'react'
import { videoGridVariants, VideoGridVariantsType } from './styles.js'
import { cn } from '../../common.js'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type ResponsiveVideoGridCustomProps = {
  count: number
}

type CleanProps = Prettify<
  ResponsiveVideoGridCustomProps & VideoGridVariantsType
>

export type ResponsiveVideoGridProps = CleanProps &
  React.HTMLAttributes<HTMLDivElement>

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
