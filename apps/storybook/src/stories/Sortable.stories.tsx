import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Sortable,
  SortableItem,
  SortableDragHandle,
  SortableActions,
  SortableAction,
} from '@components'
import { Trash2, Copy, Settings } from 'lucide-react'

const meta: Meta<typeof Sortable> = {
  title: 'Layout/Sortable',
  component: Sortable,
  argTypes: {
    isDraggingOver: { control: 'boolean' },
    placeholder: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Sortable>

/* -------------------------------------------------------------------------- */
/* 1. DEFAULT CARD VIEW                                                       */
/* -------------------------------------------------------------------------- */
export const DefaultCards: Story = {
  args: {
    isDraggingOver: false,
  },
  render: (args) => (
    <Sortable {...args}>
      <SortableItem variant="card">
        {/* The Container */}
        <SortableActions>
          {/* The Drag Icon */}
          <SortableDragHandle />
        </SortableActions>
        <div className="flex-1 p-m pl-0 text-body">Standard Card Item</div>
      </SortableItem>

      <SortableItem variant="card" isSelected>
        <SortableActions>
          <SortableDragHandle />
        </SortableActions>
        <div className="flex-1 p-m pl-0 text-body">Selected Card Item</div>
      </SortableItem>
    </Sortable>
  ),
}

/* -------------------------------------------------------------------------- */
/* 2. TALLY-STYLE CANVAS (The Modern Look)                                    */
/* -------------------------------------------------------------------------- */
export const TallyStyleCanvas: Story = {
  name: 'Variant: Canvas (Tally Style)',
  args: {
    isDraggingOver: false,
  },
  render: (args) => (
    <Sortable {...args}>
      {/* Item 1: Hover to see the Trash & Grip */}
      <SortableItem variant="canvas">
        <SortableActions>
          <SortableDragHandle />
          {/* A Custom Action Button */}
          <SortableAction onClick={() => alert('Delete clicked')}>
            <Trash2 size={14} />
          </SortableAction>
        </SortableActions>
        <div className="flex-1 p-m pl-0">
          <div className="font-weight-bold text-fg-primary">Full Name</div>
          <div className="text-caption text-fg-tertiary">
            A simple text input for names
          </div>
        </div>
      </SortableItem>

      {/* Item 2: Active State with Tally sidebar accent */}
      <SortableItem variant="canvas" isSelected>
        <SortableActions>
          <SortableDragHandle />
          <SortableAction>
            <Copy size={14} />
          </SortableAction>
          <SortableAction className="hover:text-error-primary">
            <Trash2 size={14} />
          </SortableAction>
        </SortableActions>
        <div className="flex-1 p-m pl-0">
          <div className="font-weight-bold text-fg-primary">Email Address</div>
          <div className="mt-s p-m border border-border-default rounded-base bg-surface-elevated/50 text-fg-disabled">
            name@example.com
          </div>
        </div>
      </SortableItem>

      {/* Item 3: Multi-action example */}
      <SortableItem variant="canvas">
        <SortableActions>
          <SortableDragHandle />
          <SortableAction>
            <Settings size={14} />
          </SortableAction>
        </SortableActions>
        <div className="flex-1 p-m pl-0 text-body">
          Configure settings block...
        </div>
      </SortableItem>
    </Sortable>
  ),
}

/* -------------------------------------------------------------------------- */
/* 3. EMPTY STATE                                                             */
/* -------------------------------------------------------------------------- */
export const Empty: Story = {
  args: {
    isDraggingOver: false,
    placeholder: 'Your canvas is empty. Start by dragging blocks here.',
    children: null,
  },
}
