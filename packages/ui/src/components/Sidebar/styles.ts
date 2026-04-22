import { cva, type VariantProps } from 'class-variance-authority'

/**
 * THE 3 LAWS OF SIDEBAR VARIANTS:
 * 1. Law 1 (Surface Adaptability): Controls the material physics (Solid vs. Glass).
 * 2. Law 2 (The Inset Shift): Controls edge-to-edge docking vs. floating app layouts.
 * 3. Law 3 (Overlay Physics): Controls z-index and shadowing for mobile/drawer states.
 */

export const sidebarVariants = cva(
  [
    // Base scaffolding: Flex column, full height, smooth width transitions.
    'flex flex-col h-full transition-all duration-normal z-40',
  ],
  {
    variants: {
      /* LAW 1 APPLIED: Surface Adaptability */
      variant: {
        // The standard edge-to-edge app layout.
        default: 'bg-surface-base border-r border-border-default',

        // Slightly darker to push focus to the main content (Great for LegalSahyak).
        sunken: 'bg-surface-sunken border-r border-border-default',

        // LAW 2 APPLIED: The Inset Shift. Detaches from the edge with margins and rounded corners.
        inset:
          'bg-surface-base border border-border-default rounded-large m-s h-[calc(100%-var(--spacing-m))]',

        // Riverside's 15/12/20 Glass Rule for media environments.
        glass:
          'bg-surface-base/15 backdrop-blur-md border-r border-border-default/20',
      },

      /* The Mechanical Width State */
      collapsed: {
        true: 'w-16 items-center', // 64px width. Items center aligns icons.
        false: 'w-64', // 256px width. Industry standard for readability.
      },

      /* LAW 3 APPLIED: Overlay Physics */
      layout: {
        // Pinned strictly to the grid (Desktop default)
        docked: 'sticky top-0',
        // Breaks out of the grid with a heavy shadow (Mobile/Tablet drawer)
        overlay: 'fixed inset-y-0 left-0 shadow-overlay',
      },
    },
    defaultVariants: {
      variant: 'default',
      collapsed: false,
      layout: 'docked',
    },
  }
)

export type SidebarVariantsType = VariantProps<typeof sidebarVariants>
