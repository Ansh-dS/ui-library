import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@components'
/* 
don't need this as already loaded/mentioned in preview.ts. 
import '../../../../global.css'
*/

// we are sending the 'type' of function.
// here it is JSX.Element(Button).
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  // we can only mention the props of button compnent.
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Button style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    text: {
      control: 'text',
      description: 'Button label',
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry.
  tags: ['autodocs'],

  // Use `fn` to spy on the onClick arg.
  // which will appear in the actions panel once invoked.
}

export default meta

type Story = StoryObj<typeof meta>

// this is going to render under Button story.
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    text: 'click me',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    text: 'click me',
  },
}
