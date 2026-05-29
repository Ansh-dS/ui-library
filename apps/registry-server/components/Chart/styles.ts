import { cva, type VariantProps } from 'class-variance-authority'

export const chartContainerVariants = cva(
  'flex flex-col p-l bg-surface-base border border-border-default rounded-large shadow-raised w-full',
  {
    variants: {
      variant: {
        default: '',
        flat: 'shadow-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export type ChartVariantsType = VariantProps<typeof chartContainerVariants>
