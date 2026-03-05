import React, { useState, forwardRef } from 'react'
import { tabsVariants, TabsVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface TabItem {
  id: string
  title: React.ReactNode
  panel?: React.ReactNode
  disabled?: boolean
}

/**
 * CHANGE: Added 'title' and 'content' to the Omit list.
 * WHY: Native HTML attributes for <div> include 'title' and 'content' as strings.
 * If you use these names for ReactNodes in your design system, TypeScript will
 * throw a conflict error because ReactNode (objects/arrays) cannot be assigned to strings.
 */
export interface TabsProps
  extends
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'title' | 'content'
    >,
    TabsVariantsType {
  items?: TabItem[]
  activeId?: string
  defaultActiveId?: string
  onChange?: (id: string) => void
}

/**
 * CHANGE: Wrapped the component in 'forwardRef'.
 * WHY: High-quality UI libraries must allow parent components to access the DOM node
 * for tasks like manual focus management or integration with animation libraries (e.g., Framer Motion).
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    items = [],
    /**
     * CHANGE: Defaulting orientation to 'horizontal'.
     * WHY: Prevents 'null' or 'undefined' from leaking into logic that expects a string.
     * This ensures your Tailwind 'cn' logic always has a valid value to check against.
     */
    orientation = 'horizontal',
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

  /**
   * CHANGE: Created 'ariaOrientation' with a strict type check.
   * WHY: This solves your specific TS(2322) error.
   * CVA variants often include 'null' in their types. Native 'aria-orientation'
   * strictly only accepts "horizontal" | "vertical" | undefined.
   * This guard clause filters out 'null' to satisfy the DOM's strict type requirements.
   */
  const ariaOrientation =
    orientation === 'horizontal' || orientation === 'vertical'
      ? orientation
      : undefined

  return (
    <div
      ref={ref} // CHANGE: Attached the forwarded ref here.
      className={cn(
        orientation === 'vertical' ? 'flex gap-l' : 'block',
        className
      )}
      {...rest}
    >
      <div
        className={tabsVariants({ orientation })}
        role="tablist"
        aria-orientation={ariaOrientation} // CHANGE: Used the guarded variable here.
      >
        {items.map((item) => (
          <button
            key={item.id}
            /**
             * CHANGE: Added explicit type="button".
             * WHY: In HTML, the default type for a button is "submit".
             * If these Tabs are placed inside a <form>, clicking a tab would
             * trigger a page reload/form submission. This makes the component "safe" for any context.
             */
            type="button"
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
                ? 'border-r-2 text-left -mr-px'
                : 'border-b-2 -mb-px',
              item.disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/**
       * CHANGE: Added a conditional check for activePanel.
       * WHY: Prevents rendering an empty container if no panel is associated
       * with the active tab, keeping the DOM clean.
       */}
      {activePanel && (
        <div
          className={cn(
            'flex-1 text-body text-fg-primary',
            orientation === 'vertical' ? 'pt-2' : 'pt-4'
          )}
          role="tabpanel"
        >
          {activePanel}
        </div>
      )}
    </div>
  )
})

/**
 * CHANGE: Added displayName.
 * WHY: When using forwardRef, the component shows up as "Anonymous" in React DevTools.
 * This makes debugging significantly easier for developers using your library.
 */
Tabs.displayName = 'Tabs'
