import React, { forwardRef } from 'react'
import { chartContainerVariants, ChartVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface ChartProps
  extends React.HTMLAttributes<HTMLDivElement>, ChartVariantsType {
  title?: string
  description?: string
  action?: React.ReactNode
}

export const Chart = forwardRef<HTMLDivElement, ChartProps>((props, ref) => {
  const { className, variant, title, description, action, children, ...rest } =
    props

  return (
    <div
      ref={ref}
      className={cn(chartContainerVariants({ variant }), className)}
      {...rest}
    >
      {(title || description || action) && (
        <div className="flex items-center justify-between mb-l">
          <div>
            {title && (
              <h3 className="text-h3 font-weight-semibold text-fg-primary">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-body text-fg-secondary mt-xs">{description}</p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {/* Container for Recharts or other SVG charting libraries */}
      <div className="w-full h-64 flex items-center justify-center text-fg-secondary bg-surface-sunken rounded-base border border-border-default border-dashed">
        {children || <span>Chart Area (Inject Recharts/D3 here)</span>}
      </div>
    </div>
  )
})

Chart.displayName = 'Chart'
