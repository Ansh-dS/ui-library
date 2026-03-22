import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressBar } from '@components'

const meta: Meta<typeof ProgressBar> = {
  title: 'Status/ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Syncing: Story = {
  args: {
    value: 45,
    size: 'md',
    color: 'primary',
  },
}
