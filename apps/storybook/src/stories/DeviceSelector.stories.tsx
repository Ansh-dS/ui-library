import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { DeviceSelector } from '@components'

const meta: Meta<typeof DeviceSelector> = {
  title: 'Media/DeviceSelector',
  component: DeviceSelector,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DeviceSelector>

export const Default: Story = {
  args: {
    onCameraChange: (id) => console.log('Camera changed:', id),
    onMicChange: (id) => console.log('Mic changed:', id),
  },
}
