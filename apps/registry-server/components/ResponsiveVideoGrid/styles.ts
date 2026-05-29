import { cva, type VariantProps } from 'class-variance-authority'

export const videoGridVariants = cva(
  'grid gap-m w-full h-full p-m transition-all duration-500 bg-neutral-900',
  {
    variants: {
      participantCount: {
        1: 'grid-cols-1 grid-rows-1',
        2: 'grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1',
        3: 'grid-cols-2 grid-rows-2 [&>div:last-child]:col-span-2',
        4: 'grid-cols-2 grid-rows-2',
        default: 'grid-cols-2 md:grid-cols-3',
      },
    },
    defaultVariants: {
      participantCount: 1,
    },
  }
)

export type VideoGridVariantsType = VariantProps<typeof videoGridVariants>
