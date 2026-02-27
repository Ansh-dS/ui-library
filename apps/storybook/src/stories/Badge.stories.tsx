import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@components'
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
}
export default meta
export const Success: StoryObj<typeof Badge> = {
  args: { children: 'Active', color: 'success' },
}
