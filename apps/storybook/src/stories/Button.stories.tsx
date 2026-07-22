import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@components'
import { fn } from 'storybook/test'
import { Trash } from 'lucide-react'
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
      options: [
        'primary',
        'secondary',
        'outline',
        'destructive',
        'glass',
        'ghost',
      ], // New: added ghost to options
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'], // Matches our optimized Editor scale
      description: 'Button size',
    },
    children: {
      control: 'text',
      description: 'Button label',
      table: {
        disable: true,
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    // New: Added color controls to test the Color Dictionary Pattern
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'brand',
        'accent',
        'success',
        'warning',
        'danger',
        'info',
        'inverted',
      ],
      description: 'Explicit text color override',
    },
    iconColor: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'brand',
        'accent',
        'success',
        'warning',
        'danger',
        'info',
        'inverted',
      ],
      description: 'Explicit icon/spinner color override',
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

export const Glass: Story = {
  args: {
    variant: 'glass',
    size: 'md',
    children: 'Glass Button',
  },
}

export const DeleteItem: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    children: 'Delete item',
    iconColor: 'danger', // Changed to danger for a more logical "Delete" UI
    color: 'danger',
    /* FIX: Removed 'size={16}'! 
       The Button's renderIcon logic will now automatically inject size={20} 
       because this story uses size: 'lg'. 
    */
    startIcon: <Trash />,
  },
}

// New: Added an IconOnly story to test the 'icon' size variant
export const IconOnly: Story = {
  args: {
    variant: 'ghost',
    size: 'icon',
    startIcon: <Trash />,
    'aria-label': 'Delete', // Proper accessibility for icon buttons
  },
}
