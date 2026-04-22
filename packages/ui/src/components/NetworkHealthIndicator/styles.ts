import { cva, type VariantProps } from 'class-variance-authority'

export const networkHealthVariants = cva('flex items-end gap-[2px] h-4 w-6', {
  variants: {
    quality: {
      excellent: '[&>div]:bg-status-success',
      good: '[&>div]:bg-status-success opacity-80',
      fair: '[&>div:nth-child(n+3)]:bg-surface-overlay [&>div:nth-child(-n+2)]:bg-status-warning',
      poor: '[&>div:nth-child(n+2)]:bg-surface-overlay [&>div:nth-child(1)]:bg-status-danger',
      none: '[&>div]:bg-surface-overlay',
    },
  },
  defaultVariants: {
    quality: 'none',
  },
})

export type NetworkHealthVariantsType = VariantProps<
  typeof networkHealthVariants
>
