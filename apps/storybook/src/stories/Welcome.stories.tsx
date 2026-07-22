import type { Meta, StoryObj } from '@storybook/react-vite'
import { linkTo } from '@storybook/addon-links'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '../../../server/components/Breadcrumb/Breadcrumb'
import { Box } from '../../../server/components/Box/Box'
import { Stack } from '../../../server/components/Stack/Stack'
import { Text } from '../../../server/components/Text/Text'
import { Badge } from '../../../server/components/Badge/Badge'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../../server/components/Card/Card'
import { Header } from '../../../server/components/Header/Header'
import {
  Sidebar,
  SidebarItem,
} from '../../../server/components/Sidebar/Sidebar'
import { Button } from '../../../server/components/Button/Button'
import {
  ToastProvider,
  useToast,
} from '../../../server/components/ToastProvider/ToastProvider'
import { Avatar } from '../../../server/components/Avatar/Avatar'
import { Home } from 'lucide-react'
import themeIcon from './themeIcon.png'
import modeIcon from './modeIcon.png'

const meta: Meta = {
  title: 'Welcome/Start Here',
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
      panelPosition: 'bottom',
    },
    controls: {
      disable: true,
      hideNoControlsWarning: true,
    },
    actions: {
      disable: true,
    },
  },
}

export default meta
type Story = StoryObj

const ToastMock = () => {
  const { showToast } = useToast()
  return (
    <Button
      variant="outline"
      onClick={() =>
        showToast({
          intent: 'info',
          title: 'Project Published',
          variant: 'solid',
        })
      }
    >
      Trigger Toast
    </Button>
  )
}

