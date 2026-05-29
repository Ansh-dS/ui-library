import { cva, type VariantProps } from 'class-variance-authority'

export const visualizerVariants = cva(
  'block w-full h-16 bg-surface-sunken rounded-base border border-border-default',
  {
    variants: {
      state: {
        active: 'opacity-100',
        inactive: 'opacity-50 grayscale',
      },
    },
    defaultVariants: {
      state: 'active',
    },
  }
)

export type AudioVisualizerVariantsType = VariantProps<
  typeof visualizerVariants
>
