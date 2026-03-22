import { cva, type VariantProps } from 'class-variance-authority'

export const socialButtonVariants = cva(
  'inline-flex items-center justify-center gap-m rounded-medium px-l py-m text-body font-weight-medium transition-colors border outline-none cursor-pointer w-full focus-visible:ring-2 focus-visible:ring-border-focused',
  {
    variants: {
      provider: {
        google:
          'bg-surface-base text-fg-primary border-border-default hover:bg-surface-sunken',
        github:
          'bg-neutral-900 text-fg-inverted border-transparent hover:bg-neutral-700',
        apple:
          'bg-fg-primary text-fg-inverted border-transparent hover:bg-neutral-700',
        generic:
          'bg-surface-base text-fg-primary border-border-default hover:border-border-focused',
      },
    },
    defaultVariants: {
      provider: 'generic',
    },
  }
)

export type SocialButtonVariantsType = VariantProps<typeof socialButtonVariants>
