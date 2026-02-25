import { cva, type VariantProps } from 'class-variance-authority'

export const headingVariants = cva('font-bold leading-heading tracking-tight', {
  variants: {
    color: {
      // Using your semantic text tokens from global.css
      default: 'text-fg-primary',
      muted: 'text-fg-secondary',
      brand: 'text-fg-brand',
    },
    size: {
      // Mapping to your --text-* utilities
      sm: 'text-h3', // XL
      md: 'text-h2', // 2XL
      lg: 'text-h1', // 4XL
      xl: 'text-display', // 5XL
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
})

export type HeadingVariantsTypes = VariantProps<typeof headingVariants>
