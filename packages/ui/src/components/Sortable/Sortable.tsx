import React, { forwardRef } from 'react'
import { sortableZoneVariants, SortableVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface SortableProps
  extends React.HTMLAttributes<HTMLDivElement>, SortableVariantsType {
  placeholder?: string
}

export const Sortable = forwardRef<HTMLDivElement, SortableProps>(
  (props, ref) => {
    const {
      className,
      isDraggingOver,
      placeholder = 'Drag and drop blocks here',
      children,
      ...rest
    } = props

    return (
      <div
        ref={ref}
        className={cn(sortableZoneVariants({ isDraggingOver }), className)}
        {...rest}
      >
        {!children && (
          <div className="absolute inset-0 flex items-center justify-center text-body text-fg-secondary font-weight-medium">
            {placeholder}
          </div>
        )}
        {children}
      </div>
    )
  }
)

Sortable.displayName = 'Sortable'

// Individual Draggable Item Wrapper
export const SortableItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...rest }, ref) => (
  <div
    ref={ref}
    className={cn(
      'group relative bg-surface-base border border-border-default p-m rounded-base shadow-raised hover:border-action-primary transition-colors cursor-grab active:cursor-grabbing',
      className
    )}
    {...rest}
  >
    <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-fg-disabled">
      {/* Grip Icon Placeholder */}
      ⋮⋮
    </div>
    <div className="pl-l">{children}</div>
  </div>
))
SortableItem.displayName = 'SortableItem'
