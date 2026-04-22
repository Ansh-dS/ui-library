import { cva, type VariantProps } from 'class-variance-authority'

export const dataListVariants = cva(
  'flex flex-col divide-y divide-border-default border border-border-default rounded-large bg-surface-base overflow-hidden',
  {
    variants: {
      spacing: {
        compact: 'text-sm',
        default: 'text-body',
        relaxed: 'text-lg',
      },
    },
    defaultVariants: {
      spacing: 'default',
    },
  }
)

export type DataListVariantsType = VariantProps<typeof dataListVariants>
