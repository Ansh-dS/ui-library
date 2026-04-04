import React, { forwardRef } from 'react'
import { controlBarVariants } from './styles.js'
import { cn } from '../../common.js'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type ControlBarCustomProps = {
  centerActions?: React.ReactNode
  rightActions?: React.ReactNode
}

type CleanProps = Prettify<ControlBarCustomProps>

export type ControlBarProps = CleanProps & React.HTMLAttributes<HTMLElement>

export const ControlBar = forwardRef<HTMLElement, ControlBarProps>(
  (props, ref) => {
    const { className, centerActions, rightActions, children, ...rest } = props

    return (
      <footer
        ref={ref}
        className={cn(controlBarVariants(), className)}
        {...rest}
      >
        <div className="flex items-center gap-m">{children}</div>
        <div className="flex items-center gap-l absolute left-1/2 -translate-x-1/2">
          {centerActions}
        </div>
        <div className="flex items-center gap-m">{rightActions}</div>
      </footer>
    )
  }
)

ControlBar.displayName = 'ControlBar'
