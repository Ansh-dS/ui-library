import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sidebar, SidebarItem, Text } from '@components'

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['default', 'sunken', 'inset', 'glass'] 
    },
    collapsed: { control: 'boolean' },
    layout: { control: 'select', options: ['docked', 'overlay'] },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      /* Using h-[600px] instead of h-125 for a more standard dashboard height */
      <div className="h-150 border border-border-default bg-surface-sunken overflow-hidden">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Sidebar>

/**
 * TALLY STYLE: The Modern SaaS Look
 * Uses 'variant="inset"' to give it that floating, premium app feel.
 */
export const TallyDashboard: Story = {
  args: {
    variant: 'inset',
    collapsed: false,
    header: (
      <div className="flex items-center gap-s">
        <span className="text-xl">📊</span>
        <Text variant="h3" weight="bold">Tally Clone</Text>
      </div>
    ),
    footer: (
       <div className="flex flex-col">
         <Text variant="caption" weight="medium">Anshdeep Singh</Text>
         <Text variant="caption" color="secondary">IIT Patna · v1.0.0</Text>
       </div>
    ),
    children: (
      <>
        <SidebarItem icon="🏠" label="Dashboard" active />
        <SidebarItem icon="📝" label="My Forms" badge="12" />
        <SidebarItem icon="🔌" label="Integrations" />
        <SidebarItem icon="⚙️" label="Settings" />
      </>
    ),
  },
}

/**
 * LEGALSAHYAK: The Focus Mode
 * Uses 'variant="sunken"' to push the sidebar into the background,
 * making the legal documents in the main view pop.
 */
export const LegalSahyak: Story = {
  args: {
    variant: 'sunken',
    collapsed: false,
    header: <Text variant="h3" weight="bold" color="brand">LegalSahyak</Text>,
    children: (
      <>
        <SidebarItem icon="📁" label="All Cases" active />
        <SidebarItem icon="⚖️" label="Legal Research" />
        <SidebarItem icon="📑" label="Drafts" badge="3" />
        <SidebarItem icon="👥" label="Clients" />
      </>
    ),
  },
}

/**
 * RIVERSIDE: The Cinematic Studio
 * Uses 'variant="glass"' for that high-fidelity, translucent look
 * suitable for media environments.
 */
export const RiversideStudio: Story = {
  args: {
    variant: 'glass',
    collapsed: true, // Riverside often defaults to collapsed for maximum video space
    header: <span className="text-2xl">🎙️</span>,
    children: (
      <>
        <SidebarItem icon="🔴" label="Record" active />
        <SidebarItem icon="🎬" label="Studio" />
        <SidebarItem icon="📹" label="Recordings" />
        <SidebarItem icon="🎧" label="Equipment" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="h-150 bg-linear-to-br from-neutral-900 to-neutral-800 p-0 overflow-hidden">
        <Story />
      </div>
    ),
  ],
}