import React, { forwardRef } from 'react'
import { sidebarVariants, SidebarVariantsType } from './styles.js'
import { cn } from '../../common.js'
import { ErrorBoundary, Button, ButtonProps } from '@components'
import { Text } from '../Text/Text.js'
// STAFF IMPORT: We need the Text variants to type our new color prop
import { TextVariantsType } from '../Text/styles.js'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

/* why aren't we using Text, Header, Footer?
    1. because sidebar is structural component.
    2. it just structures the element
    3. if we use Text etc etc then then we are fixing the element. 
*/

/**
 * THE 4 LAWS OF SIDEBAR ARCHITECTURE:
 * 1. Law 1 (Fixed Scaffolding): The sidebar must act as a fixed structural anchor. It stays planted while the main page content scrolls.
 * 2. Law 2 (Internal Rhythm): The Header (Brand/Logo) and Footer (User Profile) must remain permanently pinned to the top and bottom. Only the middle navigation area is allowed to scroll.
 * 3. Law 3 (Fluid Width): State transitions (collapsed vs. expanded) must be smooth and mathematically predictable to prevent layout thrashing.
 * 4. Law 4 (Surface Depth): The sidebar must visually separate itself from the main dashboard canvas using Layer 2 tokens (e.g., surface-sunken or structural borders).
 */

type SidebarCustomProps = {
  header?: React.ReactNode
  footer?: React.ReactNode
}

type CleanProps = Prettify<SidebarCustomProps & SidebarVariantsType>

export type SidebarProps = CleanProps & React.HTMLAttributes<HTMLElement>

export const Sidebar = forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  const {
    className,
    variant,
    collapsed,
    layout,
    header,
    footer,
    children,
    ...rest
  } = props

  return (
    /*aside means: tag given to suplementary infromation*/
    <aside
      ref={ref}
      // LAW 1 & 4 APPLIED: The variants inject the fixed positioning (Scaffolding)
      // and the surface background/borders (Surface Depth).
      className={cn(sidebarVariants({ collapsed, variant, layout }), className)}
      {...rest}
    >
      {/* LAW 2 APPLIED: 'shrink-0' ensures the header never gets crushed, pinning it to the top. */}
      {header && (
        <div className="w-full p-m border-b border-border-default flex shrink-0">
          {header}
        </div>
      )}

      {/* LAW 2 APPLIED: 'flex-1 overflow-y-auto' creates the independent internal scroll zone. */}
      <div className="flex-1 w-full overflow-y-auto p-m flex flex-col gap-s">
        {/* STAFF INTEGRATION: Wrapping the navigation children in our ErrorBoundary. 
          If a dynamic "Recent Cases" or "Live Studio" nav widget crashes, the 
          user doesn't lose the whole sidebar. They just see the 'minimal' fallback!
        */}
        <ErrorBoundary variant="minimal">{children}</ErrorBoundary>
      </div>

      {/* LAW 2 APPLIED: 'shrink-0' pins the settings/logout actions to the bottom. */}
      {footer && (
        <div className="w-full p-m border-t border-border-default flex shrink-0">
          {footer}
        </div>
      )}
    </aside>
  )
})

Sidebar.displayName = 'Sidebar'

/**
 * THE 4 LAWS OF SIDEBAR ITEMS:
 * 1. Law 1 (The Invisible Track): Icons must sit on a perfectly centered vertical axis to maintain stability when the labels disappear in collapsed mode.
 * 2. Law 2 (State Feedback): Hover and Active states must use semantic tokens (e.g., bg-action-primary) to reflect the current theme's "personality."
 * 3. Law 3 (Label Hierarchy): Labels must use 'Text' variants with truncation logic to prevent long names (e.g., "Legal Document - Case #402") from breaking the sidebar width.
 * 4. Law 4 (The Hitbox): The entire width of the item must be interactive, not just the text, to maximize "Fitts's Law" (making it easy to click).
 */

/* -------------------------------------------------------------------------- */
/* SIDEBAR ITEM                                */
/* -------------------------------------------------------------------------- */
// STAFF UPDATE: We now extend ButtonProps to get loading and variant support
type SidebarItemCustomProps = {
  icon: React.ReactNode
  label: string
  active?: boolean
  collapsed?: boolean
  badge?: string | number
  color?: TextVariantsType['color']
}

type CleanPropsItems = Prettify<SidebarItemCustomProps>

// We use ButtonProps so SidebarItem can accept isLoading, onClick, etc.
export type SidebarItemProps = CleanPropsItems &
  Omit<ButtonProps, 'children' | 'text' | 'startIcon'>

export const SidebarItem = forwardRef<HTMLButtonElement, SidebarItemProps>(
  (props, ref) => {
    const {
      icon,
      label,
      active,
      collapsed,
      badge,
      color,
      className,
      isLoading = false,
      ...rest
    } = props

    // STAFF FIX: Aligning the Sidebar color logic with the Button's engine
    const resolvedTextColor = color || (active ? 'primary' : 'secondary')
    return (
      <Button
        ref={ref}
        variant="ghost" // Base the sidebar item on the ghost variant
        isLoading={isLoading}
        color={resolvedTextColor}
        iconColor={resolvedTextColor} // Passes the color directly to the newly upgraded Button dictionary
        fullWidth={true}
        // LAW 2 & 4 APPLIED: We override the standard Button styles to match Sidebar requirements
        className={cn(
          'p-s gap-m border-none', // border-none prevents a 1px layout shift
          /*
          [&>div]: inside our coustomised button we have a div which gets shrinks so we are increasing it's width again to full.
          then arrange it's inside elements: using justify-start (Expanded) or justify-center (Collapsed)
          */
          collapsed
            ? '[&>div]:justify-center'
            : '[&>div]:justify-start [&>div]:w-full',
          active
            ? 'bg-action-primary-subtle hover:bg-action-primary-hover-subtle'
            : 'bg-transparent hover:bg-action-ghost-hover',
          className
        )}
        // LAW 1 APPLIED: Icon passed as startIcon to maintain the invisible track
        startIcon={
          <div
            className={cn(
              'transition-transform',
              active ? 'scale-110' : 'group-hover:scale-110'
            )}
          >
            {icon}
          </div>
        }
        {...rest}
      >
        {/* LAW 3 APPLIED: Using the children slot for the label and badge */}
        {!collapsed && (
          <div className="flex flex-1 items-center justify-between overflow-hidden">
            <Text
              variant="label"
              weight={active ? 'semibold' : 'medium'}
              color={active ? 'brand' : 'secondary'}
              className="truncate whitespace-nowrap"
            >
              {label}
            </Text>

            {badge && (
              <span className="bg-action-primary text-fg-inverted text-[10px] px-xs py-[2px] rounded-pill font-bold shrink-0 ml-xs">
                {badge}
              </span>
            )}
          </div>
        )}
      </Button>
    )
  }
)

SidebarItem.displayName = 'SidebarItem'
