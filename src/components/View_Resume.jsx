import React, { useLayoutEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

const View_Resume = ({ onClose }) => {
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

    return (
        <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center justify-center backdrop-contrast-50  p-4">
            <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl flex flex-col max-h-[90vh]">
                <div className="flex-shrink-0 flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Resume Viewer</h3>
                    <button onClick={handleClose} className="text-gray-500 hover:text-gray-800"><X /></button>
                </div>
                <div className="overflow-y-auto flex-grow bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-xl text-center text-gray-500">Resume content will be displayed here</h2>
                </div>
            </div>
        </div>
    );
};

export default View_Resume;