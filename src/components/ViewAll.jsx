import React, { useLayoutEffect, useRef } from 'react';
import { UserCircle, X } from 'lucide-react';
import gsap from 'gsap';

const ViewAll = ({ onClose }) => {
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

    const allApplicants = [
        { name: 'Alex Thompson', role: 'Senior Software Engineer', status: 'Shortlisted' },
        { name: 'Jessica Lee', role: 'Frontend Developer', status: 'Under Review' },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Shortlisted': return 'bg-green-100 text-green-700';
            case 'Under Review': return 'bg-yellow-100 text-yellow-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center justify-center backdrop-contrast-50  p-4">
            <div ref={modalRef} className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">All Applicants</h2>
                    <button onClick={handleClose} className="text-gray-500 hover:text-gray-800">
                        <X size={28} />
                    </button>
                </div>
                <div className="space-y-4">
                    {allApplicants.map((applicant, index) => (
                        <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50">
                            <div className="flex items-center">
                                <UserCircle size={40} className="text-gray-500 mr-4" />
                                <div>
                                    <p className="font-medium text-gray-900">{applicant.name}</p>
                                    <p className="text-sm text-gray-600">{applicant.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusClass(applicant.status)}`}>
                                    {applicant.status}
                                </span>
                                <button className="text-sm font-medium text-blue-600 hover:underline">View</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViewAll;