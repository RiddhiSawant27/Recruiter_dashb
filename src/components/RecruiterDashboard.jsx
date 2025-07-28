import React from 'react';
import Header from './Header';
import Stats from './Stats';
import JobPostings from './JobPostings';
import InterviewSchedule from './InterviewSchedule';
import QuickActions from './QuickActions';
import RecentApplications from './RecentApplications';
import CompanyProfile from './CompanyProfile';

const RecruiterDashboard = () => {
  return (
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 md:p-8">
          <Stats />
          {/* Responsive Grid: Stacks on mobile, two columns on larger screens */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <JobPostings />
              <RecentApplications />
            </div>
            <div>
              <InterviewSchedule />
              <QuickActions />
              <CompanyProfile />
            </div>
          </div>
        </main>
      </div>
  );
};

export default RecruiterDashboard;