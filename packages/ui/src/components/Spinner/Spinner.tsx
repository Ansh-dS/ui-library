import React, { forwardRef } from 'react'
import { spinnerVariants, type SpinnerVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>, SpinnerVariantsType {
  /** Optional text for screen readers. Defaults to 'Loading...' */
  ariaLabel?: string
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (props, ref) => {
    const {
      className,
      variant,
      size,
      ariaLabel = 'Loading...',
      ...rest
    } = props

    return (
      <div
        ref={ref}
        role="status"
        aria-label={ariaLabel}
        className={cn(spinnerVariants({ variant, size }), className)}
        {...rest}
      >
        {/*sr-only: This span is visually hidden but read by screen readers to announce the loading state.
         */}
        <span className="sr-only">{ariaLabel}</span>
      </div>
    )
  }
)

Spinner.displayName = 'Spinner'
