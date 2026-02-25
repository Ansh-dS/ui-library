import type { Meta, StoryObj } from '@storybook/react-vite' // Standard React Storybook type
import { Stack } from '@components'
import { Box } from '@components' // Importing Box to use as items inside the Stack

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'section', 'nav', 'form', 'ul'],
      description: 'The underlying HTML element to render.',
      table: { defaultValue: { summary: 'div' } },
    },
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The primary axis along which children are laid out.',
      table: { defaultValue: { summary: 'vertical' } },
    },
    gap: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'The spacing between direct children.',
      table: { defaultValue: { summary: 'md' } },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment of children along the cross-axis.',
      table: { defaultValue: { summary: 'start' } },
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment of children along the main-axis.',
      table: { defaultValue: { summary: 'start' } },
    },
    children: {
      control: false, // Usually better to handle children via Stories
      description: 'The items to be laid out within the flex container.',
    },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Stack>

export const Default: Story = {
  args: {
    direction: 'horizontal',
    gap: 'md',
    align: 'center',
    justify: 'center',
    children: (
      <>
        <Box className="p-4 bg-surface-raised border border-border-default rounded-medium">
          Item 1
        </Box>
        <Box className="p-4 bg-surface-raised border border-border-default rounded-medium">
          Item 2
        </Box>
        <Box className="p-4 bg-surface-raised border border-border-default rounded-medium">
          Item 3
        </Box>
      </>
    ),
  },
}
