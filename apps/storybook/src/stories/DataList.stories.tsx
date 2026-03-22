import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataList, DataListItem } from '@components'

const meta: Meta<typeof DataList> = {
  title: 'Data Display/DataList',
  component: DataList,
  argTypes: {
    spacing: { control: 'select', options: ['compact', 'default', 'relaxed'] },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DataList>

export const Default: Story = {
  args: {
    spacing: 'default',
    children: (
      <>
        <DataListItem interactive>
          <div>
            <div className="font-weight-semibold text-fg-primary">
              Customer Feedback Survey
            </div>
            <div className="text-caption text-fg-secondary">
              142 Responses • Last edited 2d ago
            </div>
          </div>
          <button
            type="button"
            className="text-fg-brand font-weight-medium border border-border-default px-m py-xs rounded-base hover:bg-surface-sunken cursor-pointer bg-transparent"
          >
            View
          </button>
        </DataListItem>
        <DataListItem interactive>
          <div>
            <div className="font-weight-semibold text-fg-primary">
              Event Registration
            </div>
            <div className="text-caption text-fg-secondary">
              89 Responses • Last edited 5d ago
            </div>
          </div>
          <button
            type="button"
            className="text-fg-brand font-weight-medium border border-border-default px-m py-xs rounded-base hover:bg-surface-sunken cursor-pointer bg-transparent"
          >
            View
          </button>
        </DataListItem>
      </>
    ),
  },
}
