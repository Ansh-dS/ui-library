import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { RecordingPulsar } from '@components'

const meta: Meta<typeof RecordingPulsar> = {
  title: 'Status/RecordingPulsar',
  component: RecordingPulsar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RecordingPulsar>

export const Live: Story = {
  args: {
    state: 'active',
    startTime: Date.now() - 125000, // Started 125 seconds ago
  },
}
