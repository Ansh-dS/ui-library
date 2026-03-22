import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { NetworkHealthIndicator } from '@components'

const meta: Meta<typeof NetworkHealthIndicator> = {
  title: 'Status/NetworkHealthIndicator',
  component: NetworkHealthIndicator,
  argTypes: {
    quality: {
      control: 'select',
      options: ['excellent', 'good', 'fair', 'poor', 'none'],
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NetworkHealthIndicator>

export const Excellent: Story = {
  args: {
    quality: 'excellent',
    latency: 24,
  },
}

export const Poor: Story = {
  args: {
    quality: 'poor',
    latency: 450,
  },
}
