import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from '@components'

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner',
  component: Spinner,
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['tally', 'riverside', 'recording'],
      description: 'The visual style optimized for specific app goals',
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const DefaultTally: Story = {
  args: {
    variant: 'tally',
    size: 'md',
  },
}

/**
 * RIVERSIDE TREND: The Studio Glow
 * Best viewed on dark backgrounds to see the 'action-primary' glow effect.
 */
export const RiversideGlow: Story = {
  args: {
    variant: 'riverside',
    size: 'lg',
  },
  decorators: [
    (Story) => (
      <div className="p-10 bg-surface-sunken rounded-xl">
        <Story />
      </div>
    ),
  ],
}

/**
 * LIVE STATE: The Recording Pulse
 * Used for high-visibility status indicators (e.g., 'Live' or 'Recording').
 */
export const RecordingPulse: Story = {
  args: {
    variant: 'recording',
    size: 'sm',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-xl">
      <div className="flex flex-col items-center gap-m">
        <Spinner variant="tally" size="sm" />
        <Spinner variant="tally" size="md" />
        <Spinner variant="tally" size="lg" />
        <span className="text-caption text-fg-disabled">Tally</span>
      </div>

      <div className="flex flex-col items-center gap-m p-4 bg-surface-sunken rounded-lg">
        <Spinner variant="riverside" size="sm" />
        <Spinner variant="riverside" size="md" />
        <Spinner variant="riverside" size="lg" />
        <span className="text-caption text-fg-disabled">Riverside</span>
      </div>

      <div className="flex flex-col items-center gap-m">
        <Spinner variant="recording" size="sm" />
        <Spinner variant="recording" size="md" />
        <Spinner variant="recording" size="lg" />
        <span className="text-caption text-fg-disabled">Pulse</span>
      </div>
    </div>
  ),
}
