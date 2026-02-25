import { cva, VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  // Base styles common to all variants
  // applied all the common styles accross different variants here.
  [
    'flex justify-center items-center',
    'font-medium',
    'rounded-medium',
    'transition-all animate-duration-fast',
    'font-base', //  Matches --font-base
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'border-primary', //  Common border width (1px) to prevent layout shifts
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
          'text-fg-inverted', //  White text (from --color-fg-inverted)
          'border-transparent', // Maintains size consistency with Outline
        ],
        secondary: [
          'bg-action-secondary',
          'hover:bg-action-secondary-hover',
          'active:bg-action-secondary-pressed',
          'text-fg-brand', //  Brand color text (from --color-fg-brand)
          'border-transparent', //  Maintains size consistency with Outline
        ],
        outline: [
          'bg-transparent',
          'border-border-default', //  Uses your Stone-200 border
          'hover:bg-surface-overlay',
          'text-fg-primary', //  Outline usually pairs better with Primary text (Dark Grey)
        ],
        destructive: [
          // Uses your new 'status-danger' tokens
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
          'text-label', //  Matches --text-label
          'gap-xs',
        ],
        md: [
          'py-s px-l',
          'text-body', //  Matches --text-body
          'gap-s',
        ],
        lg: [
          'py-m px-xl',
          'text-subheader', //  Matches --text-subheader
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
