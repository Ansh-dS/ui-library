import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@components'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Input',
  argTypes: {
    variant: { control: 'select', options: ['outline', 'filled'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    error: { control: 'boolean' },
  },
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    placeholder: 'Enter your name...',
  },
}
