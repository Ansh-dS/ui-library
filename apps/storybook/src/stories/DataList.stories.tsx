import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataList, DataListItem, Text, Button, Stack, Badge } from '@components'

const meta: Meta<typeof DataList> = {
  title: 'Data Display/DataList',
  component: DataList,
  argTypes: {
    spacing: { 
      control: 'select', 
      options: ['compact', 'default', 'relaxed'] 
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[600px] bg-surface-base border border-border-default rounded-medium overflow-hidden shadow-sm">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DataList>

/* -------------------------------------------------------------------------- */
/* THE DASHBOARD LIST (Tally Style)                                           */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
  args: {
    spacing: 'default',
    children: (
      <>
        <DataListItem interactive>
          <Stack className="flex-col gap-2xs">
            <Text variant="label" weight="semibold">Customer Feedback Survey</Text>
            <Text variant="caption" color="secondary">
              142 Responses • Last edited 2d ago
            </Text>
          </Stack>
          <Stack className="items-center gap-m">
            <Badge color="success" size="sm">Active</Badge>
            <Button variant="outline" size="sm" text="View" />
          </Stack>
        </DataListItem>
        
        <DataListItem interactive>
          <Stack className="flex-col gap-2xs">
            <Text variant="label" weight="semibold">Event Registration</Text>
            <Text variant="caption" color="secondary">
              89 Responses • Last edited 5d ago
            </Text>
          </Stack>
          <Stack className="items-center gap-m">
            <Badge color="default" size="sm">Draft</Badge>
            <Button variant="outline" size="sm" text="Edit" />
          </Stack>
        </DataListItem>
      </>
    ),
  },
}

/* -------------------------------------------------------------------------- */
/* SPACING VARIATIONS                                                        */
/* -------------------------------------------------------------------------- */

/**
 * COMPACT MODE
 * Optimized for high-density data views in the Tally builder sidebar.
 */
export const Compact: Story = {
  args: {
    ...Default.args,
    spacing: 'compact',
  },
}

/**
 * RELAXED MODE
 * Best for spacious, consumer-facing lists in the Riverside dashboard.
 */
export const Relaxed: Story = {
  args: {
    ...Default.args,
    spacing: 'relaxed',
  },
}

/* -------------------------------------------------------------------------- */
/* INTERACTIVE VS STATIC                                                      */
/* -------------------------------------------------------------------------- */

export const StaticList: Story = {
  args: {
    spacing: 'default',
    children: (
      <>
        <DataListItem interactive={false}>
          <Text variant="label">System Version</Text>
          <Text variant="label" weight="semibold" color="secondary">v2.4.0-stable</Text>
        </DataListItem>
        <DataListItem interactive={false}>
          <Text variant="label">Server Location</Text>
          <Text variant="label" weight="semibold" color="secondary">Mumbai (ap-south-1)</Text>
        </DataListItem>
      </>
    ),
  },
}