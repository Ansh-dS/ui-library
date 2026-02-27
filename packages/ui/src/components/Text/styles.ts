import { cva, type VariantProps } from 'class-variance-authority'
export const textVariants = cva(['font-base', 'leading-body'], {
  variants: {
    size: { sm: 'text-caption', md: 'text-body', lg: 'text-subheader' },
    color: {
      default: 'text-fg-primary',
      muted: 'text-fg-secondary',
      brand: 'text-fg-brand',
      inverted: 'text-fg-inverted',
    },
  },
  defaultVariants: { size: 'md', color: 'default' },
})
export type TextVariantsType = VariantProps<typeof textVariants>
