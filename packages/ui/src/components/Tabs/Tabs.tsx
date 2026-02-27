import React, { useState } from 'react'
import { tabsVariants, TabsVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface TabItem {
  id: string
  title: React.ReactNode
  panel?: React.ReactNode
  disabled?: boolean
}

export interface TabsProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    TabsVariantsType {
  items?: TabItem[]
  activeId?: string
  defaultActiveId?: string
  onChange?: (id: string) => void
}

export function Tabs(props: TabsProps): React.ReactElement {
  const {
    items = [],
    orientation,
    activeId,
    defaultActiveId,
    onChange,
    className,
    ...rest
  } = props
  const [internalActive, setInternalActive] = useState(
    defaultActiveId || items[0]?.id
  )

  const currentActive = activeId !== undefined ? activeId : internalActive

  const handleTabClick = (id: string, disabled?: boolean) => {
    if (disabled) return
    setInternalActive(id)
    if (onChange) onChange(id)
  }

  const activePanel = items.find((item) => item.id === currentActive)?.panel

  return (
    <div
      className={cn(
        orientation === 'vertical' ? 'flex gap-l' : 'block',
        className
      )}
      {...rest}
    >
      <div
        className={tabsVariants({ orientation })}
        role="tablist"
        aria-orientation={orientation}
      >
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={currentActive === item.id}
            disabled={item.disabled}
            onClick={() => handleTabClick(item.id, item.disabled)}
            className={cn(
              'px-4 py-2 text-body font-medium transition-colors outline-none',
              currentActive === item.id
                ? 'text-action-primary border-action-primary'
                : 'text-fg-secondary hover:text-fg-primary hover:bg-surface-sunken',
              orientation === 'vertical'
                ? 'border-r-2 text-left -mr-[1px]'
                : 'border-b-2 -mb-[1px]',
              item.disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div
        className={cn(
          'flex-1 text-body text-fg-primary',
          orientation === 'vertical' ? 'pt-2' : 'pt-4'
        )}
        role="tabpanel"
      >
        {activePanel}
      </div>
    </div>
  )
}
