import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const CreateJobModal = ({ onClose }) => {
  useEffect(() => {
    // Prevent background scrolling when the modal is open
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when the modal is closed
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []); // Empty dependency array ensures this runs only once

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here
    console.log("Form submitted");
    onClose(); // Close modal on submission
  };

  return (
    // Backdrop: full screen, centered content, with a contrast of 50
    <div className="fixed inset-0 flex items-center justify-center backdrop-contrast-50 z-50 p-4">
      
      {/* Modal Panel: 
        - `flex flex-col`: Stacks the header, content, and footer vertically.
        - `max-h-[90vh]`: Limits the modal's height to prevent it from growing too large.
      */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-auto flex flex-col max-h-[90vh]">
        
        {/* Modal Header (Fixed)
          - `flex-shrink-0`: Prevents the header from shrinking.
        */}
        <div className="flex-shrink-0 flex justify-between items-center p-4 md:p-6 ">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Create New Job Posting</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={24} className='hover:cursor-pointer' />
          </button>
        </div>

        {/* Form and Scrollable Content
          - `flex-grow`: **This is the key fix.** It makes this container expand to fill available space.
          - `overflow-y-auto`: Enables the vertical scrollbar only when content exceeds the container's height.
        */}
        <form onSubmit={handleFormSubmit} className="flex-grow overflow-y-auto">
          <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
              <input type="text" id="jobTitle" placeholder="e.g., Senior Software Engineer" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <select id="department" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Engineering</option>
                <option>Design</option>
                <option>Marketing</option>
                <option>Product</option>
              </select>
            </div>

            {/* Experience Level */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
              <select id="experience" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Entry Level (0-2 years)</option>
                <option>Mid Level (2-5 years)</option>
                <option>Senior Level (5-8 years)</option>
                <option>Lead Level (8+ years)</option>
              </select>
            </div>

            {/* Work Type */}
            <div>
              <label htmlFor="workType" className="block text-sm font-medium text-gray-700 mb-1">Work Type</label>
              <select id="workType" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>

            {/* Job Description */}
            <div className="md:col-span-2">
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
              <textarea id="jobDescription" placeholder="Describe the role, responsibilities, and requirements..." required className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none h-40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            {/* Privacy Checkbox */}
            <div className="md:col-span-2 flex items-start space-x-3">
              <input type="checkbox" id="confirm" className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="confirm" className="text-sm text-gray-700">Make this posting private to our company only</label>
            </div>
          </div>
          
          {/* Modal Footer (Now inside the form)
            - `flex-shrink-0`: Prevents the footer from shrinking.
            - `sticky bottom-0`: Ensures it stays at the bottom of the scrollable container.
          */}
          <div className="flex-shrink-0 sticky bottom-0 flex flex-col-reverse sm:flex-row justify-end items-center p-4 md:p-6 bg-gray-50 rounded-b-lg">
            <button type="button" onClick={onClose} className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-2 sm:mt-0">
              Cancel
            </button>
            <button type="submit" className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3">
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobModal;