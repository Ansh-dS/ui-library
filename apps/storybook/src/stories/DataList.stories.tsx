import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataList, DataListItem, Text, Button, Stack, Badge } from '@components'

const meta: Meta<typeof DataList> = {
  title: 'Data Display/DataList',
  component: DataList,
  argTypes: {
    spacing: {
      control: 'select',
      options: ['compact', 'default', 'relaxed'],
      description: 'Controls the vertical density of list items.',
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

/**
 * THE DASHBOARD LIST (Tally/Riverside Style)
 * * Visual Hierarchy Logic:
 * 1. TYPOGRAPHIC WEIGHT: Use 'semibold' for titles to establish an immediate anchor.
 * 2. SECONDARY METADATA: Use 'secondary' color and 'caption' variant to reduce visual noise[cite: 6, 9].
 * 3. PROXIMITY: Group title/metadata on the left and actions on the right to follow the F-pattern.
 */
export const Default: Story = {
  args: {
    spacing: 'default',
    children: (
      <>
        <DataListItem interactive>
          {/* Left: Primary Information Group */}
          <Stack className="flex-col gap-2xs">
            <Text variant="label" weight="semibold">
              Customer Feedback Survey
            </Text>
            <Text variant="caption" color="secondary">
              142 Responses • Last edited 2d ago
            </Text>
          </Stack>

          {/* Right: Status and Primary Action */}
          <Stack className="items-center gap-m">
            <Badge color="success" size="sm">
              Active
            </Badge>
            <Button variant="outline" size="sm" text="View" />
          </Stack>
        </DataListItem>

        <DataListItem interactive>
          <Stack className="flex-col gap-2xs">
            <Text variant="label" weight="semibold">
              Event Registration [cite: 8]
            </Text>
            <Text variant="caption" color="secondary">
              89 Responses • Last edited 5d ago
            </Text>
          </Stack>
          <Stack className="items-center gap-m">
            <Badge color="default" size="sm">
              Draft
            </Badge>
            <Button variant="outline" size="sm" text="Edit" />
          </Stack>
        </DataListItem>
      </>
    ),
  },
}

/**
 * STATIC KEY-VALUE LIST
 * Used for system specs or settings where actions are not required.
 * Notice the 'Value' uses secondary color to emphasize the 'Label'.
 */
export const StaticList: Story = {
  args: {
    spacing: 'default',
    children: (
      <>
        <DataListItem interactive={false}>
          <Text variant="label">System Version</Text>
          <Text variant="label" weight="semibold" color="secondary">
            v2.4.0-stable
          </Text>
        </DataListItem>
        <DataListItem interactive={false}>
          <Text variant="label">Server Location</Text>
          <Text variant="label" weight="semibold" color="secondary">
            Mumbai (ap-south-1)
          </Text>
        </DataListItem>
      </>
    ),
  },
}
