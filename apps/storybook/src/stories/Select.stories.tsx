import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from '@components'
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
}
export default meta
export const Default: StoryObj<typeof Select> = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
}
