import React, { useLayoutEffect, useRef } from 'react';
import { X, FileDown } from 'lucide-react';
import gsap from 'gsap';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const mockApplicants = [
  { id: 1, name: 'John Doe', email: 'john.d@example.com', job: 'Senior Software Engineer', status: 'Shortlisted' },
  { id: 2, name: 'Jane Smith', email: 'jane.s@example.com', job: 'Frontend Developer', status: 'Under Review' },
];

const mockJobs = [
  { title: 'Senior Software Engineer', applications: 45, status: 'Active' },
  { title: 'Frontend Developer', applications: 32, status: 'Active' },
];

const DownloadReport = ({ onClose }) => {
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

  const handleDownloadPDF = (data, filename) => {
    const doc = new jsPDF();

    doc.text(filename.replace('.pdf', ''), 14, 10);

    autoTable(doc, {
      head: [Object.keys(data[0])],
      body: data.map(row => Object.values(row)),
      startY: 20
    });

    doc.save(filename);
    setTimeout(() => handleClose(), 200); // ensure save triggers before closing
  };

  return (
    <div ref={overlayRef} className="fixed inset-0 z-50 flex items-center justify-center backdrop-contrast-50 p-4">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Download Reports</h2>
          <button onClick={handleClose} className="text-gray-600 hover:text-black">
            <X />
          </button>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => handleDownloadPDF(mockApplicants, 'applicants_report.pdf')}
            className="w-full flex justify-between items-center p-3 rounded-md hover:bg-gray-50 cursor-pointer"
          >
            <p className="text-black text-sm font-medium">Applicants Report</p>
            <FileDown size={20} className="text-gray-600" />
          </button>
          <button
            onClick={() => handleDownloadPDF(mockJobs, 'job_postings_report.pdf')}
            className="w-full flex justify-between items-center p-3 rounded-md hover:bg-gray-50 cursor-pointer"
          >
            <p className="text-black text-sm font-medium">Job Postings Summary</p>
            <FileDown size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadReport;
