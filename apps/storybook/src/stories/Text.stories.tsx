import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '@components'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Text',
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted'],
    },
  },
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    size: 'md',
    color: 'default',
    children: 'Quick brown fox jumps over the lazy dog.',
  },
}
