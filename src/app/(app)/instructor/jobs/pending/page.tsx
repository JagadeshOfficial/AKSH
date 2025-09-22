"use client";

import { useState } from "react";
import { jobs } from "@/lib/data";
type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  imageId: string;
  description?: string;
};

export default function PendingApprovalJobsPage() {
  const pendingJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes("pending")
  );
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 text-primary">
        Pending Approval
      </h1>
      {pendingJobs.length === 0 ? (
        <div className="text-muted-foreground">No jobs pending approval.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pendingJobs.map((job) => (
            <div
              key={job.id}
              className="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-6 flex flex-col items-center">
                <img
                  src={`/images/${job.imageId}.png`}
                  alt={job.title}
                  className="h-20 w-20 rounded-full object-cover border-4 border-primary mb-4 group-hover:scale-105 transition-transform"
                />
                <h2 className="font-bold text-xl text-primary mb-1 group-hover:underline">
                  {job.title}
                </h2>
                <p className="text-gray-600">{job.company}</p>
                <span className="text-xs text-gray-400 mt-1">{job.location}</span>
                {/* Face Approval Status */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="inline-block h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h.01M9 9h.01M12 17c-3.31 0-6-2.69-6-6V7a6 6 0 1112 0v4c0 3.31-2.69 6-6 6z" />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold text-primary">Face Approval Pending</span>
                  <button
                    className="ml-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-xs"
                    onClick={() => alert('Face approved for ' + job.title)}
                  >
                    Approve Face
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-end p-4">
                <button
                  className="w-full py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition"
                  onClick={() => setSelectedJob(job)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Popup for Job Details */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-primary text-xl font-bold"
              onClick={() => setSelectedJob(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center mb-4">
              <img
                src={`/images/${selectedJob.imageId}.png`}
                alt={selectedJob.title}
                className="h-20 w-20 rounded-full object-cover border-4 border-primary mb-4"
              />
              <h2 className="font-bold text-2xl text-primary mb-1">
                {selectedJob.title}
              </h2>
              <p className="text-gray-600 mb-1">{selectedJob.company}</p>
              <span className="text-xs text-gray-400 mb-2">
                {selectedJob.location}
              </span>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-2">Job Description</h3>
              <p className="text-gray-700 whitespace-pre-line">
                {selectedJob.description || "No description available."}
              </p>
            </div>
            <div className="mb-2">
              <span className="font-semibold">Job ID:</span> {selectedJob.id}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
                onClick={() => setSelectedJob(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
