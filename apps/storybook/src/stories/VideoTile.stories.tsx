import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { VideoTile } from '@components'

const meta: Meta<typeof VideoTile> = {
  title: 'Media/VideoTile',
  component: VideoTile,
  argTypes: {
    mirrored: { control: 'boolean' },
    isSpeaking: { control: 'boolean' },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-150 h-100">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof VideoTile>

function LocalMirroredPreview(args: Story['args']) {
  const [mockStream, setMockStream] = useState<MediaStream | null>(null)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(setMockStream)
      .catch(() => console.warn('Camera access denied for Storybook'))
  }, [])

  return <VideoTile {...args} stream={mockStream} />
}

export const LocalMirrored: Story = {
  args: {
    mirrored: true,
    muted: true, // Always mute local video to prevent feedback loops
    participantName: 'You (Host)',
    isSpeaking: false,
  },
  render: (args) => <LocalMirroredPreview {...args} />,
}
