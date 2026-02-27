import { cva, type VariantProps } from 'class-variance-authority'
export const tooltipVariants = cva(
  [
    'absolute',
    'z-50',
    'px-s',
    'py-xs',
    'text-caption',
    'font-weight-medium',
    'rounded-small',
    'bg-fg-primary',
    'text-fg-inverted',
    'whitespace-nowrap',
    'animate-duration-fast',
  ],
  {
    variants: {
      position: {
        top: 'bottom-full mb-s',
        bottom: 'top-full mt-s',
        left: 'right-full mr-s',
        right: 'left-full ml-s',
      },
    },
    defaultVariants: { position: 'top' },
  }
)
export type TooltipVariantsType = VariantProps<typeof tooltipVariants>
