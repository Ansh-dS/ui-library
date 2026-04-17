import { cva, type VariantProps } from 'class-variance-authority'

export const pulsarVariants = cva(
  'flex items-center gap-s px-m py-xs bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-pill',
  {
    variants: {
      state: {
        active: '',
        paused: 'opacity-70',
      },
    },
    defaultVariants: {
      state: 'active',
    },
  }
)

export type RecordingPulsarVariantsType = VariantProps<typeof pulsarVariants>
