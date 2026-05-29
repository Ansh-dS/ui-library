import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Sidebar,
  SidebarItem,
  Text,
  CollapsibleContent,
  type SidebarProps,
  Box,
  Stack,
} from '@components'
import { Trash, Settings, Layers } from 'lucide-react'

/**
 * STEP 1: STORYBOOK METADATA
 * Added controls for the new 'position' and 'showToggle' properties so
 * developers can test the spatial awareness of the sidebar directly in the UI.
 */
const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'sunken', 'inset', 'glass'],
    },
    collapseMode: {
      control: 'select',
      options: ['iconStrip', 'hide'],
    },
    position: {
      control: 'radio',
      options: ['left', 'right'],
    },
    collapsed: { control: 'boolean' },
    showToggle: { control: 'boolean' },
  },
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <div className="h-screen p-s flex w-full border border-border-default bg-surface-sunken rounded-lg">
        <Story />
      </div>
    ),
  ],

}

export default meta
type Story = StoryObj<typeof Sidebar>

/* -------------------------------------------------------------------------- */
/* INTERACTIVE WRAPPERS                                                       */
/* -------------------------------------------------------------------------- */

const StatefulSidebar = (args: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(args.collapsed || false)

  return (
    <>
      {args.position === 'right' && <div className="flex-1" />}
      <Sidebar
        {...args}
        collapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
      />
      {args.position !== 'right' && <div className="flex-1" />}
    </>
  )
}

const TallyDashboardSidebar = (args: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(args.collapsed || false)
  return (
    <>
      {args.position === 'right' && <div className="flex-1" />}
      <Sidebar
        {...args}
        collapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
        header={
          <Stack
            direction="horizontal"
            align="center"
            gap="md"
            className="overflow-hidden border-0 bg-transparent"
          >
            <div className="shrink-0 text-xl">📊</div>
            <CollapsibleContent collapsed={isCollapsed}>
              <Text variant="h3" weight="bold" className="truncate">
                Tally Clone
              </Text>
            </CollapsibleContent>
          </Stack>
        }
      />
      {args.position !== 'right' && <div className="flex-1" />}
    </>
  )
}

/* -------------------------------------------------------------------------- */
/* STORIES                                                                    */
/* -------------------------------------------------------------------------- */

export const TallyDashboard: Story = {
  args: {
    variant: 'inset',
    position: 'left',
    showToggle: true,
    footer: <Text variant="caption">Anshdeep Singh</Text>,
    children: (
      <>
        <SidebarItem icon="🏠" label="Dashboard" active/>
        <SidebarItem icon="📝" label="My Forms" badge="12"/>
        <SidebarItem icon="⚙️" label="Settings"  />
      </>
    ),
  },
  render: (args) => <TallyDashboardSidebar {...args} />,
}

/**
 * EDITOR SETTINGS (The Figma Style)
 * Uses collapseMode="hide" to vanish completely when closed.
 */
export const EditorSettingsPanel: Story = {
  render: StatefulSidebar,
  args: {
    variant: 'sunken',
    position: 'right',
    collapseMode: 'hide',
    showToggle: true,
    header: (
      <Stack
        direction="horizontal"
        align="center"
        gap="sm"
        className="border-0 bg-transparent"
      >
        <Settings size={16} />
        <Text weight="bold">Block Settings</Text>
      </Stack>
    ),
    children: (
      <Stack gap="md" >
        <Box className=" bg-surface-base border-border-default rounded-base shadow-sm">
          <Text variant="caption" color="secondary">
            Color Picker Placeholder
          </Text>
        </Box>
        <Box className="bg-surface-base border-border-default rounded-base shadow-sm">
          <Text variant="caption" color="secondary">
            Font Size Slider Placeholder
          </Text>
        </Box>
        <Box className="bg-surface-base border-border-default rounded-base shadow-sm">
          <Text variant="caption" color="secondary">
            Padding Controls Placeholder
          </Text>
        </Box>
        <Box className=" bg-surface-base border-border-default rounded-base shadow-sm">
          <Text variant="caption" color="secondary">
            Border Radius Placeholder
          </Text>
        </Box>
        <Box className=" bg-surface-base border-border-default rounded-base shadow-sm">
          <Text variant="caption" color="secondary">
            Animation Settings Placeholder
          </Text>
        </Box>
        <Box className=" bg-surface-base border-border-default rounded-base shadow-sm">
          <Text variant="caption" color="secondary">
            Visibility Rules Placeholder
          </Text>
        </Box>
        {Array.from({ length: 18 }).map((_, index) => (
          <Box
            key={`extra-setting-${index + 1}`}
            className="bg-surface-base border-border-default rounded-base shadow-sm"
          >
            <Text variant="caption" color="secondary">
              Advanced Setting Group {index + 1} Placeholder
            </Text>
          </Box>
        ))}
      </Stack>
    ),
    footer: (
      <Stack
        direction="horizontal"
        align="center"
        justify="start"
        className="w-full border-0 bg-transparent"
      >
        <Text variant="caption" color="secondary">
          Unsaved changes
        </Text>
        <Text variant="caption" weight="semibold">
          Auto-save
        </Text>
      </Stack>
    ),
  },
}

export const ColorAndIconTest: Story = {
  render: StatefulSidebar,
  args: {
    variant: 'default',
    position: 'left',
    collapsed: false,
    showToggle: true,
    header: <Layers size={20} />,
    children: (
      <>
        <SidebarItem
          icon={<Trash size={18} />}
          color="danger"
          label="Delete Record"
        />
        <SidebarItem icon="🎬" label="Studio" active />
      </>
    ),
  },
}
