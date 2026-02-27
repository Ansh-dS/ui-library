import { cva, type VariantProps } from 'class-variance-authority'
export const avatarVariants = cva(
  [
    'rounded-pill',
    'overflow-hidden',
    'bg-surface-sunken',
    'flex',
    'items-center',
    'justify-center',
    'text-fg-secondary',
  ],
  {
    variants: { size: { sm: 'w-8 h-8', md: 'w-12 h-12', lg: 'w-16 h-16' } },
    defaultVariants: { size: 'md' },
  }
)
export type AvatarVariantsType = VariantProps<typeof avatarVariants>
