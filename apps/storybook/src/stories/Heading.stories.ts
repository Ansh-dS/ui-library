import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading } from '@components'

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Heading',
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'],
      description: 'The semantic HTML heading level or a div wrapper.',
      table: { defaultValue: { summary: 'h2' } }, // Aligned with Component default
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Visual size mapped to h3-display tokens.',
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'brand'],
      description: 'Text color variant from global foreground tokens.',
      table: { defaultValue: { summary: 'default' } },
    },
    children: {
      control: 'text',
      description: 'Text, icons, or inline highlights.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes for layout or overrides.',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    as: 'h2',
    size: 'lg',
    color: 'default',
    children: 'The Quick Brown Fox',
  },
}

export const Muted: Story = {
  args: {
    as: 'h3',
    size: 'md',
    color: 'muted',
    children: 'Sub-heading with secondary focus',
  },
}
