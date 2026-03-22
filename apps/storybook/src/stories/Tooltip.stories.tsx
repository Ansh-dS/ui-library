import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip, Button } from '@components'
import React from 'react'
const meta: Meta<typeof Tooltip> = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
}
export default meta
export const Default: StoryObj<typeof Tooltip> = {
  args: {
    children: <Button text="Hover me" aria-label="hover" isLoading={false} />,
    content: 'Tooltip content',
  },
}
