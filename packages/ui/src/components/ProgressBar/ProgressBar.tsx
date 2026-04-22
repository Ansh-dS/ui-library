import React, { forwardRef } from 'react'
import {
  progressBarVariants,
  progressIndicatorVariants,
  ProgressBarVariantsType,
} from './styles.js'
import { cn } from '../../common.js'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type ProgressBarCustomProps = {
  /** 0 to 100 */
  value: number
  max?: number
  color?: 'primary' | 'success' | 'warning' | 'danger'
}

type CleanProps = Prettify<ProgressBarCustomProps & ProgressBarVariantsType>

export type ProgressBarProps = CleanProps & React.HTMLAttributes<HTMLDivElement>

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
