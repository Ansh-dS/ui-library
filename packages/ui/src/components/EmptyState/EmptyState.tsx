import React, { cloneElement, forwardRef, isValidElement } from 'react'
import { emptyStateVariants, EmptyStateVariantsType } from './styles.js'
import { cn } from '../../common.js'
import { Text } from '@components'

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement>, EmptyStateVariantsType {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (props, ref) => {
    const { 
      className, 
      variant, 
      spacing = 'default', 
      fullWidth, 
      icon, 
      title, 
      description, 
      action, 
      ...rest 
    } = props

    //  Using your EXACT mapped tokens from global.css
    const sizeMap = {
      compact: { 
        title: 'label', 
        body: 'caption', 
        iconText: 'text-subheader', // Uses your layer 2 typography token
        iconBg: 'p-s',              // Padding instead of fixed width
        btn: 'sm' 
      },
      default: { 
        title: 'h3', 
        body: 'body', 
        iconText: 'text-h2', 
        iconBg: 'p-m', 
        btn: 'md' 
      },
      spacious: { 
        title: 'h2', 
        body: 'subheader', 
        iconText: 'text-display', 
        iconBg: 'p-l', 
        btn: 'lg' 
      },
    }[spacing as NonNullable<typeof spacing>]

    return (
      <div
        ref={ref}
        className={cn(emptyStateVariants({ variant, spacing, fullWidth }), className)}
        {...rest}
      >
        {/* LAW 1 & 4 APPLIED: The Anchor scales perfectly using padding */}
        {icon && (
          <div className={cn(
            'bg-surface-sunken rounded-full flex items-center justify-center shrink-0 aspect-square ',
            sizeMap.iconBg,   // Drives the outer breathing room
            sizeMap.iconText  // Drives the inner icon size
          )}>
            {icon}
          </div>
        )}

        {/* LAW 2 & 3 APPLIED: Proximity grouping with a constrained 'Measure' */}
        <div className="flex flex-col gap-xs max-w-md items-center">
          <Text
            variant={sizeMap.title as any}
            color="primary"
            className="font-semibold leading-heading"
          >
            {title}
          </Text>

          {description && (
            <Text
              variant={sizeMap.body as any}
              color="secondary"
              className="leading-body"
            >
              {description}
            </Text>
          )}
        </div>

        {/* LAW 4 APPLIED: Proportional action scaling */}
        {action && (
          <div className="mt-s">
             {isValidElement(action) 
               ? cloneElement(action as React.ReactElement<any>, { size: sizeMap.btn }) 
               : action}
          </div>
        )}
      </div>
    )
  }
)

EmptyState.displayName = 'EmptyState'