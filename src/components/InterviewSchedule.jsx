import React, { useState } from 'react';
import Schedule_button from './Schedule_button';


const InterviewSchedule = () => {
    const [showSchedule, setshowSchedule] = useState(false)
    
    const interviews = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Software Engineer',
      round: 'Technical Round',
      time: '2:00 PM - 3:00 PM',
      status: 'Today',
      statusColor: 'bg-blue-50 text-blue-600',
    },
    {
      name: 'Michael Chen',
      role: 'Frontend Developer',
      round: 'HR Round',
      time: '10:00 AM - 11:00 AM',
      status: 'Tomorrow',
      statusColor: 'bg-green-50 text-green-600',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Analyst',
      round: 'Technical Round',
      time: '3:00 PM - 4:00 PM',
      status: 'Mar 20',
      statusColor: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg mb-8 mt-8 md:p-4 ">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Interview Schedule</h2>
        <button 
        className="text-sm text-blue-600 hover:cursor-pointer hover:underline"
        onClick={()=> setshowSchedule(true)}>Schedule</button>
      </div>

      <div className="space-y-2">
        {interviews.map((interview, index) => (
          // Interview Card
          <div key={index} className= {`flex  justify-between border-l-4 p-4 rounded-lg ${interview.statusColor} mt-3 `}>

            {/* Interview Details */}
            <div> 
              <p className="text-gray-800">{interview.name}</p>
              <p className="text-xs font-medium text-gray-500">{interview.round} • {interview.time}</p>
              <p className="text-xs text-gray-500">{interview.role}</p>
            </div>

            <span className="text-xs px-2 py-1">{interview.status}</span>

          </div>
        ))}
      </div>
      {showSchedule && <Schedule_button onClose={() => setshowSchedule(false)} />}
    </div>
  );
};

export default InterviewSchedule;