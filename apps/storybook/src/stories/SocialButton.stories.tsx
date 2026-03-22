import type { Meta, StoryObj } from '@storybook/react-vite'
import { SocialButton } from '@components'

const meta: Meta<typeof SocialButton> = {
  title: 'Inputs/SocialButton',
  component: SocialButton,
  argTypes: {
    provider: {
      control: 'select',
      options: ['google', 'github', 'apple', 'generic'],
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SocialButton>

export const Google: Story = {
  args: {
    provider: 'google',
    label: 'Continue with Google',
    icon: <span className="text-xl">🇬</span>,
  },
}

export const GitHub: Story = {
  args: {
    provider: 'github',
    label: 'Continue with GitHub',
    icon: <span className="text-xl">🐙</span>,
  },
}
