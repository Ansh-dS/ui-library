import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sortable, SortableItem } from '@components'

const meta: Meta<typeof Sortable> = {
  title: 'Layout/Sortable',
  component: Sortable,
  argTypes: {
    isDraggingOver: { control: 'boolean' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sortable>

export const WithItems: Story = {
  args: {
    isDraggingOver: false,
    children: (
      <>
        <SortableItem>Email Address Field</SortableItem>
        <SortableItem>Multiple Choice Question</SortableItem>
        <SortableItem>Submit Button</SortableItem>
      </>
    ),
  },
}
