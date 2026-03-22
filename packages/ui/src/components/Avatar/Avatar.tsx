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
    <span className={cn(avatarVariants({ size }), className)}>
      {src ? (
        /*object-cover: resize an element's content to cover its container*/
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          {...rest}
        />
      ) : (
        <span className="font-medium uppercase tracking-tighter select-none">
          {fallback}
        </span>
      )}
    </span>
  )
}
