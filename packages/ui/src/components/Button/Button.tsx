import React, { useEffect } from 'react'
import { buttonVariants, ButtonVariantsType } from './styles.js'
import { cn } from '../../common.js'

// extending the  types of buttonProps.
export interface ButtonProps extends ButtonVariantsType {
  /*
  don't need to write the below things as we have extended the ButtonProps 
  variant: 'primary' | 'secondary' | 'outline'
  size: 'sm' | 'md' | 'lg'
  */
  className?: string
  text: string
  ariaLabel: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactElement
  isLoading: boolean
}

// learn how to use the above props inside this function.
export function Button(buttonInputs: ButtonProps): React.ReactElement {
  const { variant, size, className, text } = buttonInputs
  console.log(cn(buttonVariants({ variant, size }), className))
  return (
    <button className={cn(buttonVariants({ variant, size }), className)}>
      {text}
    </button>
  )
}
