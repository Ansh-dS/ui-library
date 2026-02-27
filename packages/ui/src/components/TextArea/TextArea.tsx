import React from 'react'
import { textareaVariants, TextAreaVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface TextAreaProps
  extends
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    TextAreaVariantsType {
  error?: string | boolean
}

export function TextArea(props: TextAreaProps): React.ReactElement {
  const { variant, size, className, error, ...rest } = props
  return (
    <textarea
      className={cn(
        textareaVariants({ variant, size }),
        error && 'border-status-danger',
        className
      )}
      {...rest}
    />
  )
}
