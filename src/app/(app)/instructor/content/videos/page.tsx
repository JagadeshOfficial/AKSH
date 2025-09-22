// src/app/(app)/instructor/content/videos/page.tsx
"use client";
import Image from "next/image";

const videos = [
  {
    id: "v1",
    title: "React Basics",
    description: "Introduction to React fundamentals.",
    thumbnail: "/images/Frontend-Development.webp",
    duration: "12:34",
  },
  {
    id: "v2",
    title: "Python Data Science",
    description: "Data analysis with Python.",
    thumbnail: "/images/analytics-python.jpg",
    duration: "18:20",
  },
  {
    id: "v3",
    title: "Java Full Stack Overview",
    description: "Enterprise Java development.",
    thumbnail: "/images/Java-Full-Stack.png",
    duration: "15:10",
  },
];

import { useState } from "react";
import { courses } from "@/lib/data";

export default function UploadedVideosPage() {
  const [showModal, setShowModal] = useState(false);
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
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Uploaded Videos</h1>
        <button
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 text-sm font-medium"
          onClick={() => setShowModal(true)}
        >
          Upload Video
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-3 w-full max-w-md relative">
            <button type="button" className="absolute top-2 right-2 text-xl" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-lg font-bold mb-2">Upload Video to Course</h2>
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
      )}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {videos.map(video => (
          <div key={video.id} className="border rounded-lg bg-white shadow flex flex-col overflow-hidden">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold mb-1">{video.title}</h2>
              <p className="text-sm text-muted-foreground mb-2">{video.description}</p>
              <span className="text-xs text-muted-foreground mt-auto">Duration: {video.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
