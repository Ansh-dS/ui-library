import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  DataGrid,
  DataGridHeader,
  DataGridRow,
  DataGridHead,
  DataGridCell,
} from '@components'

const meta: Meta<typeof DataGrid> = {
  title: 'Data Display/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'change size to increase cell size.',
    },
  },
}

export default meta

type Story = StoryObj<typeof DataGrid>

/* ...args: any value which is  recived from controls */
export const Default: Story = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <DataGrid {...args}>
      <DataGridHeader>
        <DataGridRow>
          {/* FIX: we are making the first column bit of wider so we use 'w-40%' */}
          <DataGridHead className="w-[40%]">Name</DataGridHead>
          <DataGridHead>Status</DataGridHead>
          <DataGridHead>Submissions</DataGridHead>
          <DataGridHead className="text-right">Conversion</DataGridHead>
        </DataGridRow>
      </DataGridHeader>

      <tbody>
        {/* 1. first row.*/}
        <DataGridRow>
          {/*  FIX: Name stays Primary and Medium weight */}
          <DataGridCell className="font-weight-medium text-fg-primary">
            Product Feedback
          </DataGridCell>
          {/* data-grid-cell is accepting a 'span' even if we aren't rendering any children:
              because of '...rest'.
          */}
          <DataGridCell>
            {/* inline-flex: this push the boundaries of parents and helps in applying 'py-xs'*/}
            <span className="inline-flex text-status-success bg-status-success/10 px-s py-xs rounded-small text-caption">
              Published
            </span>
          </DataGridCell>
          {/* tabular-nums:  alligns the digits vertically */}
          <DataGridCell className="text-fg-secondary tabular-nums">
            245
          </DataGridCell>
          <DataGridCell className="text-right text-fg-secondary tabular-nums">
            32%
          </DataGridCell>
        </DataGridRow>

        {/* 2. second row.*/}
        <DataGridRow>
          <DataGridCell className="font-weight-medium text-fg-primary">
            Waitlist Form
          </DataGridCell>
          <DataGridCell>
            <span className="inline-flex text-fg-secondary bg-surface-raised px-s py-xs rounded-small text-caption">
              Draft
            </span>
          </DataGridCell>
          <DataGridCell className="text-fg-secondary tabular-nums">
            0
          </DataGridCell>
          <DataGridCell className="text-right text-fg-secondary tabular-nums">
            —
          </DataGridCell>
        </DataGridRow>

        {/* third row*/}
        <DataGridRow>
          <DataGridCell className="font-weight-medium text-fg-primary">
            Q3 Survey
          </DataGridCell>
          <DataGridCell>
            <span className="inline-flex text-status-warning bg-status-warning/10 px-s py-xs rounded-small text-caption">
              Closed
            </span>
          </DataGridCell>
          <DataGridCell className="text-fg-secondary tabular-nums">
            1,092
          </DataGridCell>
          <DataGridCell className="text-right text-fg-secondary tabular-nums">
            45%
          </DataGridCell>
        </DataGridRow>
      </tbody>
    </DataGrid>
  ),
}
