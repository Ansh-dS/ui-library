import { cva, type VariantProps } from 'class-variance-authority'

export const sortableZoneVariants = cva(
  'relative flex flex-col gap-m p-l rounded-large border-2 transition-colors min-h-[200px]',
  {
    variants: {
      isDraggingOver: {
        true: 'border-action-primary bg-action-primary/5',
        false: 'border-border-default border-dashed bg-transparent',
      },
    },
    defaultVariants: {
      isDraggingOver: false,
    },
  }
)

export type SortableVariantsType = VariantProps<typeof sortableZoneVariants>
