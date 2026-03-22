import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header, Avatar, Button, Text } from '@components'

const meta: Meta<typeof Header> = {
  title: 'Layout/Header', // Moved from Navigation to Layout since it dictates page structure
  component: Header,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'transparent', 'floating'],
      description: 'The visual style of the header',
    },
    navPosition: {
      control: 'radio',
      options: ['left', 'center'],
      description: 'Structural layout: left (Tally) or center (Riverside)',
    },
    title: {
      control: 'text',
      description: 'The brand name or workspace title',
    },
    logo: { table: { disable: true } },
    children: { table: { disable: true } },
    actions: { table: { disable: true } },
  },
  parameters: {
    // Ensures the header stretches across the entire Storybook canvas for accurate testing
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Header>

export const DefaultTally: Story = {
  args: {
    navPosition: 'left', // Explicitly setting the Tally mode
    variant: 'default',
    title: 'Tally',
    logo: (
      /* A square placeholder to mimic Tally's branding */
      <div className="w-8 h-8 bg-action-primary rounded-xs shrink-0" />
    ),
    children: (
      // Replaced <nav> with a simple <div> since Header.tsx handles the <nav> tag now
      <div className="flex items-center gap-l">
        {/* STAFF FIX: To avoid the 'href' TypeScript error, we use the standard <a> tag 
            but wrap it in <Text>. This guarantees the styling is correct while 
            keeping TypeScript happy. 
        */}
        <a href="#" className="group">
          <Text
            variant="body"
            color="secondary"
            className="transition-colors group-hover:text-fg-primary cursor-pointer"
          >
            Dashboard
          </Text>
        </a>
        <a href="#" className="group">
          <Text
            variant="body"
            color="secondary"
            className="transition-colors group-hover:text-fg-primary cursor-pointer"
          >
            Templates
          </Text>
        </a>
        <a href="#" className="group">
          <Text
            variant="body"
            color="secondary"
            className="transition-colors group-hover:text-fg-primary cursor-pointer"
          >
            Integrations
          </Text>
        </a>
      </div>
    ),
    actions: (
      <div className="flex items-center gap-m">
        <Button variant="outline" size="sm">
          Feedback
        </Button>
        <Button variant="primary" size="sm">
          Create Form
        </Button>
        <Avatar size="sm" fallback="AS" className="ml-s" />
      </div>
    ),
  },
}

// Added the Riverside mode so you can test the Equilibrium layout
export const CenteredRiverside: Story = {
  args: {
    ...DefaultTally.args,
    navPosition: 'center', // Flips the layout engine to absolute center
    title: 'Riverside',
    logo: (
      /* A circular placeholder to mimic Riverside's recording vibe */
      <div className="w-8 h-8 bg-status-danger rounded-full shrink-0" />
    ),
    children: (
      <div className="flex items-center gap-l">
        <a href="#" className="group">
          <Text
            variant="body"
            color="secondary"
            className="transition-colors group-hover:text-fg-primary cursor-pointer"
          >
            Studios
          </Text>
        </a>
        <a href="#" className="group">
          <Text
            variant="body"
            color="secondary"
            className="transition-colors group-hover:text-fg-primary cursor-pointer"
          >
            Status
          </Text>
        </a>
      </div>
    ),
  },
}

export const TransparentHero: Story = {
  args: {
    ...DefaultTally.args,
    variant: 'transparent',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const TrendingFloating: Story = {
  args: {
    ...DefaultTally.args,
    variant: 'floating',
    navPosition: 'center', // Floating headers look best with centered nav (Riverside style)
    title: 'LegalSahyak',
  },
  /*
  absolute vs flex/gap: 
    flex/gap: to provide the equal space. 
    absolute: to fix the position of the each element individually with respect to the other( mention relative. )
  */
  decorators: [
    (Story) => (
      /* relative: it sets the 'with respect to' for the absolute rather than the entire page.*/
      <div className="bg-surface-sunken h-75 p-0 relative overflow-hidden">
        {/* 
          blur and opacity together defines the backgound so it looks good
          inset-0: it's a shorthand for 4 things mentioned below: 
              top, left, right, bottom. 
          */}
        <div className="absolute inset-0 p-20 opacity-20">
          {/*these are the two circles (red and blue) which we are positioning using 'absolute' and applying blur onto onto them*/}
          <div className="w-40 h-40 bg-action-primary rounded-full blur-3xl absolute top-10 left-10" />
          <div className="w-60 h-60 bg-status-danger rounded-full blur-3xl absolute bottom-10 right-10" />
        </div>
        <Story />
      </div>
    ),
  ],
}
