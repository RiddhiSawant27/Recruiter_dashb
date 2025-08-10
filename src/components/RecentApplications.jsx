import React from 'react';
import { UserCircle } from 'lucide-react';

const RecentApplications = ({ onViewResume, onViewAll }) => {
  const recentApplicants = [
    { name: 'Sarah Johnson', role: 'Senior Software Engineer', experience: 'Computer Science • 6 years experience • 8.5 CGPA' },
    { name: 'Michael Chen', role: 'Frontend Developer', experience: 'Information Technology • 3 years experience • 8.2 CGPA' },
    { name: 'Emily Rodriguez', role: 'Data Analyst', experience: 'Data Science • 2 years experience • 9.1 CGPA' },
  ];

  return (
    <div className="bg-white shadow-sm p-4 md:p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Recent Applicants</h2>
        <button onClick={onViewAll} className="text-sm font-medium text-blue-600 hover:underline"> View All </button>
      </div>
      <div className="space-y-4">
        {recentApplicants.map((applicant, index) => (
          <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg hover:bg-gray-50">
            <div className="flex items-start">
              <UserCircle size={32} className="text-gray-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg text-gray-800 font-semibold">{applicant.name}</p>
                <p className="text-sm font-medium text-gray-500">Applied for {applicant.role}</p>
                <p className="text-xs text-gray-500 mt-1">{applicant.experience}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0 self-end sm:self-center">
              <button className="text-sm font-medium text-blue-600 hover:underline" onClick={onViewResume}> View Resume </button>
              <button className="bg-green-600 text-white text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-green-700"> Shortlist </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentApplications;