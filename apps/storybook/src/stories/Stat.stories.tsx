import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stat } from '@components'

const meta: Meta<typeof Stat> = {
  title: 'Data Display/Stat',
  component: Stat,
  argTypes: {
    align: { control: 'select', options: ['left', 'center', 'right'] },
    trend: { control: 'select', options: ['up', 'down', 'neutral'] },
    variant: { control: 'select', options: ['default', 'glass', 'ghost'] },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Stat>

export const PositiveTrend: Story = {
  args: {
    variant: 'default',
    label: 'Total Submissions',
    value: '1,284',
    trend: 'up',
    trendValue: '12%',
    helpText: 'Compared to last month',
  },
}

export const NegativeTrend: Story = {
  args: {
    variant: 'default',
    label: 'Bounce Rate',
    value: '42.3%',
    trend: 'down',
    trendValue: '4.1%',
  },
}

/**
 * RIVERSIDE TREND: Glassmorphism:
 * you can able to see both blue and red background colors for tally and
 *
 */
export const GlassRiverside: Story = {
  args: {
    variant: 'glass',
    label: 'Live Viewers',
    value: '842',
    trend: 'neutral',
    trendValue: 'Steady',
  },
  decorators: [
    (Story) => (
      <div className="p-20 bg-linear-to-br from-action-primary/20 to-status-danger/20 rounded-xl inline-block ">
        {/*  
          This gives the 'glass' variant a defined width to fill.
        */}
        <Story />
      </div>
    ),
  ],
}

/**
 * TALLY TREND: Minimalist / Ghost
 * Removes borders and shadows for a clean, typewriter-style aesthetic.
 */
export const MinimalistTally: Story = {
  args: {
    variant: 'ghost',
    label: 'Form Completion Rate',
    value: '92%',
    trend: 'up',
    trendValue: '2%',
    align: 'center',
  },
}
