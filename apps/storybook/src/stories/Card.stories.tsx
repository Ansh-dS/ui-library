import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardLabel,
  Button,
  Stack, // NEW: Added Stack to replace raw divs
  Box, // NEW: Added Box for inner elements
} from '@components'
import { UploadCloud, Settings, ArrowRight } from 'lucide-react'

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  subcomponents: {
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
    CardLabel,
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      /* FIX: Changed from radio to select since we have 5 variants now */
      control: 'select',
      options: ['elevated', 'outlined', 'glass', 'sunken', 'interactive'],
    },
    elevation: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    /* FIX: Renamed 'size' to 'padding' to match the updated CardContext architecture */
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Controls internal padding, gaps, AND typography scaling.',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Card>

/**
 * Basic usage.
 * Text inside CardContent automatically inherits the correct padding.
 */
export const Default: Story = {
  args: {
    variant: 'elevated',
    elevation: 'sm',
    padding: 'md', // FIX: Updated prop name
  },
  render: (args) => (
    <Card {...args} className="max-w-md text-center">
      <CardContent>
        This is a basic elevated card. Try changing the padding control now!
      </CardContent>
    </Card>
  ),
}

/**
 * The "Tally Dashboard" Pattern.
 * Now fully semantic—no hardcoded typography classes remaining.
 */
export const Complex: Story = {
  args: {
    variant: 'elevated',
    elevation: 'sm',
    padding: 'lg', // FIX: Updated prop name
    className: 'max-w-[480px]',
  },
  render: (args) => {
    /* FIX: Map Card padding to a "comfortable" Button size
       We usually want footer buttons to stay a bit smaller than the card's scale
    */
    const btnSize = args.padding === 'lg' ? 'md' : 'sm'

    return (
      <Card {...args}>
        <CardHeader>
          <CardTitle>Form Settings</CardTitle>
          <CardDescription>
            Configure how your Tally form behaves.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* NEW: Swapped raw <div flex> for our Stack component to ensure rhythm */}
          <Stack
            direction="vertical"
            gap="sm"
            className="border-0 bg-transparent"
          >
            {/* Swapped hardcoded <p> for CardLabel */}
            <CardLabel>Visible to public</CardLabel>
            <Box className="h-10 w-full bg-surface-sunken rounded-medium border border-border-default animate-pulse" />
          </Stack>
        </CardContent>

        <CardFooter className="gap-m">
          {/* Swapped raw <button> for your Button component with ghost variant */}
          <Button variant="ghost" size={btnSize}>
            Cancel
          </Button>

          <Button size={btnSize}>Save Changes</Button>
        </CardFooter>
      </Card>
    )
  },
}

/**
 * The "Riverside Studio" Pattern.
 * Low-depth, high-utility outlined version.
 */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    elevation: 'none',
    padding: 'md', // FIX: Updated prop name
    className: 'max-w-[400px]',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <Stack
          direction="horizontal"
          align="center"
          gap="sm"
          className="border-0 bg-transparent"
        >
          <Settings className="text-fg-secondary" size={18} />
          <CardTitle>Advanced Preferences</CardTitle>
        </Stack>
      </CardHeader>
      <CardContent>
        <CardDescription>
          This style is perfect for secondary sidebars or settings panels where
          you don't want shadows competing for attention.
        </CardDescription>
      </CardContent>
    </Card>
  ),
}

/* =================================================================
     NEW STORIES: The "Hot" Engineering Variants
   ================================================================= */

/**
 * NEW: The "Interactive" Action Card.
 * Uses physical translation (-translate-y) and scale on active state.
 */
export const Interactive: Story = {
  args: {
    variant: 'interactive',
    padding: 'md',
    className: 'max-w-[320px]',
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <Stack
          direction="vertical"
          gap="md"
          className="border-0 bg-transparent h-full justify-between"
        >
          <Stack
            direction="vertical"
            gap="sm"
            className="border-0 bg-transparent"
          >
            <CardTitle>Create Blank Form</CardTitle>
            <CardDescription>
              Start from scratch with a new canvas.
            </CardDescription>
          </Stack>
          <ArrowRight className="text-fg-secondary mt-auto" size={16} />
        </Stack>
      </CardContent>
    </Card>
  ),
}

/**
 * NEW: The "Sunken" Receptacle Card.
 * Uses shadow-inner to look like a physical well. Perfect for Dropzones.
 */
export const Sunken: Story = {
  args: {
    variant: 'sunken',
    padding: 'lg',
    className: 'max-w-[400px] border-dashed',
  },
  render: (args) => (
    <Card {...args}>
      <CardContent className="items-center justify-center text-center">
        <UploadCloud className="text-fg-secondary mb-m" size={32} />
        <CardTitle>Drag & Drop</CardTitle>
        <CardDescription>Drop your logo image here to upload.</CardDescription>
      </CardContent>
    </Card>
  ),
}

/**
 * NEW: The "Riverside Glass" Modal Card.
 * Needs a dark or complex background to show off the backdrop-blur.
 */
export const Glass: Story = {
  args: {
    variant: 'glass',
    padding: 'lg',
    className: 'max-w-[400px]',
  },
  parameters: {
    // Adding a dark background to show off the translucent glass effect
    backgrounds: { default: 'dark' },
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader className="bg-transparent border-white/10">
        <CardTitle className="text-white">Studio Upgrade</CardTitle>
        <CardDescription className="text-white/70">
          Unlock 4K recording and AI transcripts.
        </CardDescription>
      </CardHeader>
      <CardFooter className="bg-transparent border-white/10">
        <Button variant="primary" fullWidth>
          Upgrade Now
        </Button>
      </CardFooter>
    </Card>
  ),
}
