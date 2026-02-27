import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from '@components'
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}
export default meta
export const Default: StoryObj<typeof Card> = {
  args: { children: 'This is a card', variant: 'elevated' },
}
