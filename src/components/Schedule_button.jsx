import {X} from 'lucide-react';
import React from 'react';
import { useEffect } from 'react';  

const Schedule_button = ({ onClose }) => {
  useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-contrast-60 z-50  md:p-6 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Schedule Interview</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-xl"><X className='hover:text-black hover:cursor-pointer'/></button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-md font-medium text-gray-700">Candidate</label>
            <select className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 rounded">
              <option>Sarah Johnson</option>
              <option>Michael Chen</option>
              <option>Emily Rodriguez</option>
            </select>
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700">Interview Type</label>
            <select className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 rounded">
              <option>Technical Round</option>
              <option>HR Round</option>
              <option>Managerial Round</option>
            </select>
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700">Date</label>
            <input type="date" className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700">Time</label>
            <input type="time" className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 rounded" />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Schedule Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schedule_button;
