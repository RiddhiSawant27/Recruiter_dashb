import React from 'react';
import { UserRoundPen, UserCircle } from 'lucide-react';

const CompanyProfile = () => {
     return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Company Profile</h2>
        <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
            <UserRoundPen size={16} />Edit
        </button>
      </div>
      <div className="flex flex-col items-center justify-center text-center space-y-1 my-3">
        <UserCircle size={70} className="text-gray-700" />
        <h2 className="text-xl font-semibold">Tech Corp Solutions</h2>
        <p className="text-sm text-gray-500">Software Development Company</p>
      </div>
      <div className="space-y-2 mt-4 text-sm">
        <div className="flex justify-between"><p className="text-gray-500">Industry</p><p className="font-medium">Technology</p></div>
        <div className="flex justify-between"><p className="text-gray-500">Size</p><p className="font-medium">500-1000</p></div>
        <div className="flex justify-between"><p className="text-gray-500">Location</p><p className="font-medium">San Francisco</p></div>
     </div>
    </div>
    );
};
export default CompanyProfile;