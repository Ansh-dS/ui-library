import React, { ButtonHTMLAttributes, useCallback, forwardRef } from 'react' // STAFF FIX: Added forwardRef
import { buttonVariants, ButtonVariantsType } from './styles.js'
import { cn } from '../../common.js'
import { Spinner } from '../Spinner/Spinner.js'
import { Text } from '../Text/Text.js'
import { TextVariantsType } from '../Text/styles.js'

/* Expands collapsed type information when hovering over a component,
   specifically at the point where it is imported. */
type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type ButtonVariantProps = {
  variant?: ButtonVariantsType['variant']
  size?: ButtonVariantsType['size']
  fullWidth?: ButtonVariantsType['fullWidth']
}

/**
 * 1. Extending ButtonHTMLAttributes ensures we get all standard
 * button props like 'onClick', 'disabled', and 'type' for free.
 */
type ButtonCustomProps = {
  children?: React.ReactNode
  startIcon?: React.ReactNode /** Icon to display before the text */
  endIcon?: React.ReactNode /** Icon to display after the text */
  isLoading?: boolean /** Shows a loading state and disables interaction */
  text?: string
  /** if want to overide the color of text inside button. */
  color?: TextVariantsType['color']
  /** Explicit override for the icons and spinner color */
  iconColor?: TextVariantsType['color']
}

type CleanProps = Prettify<
  ButtonCustomProps &
    ButtonVariantProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>
>

export type ButtonProps = CleanProps

// STAFF FIX: The Professional Color Dictionary Pattern
// This ensures Tailwind JIT compiles the classes correctly.
const textColorMap: Record<NonNullable<TextVariantsType['color']>, string> = {
  primary: 'text-fg-primary',
  secondary: 'text-fg-secondary',
  brand: 'text-fg-brand',
  accent: 'text-fg-accent',
  disabled: 'text-fg-disabled',
  inverted: 'text-fg-inverted',
  success: 'text-status-success',
  warning: 'text-status-warning',
  danger: 'text-status-danger',
  info: 'text-status-info',
}

// STAFF FIX: Wrapped in forwardRef to support refs in Sidebar/Popovers/Tooltips
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary', // Fallback to default to ensure our color logic works
      size,
      fullWidth,
      className,
      startIcon,
      endIcon,
      isLoading = false,
      children,
      disabled = false,
      onClick,
      text,
      color: textColorProp,
      iconColor: iconColorProp,
      ...rest
    } = props

    // if loading or disabled enable the don't sumbit the click.
    // if not enabled then pass the event not the function which contians function
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isLoading || disabled) {
          e.preventDefault() // don't submit and refreah the page.
          return
        }
        if (onClick) onClick(e)
      },
      [isLoading, disabled, onClick]
    )

    // Map button size to the correct Text variant from our Foundation
    const textVariant =
      size === 'lg' ? 'body' : size === 'sm' ? 'caption' : 'label'

    // maping button variants with text color.
    // inital value is primay as it also covers outline and ghost variants.
    let textColor: NonNullable<TextVariantsType['color']> =
      (textColorProp as NonNullable<TextVariantsType['color']>) || 'primary'

    // don't check the variant if we have textColor provided by user.
    if (!textColorProp) {
      if (variant === 'primary' || variant === 'destructive') {
        textColor = 'inverted'
      } else if (variant === 'secondary') {
        textColor = 'brand'
      }
    }

    // either explictly provide the icon color or defaults to text color.
    const resolvedIconColor =
      (iconColorProp as NonNullable<TextVariantsType['color']>) || textColor

    return (
      <button
        ref={ref} // 1. ref logic attached
        // 1. styling of button.
        onClick={handleClick}
        // any one must be true to disable button
        disabled={disabled || isLoading}
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          isLoading && 'cursor-wait opacity-90',
          !isLoading && 'active:scale-[0.98]',
          className
        )}
        {...rest}
      >
        {/* 3. the main three elements of button */}
        <div className="flex items-center gap-2 justify-center">
          {/* 2. Loading Spinner Logic: Swaps out the startIcon for the Spinner so text stays visible */}
          {isLoading ? (
            <span className="inline-flex shrink-0">
              {/* Reusing textColor ensures the spinner always matches the text! */}
              <Spinner size={'sm'} color={resolvedIconColor} />
            </span>
          ) : (
            startIcon && (
              /* we shouldn't write the variable values inside className:
                but we should use these kinds of map because:
                these inline values( 'inline-flex shrink-0') comiples while building(pnpm build ) 
            */
              <span
                className={cn(
                  'inline-flex shrink-0',
                  textColorMap[resolvedIconColor]
                )}
              >
                {startIcon}
              </span>
            )
          )}

          {/*
        1. nowrap: don't push the text in the new line.
        */}
          <Text
            as="span"
            variant={textVariant}
            color={textColor}
            weight="medium"
            className="truncate whitespace-nowrap"
          >
            {children || text}
          </Text>

          {!isLoading && endIcon && (
            <span
              className={cn(
                'inline-flex shrink-0',
                textColorMap[resolvedIconColor]
              )}
            >
              {endIcon}
            </span>
          )}
        </div>
      </button>
    )
  }
)

Button.displayName = 'Button'
