import React, { forwardRef } from 'react'
import { sidebarVariants, SidebarVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface SidebarProps
  extends React.HTMLAttributes<HTMLBaseElement>, SidebarVariantsType {
  header?: React.ReactNode
  footer?: React.ReactNode
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  const { className, collapsed, header, footer, children, ...rest } = props

  return (
    <aside
      ref={ref}
      className={cn(sidebarVariants({ collapsed }), className)}
      {...rest}
    >
      {header && (
        <div className="w-full p-m border-b border-border-default flex-shrink-0">
          {header}
        </div>
      )}
      <div className="flex-1 w-full overflow-y-auto p-m flex flex-col gap-s">
        {children}
      </div>
      {footer && (
        <div className="w-full p-m border-t border-border-default flex-shrink-0">
          {footer}
        </div>
      )}
    </aside>
  )
})

Sidebar.displayName = 'Sidebar'
