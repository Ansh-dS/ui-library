import React, { forwardRef } from 'react'
import { inspectorVariants, InspectorVariantsType } from './styles.js'
import { cn } from '../../common.js'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type InspectorCustomProps = {
  title?: string
  onClose?: () => void
}

type CleanProps = Prettify<InspectorCustomProps & InspectorVariantsType>

export type InspectorProps = CleanProps & React.HTMLAttributes<HTMLBaseElement>

export const Inspector = forwardRef<HTMLBaseElement, InspectorProps>(
  (props, ref) => {
    const {
      className,
      position,
      title = 'Properties',
      onClose,
      children,
      ...rest
    } = props

    return (
      <aside
        ref={ref}
        className={cn(inspectorVariants({ position }), className)}
        {...rest}
      >
        <div className="flex items-center justify-between p-m border-b border-border-default">
          <h3 className="text-body font-weight-semibold text-fg-primary">
            {title}
          </h3>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="text-fg-secondary hover:text-fg-primary w-8 h-8 flex items-center justify-center rounded-sm hover:bg-surface-sunken cursor-pointer transition-colors"
            ></button>
          )}
        </div>
        <div className="flex-1 overflow-y-auto p-m flex flex-col gap-m">
          {children}
        </div>
      </aside>
    )
  }
)

Inspector.displayName = 'Inspector'

// Helper for Inspector Fields
export const InspectorField = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => (
  <div className="flex flex-col gap-xs">
    <label className="text-label font-weight-medium text-fg-secondary">
      {label}
    </label>
    {children}
  </div>
)
