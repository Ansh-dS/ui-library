import { cva, type VariantProps } from 'class-variance-authority'

export const sidebarVariants = cva(
  'flex flex-col h-full bg-surface-base border-r border-border-default transition-all duration-300',
  {
    variants: {
      collapsed: {
        true: 'w-16 items-center',
        false: 'w-64',
      },
    },
    defaultVariants: {
      collapsed: false,
    },
  }
)

export type SidebarVariantsType = VariantProps<typeof sidebarVariants>
