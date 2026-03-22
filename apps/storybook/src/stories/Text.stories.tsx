import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '@components'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Foundation/Text',
  argTypes: {
    // Maps to our sizing/role variants
    variant: {
      control: 'select',
      options: [
        'display',
        'h1',
        'h2',
        'h3',
        'subheader',
        'body',
        'label',
        'caption',
      ],
      description: 'Sets the semantic scale and line-height.',
    },
    // Maps to our foreground color tokens
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'brand',
        'accent',
        'inverted',
        'disabled',
        'success',
        'warning',
        'danger',
        'info',
      ],
    },
    // Maps to our typography weight tokens
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    // The polymorphic 'as' prop
    as: {
      control: 'select',
      options: ['p', 'span', 'h1', 'h2', 'h3', 'label', 'div'],
      description: 'Changes the underlying HTML element.',
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
    },
  },
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    variant: 'body',
    color: 'primary',
    weight: 'normal',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}

/**
 * Showcases the "Premium" Tally/Riverside title scale.
 */
export const HeadingShowcase: Story = {
  args: {
    variant: 'h1',
    color: 'primary',
    weight: 'bold',
    children: 'Building the future of SaaS.',
  },
}

/**
 * ⚠️ WARNING: 'Inverted' text is designed for high-contrast action surfaces.
 */
export const InvertedShowcase: Story = {
  args: {
    variant: 'subheader',
    color: 'inverted',
    weight: 'semibold',
    children: 'This is visible because of the Brand Background wrapper.',
  },
  decorators: [
    (Story) => (
      // Using your actual project tokens: bg-action-primary, p-l, rounded-medium
      <div className="bg-action-primary p-l rounded-medium">
        <Story />
      </div>
    ),
  ],
}
