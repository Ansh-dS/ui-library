import React, { useState, useRef, useEffect } from 'react'
import { popoverVariants, PopoverVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface PopoverProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>,
    PopoverVariantsType {
  content: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  closeOnOutsideClick?: boolean
}

export function Popover(props: PopoverProps): React.ReactElement {
  const {
    content,
    children,
    align,
    open,
    defaultOpen = false,
    onOpenChange,
    closeOnOutsideClick = true,
    className,
    ...rest
  } = props
  const [internalOpen, setInternalOpen] = useState(defaultOpen)

  const isOpen = open !== undefined ? open : internalOpen
  const popoverRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    const newState = !isOpen
    setInternalOpen(newState)
    if (onOpenChange) onOpenChange(newState)
  }

  useEffect(() => {
    if (!closeOnOutsideClick || !isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setInternalOpen(false)
        if (onOpenChange) onOpenChange(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [closeOnOutsideClick, isOpen, onOpenChange])

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div onClick={toggle} className="cursor-pointer inline-block">
        {children}
      </div>
      {isOpen && (
        <div
          className={cn(popoverVariants({ align }), 'mt-2 top-full', className)}
          {...rest}
        >
          {content}
        </div>
      )}
    </div>
  )
}
