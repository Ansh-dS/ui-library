import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ToastProvider, useToast } from '@components'

const meta: Meta<typeof ToastProvider> = {
  title: 'Feedback/Toast',
  component: ToastProvider,
  tags: ['autodocs'],
}

export default meta

const ToastTrigger = () => {
  const { showToast } = useToast()
  return (
    <div className="flex gap-m">
      <button
        onClick={() => showToast('Recording started!', 'success')}
        className="p-m bg-status-success text-white rounded-base"
      >
        Success
      </button>
      <button
        onClick={() => showToast('Network unstable', 'warning')}
        className="p-m bg-status-warning text-white rounded-base"
      >
        Warning
      </button>
    </div>
  )
}

export const Default: StoryObj = {
  render: () => (
    <ToastProvider>
      <ToastTrigger />
    </ToastProvider>
  ),
}
