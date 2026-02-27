import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '@components'
const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
}
export default meta
export const Image: StoryObj<typeof Avatar> = {
  args: {
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    alt: 'User',
  },
}
export const Fallback: StoryObj<typeof Avatar> = { args: { fallback: 'AS' } }
