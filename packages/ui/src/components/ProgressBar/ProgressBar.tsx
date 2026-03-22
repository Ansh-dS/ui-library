import React, { forwardRef } from 'react'
import {
  progressBarVariants,
  progressIndicatorVariants,
  ProgressBarVariantsType,
} from './styles.js'
import { cn } from '../../common.js'

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>, ProgressBarVariantsType {
  value: number // 0 to 100
  max?: number
  color?: 'primary' | 'success' | 'warning' | 'danger'
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (props, ref) => {
    const {
      className,
      size,
      value,
      max = 100,
      color = 'primary',
      ...rest
    } = props

    const percentage = Math.min(Math.max(0, (value / max) * 100), 100)

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(progressBarVariants({ size }), className)}
        {...rest}
      >
        <div
          className={progressIndicatorVariants({ color })}
          style={{ width: `${percentage}%` }}
        />
      </div>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'
