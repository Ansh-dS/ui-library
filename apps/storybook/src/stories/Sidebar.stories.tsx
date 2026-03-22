import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sidebar } from '@components'

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  argTypes: {
    collapsed: { control: 'boolean' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-125 border border-border-default bg-surface-sunken">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  args: {
    collapsed: false,
    header: <div className="font-weight-bold text-fg-primary">Tally Clone</div>,
    footer: <div className="text-caption text-fg-secondary">v1.0.0</div>,
    children: (
      <>
        <div className="p-s bg-surface-sunken rounded-base text-body cursor-pointer">
          Dashboard
        </div>
        <div className="p-s hover:bg-surface-sunken rounded-base text-body cursor-pointer">
          Forms
        </div>
        <div className="p-s hover:bg-surface-sunken rounded-base text-body cursor-pointer">
          Integrations
        </div>
      </>
    ),
  },
}

export const Collapsed: Story = {
  args: {
    ...Default.args,
    collapsed: true,
    header: (
      <div className="font-weight-bold text-fg-primary text-center">T</div>
    ),
    footer: (
      <div className="text-caption text-fg-secondary text-center">v1</div>
    ),
    children: (
      <>
        <div
          className="p-s bg-surface-sunken rounded-base text-center cursor-pointer"
          title="Dashboard"
        >
          📊
        </div>
        <div
          className="p-s hover:bg-surface-sunken rounded-base text-center cursor-pointer"
          title="Forms"
        >
          📝
        </div>
        <div
          className="p-s hover:bg-surface-sunken rounded-base text-center cursor-pointer"
          title="Integrations"
        >
          🔌
        </div>
      </>
    ),
  },
}
