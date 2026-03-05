import React from 'react'
import { radioVariants, RadioVariantsType } from './styles.js'
import { cn } from '../../common.js'
export interface RadioProps
  extends
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'type' | 'color'
    >,
    RadioVariantsType {
  label?: string
}
export function Radio(props: RadioProps): React.ReactElement {
  const { color, className, label, size, ...rest } = props
  return (
    <label className="flex items-center gap-s cursor-pointer">
      <input
        type="radio"
        className={cn(radioVariants({ color }), className)}
        {...rest}
      />
      {label && <span className="text-body text-fg-primary">{label}</span>}
    </label>
  )
}
