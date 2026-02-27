import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from '@components'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Confirm Action',
    children:
      'Are you sure you want to proceed with this action? This cannot be undone.',
    size: 'md',
  },
}
