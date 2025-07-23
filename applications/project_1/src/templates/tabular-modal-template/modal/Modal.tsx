import React, { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

export const TabularModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const portalRoot = document.getElementById('modal-root') || createModalRoot();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return <>{createPortal(
    <div className="modal-overlay">
      <div ref={modalRef} className={`modal ${className}`}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button onClick={onClose} className="modal-close" aria-label="Close">
            &times;
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    portalRoot
  )}</>;
};

function createModalRoot(): HTMLElement {
  const root = document.createElement('div');
  root.id = 'modal-root';
  document.body.appendChild(root);
  return root;
}
