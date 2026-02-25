import { cva, VariantProps } from 'class-variance-authority'

export const stackVariants = cva('flex', {
  variants: {
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    gap: {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
  },
  defaultVariants: {
    direction: 'vertical',
    gap: 'md',
    align: 'start',
    justify: 'start',
  },
})

export type StackVariantsType = VariantProps<typeof stackVariants>
