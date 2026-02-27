import { cva, type VariantProps } from 'class-variance-authority'
export const popoverVariants = cva(
  [
    'absolute',
    'bg-surface-base',
    'border',
    'border-border-default',
    'rounded-medium',
    'shadow-overlay',
    'z-50',
    'p-m',
    'min-w-[200px]',
    'animate-duration-fast',
  ],
  {
    variants: {
      align: {
        start: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        end: 'right-0',
      },
    },
    defaultVariants: { align: 'start' },
  }
)
export type PopoverVariantsType = VariantProps<typeof popoverVariants>
