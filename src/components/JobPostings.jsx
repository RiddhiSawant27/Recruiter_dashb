import React, { useState } from 'react';
import CreateJobModal from './CreateJobModal';

const JobPostings = () => {
  const [showCreateJob, setShowCreateJob] = useState(false);

  const jobs = [
    {
      title: 'Senior Software Engineer',
      type: 'Full-time • Remote',
      experience: '5-8 years experience',
      posted: 'Posted 3 days ago',
      applications: 45,
      shortlisted: 12,
      statusColor: 'bg-green-400',
    },
    {
      title: 'Frontend Developer',
      type: 'Full-time • On-site',
      experience: '2-4 years experience',
      posted: 'Posted 1 week ago',
      applications: 32,
      shortlisted: 8,
      statusColor: 'bg-green-400',
    },
    {
      title: 'Data Analyst',
      type: 'Full-time • Hybrid',
      experience: '1-3 years experience',
      posted: 'Posted 2 weeks ago',
      applications: 28,
      underReview: 5,
      statusColor: 'bg-yellow-400',
    },
  ];

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Job Postings</h2>
        <button className="bg-blue-600 text-sm text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer mt-2 sm:mt-0" onClick={() => setShowCreateJob(true)}> + Create Job</button>
      </div>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="p-4 rounded-lg shadow-sm bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-start">
              {/* Job details */}
              <div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 ${job.statusColor} rounded-full`}></div>
                  <h3 className="text-lg text-gray-800 m-0 p-0">{job.title}</h3>
                </div>
                <p className="text-sm text-gray-500 mt-2">{job.type} • {job.experience}</p>
                {/* Job post details */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 mt-3">
                  <p className="text-sm text-gray-400">{job.posted}</p>
                  <p className="text-sm text-gray-600 mt-1 sm:mt-0">{job.applications} Applications</p>
                  {job.shortlisted && <p className="text-sm text-green-600 font-semibold mt-1 sm:mt-0">{job.shortlisted} Shortlisted</p>}
                  {job.underReview && <p className="text-sm text-yellow-400 font-semibold mt-1 sm:mt-0">{job.underReview} Under Review</p>}
                </div>
              </div>
              {/* Edit and delete buttons */}
              <div className="flex items-center space-x-4 mt-3 sm:mt-0">
                <button className="text-sm text-blue-600 hover:cursor-pointer hover:underline">Edit</button>
                <button className="text-sm text-red-600 hover:cursor-pointer hover:underline">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally render the modal */}
      {showCreateJob && <CreateJobModal onClose={() => setShowCreateJob(false)} />}
    </div>
  );
};

export default JobPostings;