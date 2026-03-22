import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ErrorBoundary, Button, Text } from '@components'

const meta: Meta<typeof ErrorBoundary> = {
  title: 'Feedback/ErrorBoundary',
  component: ErrorBoundary,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'glass'],
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ErrorBoundary>

const BuggyComponent = () => {
  const [crash, setCrash] = useState(false)

  if (crash) {
    throw new Error('This is a simulated component crash!')
  }

  return (
    <div className="p-xl border border-border-default rounded-large bg-surface-base shadow-sm">
      <Text variant="body" className="mb-m">
        This component is healthy. Click below to simulate a runtime error.
      </Text>
      <Button variant="primary" onClick={() => setCrash(true)}>
        Trigger Crash
      </Button>
    </div>
  )
}

// errorBoundary function: to caught error which came instead of component.
export const Default: Story = {
  render: (args) => (
    <ErrorBoundary {...args}>
      <BuggyComponent />
    </ErrorBoundary>
  ),
  args: {
    variant: 'default',
  },
}

export const MinimalFallback: Story = {
  render: (args) => (
    <ErrorBoundary {...args}>
      <BuggyComponent />
    </ErrorBoundary>
  ),
  args: {
    variant: 'minimal',
  },
}

/**
 * GLASS FALLBACK
 * Wrapped in a colorful background to demonstrate the backdrop-blur physics.
 */
export const GlassFallback: Story = {
  render: (args) => (
    <ErrorBoundary {...args}>
      <BuggyComponent />
    </ErrorBoundary>
  ),
  args: {
    variant: 'glass',
  },
  decorators: [
    (Story) => (
      <div className="bg-linear-to-br from-surface-base to-surface-raised rounded-xl inline-block p-10">
        <Story />
      </div>
    ),
  ],
}
