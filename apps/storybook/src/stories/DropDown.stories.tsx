import type { Meta, StoryObj } from '@storybook/react-vite'
import { DropdownMenu, DropdownMenuProps } from '@components'
import {
  AlertCircle,
  FileText,
  Settings,
  User,
  MoreVertical,
} from 'lucide-react'
import { Button, Stack } from '@components'
import { useState } from 'react'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  title: 'Inputs/Dropdown',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: {
      table: { disable: true },
    },
    onOpen: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

/**
 * NEW: The Stateful Wrapper
 * This satisfies the 'Rules of Hooks' because it is a proper PascalCase component.
 * It handles the open/close state so the stories don't have to.
 */
const StatefulDropdown = (args: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <DropdownMenu
      {...args}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    />
  )
}

/* -------------------------------------------------------------------------- */
/* STORIES                                                                    */
/* -------------------------------------------------------------------------- */

export const Basic: Story = {
  render: (args) => (
    <StatefulDropdown
      {...args}
      trigger={<Button variant="outline">Open Menu</Button>}
    >
      <Stack direction="vertical" gap="none">
        <Button variant="ghost" fullWidth startIcon={<User size={16} />}>
          Profile
        </Button>
        <Button variant="ghost" fullWidth startIcon={<Settings size={16} />}>
          Settings
        </Button>
        <Button variant="ghost" fullWidth startIcon={<FileText size={16} />}>
          Documents
        </Button>
      </Stack>
    </StatefulDropdown>
  ),
}

export const WithIcons: Story = {
  render: (args) => (
    <StatefulDropdown
      {...args}
      align="right"
      trigger={
        <Button variant="ghost" size="sm">
          <MoreVertical size={16} />
        </Button>
      }
    >
      <Stack direction="vertical" gap="none">
        <Button
          variant="ghost"
          fullWidth
          startIcon={<AlertCircle size={16} />}
          disabled
        >
          Danger Zone
        </Button>
        <Button variant="ghost" fullWidth startIcon={<User size={16} />}>
          User Options
        </Button>
      </Stack>
    </StatefulDropdown>
  ),
}

export const Disabled: Story = {
  // We don't need the stateful wrapper here because it's hard-locked to closed
  args: {
    trigger: (
      <Button variant="outline" disabled>
        Disabled Menu
      </Button>
    ),
    isOpen: false,
    children: (
      <Stack direction="vertical" gap="none">
        <Button variant="ghost" fullWidth>
          Option 1
        </Button>
      </Stack>
    ),
  },
}

export const LeftAligned: Story = {
  render: (args) => (
    <StatefulDropdown
      {...args}
      align="left"
      trigger={<Button variant="outline">Left Aligned</Button>}
    >
      <Stack direction="vertical" gap="none">
        <Button variant="ghost" fullWidth>
          Option A
        </Button>
        <Button variant="ghost" fullWidth>
          Option B
        </Button>
      </Stack>
    </StatefulDropdown>
  ),
}

export const RightAligned: Story = {
  render: (args) => (
    <StatefulDropdown
      {...args}
      align="right"
      trigger={<Button variant="outline">Right Aligned</Button>}
    >
      <Stack direction="vertical" gap="none">
        <Button variant="ghost" fullWidth>
          Option A
        </Button>
        <Button variant="ghost" fullWidth>
          Option B
        </Button>
      </Stack>
    </StatefulDropdown>
  ),
}
