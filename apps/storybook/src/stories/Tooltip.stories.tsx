import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip, Button, Stack } from '@components'

const meta: Meta<typeof Tooltip> = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  // 1. Documentation for the new variant and sizing props
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    variant: {
      control: 'select',
      options: ['dark', 'light', 'brand', 'glass'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    children: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      /* CRITICAL: We add padding (p-20) to the container to ensure 
         absolute tooltips have space to render without being clipped.
      */
      <div className="p-20 flex items-center justify-center min-h-[300px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Tooltip>

/* -------------------------------------------------------------------------- */
/* BASE STORIES                                                               */
/* -------------------------------------------------------------------------- */

export const Default: Story = {
  args: {
    position: 'top',
    variant: 'dark',
    size: 'md',
    content: 'Standard tooltip info',
    children: <Button variant="outline" text="Hover me (Dark)" />,
  },
}
/**
 * TRENDING: GLASS VARIANT
 * Notice the subtle blur effect on the background and the frosted border.
 */
export const Glass: Story = {
  args: {
    variant: 'glass',
    content: 'Glassmorphism aesthetic',
    children: <Button variant="outline" text="Hover for Glass" />,
  },
}

export const Light: Story = {
  args: {
    position: 'top',
    variant: 'light',
    content: 'High contrast tooltip',
    children: <Button variant="outline" text="Hover me (Light)" />,
  },
}

/**
 * BRAND VARIANT
 * Best used for product announcements or onboarding steps in Tally/Riverside.
 */
export const Brand: Story = {
  args: {
    position: 'top',
    variant: 'brand',
    content: 'Check out this new feature!',
    children: <Button variant="primary" text="New Feature" />,
  },
}

/* -------------------------------------------------------------------------- */
/* LAYOUT DEMONSTRATIONS                                                      */
/* -------------------------------------------------------------------------- */

/**
 * POSITIONS SHOWCASE
 * Demonstrates how the tooltip anchors to all four sides of a target.
 */
export const AllPositions: Story = {
  render: () => (
    <Stack className="gap-xl items-center">
      <Tooltip position="left" content="Left side">
        <Button variant="outline" text="Left" />
      </Tooltip>
      <Tooltip position="top" content="Top side">
        <Button variant="outline" text="Top" />
      </Tooltip>
      <Tooltip position="bottom" content="Bottom side">
        <Button variant="outline" text="Bottom" />
      </Tooltip>
      <Tooltip position="right" content="Right side">
        <Button variant="outline" text="Right" />
      </Tooltip>
    </Stack>
  ),
}

/**
 * SIZES SHOWCASE
 * Displays the geometric scaling from sm to lg.
 */
export const AllSizes: Story = {
  render: () => (
    <Stack className="gap-xl items-center">
      <Tooltip size="sm" content="Small tooltip">
        <Button size="sm" variant="outline" text="Small" />
      </Tooltip>
      <Tooltip size="md" content="Medium tooltip">
        <Button size="md" variant="outline" text="Medium" />
      </Tooltip>
      <Tooltip size="lg" content="Large tooltip">
        <Button size="lg" variant="outline" text="Large" />
      </Tooltip>
    </Stack>
  ),
}
