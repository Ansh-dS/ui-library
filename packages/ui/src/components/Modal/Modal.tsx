import React, { useEffect } from 'react'
import { modalVariants, ModalVariantsType } from './styles.js'
import { cn } from '../../common.js'

export interface ModalProps extends ModalVariantsType {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: React.ReactNode
  closeOnEsc?: boolean
  closeOnBackdrop?: boolean
  initialFocusRef?: React.RefObject<HTMLElement>
  className?: string
}

export function Modal(props: ModalProps): React.ReactElement | null {
  const {
    isOpen,
    onClose,
    size,
    title,
    closeOnEsc = true,
    closeOnBackdrop = true,
    className,
    children,
  } = props

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeOnEsc, onClose])

  if (!isOpen) return null

  return (
    <div className={cn(modalVariants({ size: undefined }))}>
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeOnBackdrop ? onClose : undefined}
        aria-hidden="true"
      />
      <div
        className={cn(
          'relative bg-surface-base rounded-medium shadow-modal w-full p-6 transition-transform',
          size === 'sm' ? 'max-w-sm' : size === 'lg' ? 'max-w-lg' : 'max-w-md',
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {title && (
          <h2 className="text-h3 font-bold mb-4 text-fg-primary">{title}</h2>
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
}
