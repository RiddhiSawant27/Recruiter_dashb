import React from 'react';
import { PlusCircle, Users, Calendar, Download, ChevronRight } from 'lucide-react';

const QuickActions = ({ onCreateJob, onViewApplicants, onDownloadReport }) => {
    const actions = [
        {
            icon: PlusCircle,
            text: 'Post New Job',
            action: onCreateJob,
            textColor: 'text-blue-600',
            bgColor: 'bg-blue-50',
            hoverBg: 'hover:bg-blue-100',
        },
        {
            icon: Users,
            text: 'View Applicants',
            action: onViewApplicants,
            textColor: 'text-green-600',
            bgColor: 'bg-green-50',
            hoverBg: 'hover:bg-green-100',
        },
        {
            icon: Calendar,
            text: 'Schedule Interview',
            action: null, 
            textColor: 'text-purple-600',
            bgColor: 'bg-purple-50',
            hoverBg: 'hover:bg-purple-100',
        },
        {
            icon: Download,
            text: 'Download Reports',
            action: onDownloadReport,
            textColor: 'text-orange-600',
            bgColor: 'bg-orange-50',
            hoverBg: 'hover:bg-orange-100',
        }
    ];

    return (
        <div className="bg-white p-6 shadow-sm rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-3">
                {actions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                        <button
                            key={index}
                            onClick={action.action}
                            // Removed disabled attribute and styling logic
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
    );
};

export default QuickActions;