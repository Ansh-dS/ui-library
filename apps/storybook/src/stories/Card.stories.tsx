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
} from '@components'

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
      control: 'radio',
      options: ['elevated', 'outlined'],
    },
    elevation: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    size: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Controls internal padding, gaps, AND typography scaling.',
    },
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
    size: 'md',
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        This is a basic elevated card. Try changing the size control now!
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
    size: 'lg',
    className: 'max-w-[480px]',
  },
  render: (args) => {
    // Staff logic: Map Card size to a "comfortable" Button size
    // We usually want footer buttons to stay a bit smaller than the card's scale
    const btnSize = args.size === 'lg' ? 'md' : 'sm'

    return (
      <Card {...args}>
        <CardHeader>
          <CardTitle>Form Settings</CardTitle>
          <CardDescription>
            Configure how your Tally form behaves.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-s">
            {/* Swapped hardcoded <p> for CardLabel */}
            <CardLabel>Visible to public</CardLabel>
            <div className="h-10 w-full bg-surface-sunken rounded-medium border border-border-default animate-pulse" />
          </div>
        </CardContent>

        <CardFooter className="gap-m">
          {/* Swapped raw <button> for your Button component with ghost variant */}
          <Button variant="destructive" size={btnSize}>
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
    size: 'md',
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        This style is perfect for secondary sidebars or settings panels.
      </CardContent>
    </Card>
  ),
}
