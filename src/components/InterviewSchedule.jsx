import React from 'react';

const InterviewSchedule = () => {
  const interviews = [
    { name: 'Sarah Johnson', role: 'Senior Software Engineer', round: 'Technical Round', time: '2:00 PM - 3:00 PM', status: 'Today', borderColor: 'border-blue-500', bgColor: 'bg-blue-50', textColor: 'text-blue-500' },
    { name: 'Michael Chen', role: 'Frontend Developer', round: 'HR Round', time: '10:00 AM - 11:00 AM', status: 'Tomorrow', borderColor: 'border-green-500', bgColor: 'bg-green-50', textColor: 'text-green-500' },
    { name: 'Emily Rodriguez', role: 'Data Analyst', round: 'Technical Round', time: '3:00 PM - 4:00 PM', status: 'Mar 20', borderColor: 'border-purple-500', bgColor: 'bg-purple-50', textColor: 'text-purple-500' },
  ];

  return (
    <div className="bg-white p-6 shadow-sm rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Interview Schedule</h2>
        
        <button className="text-sm text-blue-600 hover:underline">Schedule</button>
      </div>
      <div className="space-y-3">
        {interviews.map((interview, index) => (
          <div
            key={index}
            className={`flex justify-between items-center border-l-4 p-3 rounded-lg ${interview.bgColor} ${interview.borderColor}`}
          >
            <div>
              <p className="font-semibold text-gray-800">{interview.name}</p>
              <p className="text-xs text-gray-500">{interview.round} • {interview.time}</p>
              <p className="text-sm text-gray-600 mt-1">{interview.role}</p>
            </div>
            <span className={`text-xs font-medium ${interview.textColor}`}>{interview.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewSchedule;