import { cva, type VariantProps } from 'class-variance-authority'
export const modalVariants = cva(
  ['fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'z-50', 'p-m'],
  {
    variants: { size: { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg' } },
    defaultVariants: { size: 'md' },
  }
)
export type ModalVariantsType = VariantProps<typeof modalVariants>
