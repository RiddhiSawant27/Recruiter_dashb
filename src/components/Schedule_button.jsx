import React, { useLayoutEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

const Schedule_button = ({ onClose }) => {
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
            <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Schedule Interview</h2>
                    <button onClick={handleClose} className="text-gray-600 hover:text-gray-800"><X /></button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Candidate</label>
                        <select className="mt-1 w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 border rounded-md">
                            <option>Sarah Johnson</option>
                            <option>Michael Chen</option>
                            <option>Emily Rodriguez</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Interview Type</label>
                        <select className="mt-1 w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 border rounded-md">
                            <option>Technical Round</option>
                            <option>HR Round</option>
                            <option>Managerial Round</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <input type="date" className="mt-1 w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Time</label>
                        <input type="time" className="mt-1 w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 border rounded-md" />
                    </div>
                    <button onClick={handleClose} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Schedule Interview
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Schedule_button;