import React from 'react'
import { labelVariants, LabelVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>, LabelVariantsType {
  required?: boolean
}

export function Label(props: LabelProps): React.ReactElement {
  const { className, children, required, ...rest } = props
  return (
    <label className={cn(labelVariants(), className)} {...rest}>
      {children}
      {required && <span className="text-status-danger ml-xs">*</span>}
    </label>
  )
}
