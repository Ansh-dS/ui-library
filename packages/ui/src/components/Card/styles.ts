import { cva, type VariantProps } from 'class-variance-authority'

// when we can able to create more space:
// by increasing padding b/w boders and internal element.
// if you want more height in x axix then you need more ratio of x over y in padding and vice a versa.
export const cardVariants = cva(
  // Base classes: Added 'transition-shadow' instead of 'all' for better performance
  'rounded-medium bg-surface-base transition-shadow duration-normal',
  {
    variants: {
      variant: {
        elevated: 'border border-transparent' /* The Tally Dashboard look */,
        outlined:
          'border border-border-default' /*  The Riverside Settings look */,
      },
      elevation: {
        none: 'shadow-none',
        sm: 'shadow-raised',
        md: 'shadow-overlay',
        lg: 'shadow-modal',
      },
      /* GEOMETRIC PADDING SCALE (1:2:4 Ratio)
         sm: p-s (8px)   -> 1x (Base)
         md: p-l (16px)  -> 2x (Standard)
         lg: p-2xl (32px)-> 4x (Premium/Hero)
      */
    },
    /* Default:
       An 'elevated' card with an 'sm' shadow and 'md' padding is the 
       industry standard for a "Dashboard Card."
    */
    defaultVariants: {
      variant: 'elevated',
      elevation: 'sm',
    },
  }
)

export type CardVariantsType = VariantProps<typeof cardVariants>
