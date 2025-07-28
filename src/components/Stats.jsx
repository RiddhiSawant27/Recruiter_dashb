import React from 'react';
import { Briefcase, Users, CheckSquare, Calendar } from 'lucide-react';

const StatCard = ({ icon, value, label, color }) => (
  <div className="bg-white p-6 rounded-lg flex items-center">
    <div className={`p-4 rounded-lg ${color}`}>
      {icon}
    </div>
    <div className="ml-4">
      <p className="text-3xl font-bold text-gray-800">{value}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  </div>
);


const Stats = () => {
  const statsData = [
    { icon: <Briefcase size={24} className="text-blue-600" />, value: 8, label: 'Active Jobs', color: 'bg-blue-100' },
    { icon: <Users size={24} className="text-green-600" />, value: 156, label: 'Total Applicants', color: 'bg-green-100' },
    { icon: <CheckSquare size={24} className="text-purple-600" />, value: 42, label: 'Shortlisted', color: 'bg-purple-100' },
    { icon: <Calendar size={24} className="text-orange-600" />, value: 18, label: 'Interviews', color: 'bg-orange-100' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default Stats;