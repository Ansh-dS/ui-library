import React, {
  ButtonHTMLAttributes,
  useCallback,
  forwardRef,
  isValidElement,
  cloneElement,
} from 'react' // STAFF FIX: Added forwardRef
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

    // NEW CODE: let size control text scale for larger button variants.
    const resolvedSize = size ?? 'md'

    // NEW CODE: map button size to the correct Text variant from our Foundation.
    const textVariant =
      resolvedSize === 'xl' || resolvedSize === 'lg'
        ? 'body'
        : resolvedSize === 'sm'
          ? 'caption'
          : 'label'

    // NEW: Map button size to numeric icon size for automatic scaling.
    const iconSize =
      resolvedSize === 'xl' || resolvedSize === 'lg'
        ? 20
        : resolvedSize === 'sm'
          ? 14
          : 18

    // NEW: Helper to inject size and classes into icons automatically.
    /*
      1.isValidElement: 
          a. we want to pass props to already built element.
          b. we use clone element which  overides or adds new element.
      2.isValidate: 
          a. does the element user sent is valid or renderable element
    */
    const renderIcon = (icon: React.ReactNode) => {
      if (isValidElement(icon)) {
        return cloneElement(
          icon as React.ReactElement<{
            size: typeof iconSize
            className: string
          }>,
          {
            size: iconSize,
            className: cn((icon.props as { className: string }).className),
          }
        )
      }
      return icon
    }

    // NEW CODE: map spinner size to button size so it doesn't look tiny in huge buttons.
    const spinnerSize =
      resolvedSize === 'xl'
        ? 'lg'
        : resolvedSize === 'lg'
          ? 'md'
          : resolvedSize === 'sm'
            ? 'xs'
            : 'sm'

    // NEW CODE: refined gap classes using half-steps for tighter, professional rhythm.
    const contentGapClass =
      resolvedSize === 'xl'
        ? 'gap-3'
        : resolvedSize === 'lg'
          ? 'gap-2.5'
          : resolvedSize === 'sm'
            ? 'gap-1.5'
            : 'gap-2'

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
          buttonVariants({ variant, size: resolvedSize, fullWidth }),
          isLoading && 'cursor-wait opacity-90',
          !isLoading && 'active:scale-[0.98]',
          className
        )}
        {...rest}
      >
        {/* 3. the main three elements of button   
          New code: removed "gap-2" and added contentGapClass. 
          New: added w-full h-full to ensure inner layout stretches correctly for fullWidth buttons.
        */}
        <div
          className={cn(
            'flex w-full h-full items-center justify-center',
            contentGapClass
          )}
        >
          {/* 2. Loading Spinner Logic: Swaps out the startIcon for the Spinner so text stays visible */}
          {isLoading ? (
            /* New: changed inline-flex to flex items-center justify-center for mathematically perfect centering */
            <span className="flex items-center justify-center shrink-0">
              {/* Reusing textColor ensures the spinner always matches the text! */}
              {/* New: passed dynamic spinnerSize instead of hardcoded 'sm' */}
              <Spinner size={spinnerSize} color={resolvedIconColor} />
            </span>
          ) : (
            startIcon && (
              /* we shouldn't write the variable values inside className:
                but we should use these kinds of map because:
                these inline values( 'inline-flex shrink-0') comiples while building(pnpm build ) 
            */
              <span
                className={cn(
                  /* New: changed inline-flex to flex items-center justify-center for perfect icon vertical alignment */
                  'flex items-center justify-center shrink-0',
                  textColorMap[resolvedIconColor]
                )}
              >
                {/* New: Wrapped icon in renderIcon for auto-sizing */}
                {renderIcon(startIcon)}
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
            /* New: removed whitespace-nowrap here since the buttonVariants parent already handles it, but kept truncate */
            className="truncate"
          >
            {children || text}
          </Text>

          {!isLoading && endIcon && (
            <span
              className={cn(
                /* New: changed inline-flex to flex items-center justify-center */
                'flex items-center justify-center shrink-0',
                textColorMap[resolvedIconColor]
              )}
            >
              {/* New: Wrapped icon in renderIcon for auto-sizing */}
              {renderIcon(endIcon)}
            </span>
          )}
        </div>
      </button>
    )
  }
)

Button.displayName = 'Button'
