'use client';

import { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}