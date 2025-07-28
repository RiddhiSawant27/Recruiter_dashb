import React from 'react';
import { UserCircle, X } from 'lucide-react';
import { useEffect } from 'react';

const ViewAll = ({ onClose }) => {
  useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }, []);

  const allApplicants = [
    {
      name: 'Alex Thompson',
      role: 'Senior Software Engineer',
      status: 'Shortlisted',
    },
    {
      name: 'Jessica Lee',
      role: 'Frontend Developer',
      status: 'Under Review',
    },
  ];

  // Utility to get the right color for the status badge
  const getStatusClass = (status) => {
    switch (status) {
      case 'Shortlisted':
        return 'bg-green-100 text-green-700';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    // Modal Overlay: Covers the entire screen and centers the content
    <div className="fixed inset-0 flex justify-center items-center backdrop-contrast-60 z-50  md:p-6 p-4">
      {/* Modal Content */}
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">All Applicants</h2>
          {/* Close button that triggers the onClose function from props */}
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={28} className='hover:cursor-pointer hover:text-black'/>
          </button>
        </div>

        <div className="space-y-4">
          {allApplicants.map((applicant, index) => (
            <div key={index} className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50">
              <div className="flex items-center">
                <UserCircle size={40} className="text-gray-500 mr-4 " />
                <div>
                  <p className=" text-gray-900">{applicant.name}</p>
                  <p className="text-sm text-gray-600">{applicant.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusClass(applicant.status)}`}>
                    {applicant.status}
                  </span>
                  <button className="text-sm font-medium text-blue-600 hover:cursor-pointer">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAll;