import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip, Button } from '@components'
import React from 'react'
const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
}
export default meta
export const Default: StoryObj<typeof Tooltip> = {
  args: {
    children: <Button text="Hover me" ariaLabel="hover" isLoading={false} />,
    content: 'Tooltip content',
  },
}
