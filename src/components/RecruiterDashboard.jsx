import React, { useState, useLayoutEffect, useRef } from 'react';

// Child Component Imports
import Header from './Header';
import Stats from './Stats';
import JobPostings from './JobPostings';
import RecentApplications from './RecentApplications';
import InterviewSchedule from './InterviewSchedule';
import QuickActions from './QuickActions';
import CompanyProfile from './CompanyProfile';
import CreateJobModal from './CreateJobModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import Schedule_button from './Schedule_button';
import ViewAll from './ViewAll';
import View_Resume from './View_Resume';
import DownloadReport from './DownloadReport';

// GSAP for Animations
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const initialJobs = [
    { title: 'Senior Software Engineer', department: 'Engineering', experience: 'Senior Level (5-8 years)', workType: 'Full-time', location: 'Remote', description: 'Lead the development of our core platform.', applications: 45, shortlisted: 12, posted: '3 days ago', statusColor: 'bg-green-400' },
    { title: 'Frontend Developer', department: 'Engineering', experience: 'Mid Level (2-5 years)', workType: 'Full-time', location: 'On-site', description: 'Build beautiful and responsive user interfaces.', applications: 32, shortlisted: 8, posted: '1 week ago', statusColor: 'bg-green-400' },
    { title: 'Data Analyst', department: 'Product', experience: 'Entry Level (0-2 years)', workType: 'Full-time', location: 'Hybrid', description: 'Analyze data to drive product decisions.', applications: 28, underReview: 5, posted: '2 weeks ago', statusColor: 'bg-yellow-400' },
];

const RecruiterDashboard = () => {
    const mainContainer = useRef(null);

    // --- STATE MANAGEMENT for Modals & Data ---
    const [jobs, setJobs] = useState(initialJobs);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [jobToDeleteIndex, setJobToDeleteIndex] = useState(null);
    const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
    const [isViewAllModalOpen, setIsViewAllModalOpen] = useState(false);
    const [isViewResumeModalOpen, setIsViewResumeModalOpen] = useState(false);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    // --- ANIMATIONS ---
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.header-animation', { y: -100, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });

            // Using matchMedia for responsive animations
            ScrollTrigger.matchMedia({
                
                // Desktop animation settings
                '(min-width: 1024px)': function () {
                    gsap.utils.toArray('.animated-section').forEach(section => {
                        gsap.from(section, {
                            opacity: 0,
                            y: 50,
                            duration: 0.6,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: section,
                                // MODIFIED: Triggers when the top of the element is 95% down the screen
                                // (i.e., just entering the viewport)
                                start: 'top 95%',
                                toggleActions: 'play none none reverse'
                            }
                        });
                    });
                },

                // Mobile animation settings (often needs to trigger slightly earlier)
                '(max-width: 1023px)': function () {
                    gsap.utils.toArray('.animated-section').forEach(section => {
                        gsap.from(section, {
                            opacity: 0,
                            y: 40,
                            duration: 0.5,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: section,
                                // MODIFIED: Same as desktop, triggers much sooner
                                start: 'top 95%',
                                toggleActions: 'play none none reverse'
                            }
                        });
                    });
                },
            });

        }, mainContainer);
        return () => ctx.revert();
    }, []);

    // --- HANDLER FUNCTIONS ---
    const handleSaveJob = (formData) => {
        const jobDataToSave = { title: formData.jobTitle, department: formData.department, experience: formData.experience, workType: formData.workType, location: formData.workType === 'Full-time' ? 'Hybrid' : 'Remote', description: formData.jobDescription };
        if (editingJob) { setJobs(currentJobs => currentJobs.map((job, index) => index === editingJob.index ? { ...job, ...jobDataToSave } : job)); }
        else { const newJob = { ...jobDataToSave, applications: 0, shortlisted: 0, posted: 'Just now', statusColor: 'bg-green-400' }; setJobs(currentJobs => [newJob, ...currentJobs]); }
        setIsCreateModalOpen(false);
    };
    const handleOpenEditModal = (index) => { setEditingJob({ ...jobs[index], index }); setIsCreateModalOpen(true); };
    const handleConfirmDelete = () => {
        if (jobToDeleteIndex !== null) { setJobs(currentJobs => currentJobs.filter((_, index) => index !== jobToDeleteIndex)); }
        setIsDeleteModalOpen(false); setJobToDeleteIndex(null);
    };

    return (
        <div ref={mainContainer} className="flex-1 flex flex-col min-h-screen bg-gray-50">
            <div className="header-animation"> <Header /> </div>
            <main className="flex-1 p-4 md:p-8">
                <div className="animated-section"> <Stats /> </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="animated-section">
                            <JobPostings jobs={jobs} onEdit={handleOpenEditModal} onDelete={(index) => { setJobToDeleteIndex(index); setIsDeleteModalOpen(true); }} onCreate={() => { setEditingJob(null); setIsCreateModalOpen(true); }} />
                        </div>
                        <div className="animated-section">
                            <RecentApplications onViewResume={() => setIsViewResumeModalOpen(true)} onViewAll={() => setIsViewAllModalOpen(true)} />
                        </div>
                    </div>
                    <div className="right-sidebar space-y-8">
                        <div className="animated-section"> <InterviewSchedule onSchedule={() => setIsScheduleModalOpen(true)} /> </div>
                        <div className="animated-section"> <QuickActions onCreateJob={() => { setEditingJob(null); setIsCreateModalOpen(true); }} onScheduleInterview={() => setIsScheduleModalOpen(true)} onViewApplicants={() => setIsViewAllModalOpen(true)} onDownloadReport={() => setIsDownloadModalOpen(true)} /> </div>
                        <div className="animated-section"> <CompanyProfile /> </div>
                    </div>
                </div>
            </main>

            {isCreateModalOpen && <CreateJobModal onClose={() => setIsCreateModalOpen(false)} onSave={handleSaveJob} jobToEdit={editingJob} />}
            {isDeleteModalOpen && <DeleteConfirmationModal onClose={() => setIsDeleteModalOpen(false)} onConfirm={handleConfirmDelete} />}
            {isScheduleModalOpen && <Schedule_button onClose={() => setIsScheduleModalOpen(false)} />}
            {isViewAllModalOpen && <ViewAll onClose={() => setIsViewAllModalOpen(false)} />}
            {isViewResumeModalOpen && <View_Resume onClose={() => setIsViewResumeModalOpen(false)} />}
            {isDownloadModalOpen && <DownloadReport onClose={() => setIsDownloadModalOpen(false)} />}
        </div>
    );
};

export default RecruiterDashboard;