import type { Meta, StoryObj } from '@storybook/react-vite'
import { Footer, Text, Button } from '@components'

const meta: Meta<typeof Footer> = {
  title: 'Navigation/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    leftContent: {
      table: { disable: true },
    },
    rightContent: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'transparent', 'glass'],
      description: 'The visual style of the footer background.',
      // Fallback
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    sticky: {
      control: 'boolean',
      description: 'Pin the footer to the bottom of the viewport.',
      // Fallback
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
  args: {
    variant: 'default',
    sticky: true,
  },
  parameters: {
    // Ensures the footer stretches to full width in the preview
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Footer>

/**
 * Standard Informational Footer.
 * Using <Text> ensures proper colors and scaling in Dark/Light mode.
 */
export const Default: Story = {
  args: {
    leftContent: (
      <Text variant="caption" color="secondary">
        &copy; 2026 Tally Clone. All rights reserved.
      </Text>
    ),
    rightContent: (
      <div className="flex gap-m">
        <Text
          as="span"
          variant="caption"
          color="secondary"
          className="hover:text-fg-primary transition-colors"
        >
          Privacy Policy
        </Text>
        <Text
          as="span"
          variant="caption"
          color="secondary"
          className="hover:text-fg-primary transition-colors"
        >
          Terms of Service
        </Text>
      </div>
    ),
  },
}

/**
 * The "Action Footer" Pattern.
 * Used at the bottom of forms (like Tally) to provide clear navigation steps.
 */
export const FormActions: Story = {
  args: {
    sticky: true,
    leftContent: (
      <Button variant="ghost" size="sm">
        Save as Draft
      </Button>
    ),
    rightContent: (
      <div className="flex gap-m">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button variant="primary" size="sm">
          Publish Form
        </Button>
      </div>
    ),
  },
}

/**
 * Minimalist Footer.
 * Transparent background, often used inside Modals or slide-over panels.
 */
export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: (
      <Text variant="caption" color="disabled">
        Press{' '}
        <kbd className="font-mono bg-surface-sunken px-1 rounded">Esc</kbd> to
        close
      </Text>
    ),
  },
}

export const GlassSticky: Story = {
  args: {
    variant: 'glass',
    sticky: true,
    leftContent: <Text variant="caption">Draft saved at 10:45 PM</Text>,
    rightContent: <Button size="sm">Publish Now</Button>,
  },
  decorators: [
    (Story) => (
      <div className="relative h-75 overflow-y-auto bg-surface-sunken">
        {/* We add a lot of text here to test the scroll blur */}
        <div className="p-xl space-y-m">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-20 w-full bg-surface-raised rounded-medium border border-border-default/20"
            />
          ))}
        </div>
        <Story />
      </div>
    ),
  ],
}
