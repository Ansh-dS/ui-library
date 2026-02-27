import React from 'react'
import { cardVariants, CardVariantsType } from './styles.js'
import { cn } from '../../common.js'
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>, CardVariantsType {}
export function Card(props: CardProps): React.ReactElement {
  const { variant, padding, className, children, ...rest } = props
  return (
    <div
      className={cn(cardVariants({ variant, padding }), className)}
      {...rest}
    >
      {children}
    </div>
  )
}
