import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sheet } from '@components'

const meta: Meta<typeof Sheet> = {
  title: 'Overlays/Sheet',
  component: Sheet,
  argTypes: {
    side: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sheet>

function SheetPreview(args: Story['args']) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-l py-m bg-action-primary text-fg-inverted rounded-medium font-weight-medium cursor-pointer"
      >
        Open Sheet
      </button>
      <Sheet
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Block Settings"
        description="Configure properties for this specific input block."
      >
        <div className="flex flex-col gap-l mt-m">
          <div className="h-24 bg-surface-sunken rounded-base border border-border-default flex items-center justify-center text-fg-secondary">
            Settings Field 1
          </div>
        </div>
      </Sheet>
    </div>
  )
}

export const Default: Story = {
  render: (args) => <SheetPreview {...args} />,
  args: {
    side: 'right',
  },
}
