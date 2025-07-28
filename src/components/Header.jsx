import React from 'react';
import { Bell, UserCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Recruiter Dashboard</h1>
        <p className="text-gray-500 text-sm md:text-base">Welcome back, TechCorp! Manage your recruitment process</p>
      </div>
      <div className="flex items-center space-x-4 md:space-x-6 mt-4 sm:mt-0">
        <button className="bg-blue-100 text-blue-900 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:cursor-pointer">
          🔐Private Portal
        </button>
        <div className="relative">
          <Bell size={24} className="text-gray-600 hover:cursor-pointer hover:text-black" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center hover:cursor-pointer">
            4
          </span>
        </div>
        <UserCircle size={32} className="text-gray-600" />
      </div>
    </header>
  );
};

export default Header;