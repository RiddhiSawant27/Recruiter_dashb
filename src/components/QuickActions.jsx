import React from 'react';  
import { PlusCircle, Users, Calendar, Download, ChevronRight } from 'lucide-react';
import Schedule_button from './Schedule_button';
import ViewAll from './ViewAll';
import CreateJobModal from './CreateJobModal';
import DownloadReport from './DownloadReport';
import { useState } from 'react';


const QuickActions = () => {
  const [showCreateJob, setShowCreateJob] = useState(false);
  const [showScheduleInterview, setShowScheduleInterview] = useState(false);
  const [showViewAll, setShowViewAll] = useState(false);
  const [showDownloadReports, setShowDownloadReports] = useState(false);


  const actions = [
    { 
      icon: PlusCircle, 
      text: 'Post New Job',
      textColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      hoverBg: 'hover:bg-blue-100',
      action: () => setShowCreateJob(true),
      
    },
    { 
      icon: Users, 
      text: 'View Applicants',
      textColor: 'text-green-500',
      bgColor: 'bg-green-50',
      hoverBg: 'hover:bg-green-100',
      action: () => setShowViewAll(true),
      
    },
    { 
      icon: Calendar, 
      text: 'Schedule Interview',
      textColor: 'text-purple-500',
      bgColor: 'bg-purple-50',
      hoverBg: 'hover:bg-purple-100',
      action: () => setShowScheduleInterview(true),
      
    },
    { 
      icon: Download, 
      text: 'Download Reports',
      textColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
      hoverBg: 'hover:bg-orange-100',
      action: () => setShowDownloadReports(true)
    }
  ];

  
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="space-y-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button 
                key={index}
                onClick={action.action}
                className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${action.bgColor} ${action.hoverBg} cursor-pointer hover:shadow-md`}
              >
                <span className={`${action.textColor}`}>
                  <Icon size={20} />
                </span>
                <p className={`ml-3 font-medium ${action.textColor}`}>{action.text}</p>
                <span className={`ml-auto ${action.textColor}`}>
                  <ChevronRight size={20} />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {showCreateJob && <CreateJobModal onClose={() => setShowCreateJob(false)} />}

      {showScheduleInterview && <Schedule_button onClose={() => setShowScheduleInterview(false)} />}

      {showViewAll && <ViewAll onClose={() => setShowViewAll(false)} />}

      {showDownloadReports && <DownloadReport onClose={() => setShowDownloadReports(false)} />}


    </>
  );
};

export default QuickActions;