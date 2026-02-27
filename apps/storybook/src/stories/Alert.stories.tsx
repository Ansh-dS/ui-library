import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from '@components'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    severity: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    dismissible: { control: 'boolean' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    children: 'This is an important system notification.',
    severity: 'info',
    dismissible: true,
  },
}
