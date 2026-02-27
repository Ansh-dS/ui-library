import { cva, type VariantProps } from 'class-variance-authority'
export const tabsVariants = cva(['flex'], {
  variants: {
    orientation: {
      horizontal: 'flex-row border-b border-border-default',
      vertical: 'flex-col border-r border-border-default',
    },
  },
  defaultVariants: { orientation: 'horizontal' },
})
export type TabsVariantsType = VariantProps<typeof tabsVariants>
