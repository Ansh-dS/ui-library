import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '@components'

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Label',
  argTypes: {
    required: { control: 'boolean' },
  },
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Email Address',
    required: false,
  },
}
