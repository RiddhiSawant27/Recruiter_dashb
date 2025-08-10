import React from 'react';

const JobPostings = ({ jobs, onEdit, onDelete, onCreate }) => {
    return (
        <div className="bg-white shadow-sm p-4 md:p-6 rounded-lg relative">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Job Postings</h2>
                <button className="bg-blue-600 text-sm text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-2 sm:mt-0" onClick={onCreate}>
                    + Create Job
                </button>
            </div>
            <div className="space-y-4">
                {jobs.map((job, index) => (
                    <div key={index} className="p-4 rounded-lg shadow-sm bg-gray-50 transition-shadow hover:shadow-md">
                        <div className="flex flex-col sm:flex-row justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 ${job.statusColor} rounded-full`}></div>
                                    <h3 className="text-lg text-gray-800 font-semibold">{job.title}</h3>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">{job.workType} • {job.location} • {job.experience}</p>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 mt-3">
                                    <p className="text-sm text-gray-400">{job.posted}</p>
                                    <p className="text-sm text-gray-600 mt-1 sm:mt-0">{job.applications} Applications</p>
                                    {job.shortlisted > 0 && <p className="text-sm text-green-600 font-semibold mt-1 sm:mt-0">{job.shortlisted} Shortlisted</p>}
                                    {job.underReview > 0 && <p className="text-sm text-yellow-600 font-semibold mt-1 sm:mt-0">{job.underReview} Under Review</p>}
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 mt-3 sm:mt-0">
                                <button onClick={() => onEdit(index)} className="text-sm text-blue-600 hover:underline">Edit</button>
                                <button onClick={() => onDelete(index)} className="text-sm text-red-600 hover:underline">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobPostings;