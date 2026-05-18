import { cva, type VariantProps } from 'class-variance-authority'

/**
 * THE 5 LAWS OF SIDEBAR VARIANTS:
 * 1. Law 1 (Surface Adaptability): Controls the material physics (Solid vs. Glass).
 * 2. Law 2 (The Inset Shift): Controls edge-to-edge docking vs. floating app layouts.
 * 3. Law 3 (Overlay Physics): Controls z-index and shadowing for mobile/drawer states.
 * 4. Law 4 (Spatial Awareness): Dynamically adjusts borders and pinning based on Left/Right position.
 * 5. Law 5 (Editor Agility): Introducing 'collapseMode' to switch between a navigation strip and a total hide.
 */

export const sidebarVariants = cva(
  [
    // Base scaffolding: Flex column, full height, smooth width transitions.
    // ADDED: 'min-w-0' to override the browser's default 'min-width: auto'
    // motion-reduce: transition-none: if the user prefers reduced motion, don’t apply any transitions
    'flex flex-col h-full transition-[width] duration-200 ease-out z-nav relative min-w-0 shrink-0 motion-reduce:transition-none',
  ],
  {
    variants: {
      /* LAW 1 APPLIED: Surface Adaptability */
      variant: {
        // We removed the hardcoded borders from here. They are handled in compoundVariants.
        default: 'bg-surface-base',
        sunken: 'bg-surface-sunken',
        glass: 'bg-surface-base/15 backdrop-blur-md',

        // LAW 2 APPLIED: The Inset Shift.
        // Inset gets a full border all the way around, so it doesn't need dynamic side borders.
        inset:
          'bg-surface-base border border-border-default rounded-large m-s h-[calc(100%-var(--spacing-m))]',
      },

      /* The Mechanical Width State */
      collapsed: {
        true: '',
        false: 'w-64', // 256px width. Industry standard for readability.
      },

      /**
       * LAW 5 APPLIED: Editor Agility
       * iconStrip: Shrinks to 64px (Traditional Nav)
       * hide: Shrinks to 0px (Figma/Editor Style)
       */
      collapseMode: {
        iconStrip: '',
        hide: '',
      },

      /* LAW 3 APPLIED: Overlay Physics */
      layout: {
        docked: 'sticky top-0',
        // FIX: Removed 'left-0'. We handle pinning dynamically based on position now.
        overlay: 'fixed inset-y-0 shadow-overlay',
      },
      size: {
        narrow: 'w-64', // 256px
        wide: 'w-80', // 320px
      },
      /* LAW 4 APPLIED: Spatial Awareness */
      position: {
        left: '',
        right: '',
      },
    },
    compoundVariants: [
      // --- DYNAMIC BORDERS ---
      // If it is on the left (and not inset), draw the border on the right.
      {
        variant: ['default', 'sunken', 'glass'],
        position: 'left',
        className: 'border-r border-border-default',
      },
      // If it is on the right (and not inset), draw the border on the left.
      {
        variant: ['default', 'sunken', 'glass'],
        position: 'right',
        className: 'border-l border-border-default',
      },

      // --- OVERLAY PINNING ---
      { layout: 'overlay', position: 'left', className: 'left-0' },
      { layout: 'overlay', position: 'right', className: 'right-0' },

      // --- COLLAPSE MODES ---
      // Navigation Strip (64px)
      {
        collapsed: true,
        collapseMode: 'iconStrip',
        className: 'w-16 items-center',
      },
      // Editor Hide (0px)
      {
        collapsed: true,
        collapseMode: 'hide',
        className: 'w-0 min-w-0 overflow-hidden',
      },
      // Ensure that when collapsed, the size variant is ignored
      { collapsed: false, size: 'narrow', className: 'w-64' },
      { collapsed: false, size: 'wide', className: 'w-80' },
    ],
    defaultVariants: {
      variant: 'default',
      collapsed: false,
      collapseMode: 'iconStrip',
      layout: 'docked',
      position: 'left',
      size: 'wide',
    },
  }
)

export type SidebarVariantsType = VariantProps<typeof sidebarVariants>
