// Modal.tsx
import { useRef, useEffect } from 'react'
import { ModalStyle } from './Modal.style'
import { ModalProps } from './Modal.type'

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && event.target === modalRef.current) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  if (!isOpen) return null

  return (
    <ModalStyle ref={modalRef}>
      <div className="modal-content">
        {children}
      </div>
    </ModalStyle>
  )
}
