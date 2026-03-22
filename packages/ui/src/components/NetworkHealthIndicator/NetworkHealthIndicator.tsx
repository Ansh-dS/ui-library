import React, { forwardRef } from 'react'
import { networkHealthVariants, NetworkHealthVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface NetworkHealthIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement>, NetworkHealthVariantsType {
  latency?: number // ms
}

export const NetworkHealthIndicator = forwardRef<
  HTMLDivElement,
  NetworkHealthIndicatorProps
>((props, ref) => {
  const { className, quality, latency, ...rest } = props

  return (
    <div
      className="flex items-center gap-s group cursor-help"
      title={latency ? `Latency: ${latency}ms` : 'Checking connection...'}
    >
      <div
        ref={ref}
        className={cn(networkHealthVariants({ quality }), className)}
        {...rest}
      >
        <div className="flex-1 h-[30%] rounded-small" />
        <div className="flex-1 h-[50%] rounded-small" />
        <div className="flex-1 h-[75%] rounded-small" />
        <div className="flex-1 h-[100%] rounded-small" />
      </div>
      {latency && (
        <span className="text-caption text-fg-secondary font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          {latency}ms
        </span>
      )}
    </div>
  )
})

NetworkHealthIndicator.displayName = 'NetworkHealthIndicator'
