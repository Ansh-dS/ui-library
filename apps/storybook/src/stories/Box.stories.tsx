import type { Meta, StoryObj } from '@storybook/react-vite' // Standard React Storybook type
import { Box } from '@components'

// we are sending the 'type' of function.
// here it is JSX.Element(Box).
const meta: Meta<typeof Box> = {
  component: Box,
  title: 'Components/Box',
  // we can only mention the props of Box component.
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'nav', 'main', 'footer'],
      description:
        'The underlying HTML element to render for semantic SEO and accessibility.',
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    elevation: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description:
        'Applies semantic shadow tokens: raised (sm), overlay (md), or modal (lg).',
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    interactive: {
      control: 'boolean',
      description:
        'Enables hover "lift" transitions and cursor pointer for clickable surfaces.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    children: {
      control: 'text',
      description: 'The content to be rendered inside the box wrapper.',
    },
    className: {
      control: 'text',
      description:
        'Additional Tailwind CSS classes for custom styling overrides.',
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry.
  tags: ['autodocs'],
}

export default meta

// Adding a Default Story type to make the file complete
type Story = StoryObj<typeof Box>

export const Default: Story = {
  args: {
    children: 'I am a Box',
    className:
      'p-6 bg-surface-raised border border-border-default rounded-medium',
    elevation: 'sm',
    interactive: false,
  },
}
