import type { Meta, StoryObj } from '@storybook/react-vite'
import { SocialButton, Stack, ThemeProvider } from '@components'

const meta: Meta<typeof SocialButton> = {
  title: 'Inputs/SocialButton',
  component: SocialButton,
  argTypes: {
    provider: {
      control: 'select',
      options: ['google', 'github', 'apple', 'generic', 'magic-link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-[400px] p-2xl bg-surface-base border border-border-default rounded-large shadow-sm">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SocialButton>

/* -------------------------------------------------------------------------- */
/* BASE BRAND STORIES                                                         */
/* -------------------------------------------------------------------------- */

/**
 * THE DEFAULT STORY
 * This ensures that when you first click the component, it shows a valid 
 * state instead of a generic button that blends into the background.
 */
export const Default: Story = {
  args: {
    provider: 'google',
    label: 'Continue with GitHub',
  },
}

export const Google: Story = {
  args: {
    provider: 'google',
    label: 'Continue with Google',
  }
}

export const GitHub: Story = {
  args: {
    provider: 'github',
    label: 'Continue with GitHub',
  },
}

/**
 * THE THEME-AWARE APPLE BUTTON
 * Apple strictly requires a black button in light mode, and a white button in dark mode.
 * We pass 'iconDark' so the component automatically swaps the logo color using 'useTheme'.
 */
export const AppleThemeAware: Story = {
  args: {
    provider: 'apple',
    label: 'Continue with Apple',
  },
}

/* -------------------------------------------------------------------------- */
/* THE MODERN B2B SAAS TREND                                                  */
/* -------------------------------------------------------------------------- */

/**
 * MAGIC LINK
 * Perfect for Tally and Riverside. Uses the brand's primary color with a transparent
 * tint to feel soft, premium, and frictionless.
 */
export const MagicLink: Story = {
  args: {
    provider: 'magic-link',
    label: 'Continue with Email',
  },
}

/* -------------------------------------------------------------------------- */
/* GEOMETRIC SCALING DEMONSTRATION                                            */
/* -------------------------------------------------------------------------- */


export const Sizes: Story = {
  render: () => (
    <Stack className="flex-col gap-m w-full">
      <SocialButton provider="github" size="sm" label="Small (sm)" />
      <SocialButton provider="github" size="md" label="Standard (md)" />
      <SocialButton provider="github" size="lg" label="Large (lg)" />
    </Stack>
  ),
}