import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';

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
import ViewAll from './ViewAll';
import View_Resume from './View_Resume';
import DownloadReport from './DownloadReport';
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

    //STATE MANAGEMENT
    const [jobs, setJobs] = useState(initialJobs);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [jobToDeleteIndex, setJobToDeleteIndex] = useState(null);
    const [isViewAllModalOpen, setIsViewAllModalOpen] = useState(false);
    const [isViewResumeModalOpen, setIsViewResumeModalOpen] = useState(false);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    //ANIMATIONS
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.header-animation', {
                y: -80,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.05
            });

            gsap.from('.stat-card', {
                opacity: 0,
                y: 50,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.stats-section',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            });

            const animatedSections = gsap.utils.toArray('.main-content-section, .sidebar-section');
            animatedSections.forEach(section => {
                gsap.from(section, {
                    opacity: 0,
                    y: 20,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 97%',
                        toggleActions: 'play none none reverse',
                    },
                    duration: 1.5,
                    ease: 'power3.out',
                });
            });

        }, mainContainer);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => clearTimeout(timer);
    }, [jobs]);


    //HANDLER FUNCTIONS
    const handleSaveJob = (formData) => {
        const jobDataToSave = {
            title: formData.jobTitle,
            department: formData.department,
            experience: formData.experience,
            workType: formData.workType,
            location: formData.workType === 'Full-time' ? 'Hybrid' : 'Remote',
            description: formData.jobDescription
        };
        if (editingJob) {
            setJobs(currentJobs => currentJobs.map((job, index) => index === editingJob.index ? { ...job, ...jobDataToSave } : job));
        } else {
            const newJob = { ...jobDataToSave, applications: 0, shortlisted: 0, posted: 'Just now', statusColor: 'bg-green-400' };
            setJobs(currentJobs => [newJob, ...currentJobs]);
        }
        setIsCreateModalOpen(false);
    };

    const handleOpenEditModal = (index) => {
        setEditingJob({ ...jobs[index], index });
        setIsCreateModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (jobToDeleteIndex !== null) {
            setJobs(currentJobs => currentJobs.filter((_, index) => index !== jobToDeleteIndex));
        }
        setIsDeleteModalOpen(false);
        setJobToDeleteIndex(null);
    };

    return (
        <div ref={mainContainer} className="flex-1 flex flex-col min-h-screen bg-gray-50 overflow-x-hidden p-6">
            <div className="header-animation w-full">
                <div className="w-full max-w-7xl mx-auto ">
                    <Header />
                </div>
            </div>

            <main className="flex-1 p-4 md:p-8 w-full max-w-7xl mx-auto">
                <div className="stats-section">
                    <Stats />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="main-content-section">
                            <JobPostings
                                jobs={jobs}
                                onEdit={handleOpenEditModal}
                                onDelete={(index) => { setJobToDeleteIndex(index); setIsDeleteModalOpen(true); }}
                                onCreate={() => { setEditingJob(null); setIsCreateModalOpen(true); }}
                            />
                        </div>
                        <div className="main-content-section">
                            <RecentApplications
                                onViewResume={() => setIsViewResumeModalOpen(true)}
                                onViewAll={() => setIsViewAllModalOpen(true)}
                            />
                        </div>
                    </div>
                    <div className="right-sidebar space-y-8">
                        <div className="sidebar-section">
                            <InterviewSchedule />
                        </div>
                        <div className="sidebar-section">
                            <QuickActions
                                onCreateJob={() => { setEditingJob(null); setIsCreateModalOpen(true); }}
                                onViewApplicants={() => setIsViewAllModalOpen(true)}
                                onDownloadReport={() => setIsDownloadModalOpen(true)}
                            />
                        </div>
                        <div className="sidebar-section">
                            <CompanyProfile />
                        </div>
                    </div>
                </div>
            </main>

            {isCreateModalOpen && <CreateJobModal onClose={() => setIsCreateModalOpen(false)} onSave={handleSaveJob} jobToEdit={editingJob} />}
            {isDeleteModalOpen && <DeleteConfirmationModal onClose={() => setIsDeleteModalOpen(false)} onConfirm={handleConfirmDelete} />}
            {/*Schedule button modal rendering removed (later to redirect it to interview schedule page same for the schedule button)*/}
            {isViewAllModalOpen && <ViewAll onClose={() => setIsViewAllModalOpen(false)} />}
            {isViewResumeModalOpen && <View_Resume onClose={() => setIsViewResumeModalOpen(false)} />}
            {isDownloadModalOpen && <DownloadReport onClose={() => setIsDownloadModalOpen(false)} />}
        </div>
    );
};

export default RecruiterDashboard;