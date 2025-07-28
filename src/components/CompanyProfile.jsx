import React from 'react'
import { UserRoundPen } from 'lucide-react';
import { UserCircle } from 'lucide-react';


const CompanyProfile = () => {
     return (
    <div className="bg-white p-6 rounded-lg mt-8 mb-8">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Company Profile</h2>
        <button className="text-sm text-blue-600 hover:cursor-pointer"><UserRoundPen />Edit</button>
      </div>

      <div className="flex flex-col items-center justify-center text-center space-y-0,5 my-3">
      <UserCircle size={70} className="text-gray-700" />
      <h2 className="text-xl ">Tech Corp Solutions</h2>
      <p className="text-l text-gray-500">Software Development Company</p>
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex flex-col space-y-2  text-gray-500">
        <p>Industry</p>
        <p>Size</p>
        <p>Location</p>
        </div>

        <div className=" flex flex-col space-y-2 text-right">
        <p>Technology</p>
        <p>500-1000</p>
        <p>San Francisco</p>
        </div>
     </div>



    </div>
      );
};
        
  

export default CompanyProfile;