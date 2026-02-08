import { cva, VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  // Base styles common to all variants
  // applied all the common styles accross different variants here.
  [
    'flex justify-center items-center',
    'font-medium',
    'rounded-medium',
    'transition-all animate-duration-fast',
    'font-base', // Correct: Matches --font-base
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'border-primary', // ADDED: Common border width (1px) to prevent layout shifts
  ],
  {
    variants: {
      /* 2. INTENT VARIANTS */
      variant: {
        primary: [
          'bg-action-primary',
          'hover:bg-action-primary-hover',
          'hover:shadow-raised',
          'active:bg-action-primary-pressed',
          'text-fg-inverted', // Correct: White text (from --color-fg-inverted)
          'border-transparent', // ADDED: Maintains size consistency with Outline
        ],
        secondary: [
          'bg-action-secondary',
          'hover:bg-action-secondary-hover',
          'active:bg-action-secondary-pressed',
          'text-fg-brand', // Correct: Brand color text (from --color-fg-brand)
          'border-transparent', // ADDED: Maintains size consistency with Outline
        ],
        outline: [
          'bg-transparent',
          'border-border-default', // Correct: Uses your Stone-200 border
          'hover:bg-surface-overlay',
          'text-fg-primary', // UPDATED: Outline usually pairs better with Primary text (Dark Grey)
        ],
        destructive: [
          // NEW: Uses your new 'status-danger' tokens
          'bg-status-danger',
          'hover:bg-red-600', // Fallback or define a 'status-danger-hover' token later
          'text-fg-inverted',
          'border-transparent',
        ],
      },

      /* 3. SIZE VARIANTS */
      size: {
        sm: [
          'py-xs px-s',
          'text-label', // Correct: Matches --text-label
          'gap-xs',
        ],
        md: [
          'py-s px-l',
          'text-body', // Correct: Matches --text-body
          'gap-s',
        ],
        lg: [
          'py-m px-xl',
          'text-subheader', // Correct: Matches --text-subheader
          'gap-m',
        ],
        icon: [
          'h-10 w-10', // Uses default Tailwind spacing (2.5rem)
          'p-s',
        ],
      },

      // Full width support
      fullWidth: {
        true: 'w-full',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export type ButtonVariantsType = VariantProps<typeof buttonVariants>
