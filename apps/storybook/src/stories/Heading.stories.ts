import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading } from '@components'

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Components/Heading',
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'],
      description: 'The semantic HTML heading level.',
      table: { defaultValue: { summary: 'h1' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description:
        'The visual size of the heading, mapped to your h3-display tokens.',
      table: { defaultValue: { summary: 'md' } },
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'brand'],
      description: 'The text color variant from your global foreground tokens.',
      table: { defaultValue: { summary: 'default' } },
    },
    children: {
      control: 'text',
      description: 'The text content of the heading.',
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
    as: 'h1',
    size: 'lg',
    color: 'default',
    children: 'The Quick Brown Fox',
  },
}

export const Muted: Story = {
  args: {
    as: 'h2',
    size: 'md',
    color: 'muted',
    children: 'Sub-heading with secondary focus',
  },
}
