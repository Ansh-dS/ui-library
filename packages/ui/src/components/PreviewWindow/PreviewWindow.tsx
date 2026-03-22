import React, { forwardRef } from 'react'
import { previewWindowVariants, PreviewWindowVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface PreviewWindowProps
  extends React.HTMLAttributes<HTMLDivElement>, PreviewWindowVariantsType {
  url?: string
}

export const PreviewWindow = forwardRef<HTMLDivElement, PreviewWindowProps>(
  (props, ref) => {
    const {
      className,
      device,
      url = 'https://tally.so/r/preview',
      children,
      ...rest
    } = props

    return (
      <div
        ref={ref}
        className={cn(previewWindowVariants({ device }), className)}
        {...rest}
      >
        {/* Browser Chrome Header */}
        <div className="flex items-center gap-m p-s bg-surface-sunken border-b border-border-default">
          <div className="flex items-center gap-xs px-s">
            <div className="w-3 h-3 rounded-pill bg-status-danger/80"></div>
            <div className="w-3 h-3 rounded-pill bg-status-warning/80"></div>
            <div className="w-3 h-3 rounded-pill bg-status-success/80"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-s bg-surface-base px-m py-xs rounded-base border border-border-default w-full max-w-md text-caption text-fg-secondary truncate">
              <span className="opacity-50">🔒</span>
              {url}
            </div>
          </div>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>

        {/* Preview Content Area */}
        <div className="flex-1 overflow-y-auto bg-surface-overlay">
          {children}
        </div>
      </div>
    )
  }
)

PreviewWindow.displayName = 'PreviewWindow'
