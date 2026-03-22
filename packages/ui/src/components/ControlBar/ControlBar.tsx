import React, { forwardRef } from 'react'
import { controlBarVariants } from './styles.js'
import { cn } from '../../common.js'

export interface ControlBarProps extends React.HTMLAttributes<HTMLElement> {
  centerActions?: React.ReactNode
  rightActions?: React.ReactNode
}

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
