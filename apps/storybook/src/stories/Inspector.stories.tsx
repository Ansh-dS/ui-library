import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Inspector, InspectorField } from '@components'

const meta: Meta<typeof Inspector> = {
  title: 'Layout/Inspector',
  component: Inspector,
  argTypes: {
    position: { control: 'select', options: ['fixed', 'relative'] },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-[600px] border border-border-default bg-surface-sunken flex justify-end">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Inspector>

export const BlockSettings: Story = {
  args: {
    title: 'Input Field Settings',
    position: 'relative',
    children: (
      <>
        <InspectorField label="Field Label">
          <input
            type="text"
            className="w-full p-s border border-border-default rounded-base bg-surface-base text-body text-fg-primary focus:border-border-focused outline-none"
            defaultValue="Email Address"
          />
        </InspectorField>
        <InspectorField label="Validation">
          <div className="flex items-center gap-s mt-xs">
            <input
              type="checkbox"
              id="req"
              defaultChecked
              className="w-4 h-4 cursor-pointer"
            />
            <label
              htmlFor="req"
              className="text-body text-fg-primary cursor-pointer"
            >
              Required field
            </label>
          </div>
        </InspectorField>
      </>
    ),
  },
}
