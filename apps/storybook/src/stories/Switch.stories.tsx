import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from '@components'
const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
}
export default meta
export const Default: StoryObj<typeof Switch> = {
  args: { label: 'Toggle Feature', checked: false },
}
