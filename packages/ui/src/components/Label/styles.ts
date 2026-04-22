import { cva, type VariantProps } from 'class-variance-authority'
export const labelVariants = cva([
  'text-label',
  'font-weight-medium',
  'text-fg-primary',
  'block',
])
export type LabelVariantsType = VariantProps<typeof labelVariants>
