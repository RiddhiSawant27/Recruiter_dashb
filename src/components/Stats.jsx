import React from 'react';
import { Briefcase, Users, CheckSquare, Calendar } from 'lucide-react';

const StatCard = ({ icon, value, label, color }) => (
  <div className="stat-card bg-white p-4 sm:p-6 rounded-lg flex items-center shadow-sm w-full min-w-0">
    <div className={`p-3 sm:p-4 rounded-lg ${color} flex-shrink-0`}> {icon} </div>
    <div className="ml-3 sm:ml-4">
      <p className="stat-number text-2xl sm:text-3xl font-bold text-gray-800 leading-none"> {value} </p>
      <p className="text-xs sm:text-sm text-gray-500 mt-1">{label}</p>
    </div>
  </div>
);

const Stats = () => {
  const statsData = [
    { icon: <Briefcase size={20} className="text-blue-600" />, value: 8, label: 'Active Jobs', color: 'bg-blue-100' },
    { icon: <Users size={20} className="text-green-600" />, value: 45, label: 'Total Applicants', color: 'bg-green-100' },
    { icon: <CheckSquare size={20} className="text-purple-600" />, value: 10, label: 'Shortlisted', color: 'bg-purple-100' },
    { icon: <Calendar size={20} className="text-orange-600" />, value: 18, label: 'Interviews', color: 'bg-orange-100' },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 mb-8">
      {statsData.map((stat, index) => <StatCard key={index} {...stat} />)}
    </div>
  );
};

export default Stats;