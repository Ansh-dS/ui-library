const sharedDeps = [
  'class-variance-authority',
  'clsx',
  'tailwind-merge',
  'lucide-react',
]

// registryDependencies: In each component we are importing some pre-built components.
const registryIndex: Record<
  string,
  { dependencies: string[]; registryDependencies?: string[] }
> = {
  alert: { dependencies: sharedDeps, registryDependencies: [] },
  avatar: { dependencies: sharedDeps, registryDependencies: [] },
  badge: { dependencies: sharedDeps, registryDependencies: ['text'] },
  box: { dependencies: sharedDeps, registryDependencies: [] },
  breadcrumb: { dependencies: sharedDeps, registryDependencies: [] },
  button: {
    dependencies: sharedDeps,
    registryDependencies: ['spinner', 'text'],
  },
  card: { dependencies: sharedDeps, registryDependencies: ['text', 'box'] },
  checkbox: { dependencies: sharedDeps, registryDependencies: [] },
  datagrid: { dependencies: sharedDeps, registryDependencies: [] },
  'data-grid': { dependencies: sharedDeps, registryDependencies: [] },
  datalist: { dependencies: sharedDeps, registryDependencies: [] },
  'data-list': { dependencies: sharedDeps, registryDependencies: [] },
  dropdown: { dependencies: sharedDeps, registryDependencies: ['box'] },
  'drop-down': { dependencies: sharedDeps, registryDependencies: ['box'] },
  emptystate: { dependencies: sharedDeps, registryDependencies: ['text'] },
  'empty-state': { dependencies: sharedDeps, registryDependencies: ['text'] },
  errorboundary: {
    dependencies: sharedDeps,
    registryDependencies: ['text', 'button'],
  },
  'error-boundary': {
    dependencies: sharedDeps,
    registryDependencies: ['text', 'button'],
  },
  footer: { dependencies: sharedDeps, registryDependencies: [] },
  header: { dependencies: sharedDeps, registryDependencies: ['text'] },
  heading: { dependencies: sharedDeps, registryDependencies: [] },
  input: { dependencies: sharedDeps, registryDependencies: [] },
  label: { dependencies: sharedDeps, registryDependencies: [] },
  modal: { dependencies: sharedDeps, registryDependencies: [] },
  networkhealthindicator: {
    dependencies: sharedDeps,
    registryDependencies: [],
  },
  'network-health-indicator': {
    dependencies: sharedDeps,
    registryDependencies: [],
  },
  popover: { dependencies: sharedDeps, registryDependencies: [] },
  progressbar: { dependencies: sharedDeps, registryDependencies: [] },
  'progress-bar': { dependencies: sharedDeps, registryDependencies: [] },
  radio: { dependencies: sharedDeps, registryDependencies: [] },
  select: { dependencies: sharedDeps, registryDependencies: [] },
  sheet: { dependencies: sharedDeps, registryDependencies: [] },
  sidebar: {
    dependencies: sharedDeps,
    registryDependencies: ['error-boundary', 'button', 'box', 'stack', 'text'],
  },
  socialbutton: { dependencies: sharedDeps, registryDependencies: ['text'] },
  'social-button': { dependencies: sharedDeps, registryDependencies: ['text'] },
  sortable: {
    dependencies: sharedDeps,
    registryDependencies: ['box', 'stack', 'button'],
  },
  spinner: { dependencies: sharedDeps, registryDependencies: [] },
  stack: { dependencies: sharedDeps, registryDependencies: [] },
  stat: { dependencies: sharedDeps, registryDependencies: ['text'] },
  switch: { dependencies: sharedDeps, registryDependencies: [] },
  tabs: {
    dependencies: sharedDeps,
    registryDependencies: ['box', 'stack', 'button'],
  },
  text: { dependencies: sharedDeps, registryDependencies: [] },
  textarea: { dependencies: sharedDeps, registryDependencies: [] },
  'text-area': { dependencies: sharedDeps, registryDependencies: [] },
  toastprovider: {
    dependencies: sharedDeps,
    registryDependencies: ['box', 'stack', 'text', 'button'],
  },
  'toast-provider': {
    dependencies: sharedDeps,
    registryDependencies: ['box', 'stack', 'text', 'button'],
  },
  tooltip: { dependencies: sharedDeps, registryDependencies: ['text'] },
}

export default registryIndex
