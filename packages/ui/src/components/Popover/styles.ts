import { cva, type VariantProps } from 'class-variance-authority'

export const popoverVariants = cva(
  [
    'absolute',
    'bg-surface-base',
    'border',
    'border-border-default',
    'rounded-medium',
    'shadow-overlay',
    'z-popover',
    'p-m',
    'min-w-50', //  minimum width
    'transition-all', //  Added transition property: if don't then can't
    'animate-duration-fast',
  ],
  {
    variants: {
      align: {
        start: 'left-0',
        center: 'left-1/2 -translate-x-1/2', // left-1/2: helps ot move pop-up from the left to 50%(1/2) of it's parent width.
        // now the edge starts from the middle.
        // -translate-x-1/2: to move the right edge 50% of it's own width.
        end: 'right-0',
      },
    },
    defaultVariants: { align: 'start' },
  }
)
export type PopoverVariantsType = VariantProps<typeof popoverVariants>
