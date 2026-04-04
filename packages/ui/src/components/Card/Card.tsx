/*
1. Use: contains boundaries/borders along with shadow
2. so if want a content to display above the other content, catch eye attention then go for it.
*/
import React, { forwardRef, createContext, useContext } from 'react'
import { cardVariants, CardVariantsType } from './styles.js'
import { cn } from '../../common.js'
import { Text } from '../Text/Text.js' // Assuming your Text component is here

// To sync padding across sub-components
const CardContext = createContext<{
  size?: 'none' | 'sm' | 'md' | 'lg' | null
}>({ size: 'md' })

const getSharedPadding = (
  padding: 'none' | 'sm' | 'md' | 'lg' | undefined | null
) => {
  const s = padding ?? 'md'
  switch (s) {
    case 'sm':
      return 'px-m py-s gap-xs' // 12px horizontal / 8px vertical (Dense)

    case 'md':
      return 'px-xl py-l gap-s' // 24px horizontal / 16px vertical (The Tally Sweet-spot)

    case 'lg':
      return 'px-3xl py-2xl gap-m' // 64px horizontal / 32px vertical (The "Stripe" Premium look)

    case 'none':
      return 'p-0'

    default:
      return 'px-xl py-l gap-s' // Defaulting to 'md'
  }
}

// No props we need to define for Card.
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>, CardVariantsType {
  size?: 'none' | 'sm' | 'md' | 'lg' | null
}

/*
 * Main Card Wrapper
 * why we use forwardRef?
 * So the parent can measure the card's height/width for animations or
 * intersection observers (useful for 'Riverside' scroll-fade effects).
 */
export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    variant,
    elevation,
    size = 'md',
    className,
    children,
    ...rest
  } = props

  return (
    <CardContext.Provider value={{ size }}>
      <div
        ref={ref}
        // overflow-hidden handles the rounded corner masking
        className={cn(
          cardVariants({ variant, elevation }),
          getSharedPadding('none'),
          'overflow-hidden flex flex-col',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    </CardContext.Provider>
  )
})
Card.displayName = 'Card'

/* =================================================================
     SUB-COMPONENTS: Ensuring Structural Integrity
     ================================================================= */

/* CardHeader: For titles and descriptions.
 * Adds a bottom border in the 'default' variant to create hierarchy.
 */
export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { size } = useContext(CardContext)

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col border-b border-border-default bg-surface-sunken/5',
        getSharedPadding(size),
        className
      )}
      {...props}
    />
  )
})
CardHeader.displayName = 'CardHeader'

/**
 * CardTitle: Uses the Foundation Text component.
 * Scales variant from 'label' to 'subheader' based on card size.
 */
export const CardTitle = forwardRef<
  HTMLHeadingElement,
 Omit< React.HTMLAttributes<HTMLHeadingElement>, 'color'>
>(({ className, ...props }, ref) => {
  const { size } = useContext(CardContext)

  const titleVariant =
    size === 'lg' ? 'subheader' : size === 'sm' ? 'label' : 'body'

  return (
    <Text
      as="h3"
      ref={ref as React.Ref<HTMLElement>}
      variant={titleVariant}
      weight="bold"
      className={cn('leading-heading', className)}
      {...props}
    />
  )
})
CardTitle.displayName = 'CardTitle'

/**
 * CardDescription: Uses the Foundation Text component.
 * Forces 'secondary' color for clear visual hierarchy.
 */
export const CardDescription = forwardRef<
  HTMLParagraphElement,
   Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>
>(({ className, ...props }, ref) => {
  const { size } = useContext(CardContext)

  const descVariant = size === 'lg' ? 'body' : 'caption'

  return (
    <Text
      ref={ref as React.Ref<HTMLElement>}
      variant={descVariant}
      color="primary"
      className={className}
      {...props}
    />
  )
})
CardDescription.displayName = 'CardDescription'

/* CardContent: The main body of the card.
 * Uses 'flex-1' so it expands to fill the space if the card has a fixed height.
 */
export const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => {
  const { size } = useContext(CardContext)

  return (
    <div
      ref={ref}
      className={cn('flex-1 flex flex-col', getSharedPadding(size), className)}
      {...rest}
    />
  )
})
CardContent.displayName = 'CardContent'

/**
 * CardLabel: Perfect for form fields inside CardContent.
 */
export const CardLabel = forwardRef<
  HTMLParagraphElement,
  Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>
>(({ className, ...props }, ref) => {
  const { size } = useContext(CardContext)

  const labelVariant = size === 'lg' ? 'body' : 'label'

  return (
    <Text
      ref={ref as React.Ref<HTMLElement>}
      variant={labelVariant}
      weight="semibold"
      className={className}
      {...props}
    />
  )
})
CardLabel.displayName = 'CardLabel'

/* CardFooter: For buttons and actions.
 * Puts items at the bottom and often uses 'justify-end'.
 */
export const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => {
  const { size } = useContext(CardContext)

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-end border-t border-border-default bg-surface-sunken/5',
        getSharedPadding(size),
        className
      )}
      {...rest}
    />
  )
})
CardFooter.displayName = 'CardFooter'
