import React, { ButtonHTMLAttributes, useCallback } from 'react'
import { buttonVariants, ButtonVariantsType } from './styles.js'
import { cn } from '../../common.js'
import { Spinner } from '../Spinner/Spinner.js'
import { Text } from '../Text/Text.js'
import { TextVariantsType } from '../Text/styles.js'

/**
 * 1. Extending ButtonHTMLAttributes ensures we get all standard
 * button props like 'onClick', 'disabled', and 'type' for free.
 */
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, ButtonVariantsType {
  children?: React.ReactNode
  startIcon?: React.ReactNode /** Icon to display before the text */
  endIcon?: React.ReactNode /** Icon to display after the text */
  isLoading?: boolean /** Shows a loading state and disables interaction */
  text?: string
  color?: TextVariantsType['color']    // if want to overide the color of text inside button. 
}

export function Button(props: ButtonProps): React.ReactElement {
  const {
    variant = 'primary', // Fallback to default to ensure our color logic works
    size,
    className,
    startIcon,
    endIcon,
    isLoading = false,
    children,
    disabled = false,
    onClick,
    text,
    color: textColorProp,
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
  let textColor: TextVariantsType['color'] = textColorProp || 'primary'
  // don't check the variant if we have textColor provided by user.
  if (!textColorProp) {
    if (variant === 'primary' || variant === 'destructive') {
      textColor = 'inverted'
    } else if (variant === 'secondary') {
      textColor = 'brand'
    }
  }

  return (
    <button
      // 1. styling of button.
      onClick={handleClick}
      // any one must be true to disable button
      disabled={disabled || isLoading}
      className={cn(
        buttonVariants({ variant, size }),
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
            <Spinner size={'sm'} color={textColor} />
          </span>
        ) : (
          startIcon && <span className="inline-flex shrink-0">{startIcon}</span>
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
          <span className="inline-flex shrink-0">{endIcon}</span>
        )}
      </div>
    </button>
  )
}