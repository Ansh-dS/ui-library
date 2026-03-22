import type { Meta, StoryObj } from '@storybook/react-vite'
import { ControlBar } from '@components'

const meta: Meta<typeof ControlBar> = {
  title: 'Media/ControlBar',
  component: ControlBar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ControlBar>

export const RecordingStudio: Story = {
  args: {
    children: (
      <div className="text-fg-inverted font-weight-bold">STUDIO PRO</div>
    ),
    centerActions: (
      <div className="flex gap-m">
        <button className="w-12 h-12 rounded-pill bg-neutral-800 text-white border border-white/10">
          🎤
        </button>
        <button className="w-12 h-12 rounded-pill bg-neutral-800 text-white border border-white/10">
          📹
        </button>
        <button className="w-12 h-12 rounded-pill bg-status-danger text-white border-none px-l">
          Leave
        </button>
      </div>
    ),
    rightActions: <div className="text-status-success text-label">● Live</div>,
  },
}
