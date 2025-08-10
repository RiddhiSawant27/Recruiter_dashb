import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

const CreateJobModal = ({ onClose, onSave, jobToEdit }) => {
    const modalRef = useRef(null);
    const overlayRef = useRef(null);
    const [formData, setFormData] = useState({ jobTitle: '', department: 'Engineering', experience: 'Entry Level (0-2 years)', workType: 'Full-time', jobDescription: '', isPrivate: false });

    useLayoutEffect(() => {
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
    }, []);

    useEffect(() => {
        if (jobToEdit) { setFormData({ jobTitle: jobToEdit.title, department: jobToEdit.department, experience: jobToEdit.experience, workType: jobToEdit.workType, jobDescription: jobToEdit.description, isPrivate: false }); }
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, [jobToEdit]);

    const handleClose = () => {
        gsap.to(modalRef.current, { opacity: 0, scale: 0.95, duration: 0.2, ease: 'power2.in', onComplete: onClose });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, delay: 0.1 });
    };

    // This function is now correctly used by the form inputs below
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center justify-center backdrop-contrast-50 p-4">
            <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh]">
                <div className="flex-shrink-0 flex justify-between items-center p-4 md:p-6 ">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">{jobToEdit ? 'Edit Job Posting' : 'Create New Job Posting'}</h3>
                    <button onClick={handleClose} className="text-gray-500 hover:text-gray-800"><X size={24} /></button>
                </div>
                <form onSubmit={handleFormSubmit} className="flex-grow overflow-y-auto">
                    <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="e.g., Senior Software Engineer" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                            <select name="department" value={formData.department} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Engineering</option><option>Design</option><option>Marketing</option><option>Product</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                            <select name="experience" value={formData.experience} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Entry Level (0-2 years)</option><option>Mid Level (2-5 years)</option><option>Senior Level (5-8 years)</option><option>Lead Level (8+ years)</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="workType" className="block text-sm font-medium text-gray-700 mb-1">Work Type</label>
                            <select name="workType" value={formData.workType} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Full-time</option><option>Part-time</option><option>Contract</option><option>Internship</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                            <textarea name="jobDescription" value={formData.jobDescription} onChange={handleChange} placeholder="Describe the role, responsibilities, and requirements..." required className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none h-40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="md:col-span-2 flex items-start space-x-3">
                            <input type="checkbox" name="isPrivate" checked={formData.isPrivate} onChange={handleChange} className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                            <label htmlFor="isPrivate" className="text-sm text-gray-700">Make this posting private to our company only</label>
                        </div>
                    </div>
                    <div className="flex-shrink-0 sticky bottom-0 flex justify-end items-center p-4 md:p-6 bg-gray-50 rounded-lg ">
                        <button type="button" onClick={handleClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border hover:bg-gray-50">Cancel</button>
                        <button type="submit" className="ml-3 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">{jobToEdit ? 'Save Changes' : 'Create Job'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateJobModal;