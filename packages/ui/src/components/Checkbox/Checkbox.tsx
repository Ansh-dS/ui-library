import React from 'react'
import { checkboxVariants, CheckboxVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface CheckboxProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'color'>,
    CheckboxVariantsType {
  label?: string
}

export function Checkbox(props: CheckboxProps): React.ReactElement {
  const { color, className, label, ...rest } = props
  return (
    <label className="flex items-center gap-s cursor-pointer">
      <input
        type="checkbox"
        className={cn(checkboxVariants({ color }), className)}
        {...rest}
      />
      {label && <span className="text-body text-fg-primary">{label}</span>}
    </label>
  )
}
