import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AudioVisualizer } from '@components'

const meta: Meta<typeof AudioVisualizer> = {
  title: 'Media/AudioVisualizer',
  component: AudioVisualizer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AudioVisualizer>

function MicrophoneInputPreview() {
  const [stream, setStream] = useState<MediaStream | null>(null)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(setStream)
      .catch(() => console.warn('Mic access denied'))
  }, [])

  return (
    <div className="w-80 p-l bg-surface-base border border-border-default rounded-large">
      <p className="text-label text-fg-secondary mb-s">Microphone Level</p>
      <AudioVisualizer stream={stream} />
    </div>
  )
}

export const MicrophoneInput: Story = {
  render: () => <MicrophoneInputPreview />,
}
