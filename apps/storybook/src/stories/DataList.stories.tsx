import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  DataList,
  DataListItem,
  Text,
  Button,
  Stack,
  Badge,
  DropdownMenu,
} from '@components'
import { MoreVertical, Edit3, Share2, Trash2 } from 'lucide-react'

const meta: Meta<typeof DataList> = {
  title: 'Data Display/DataList',
  component: DataList,
  argTypes: {
    spacing: {
      control: 'select',
      options: ['compact', 'default', 'relaxed'],
      description: 'Controls the vertical density of list items.',
    },
    variant: {
      control: 'select',
      options: ['default', 'ghost', 'glass', 'inset'],
      description: 'The visual style of the list container.',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-175">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DataList>

export const DashboardStyle: Story = {
  args: {
    spacing: 'default',
    variant: 'default',
    children: (
      <>
        {[
          {
            id: 1,
            title: 'Customer Feedback Survey',
            views: '1.2k',
            status: 'success',
            label: 'Active',
          },
          {
            id: 2,
            title: 'Event Registration Form',
            views: '890',
            status: 'default',
            label: 'Draft',
          },
        ].map((item) => (
          <DataListItem key={item.id} interactive>
            {/* Left: Identity Group */}
            <Stack
              direction="vertical"
              gap="sm"
              className="border-0 bg-transparent"
            >
              <Stack
                direction="horizontal"
                align="center"
                gap="sm"
                className="border-0 bg-transparent"
              >
                <Text weight="semibold">{item.title}</Text>
                <Badge color={item.status as 'default' | 'success'} size="sm">
                  {item.label}
                </Badge>
              </Stack>
              <Text variant="caption" color="secondary">
                {item.views} Views • Last edited 2d ago
              </Text>
            </Stack>

            {/* Right: Actions */}
            <Stack
              direction="horizontal"
              align="center"
              gap="sm"
              className="border-0 bg-transparent"
            >
              <Button variant="ghost" size="sm" startIcon={<Edit3 />}>
                Edit
              </Button>
              <DropdownMenu
                align="right"
                trigger={
                  <Button variant="ghost" size="icon" color="secondary">
                    <MoreVertical size={18} />
                  </Button>
                }
              >
                <Stack
                  direction="vertical"
                  gap="none"
                  className="p-xs min-w-40"
                >
                  <Button
                    variant="ghost"
                    fullWidth
                    className="justify-start"
                    startIcon={<Share2 />}
                  >
                    Share
                  </Button>
                  <Button
                    variant="ghost"
                    fullWidth
                    className="justify-start text-status-danger"
                    startIcon={<Trash2 />}
                  >
                    Delete
                  </Button>
                </Stack>
              </DropdownMenu>
            </Stack>
          </DataListItem>
        ))}
      </>
    ),
  },
}

export const GlassEditor: Story = {
  args: {
    variant: 'glass',
    spacing: 'relaxed',
    children: (
      <>
        <DataListItem>
          <Text weight="medium">Dark Mode</Text>
          <Badge size="sm">System Default</Badge>
        </DataListItem>
        <DataListItem>
          <Text weight="medium">Auto-save</Text>
          <Text color="success" variant="caption">
            Enabled
          </Text>
        </DataListItem>
      </>
    ),
  },
  parameters: {
    // Adding a background color to show off the glass effect
    backgrounds: { default: 'dark' },
  },
}
