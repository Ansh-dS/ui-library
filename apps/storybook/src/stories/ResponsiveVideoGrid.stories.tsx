import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ResponsiveVideoGrid } from '@components'

const meta: Meta<typeof ResponsiveVideoGrid> = {
  title: 'Layout/ResponsiveVideoGrid',
  component: ResponsiveVideoGrid,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full h-[500px] border border-border-default">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ResponsiveVideoGrid>

export const TwoParticipants: Story = {
  args: {
    count: 2,
    children: (
      <>
        <div className="bg-neutral-800 rounded-large flex items-center justify-center text-white">
          Host
        </div>
        <div className="bg-neutral-800 rounded-large flex items-center justify-center text-white">
          Guest
        </div>
      </>
    ),
  },
}
