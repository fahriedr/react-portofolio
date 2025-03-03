import React, { useEffect, ReactNode } from 'react';

type Project = {
    title: string
    description: string,
    image: string
  }

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    data: Project
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    data
}) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle escape key press to close modal
    useEffect(() => {
        const handleEscKey = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEscKey);
        }

        return () => {
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);

    // Close when clicking outside the modal content
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-black"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col mx-4 max-w-2xl w-full h-[80%]">
                <div className="flex flex-col justify-between p-4">
                    <img className='rounded-t-lg' src={'https://img.freepik.com/free-photo/pack-colorful-cardboard-sheets-with-copy-space_23-2148320371.jpg?t=st=1739848991~exp=1739852591~hmac=037765814b5f4188bbd90fb8e0f002767329ded6bf536f3cf364fa3a8516cbec&w=740'} alt="" />
                    <h2 className="text-lg font-semibold">{data.title}</h2>
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 focus:outline-none z-10 bg-white"
                        aria-label="Close"
                    >
                        x
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;