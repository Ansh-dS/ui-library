import type { Meta, StoryObj } from '@storybook/react-vite'
import { EmptyState, Button } from '@components'

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'dashed', 'glass'],
    },
    spacing: {
      control: 'select',
      options: ['compact', 'default', 'spacious'],
    },
    fullWidth: { control: 'boolean' },
    icon: { table: { disable: true } },
    action: { table: { disable: true } },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EmptyState>

/**
 * TALLY STYLE: Standard Placeholder
 * Set to fullWidth: false to mimic the content-hugging "Cart is empty" image.
 */
export const Default: Story = {
  args: {
    variant: 'default',
    spacing: 'default',
    fullWidth: false, // Hugs the content tightly
    title: 'No forms found',
    description: 'Explore our templates and create your first form.',
    // STAFF FIX: Just pass the raw emoji/SVG. The component handles the circle and sizing!
    icon: '📄',
    action: (
      <Button variant="primary" size="md">
        Create Form
      </Button>
    ),
  },
}

/**
 * LEGALSAHYAK STYLE: Actionable Dropzone
 */
export const DashedUpload: Story = {
  args: {
    variant: 'dashed',
    spacing: 'default',
    fullWidth: true, // Dropzones usually want to span the whole container
    title: 'Upload Case Documents',
    description: 'Drag and drop your PDF files here or browse local storage.',
    icon: '📁', // Stripped the hardcoded text-3xl class
    action: (
      <Button variant="secondary" size="md">
        Browse Files
      </Button>
    ),
  },
}

/**
 * RIVERSIDE STYLE: Glass Studio
 */
export const GlassStudio: Story = {
  args: {
    variant: 'glass',
    spacing: 'spacious', // Showcasing the large proportion
    fullWidth: false,
    title: 'No Recordings Yet',
    description: 'Connect your mic and camera to start your session.',
    icon: '🎙️', // Stripped the hardcoded text-3xl class
    action: (
      <Button variant="primary" size="lg">
        Start Recording
      </Button>
    ),
  },
  decorators: [
    (Story) => (
      <div className="bg-linear-to-br from-surface-base to-surface-raised p-20 rounded-xl flex justify-center">
        <Story />
      </div>
    ),
  ],
}
