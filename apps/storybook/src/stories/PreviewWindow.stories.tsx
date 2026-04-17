import type { Meta, StoryObj } from '@storybook/react-vite'
import { PreviewWindow } from '@components'

const meta: Meta<typeof PreviewWindow> = {
  title: 'Layout/PreviewWindow',
  component: PreviewWindow,
  argTypes: {
    device: { control: 'select', options: ['desktop', 'mobile'] },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-xl bg-neutral-100 min-h-screen">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof PreviewWindow>

export const DesktopPreview: Story = {
  args: {
    device: 'desktop',
    children: (
      <div className="p-3xl max-w-2xl mx-auto flex flex-col gap-l">
        <h1 className="text-display font-weight-bold text-fg-primary">
          Design Survey
        </h1>
        <p className="text-body text-fg-secondary">
          Please let us know your thoughts on the new UI.
        </p>
        <div className="p-l bg-surface-base rounded-large border border-border-default shadow-sm mt-l h-64 flex items-center justify-center text-fg-disabled">
          Simulated Form Content
        </div>
      </div>
    ),
  },
}

export const MobilePreview: Story = {
  args: {
    device: 'mobile',
    children: (
      <div className="p-l flex flex-col gap-m">
        <h1 className="text-h2 font-weight-bold text-fg-primary">
          Design Survey
        </h1>
        <div className="p-m bg-surface-base rounded-large border border-border-default shadow-sm mt-m h-64 flex items-center justify-center text-fg-disabled">
          Simulated Form
        </div>
      </div>
    ),
  },
}
