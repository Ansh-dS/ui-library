import React, { forwardRef } from 'react'
import { socialButtonVariants, SocialButtonVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface SocialButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'>,
    SocialButtonVariantsType {
  icon?: React.ReactNode
  label: string
}

export const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(
  (props, ref) => {
    const { className, provider, icon, label, ...rest } = props

    return (
      <button
        ref={ref}
        type="button"
        className={cn(socialButtonVariants({ provider }), className)}
        {...rest}
      >
        {icon && (
          <span className="flex-shrink-0 flex items-center">{icon}</span>
        )}
        <span>{label}</span>
      </button>
    )
  }
)

SocialButton.displayName = 'SocialButton'
