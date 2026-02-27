import { cva, type VariantProps } from 'class-variance-authority'
export const cardVariants = cva(
  [
    'rounded-medium',
    'bg-surface-base',
    'transition-all',
    'animate-duration-normal',
  ],
  {
    variants: {
      variant: {
        elevated: 'border border-transparent',
        outlined: 'border border-border-default shadow-none',
      },
      elevation: {
        none: 'shadow-none',
        sm: 'shadow-raised',
        md: 'shadow-overlay',
        lg: 'shadow-modal',
      },
      padding: { none: 'p-0', sm: 'p-s', md: 'p-m', lg: 'p-xl' },
    },
    defaultVariants: { variant: 'elevated', elevation: 'sm', padding: 'md' },
  }
)
export type CardVariantsType = VariantProps<typeof cardVariants>
