import React, { useLayoutEffect, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';
import gsap from 'gsap';

const DeleteConfirmationModal = ({ onClose, onConfirm }) => {
    const modalRef = useRef(null);
    const overlayRef = useRef(null);

    useLayoutEffect(() => {
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    const handleClose = () => {
        gsap.to(modalRef.current, { opacity: 0, scale: 0.95, duration: 0.2, ease: 'power2.in', onComplete: onClose });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, delay: 0.1 });
    };

    const handleConfirm = () => {
        gsap.to(modalRef.current, { opacity: 0, scale: 0.95, duration: 0.2, ease: 'power2.in', onComplete: onConfirm });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, delay: 0.1 });
    };

    return (
        <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center justify-center backdrop-contrast-50 p-4">
            <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
                <div className="flex flex-col items-center text-center">
                    <div className="text-red-500 bg-red-100 rounded-full p-3"><AlertTriangle size={32} /></div>
                    <h2 className="text-xl font-bold mt-4 text-gray-800">Confirm Deletion</h2>
                    <p className="text-gray-600 mt-2">Are you sure you want to delete this job posting? This action cannot be undone.</p>
                </div>
                <div className="mt-6 flex justify-center space-x-3">
                    <button onClick={handleClose} className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border hover:bg-gray-200">Cancel</button>
                    <button onClick={handleConfirm} className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;