import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '@components'
import React from 'react'

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Scales the avatar using the global spacing tokens.',
    },
  },
  parameters: {
    layout: 'centered', // Keeps the avatars nicely centered in the canvas
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Image: Story = {
  args: {
    size: 'md',
    // Added &h=100&fit=crop to the Unsplash URL so it loads a perfect square
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    alt: 'Anshdeep Singh',
  },
}

export const Fallback: Story = {
  args: {
    size: 'md',
    fallback: 'AS',
  },
}

export const SizesShowcase: Story = {
  render: () => (
    <div className="flex items-center gap-m">
      <Avatar size="sm" fallback="AS" />
      <Avatar size="md" fallback="AS" />
      <Avatar size="lg" fallback="AS" />
    </div>
  ),
}
