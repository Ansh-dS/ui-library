import { stackVariants, StackVariantsType } from './styles.js'
import { cn } from '../../common.js'

// extending the  types of stackProps.
export interface StackProps extends StackVariantsType {
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}

export function Stack({
  children,
  as: Component = 'div',
  direction,
  gap,
  align,
  justify,
  className,
}: StackProps): React.ReactElement {
  return (
    <Component
      className={cn(
        stackVariants({ direction, gap, align, justify }),
        className
      )}
    >
      {children}
    </Component>
  )
}
