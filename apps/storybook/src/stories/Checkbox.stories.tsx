import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '@components'
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}
export default meta
export const Default: StoryObj<typeof Checkbox> = {
  args: { label: 'Accept Terms' },
}
