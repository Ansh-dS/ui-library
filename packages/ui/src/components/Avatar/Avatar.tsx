import React from 'react'
import { avatarVariants, AvatarVariantsType } from './styles.js'
import { cn } from '../../common.js'
export interface AvatarProps
  extends
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'size'>,
    AvatarVariantsType {
  fallback?: React.ReactNode
}
export function Avatar(props: AvatarProps): React.ReactElement {
  const { size, src, alt, className, fallback, ...rest } = props
  return (
    <div className={cn(avatarVariants({ size }), className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          {...rest}
        />
      ) : (
        <span className="text-fg-secondary">{fallback}</span>
      )}
    </div>
  )
}
