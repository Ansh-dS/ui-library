import { cva, type VariantProps } from 'class-variance-authority'

export const badgeVariants = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-pill border',
    'whitespace-nowrap select-none shrink-0', // Added safety classes so badges don't crush
  ],
  {
    variants: {
      size: {
        sm: 'px-s py-xs',
        md: 'px-m py-s',
      },
      color: {
        // We removed the 'text-*' classes because <Text> handles that now!
        default: 'bg-surface-sunken border-border-default',
        success: 'bg-status-success/10 border-status-success/20',
        warning: 'bg-status-warning/10 border-status-warning/20',
        error: 'bg-status-danger/10 border-status-danger/20',
      },
    },
    defaultVariants: { size: 'sm', color: 'default' },
  }
)
export type BadgeVariantsType = VariantProps<typeof badgeVariants>
