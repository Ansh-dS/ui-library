import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@components'

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  // FIX: Added default args so the component is pre-populated in Docs
  args: {
    children: 'Badge',
    color: 'default',
    size: 'sm',
  },
  argTypes: {
    color: {
      control: 'radio',
      options: ['default', 'success', 'warning', 'error'],
      description: 'Sets the background and text color theme.',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md'],
      description: 'Controls the padding and font-size variant.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

/**
 * The default state using the 'sm' size and 'default' color.
 */
export const Default: Story = {}

/**
 * Used for positive status indicators like "Active" or "Completed".
 */
export const Success: Story = {
  args: {
    children: 'Active',
    color: 'success',
  },
}

/**
 * Critical for testing the 'error' -> 'danger' mapping we built in the .tsx file.
 */
export const Error: Story = {
  args: {
    children: 'Failed',
    color: 'error',
  },
}

/**
 * Showcasing the 'md' size which uses the 'label' text variant.
 */
export const Large: Story = {
  args: {
    children: 'New Feature',
    color: 'warning',
    size: 'md',
  },
}
