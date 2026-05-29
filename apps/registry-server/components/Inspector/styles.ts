import { cva, type VariantProps } from 'class-variance-authority'

export const inspectorVariants = cva(
  'flex flex-col h-full bg-surface-base border-l border-border-default w-80 shrink-0 shadow-popout md:shadow-none transition-transform duration-300',
  {
    variants: {
      position: {
        fixed: 'fixed right-0 top-0 z-[var(--zIndices-nav)]',
        relative: 'relative',
      },
    },
    defaultVariants: {
      position: 'relative',
    },
  }
)

export type InspectorVariantsType = VariantProps<typeof inspectorVariants>
