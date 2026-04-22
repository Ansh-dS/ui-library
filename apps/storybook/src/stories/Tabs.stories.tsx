import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@components'
import { User, Lock, Folder, Bell, Shield, Database } from 'lucide-react'

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'pill', 'glass'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

/* -------------------------------------------------------------------------- */
/* 1. TALLY DEFAULT: Clean Underline                                          */
/* -------------------------------------------------------------------------- */
export const Underline: Story = {
  args: {
    defaultValue: 'account',
    variant: 'underline',
    className: 'w-[600px]',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="billing" disabled>
          Billing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Account settings and preferences. Configure your profile here.
      </TabsContent>
      <TabsContent value="security">
        Password and authentication settings. Two-factor is recommended.
      </TabsContent>
    </Tabs>
  ),
}

/* -------------------------------------------------------------------------- */
/* 2. MODERN PILL: The 3D Tactile Look (Tally Style)                          */
/* -------------------------------------------------------------------------- */
export const ModernPill: Story = {
  args: {
    defaultValue: 'general',
    variant: 'pill',
    size: 'md',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="general" startIcon={<User />}>
          General
        </TabsTrigger>
        <TabsTrigger value="notifications" startIcon={<Bell />}>
          Notifications
        </TabsTrigger>
        <TabsTrigger value="privacy" startIcon={<Shield />}>
          Privacy
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="general"
        className="p-4 bg-surface-sunken rounded-lg mt-4 border border-border-default"
      >
        General profile information and avatar settings.
      </TabsContent>
      <TabsContent
        value="notifications"
        className="p-4 bg-surface-sunken rounded-lg mt-4 border border-border-default"
      >
        Manage how and when you receive alerts.
      </TabsContent>
      <TabsContent
        value="privacy"
        className="p-4 bg-surface-sunken rounded-lg mt-4 border border-border-default"
      >
        Control your visibility and data sharing.
      </TabsContent>
    </Tabs>
  ),
}

/* -------------------------------------------------------------------------- */
/* 3. RIVERSIDE GLASS: For Media Editor Overlays                              */
/* -------------------------------------------------------------------------- */
export const RiversideGlass: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    defaultValue: 'video',
    variant: 'glass',
    size: 'sm',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="video">Video</TabsTrigger>
        <TabsTrigger value="audio">Audio</TabsTrigger>
        <TabsTrigger value="effects">Effects</TabsTrigger>
      </TabsList>
      <TabsContent value="video" className="text-fg-primary opacity-80 mt-4">
        Timeline resolution and frame rate settings.
      </TabsContent>
    </Tabs>
  ),
}

/* -------------------------------------------------------------------------- */
/* 4. VERTICAL NAVIGATION: For Side Panels                                     */
/* -------------------------------------------------------------------------- */
export const VerticalNavigation: Story = {
  args: {
    defaultValue: 'db',
    variant: 'underline',
    orientation: 'vertical',
    className: 'h-[200px]',
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList className="w-45">
        <TabsTrigger value="db" startIcon={<Database />}>
          Database
        </TabsTrigger>
        <TabsTrigger value="auth" startIcon={<Lock />}>
          Auth
        </TabsTrigger>
        <TabsTrigger value="storage" startIcon={<Folder />}>
          Storage
        </TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="db">Real-time database configuration.</TabsContent>
        <TabsContent value="auth">Authentication provider list.</TabsContent>
        <TabsContent value="storage">Cloud storage bucket metrics.</TabsContent>
      </div>
    </Tabs>
  ),
}
