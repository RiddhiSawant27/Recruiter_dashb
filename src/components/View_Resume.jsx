import React from 'react';
import { X } from 'lucide-react';

const View_Resume = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-contrast-60 z-50 md:p-6 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl">

        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Resume Viewer</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl"><X className='hover:cursor-pointer'/></button>
        </div>

        <div className="overflow-y-auto max-h-[80vh]">
        <div className="p-30 bg-gray-200 rounded-lg shadow-sm">
          <h2 className="text-xl text-center  text-gray-400 mb-4">Resume content will be displaed here</h2>
          
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default View_Resume;
