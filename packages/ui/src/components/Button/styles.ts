import { cva, type VariantProps } from 'class-variance-authority'
export const buttonVariants = cva(
  [
    'flex justify-center items-center transition-all',
    'font-weight-medium rounded-medium',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'animate-duration-fast',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-action-primary text-fg-inverted hover:bg-action-primary-hover active:bg-action-primary-pressed shadow-raised',
        secondary:
          'bg-action-secondary text-fg-brand border border-transparent hover:bg-action-secondary-hover active:bg-action-secondary-pressed',
        outline:
          'bg-transparent border border-border-default text-fg-primary hover:bg-surface-overlay',
        destructive:
          'bg-status-danger text-fg-inverted hover:opacity-90 active:opacity-100 border-transparent',
      },
      size: {
        sm: 'py-xs px-s text-label gap-xs', // Optical 2:1 Ratio
        md: 'py-s px-m text-body gap-s', // Optical 2:1 Ratio
        lg: 'py-m px-xl text-subheader gap-m',
        icon: 'h-10 w-10 p-s',
      },
      fullWidth: { true: 'w-full' },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)
export type ButtonVariantsType = VariantProps<typeof buttonVariants>
