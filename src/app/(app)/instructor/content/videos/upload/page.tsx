// src/app/(app)/instructor/content/videos/upload/page.tsx
"use client";
import { useState } from "react";
import { courses } from "@/lib/data";

export default function UploadCourseVideoPage() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse || !videoFile) {
      setMessage("Please select a course and a video file.");
      return;
    }
    setUploading(true);
    setMessage("");
    // Example: send to API route (not implemented)
    const formData = new FormData();
    formData.append("courseId", selectedCourse);
    formData.append("video", videoFile);
    try {
      const res = await fetch("/api/instructor/upload-video", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setMessage("Video uploaded successfully!");
        setVideoFile(null);
        setSelectedCourse("");
      } else {
        setMessage("Upload failed. Try again.");
      }
    } catch {
      setMessage("Upload failed. Try again.");
    }
    setUploading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Upload Video to Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Select Course</label>
          <select
            value={selectedCourse}
            onChange={handleCourseChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">-- Choose a course --</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>{course.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Choose Video File</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Video"}
        </button>
        {message && <p className="mt-2 text-sm text-muted-foreground">{message}</p>}
      </form>
    </div>
  );
}
