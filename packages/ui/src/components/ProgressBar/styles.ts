import { cva, type VariantProps } from 'class-variance-authority'

export const progressBarVariants = cva(
  'w-full bg-surface-sunken rounded-pill overflow-hidden',
  {
    variants: {
      size: {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export const progressIndicatorVariants = cva(
  'h-full transition-all duration-300 ease-in-out',
  {
    variants: {
      color: {
        primary: 'bg-action-primary',
        success: 'bg-status-success',
        warning: 'bg-status-warning',
        danger: 'bg-status-danger',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  }
)

export type ProgressBarVariantsType = VariantProps<typeof progressBarVariants>
