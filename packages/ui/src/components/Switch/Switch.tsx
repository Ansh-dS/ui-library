import React from 'react'
import { switchVariants, SwitchVariantsType } from './styles.js'
import { cn } from '../../common.js'
export interface SwitchProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'color'>,
    SwitchVariantsType {
  checked?: boolean
  label?: string
}
export function Switch(props: SwitchProps): React.ReactElement {
  const { size, className, checked, label, ...rest } = props
  return (
    <label className="flex items-center gap-m cursor-pointer">
      <button
        role="switch"
        aria-checked={checked}
        className={cn(
          switchVariants({ size }),
          checked ? 'bg-action-primary' : 'bg-surface-sunken',
          className
        )}
        {...rest}
      >
        <span
          className={cn(
            'bg-white rounded-full transition-transform',
            size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4',
            checked ? 'translate-x-full' : 'translate-x-0'
          )}
        />
      </button>
      {label && <span className="text-body text-fg-primary">{label}</span>}
    </label>
  )
}
