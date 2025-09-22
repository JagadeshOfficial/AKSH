"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddNewJobPage() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [about, setAbout] = useState("");
  const [roleOverview, setRoleOverview] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [mustHaveSkills, setMustHaveSkills] = useState("");
  const [goodToHaveSkills, setGoodToHaveSkills] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [compensation, setCompensation] = useState("");
  const [location, setLocation] = useState("");
  const [workType, setWorkType] = useState("Onsite");
  const [careerGrowth, setCareerGrowth] = useState("");
  const [hiringProcess, setHiringProcess] = useState("");
  const [howToApply, setHowToApply] = useState("");

  function handleAddJob() {
    // For demo, just clear fields
    setTitle("");
    setCompany("");
    setAbout("");
    setRoleOverview("");
    setResponsibilities("");
    setMustHaveSkills("");
    setGoodToHaveSkills("");
    setEducation("");
    setExperience("");
    setCompensation("");
    setLocation("");
    setWorkType("Onsite");
    setCareerGrowth("");
    setHiringProcess("");
    setHowToApply("");
    alert("Job posted!");
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Job</h1>
      <form className="bg-white rounded shadow p-6 mb-8 space-y-6" onSubmit={e => {e.preventDefault(); handleAddJob();}}>
        <div>
          <label className="font-semibold">About the Company / Who We Are</label>
          <textarea className="border rounded p-2 w-full mt-1" rows={2} value={about} onChange={e => setAbout(e.target.value)} placeholder="Describe the company..." />
        </div>
        <div>
          <label className="font-semibold">Role Overview / Position Summary</label>
          <textarea className="border rounded p-2 w-full mt-1" rows={2} value={roleOverview} onChange={e => setRoleOverview(e.target.value)} placeholder="Summarize the role..." />
        </div>
        <div>
          <label className="font-semibold">Key Responsibilities / What You’ll Do</label>
          <textarea className="border rounded p-2 w-full mt-1" rows={3} value={responsibilities} onChange={e => setResponsibilities(e.target.value)} placeholder="List key responsibilities..." />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Required Skills / Must-Have Skills</label>
            <textarea className="border rounded p-2 w-full mt-1" rows={2} value={mustHaveSkills} onChange={e => setMustHaveSkills(e.target.value)} placeholder="List must-have skills..." />
          </div>
          <div>
            <label className="font-semibold">Preferred Skills / Good-to-Have</label>
            <textarea className="border rounded p-2 w-full mt-1" rows={2} value={goodToHaveSkills} onChange={e => setGoodToHaveSkills(e.target.value)} placeholder="List good-to-have skills..." />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Educational Qualification</label>
            <input className="border rounded p-2 w-full mt-1" value={education} onChange={e => setEducation(e.target.value)} placeholder="e.g. B.Tech, M.Sc, etc." />
          </div>
          <div>
            <label className="font-semibold">Experience Required</label>
            <input className="border rounded p-2 w-full mt-1" value={experience} onChange={e => setExperience(e.target.value)} placeholder="e.g. 2+ years" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Compensation & Benefits / What We Offer</label>
            <input className="border rounded p-2 w-full mt-1" value={compensation} onChange={e => setCompensation(e.target.value)} placeholder="e.g. ₹10-15 LPA, Health Insurance, etc." />
          </div>
          <div>
            <label className="font-semibold">Work Location & Type</label>
            <input className="border rounded p-2 w-full mt-1 mb-2" value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g. Bangalore, Mumbai, etc." />
            <select className="border rounded p-2 w-full" value={workType} onChange={e => setWorkType(e.target.value)}>
              <option value="Onsite">Onsite</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
        </div>
        <div>
          <label className="font-semibold">Career Growth Opportunities</label>
          <textarea className="border rounded p-2 w-full mt-1" rows={2} value={careerGrowth} onChange={e => setCareerGrowth(e.target.value)} placeholder="Describe growth opportunities..." />
        </div>
        <div>
          <label className="font-semibold">Hiring Process / Selection Process</label>
          <textarea className="border rounded p-2 w-full mt-1" rows={2} value={hiringProcess} onChange={e => setHiringProcess(e.target.value)} placeholder="Describe the process..." />
        </div>
        <div>
          <label className="font-semibold">How to Apply</label>
          <textarea className="border rounded p-2 w-full mt-1" rows={2} value={howToApply} onChange={e => setHowToApply(e.target.value)} placeholder="Application instructions..." />
        </div>
        <div className="pt-4">
          <Button type="submit">Post Job</Button>
        </div>
      </form>
    </div>
  );
}
