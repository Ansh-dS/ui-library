import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@components'
import {
  Home,
  Folder,
  Cpu,
  Keyboard,
  Wifi,
  Layout,
  FileText,
  CreditCard,
} from 'lucide-react'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'solid', 'glass'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

/* -------------------------------------------------------------------------- */
/* 1. TALLY STYLE: Information Dense & Precise                                */
/* -------------------------------------------------------------------------- */
export const TallyDefault: Story = {
  args: {
    variant: 'default',
    size: 'md',
  },
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <Home /> Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/electronics">Electronics</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/computer">Computer</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink isCurrentPage>Wireless</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
}

/* -------------------------------------------------------------------------- */
/* 2. MODERN SOLID: Using the 'action-primary-subtle' Glow                     */
/* -------------------------------------------------------------------------- */
export const ModernSolid: Story = {
  args: {
    variant: 'solid',
    size: 'md',
  },
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <Layout /> Dashboard
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        {/* The isCurrentPage link will use bg-action-primary-subtle */}
        <BreadcrumbLink isCurrentPage>
          <CreditCard /> Billing & Plans
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
}

/* -------------------------------------------------------------------------- */
/* 3. SCALING RATIO TEST: Compare Sizes                                      */
/* -------------------------------------------------------------------------- */
export const ScalingComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <span className="text-fg-tertiary text-xs block mb-2 uppercase tracking-widest">
          Small (Caption + 14px Icons)
        </span>
        <Breadcrumb size="sm" variant="solid">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home /> Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink isCurrentPage>
              <Wifi /> Wireless
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div>
        <span className="text-fg-tertiary text-xs block mb-2 uppercase tracking-widest">
          Large (Body + 20px Icons)
        </span>
        <Breadcrumb size="lg" variant="solid">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home /> Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink isCurrentPage>
              <Wifi /> Wireless
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------------------- */
/* 4. RIVERSIDE GLASS: For Media Overlays                                     */
/* -------------------------------------------------------------------------- */
export const RiversideGlass: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    variant: 'glass',
    size: 'md',
  },
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/media">
          <Folder /> Media
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/raw">Raw Footage</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink isCurrentPage>
          <FileText /> Sequence_01.mp4
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
}

/* -------------------------------------------------------------------------- */
/* 5. ICON ONLY (MUI Style)                                                  */
/* -------------------------------------------------------------------------- */
export const IconOnly: Story = {
  args: {
    size: 'lg',
    variant: 'default',
  },
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <Home />
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/tech">
          <Cpu />
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/input">
          <Keyboard />
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink isCurrentPage>
          <Wifi />
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  ),
}
