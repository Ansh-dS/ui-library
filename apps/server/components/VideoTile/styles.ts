import { cva, type VariantProps } from 'class-variance-authority'

export const videoTileVariants = cva(
  'relative overflow-hidden bg-neutral-900 rounded-large border border-border-default flex items-center justify-center transition-all',
  {
    variants: {
      mirrored: {
        true: '-scale-x-100', // CSS transform to mirror local video
        false: '',
      },
      fit: {
        cover: 'object-cover',
        contain: 'object-contain',
      },
    },
    defaultVariants: {
      mirrored: false,
      fit: 'cover',
    },
  }
)

export type VideoTileVariantsType = VariantProps<typeof videoTileVariants>
