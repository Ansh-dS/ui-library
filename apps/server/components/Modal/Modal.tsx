import React, { useEffect, useRef, useId } from 'react'
import { createPortal } from 'react-dom'
import {
  modalWrapperVariants,
  modalContentVariants,
  ModalVariantsType,
} from './styles'
import { cn } from '../Utils/utils'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type ModalCustomProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: React.ReactNode
  closeOnEsc?: boolean
  closeOnBackdrop?: boolean
  initialFocusRef?: React.RefObject<HTMLElement>
  className?: string
}

type CleanProps = Prettify<ModalCustomProps & ModalVariantsType>

export type ModalProps = CleanProps

export function Modal(props: ModalProps): React.ReactElement | null {
  const {
    isOpen,
    onClose,
    size,
    title,
    closeOnEsc = true,
    closeOnBackdrop = true,
    initialFocusRef,
    className,
    children,
  } = props

  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const titleId = useId()

  // 1. Focus Trapping & Escape Key
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // The Law of Escape
      if (closeOnEsc && e.key === 'Escape') {
        onClose()
        return
      }

      // The Law of Containment (Focus Trap)
      if (e.key === 'Tab') {
        if (!modalRef.current) return

        // Find all focusable elements inside the modal
        const focusableElements =
          modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )

        if (focusableElements.length === 0) {
          e.preventDefault()
          return
        }

        const firstElement = focusableElements[0]!
        const lastElement = focusableElements[focusableElements.length - 1]!

        if (e.shiftKey) {
          // Shift + Tab
          if (
            document.activeElement === firstElement ||
            document.activeElement === modalRef.current
          ) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeOnEsc, onClose])

  // 2. Body Scroll Locking & Focus Entry/Return
  useEffect(() => {
    if (isOpen) {
      // The Law of Return: Capture previous focus
      previousFocusRef.current = document.activeElement as HTMLElement

      // The Law of Immobility: Lock body scroll
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'

      // The Law of Entry: Set initial focus
      if (initialFocusRef && initialFocusRef.current) {
        initialFocusRef.current.focus()
      } else if (modalRef.current) {
        // Auto-focus first focusable element, or the modal container itself
        const firstFocusable = modalRef.current.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (firstFocusable) {
          firstFocusable.focus()
        } else {
          modalRef.current.focus()
        }
      }

      return () => {
        // Restore scroll
        document.body.style.overflow = originalStyle
        // Restore focus
        if (previousFocusRef.current) {
          previousFocusRef.current.focus()
        }
      }
    }
  }, [isOpen, initialFocusRef])

  if (!isOpen) return null
  if (typeof document === 'undefined') return null

  // The Law of Layering: Portaling
  const modalContent = (
    <div className={cn(modalWrapperVariants())}>
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeOnBackdrop ? onClose : undefined}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        tabIndex={-1}
        className={cn(modalContentVariants({ size }), className)}
        // The Law of Identity
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
      >
        {title && (
          <h2 id={titleId} className="text-h3 font-bold mb-4 text-fg-primary">
            {title}
          </h2>
        )}
        <div className="text-body text-fg-secondary">{children}</div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-fg-secondary hover:text-fg-primary text-h3"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
