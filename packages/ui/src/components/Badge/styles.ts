import { cva, type VariantProps } from 'class-variance-authority'
export const badgeVariants = cva(
  [
    'inline-flex items-center justify-center',
    'font-weight-medium',
    'rounded-pill',
    'border border-transparent',
  ],
  {
    variants: {
      size: { sm: 'px-s py-xs text-caption', md: 'px-m py-s text-label' }, // 2:1 Ratio
      color: {
        default: 'bg-surface-sunken text-fg-secondary border-border-default',
        success:
          'bg-status-success/10 text-status-success border-status-success/20',
        warning:
          'bg-status-warning/10 text-status-warning border-status-warning/20',
        error: 'bg-status-danger/10 text-status-danger border-status-danger/20',
      },
    },
    defaultVariants: { size: 'sm', color: 'default' },
  }
)
export type BadgeVariantsType = VariantProps<typeof badgeVariants>
