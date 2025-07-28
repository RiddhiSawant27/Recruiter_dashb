import React, { useEffect } from 'react';
import { X, FileDown } from 'lucide-react';

const DownloadReport = ({onClose}) => {
  useEffect(() => {
          document.body.style.overflow = 'hidden';
          return () => {
              document.body.style.overflow = 'unset';
          };
      }, []);

  const reports = [
    { label: 'Applicants Report (PDF)', format: 'pdf' },
    { label: 'Interview Schedule (Excel)', format: 'excel' },
    { label: 'Shortlisted Candidates (PDF)', format: 'pdf' },
  ];

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-contrast-60 z-50  md:p-6 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Download Reports</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black text-xl hover:cursor-pointer">
            <X />
          </button>
        </div>

        <div className="space-y-4">
          {reports.map((report, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 rounded-md  hover:bg-gray-50 cursor-pointer"
            >
              <p className="text-black text-sm font-medium">{report.label}</p>
              <FileDown size={20} className="text-gray-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadReport;