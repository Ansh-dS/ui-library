import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@components'
import { fn } from 'storybook/test'
/* don't need this as already loaded/mentioned in preview.ts. 
import '../../../../global.css'
*/

// we are sending the 'type' of function.
// here it is JSX.Element(Button).
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Inputs/Button',
  // we can only mention the props of button compnent.
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'destructive'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
      description: 'Button size',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
  args: {
    // we use `fn` to spy on the onClick arg.
    // which will appear in the actions panel once invoked.
    onClick: fn(),
  },
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry.
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

// this is going to render under Button story.
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Primary Action',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Action',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Outline Action',
  },
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    isLoading: true,
    children: 'Loading...',
  },
}
