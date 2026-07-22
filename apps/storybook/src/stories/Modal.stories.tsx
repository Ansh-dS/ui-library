import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal, Button } from '@components'
import { useState } from 'react'

const meta: Meta<typeof Modal> = {
  title: 'Overlays/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Modal>

// Stateful wrapper for interactive testing
const StatefulModal = (args: React.ComponentProps<typeof Modal>) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export const Default: Story = {
  render: (args) => <StatefulModal {...args} />,
  args: {
    title: 'Confirm Action',
    children:
      'Are you sure you want to proceed with this action? This cannot be undone. Notice how you cannot scroll the background or tab out of this window!',
    size: 'md',
  },
}
