import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chart } from '@components'

const meta: Meta<typeof Chart> = {
  title: 'Data Display/Chart',
  component: Chart,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Chart>

export const Default: Story = {
  args: {
    title: 'Submissions over time',
    description:
      'Daily form views and completed submissions for the last 30 days.',
    action: (
      <button className="px-m py-xs bg-surface-sunken text-fg-primary text-label rounded-base border border-border-default cursor-pointer">
        Export CSV
      </button>
    ),
  },
}
