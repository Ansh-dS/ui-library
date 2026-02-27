import type { Meta, StoryObj } from '@storybook/react-vite'
import { Popover, Button, Text } from '@components'
import React from 'react'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {
    align: { control: 'select', options: ['start', 'center', 'end'] },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  args: {
    align: 'center',
    children: <Button text="More Info" ariaLabel="info" isLoading={false} />,
    content: (
      <div className="flex flex-col gap-2">
        <Text as="h4" className="font-bold">
          Popover Title
        </Text>
        <Text className="text-fg-secondary">
          This is a rich popover containing extra details.
        </Text>
      </div>
    ),
  },
}
