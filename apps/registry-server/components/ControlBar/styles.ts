import { cva } from 'class-variance-authority'

export const controlBarVariants = cva(
  'fixed bottom-0 left-0 right-0 h-24 bg-neutral-900/90 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-2xl z-[var(--zIndices-nav)]'
)
