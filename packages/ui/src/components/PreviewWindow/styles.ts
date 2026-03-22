import { cva, type VariantProps } from 'class-variance-authority'

export const previewWindowVariants = cva(
  'flex flex-col bg-surface-base border border-border-default rounded-large overflow-hidden shadow-popout transition-all duration-300 mx-auto',
  {
    variants: {
      device: {
        desktop: 'w-full max-w-4xl min-h-[600px]',
        mobile: 'w-[375px] h-[812px]',
      },
    },
    defaultVariants: {
      device: 'desktop',
    },
  }
)

export type PreviewWindowVariantsType = VariantProps<
  typeof previewWindowVariants
>