export const Welcome: Story = {
  render: () => (
    <ToastProvider>
      <Box className="w-full w-full p-6 md:p-12 flex flex-col gap-25 border-0 h-full">
        {/* Hero Zone */}
        <Stack align="center" className="pt-12 pb-4 border-0">
          <Text variant={'h1'}>⚡ Aura UI Design System</Text>
          <Text variant={'body'} className="mt-2">
            A native, dependency-free React component library built for absolute
            performance. Engineered to scale across any product identity with
            zero React re-renders.
          </Text>
        </Stack>

        {/* Theme & Mode Architecture Zone */}
        <Box className="flex flex-col gap-8 border-0">
          <Box className="border-0">
            <Text as="h2" variant={'h2'} className="mb-2">
              🎨 Global Theme Engine
            </Text>
            <Text variant={'label'}>
              Built on a highly optimized CSS-variable token architecture. To
              see the global transformation engine in action, use the controls
              located in the Storybook top bar above.
            </Text>
          </Box>

          <Card
            variant="sunken"
            padding="lg"
            className="mt-l border-border-default/40"
          >
            <Stack
              direction="horizontal"
              align="center"
              justify="center"
              gap="lg"
              className="w-full flex-wrap p-m"
            >
              {/* Theme Instruction */}
              <Stack
                direction="vertical"
                align="center"
                gap="sm"
                className="flex-1 p-m"
              >
                <Avatar
                  src={themeIcon}
                  alt="Theme Icon"
                  size="lg"
                  className="shadow-sm"
                />
                <Stack direction="vertical" align="center" gap="none">
                  <Text weight="bold" variant="subheader">
                    Change Theme
                  </Text>
                  <Text
                    variant="label"
                    color="secondary"
                    align="center"
                    className="mt-s"
                  >
                    Click the palette icon in the top bar to simulate a product
                    rebrand across all components instantly.
                  </Text>
                </Stack>
              </Stack>

              {/* Vertical Divider (Hidden on small screens) */}
              <Box className="w-px h-32 bg-border-default opacity-20 hidden md:block" />

              {/* Mode Instruction */}
              <Stack
                direction="vertical"
                align="center"
                gap="sm"
                className="flex-1 p-m"
              >
                <Avatar
                  src={modeIcon}
                  alt="Mode Icon"
                  size="lg"
                  className="shadow-sm"
                />
                <Stack direction="vertical" align="center" gap="none">
                  <Text weight="bold" variant="subheader">
                    Toggle Mode
                  </Text>
                  <Text
                    variant="label"
                    color="secondary"
                    align="center"
                    className="mt-s"
                  >
                    Click the moon/sun icon in the top bar to switch between the
                    semantic light and dark lighting layers.
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Card>
        </Box>

        {/* Highlight Reel Zone */}
        <Box className="flex flex-col gap-8 border-0 border-border-default/30">
          <Box className="border-0">
            <Text as="h2" variant={'h2'} className="mb-2">
              🎯 Compound Components
            </Text>
            <Text variant={'label'}>
              Select any component below to jump directly to its interactive
              documentation and source code.
            </Text>
          </Box>

          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 border-0">
            {/* 1. Header (Wide) */}
            <Card padding="none" className="group md:col-span-2 flex flex-col">
              <Stack
                align="center"
                justify="center"
                className="h-48 relative border-b border-border-default/40 bg-surface-sunken px-4"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-base opacity-50 pointer-events-none"></div>
                <Card
                  elevation="md"
                  padding="none"
                  className="w-full relative z-10 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <Header
                    title="Tally"
                    navPosition="left"
                    variant="default"
                    className="h-14"
                    logo={
                      <div className="w-6 h-6 bg-action-primary rounded-xs shrink-0" />
                    }
                    actions={
                      <div className="flex items-center gap-m">
                        <Button variant="primary" size="sm">
                          Create
                        </Button>
                        <Avatar size="sm" fallback="U" className="ml-s" />
                      </div>
                    }
                  >
                    <div className="flex items-center gap-l hidden sm:flex">
                      <Text
                        variant="body"
                        color="secondary"
                        className="cursor-pointer"
                      >
                        Dashboard
                      </Text>
                      <Text
                        variant="body"
                        color="secondary"
                        className="cursor-pointer"
                      >
                        Templates
                      </Text>
                    </div>
                  </Header>
                </Card>
              </Stack>
              <Stack
                direction="horizontal"
                align="center"
                justify="center"
                gap="md"
                className="p-6 flex-wrap mt-auto"
              >
                <Button
                  variant="ghost"
                  onClick={linkTo('Layout/Header')}
                  className="shrink-0 w-full md:w-auto"
                >
                  Inspect Header &rarr;
                </Button>
              </Stack>
            </Card>

            {/* 2. Sidebar (TALL) */}
            <Card padding="none" className="group md:row-span-2 flex flex-col">
              <Stack
                align="center"
                justify="center"
                className="flex-1 relative border-b border-border-default/40 bg-surface-sunken py-6 "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-base opacity-50 pointer-events-none"></div>
                <Card
                  elevation="md"
                  padding="none"
                  className="relative z-10 h-full w-full max-w-[200px] min-h-[320px] group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <Sidebar
                    className="w-full h-full bg-surface-sunken"
                    variant="inset"
                    position="left"
                  >
                    <SidebarItem icon="🏠" label="Dashboard" active />
                    <SidebarItem icon="📝" label="My Forms" badge="12" />
                    <SidebarItem icon="👥" label="Team" />
                    <SidebarItem icon="📊" label="Analytics" />
                    <SidebarItem icon="⚙️" label="Settings" />
                  </Sidebar>
                </Card>
              </Stack>
              <Stack
                direction="horizontal"
                align="center"
                justify="center"
                gap="md"
                className="p-6 flex-wrap mt-auto"
              >
                <Button
                  variant="ghost"
                  onClick={linkTo('Navigation/Sidebar')}
                  className="shrink-0 w-full md:w-auto"
                >
                  Inspect Sidebar &rarr;
                </Button>
              </Stack>
            </Card>

            {/* 3. Breadcrumb */}
            <Card padding="none" className="group flex flex-col">
              <Stack
                align="center"
                justify="center"
                className="h-48 relative border-b border-border-default/40 bg-surface-sunken"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-base opacity-50 pointer-events-none"></div>
                <Card
                  variant="outlined"
                  padding="md"
                  elevation="md"
                  className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <Breadcrumb>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">
                        <Home /> Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/electronics">
                        Electronics
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </Breadcrumb>
                </Card>
              </Stack>
              <Stack
                direction="horizontal"
                align="center"
                justify="center"
                gap="md"
                className="p-6 flex-wrap mt-auto"
              >
                <Button
                  variant="ghost"
                  onClick={linkTo('Navigation/Breadcrumb')}
                  className="shrink-0 w-full md:w-auto"
                >
                  Inspect Breadcrumb &rarr;
                </Button>
              </Stack>
            </Card>

            {/* 4. Toast */}
            <Card padding="none" className="group flex flex-col">
              <Stack
                align="center"
                justify="center"
                className="h-48 relative border-b border-border-default/40 bg-surface-sunken"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-base opacity-50 pointer-events-none"></div>
                <Box className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                  <ToastMock />
                </Box>
              </Stack>
              <Stack
                direction="horizontal"
                align="center"
                justify="center"
                gap="md"
                className="p-6 flex-wrap mt-auto"
              >
                <Button
                  variant="ghost"
                  onClick={linkTo('Feedback/Toast')}
                  className="shrink-0 w-full md:w-auto"
                >
                  Inspect Toast &rarr;
                </Button>
              </Stack>
            </Card>
          </Box>
        </Box>

        {/* Problem & Solution Architecture Section */}
        <Card
          padding="lg"
          elevation="sm"
          className="my-8 border-2 border-border-default/30"
        >
          <CardHeader className="border-border-default/30">
            <CardTitle className="text-h2">💡 Why Aura UI Was Built</CardTitle>
            <CardDescription>
              Addressing core friction points in modern web application UI
              engineering.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            {/* Problem vs Solution Grid */}
            <Box className="grid grid-cols-1 md:grid-cols-2 border-0 gap-4">
              {/* The Problem */}
              <Card
                variant="sunken"
                className="flex-1 p-4 border-border-default/20"
              >
                <Stack direction="vertical" gap="sm">
                  <Stack justify={'start'} gap="sm">
                    <Text weight="bold" variant="subheader">
                      Bloated & Rigid UI Libraries
                    </Text>
                    <Badge color="error">The Problem</Badge>
                  </Stack>
                  <Text variant="label" color="secondary">
                    Traditional component libraries often force heavy
                    third-party dependency trees, inconsistent styling
                    abstractions, and fragile theming mechanisms that make
                    global design system updates frustrating and error-prone.
                  </Text>
                </Stack>
              </Card>

              {/* The Solution */}
              <Card
                variant="sunken"
                className="flex-1 p-4 border-border-default/20"
              >
                <Stack direction="vertical" gap="sm">
                  <Stack justify={'start'} gap="sm">
                    <Text weight="bold" variant="subheader">
                      Native Token-Driven System
                    </Text>
                    <Badge color="success">The Solution</Badge>
                  </Stack>
                  <Text variant="label" color="secondary">
                    A zero-dependency React component library built on CVA and
                    CSS variables. Updating a single global token layer
                    transforms every component instantly across themes and modes
                    without breaking runtime performance.
                  </Text>
                </Stack>
              </Card>
            </Box>
          </CardContent>
        </Card>

        {/* Tech Stack Zone */}
        <Stack className="mt-4 pt-12 pb-8">
          <Box className="flex justify-center w-full border-0 ">
            {' '}
            <Text as="h3" variant={'h3'} color={'secondary'} className="mb-2">
              Powered By
            </Text>
          </Box>
          <Stack
            direction={'horizontal'}
            align="center"
            justify="center"
            className="flex-wrap gap-4 w-full"
          >
            <Badge color={'info'} size={'md'}>
              Typescript
            </Badge>
            <Badge color={'info'} size={'md'}>
              Monorepo pnpm Workspace
            </Badge>
            <Badge color={'info'} size={'md'}>
              Tailwind CSS
            </Badge>
            <Badge color={'info'} size={'md'}>
              Class Variance Authority
            </Badge>
            <Badge color={'info'} size={'md'}>
              Inquirer
            </Badge>
            <Badge color={'info'} size={'md'}>
              React
            </Badge>
            <Badge color={'info'} size={'md'}>
              Storybook 8
            </Badge>
          </Stack>
        </Stack>
      </Box>
    </ToastProvider>
  ),
}
