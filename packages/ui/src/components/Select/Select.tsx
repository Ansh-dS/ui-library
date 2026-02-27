import React from 'react'
import { selectVariants, SelectVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface SelectProps
  extends
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    SelectVariantsType {
  options: { label: string; value: string | number }[]
}

export function Select(props: SelectProps): React.ReactElement {
  const { size, className, options, ...rest } = props
  return (
    <select className={cn(selectVariants({ size }), className)} {...rest}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
