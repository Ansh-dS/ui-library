import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs } from '@components'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    items: [
      {
        id: 'tab1',
        title: 'Account',
        panel: 'Account settings and preferences.',
      },
      {
        id: 'tab2',
        title: 'Security',
        panel: 'Password and authentication settings.',
      },
      {
        id: 'tab3',
        title: 'Billing',
        panel: 'Payment methods.',
        disabled: true,
      },
    ],
  },
}
