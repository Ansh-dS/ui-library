import { cva } from 'class-variance-authority'

export const toastVariants = cva(
  'flex items-center gap-m p-l bg-surface-overlay backdrop-blur-md border border-white/10 rounded-medium shadow-popout animate-duration-fast text-body text-fg-inverted',
  {
    variants: {
      type: {
        info: 'border-status-info/50',
        success: 'border-status-success/50',
        warning: 'border-status-warning/50',
        error: 'border-status-danger/50',
      },
    },
  }
)
