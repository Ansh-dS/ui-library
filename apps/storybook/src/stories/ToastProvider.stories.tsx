import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ToastProvider,
  useToast,
  Button,
  Stack,
  Text,
  Toast,
  ToastIcon,
  ToastContent,
  ToastTitle,
  ToastDescription,
  ToastAction,
} from '@components'

const meta: Meta<typeof ToastProvider> = {
  title: 'Feedback/Toast',
  component: ToastProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  /* Since ToastProvider just takes children, we don't need complex argTypes, 
     but we can describe the showToast API here for the docs. */
}

export default meta
type Story = StoryObj<typeof ToastProvider>

/* -------------------------------------------------------------------------- */
/* HELPER: TRIGGER GALLERY                                                    */
/* -------------------------------------------------------------------------- */

const ToastGallery = () => {
  const { showToast } = useToast()

  return (
    <Stack
      direction="vertical"
      gap="lg"
      align="center"
      className="w-150 p-xl border border-dashed border-border-default rounded-large"
    >
      <Text weight="semibold" color="secondary">
        Live Trigger Gallery (Zero Re-render Architecture)
      </Text>

      <Stack
        direction="horizontal"
        gap="md"
        justify="center"
        className="flex-wrap"
      >
        {/* Testing Solid Success */}
        <Button
          variant="primary"
          onClick={() =>
            showToast({
              intent: 'success',
              title: 'Project Published',
              variant: 'solid', // Testing our new variant API
            })
          }
        >
          Solid Success
        </Button>

        {/* Testing Glass Info */}
        <Button
          variant="outline"
          onClick={() =>
            showToast({
              intent: 'info',
              title: 'Update Available',
              variant: 'glass', // Testing the Backdrop Blur physics
              description: 'A new version of the editor is ready to install.',
            })
          }
        >
          Glass Info
        </Button>

        {/* Testing Structural Customization (Hide Close Button) */}
        <Button
          variant="secondary"
          color="warning"
          onClick={() =>
            showToast({
              intent: 'warning',
              title: 'Storage almost full',
              description: 'You have used 90% of your available space.',
              hideClose: true, // Testing structural lock removal
            })
          }
        >
          Warning (No Close)
        </Button>

        {/* Testing Minimalist Toast (Hide Icon) */}
        <Button
          variant="destructive"
          onClick={() =>
            showToast({
              intent: 'error',
              title: 'Upload Failed',
              variant: 'subtle',
              hideIcon: true, // Testing structural lock removal
              description: 'The file format ".mov" is not supported.',
              duration: 8000,
            })
          }
        >
          Minimal Error
        </Button>
      </Stack>

      <Text variant="caption" color="secondary" className="text-center">
        Click multiple buttons to test the "Law of the Queue" (Stacking
        physics).
      </Text>
    </Stack>
  )
}

/* -------------------------------------------------------------------------- */
/* STORIES                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * THE LIVE SYSTEM
 * This story demonstrates the full Toast Engine. It uses the ToastProvider
 * to manage the state and the useToast hook to trigger notifications.
 */
export const LiveSystem: Story = {
  render: () => (
    <ToastProvider>
      <ToastGallery />
    </ToastProvider>
  ),
}

/**
 * THE STATIC DESIGN PREVIEW
 * This allows developers to inspect the CSS and layout of the Toast
 * component itself without having to trigger a timer-based event.
 */
export const DesignPreview: Story = {
  render: () => (
    <Stack direction="vertical" gap="md" className="w-105">
      <Text weight="bold">Design Tokens Preview (Static)</Text>

      {/* Success Variant - Solid */}
      <Toast intent="success" variant="solid">
        <ToastIcon />
        <ToastContent>
          <ToastTitle>Static Success</ToastTitle>
          <ToastDescription>
            Testing high-contrast solid typography.
          </ToastDescription>
        </ToastContent>
        <ToastAction />
      </Toast>

      {/* Error Variant - Subtle */}
      <Toast intent="error" variant="subtle">
        <ToastIcon />
        <ToastContent>
          <ToastTitle>Connection Lost</ToastTitle>
          <ToastDescription>
            Please check your internet settings.
          </ToastDescription>
        </ToastContent>
        <ToastAction />
      </Toast>

      {/* Minimalist Variant - No Icon, No Action */}
      <Toast intent="info" variant="subtle">
        <ToastContent>
          <ToastTitle>Processing Data...</ToastTitle>
        </ToastContent>
      </Toast>

      {/* Glassmorphism Test (on Dark) */}
      <div className="p-l bg-slate-900 rounded-medium">
        <Toast intent="info" variant="glass">
          <ToastIcon />
          <ToastContent>
            <ToastTitle>Kashmir Alpine Palette</ToastTitle>
            <ToastDescription>
              Testing backdrop-blur on dark backgrounds.
            </ToastDescription>
          </ToastContent>
          <ToastAction />
        </Toast>
      </div>
    </Stack>
  ),
}
