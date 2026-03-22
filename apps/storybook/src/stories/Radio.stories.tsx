import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio } from '@components'
const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
}
export default meta
export const Default: StoryObj<typeof Radio> = {
  args: { label: 'Radio Option', name: 'group1' },
}
