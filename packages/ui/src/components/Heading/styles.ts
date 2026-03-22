import { cva, type VariantProps } from 'class-variance-authority'
export const headingVariants = cva(
  ['font-weight-bold', 'leading-heading', 'tracking-tight', 'font-base'],
  {
    variants: {
      color: {
        default: 'text-fg-primary',
        muted: 'text-fg-secondary',
        brand: 'text-fg-brand',
      },
      size: {
        sm: 'text-h3',
        md: 'text-h2',
        lg: 'text-h1',
        xl: 'text-display',
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'md',
    },
  }
)
export type HeadingVariantsTypes = VariantProps<typeof headingVariants>
