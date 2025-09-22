// src/app/(app)/instructor/content/materials/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

const materials = [
  {
    id: "m1",
    title: "React Cheat Sheet",
    description: "Quick reference for React hooks and lifecycle.",
    file: "/files/react-cheatsheet.pdf",
    type: "PDF",
  },
  {
    id: "m2",
    title: "Python Data Science Notes",
    description: "Comprehensive notes for Python data analysis.",
    file: "/files/python-ds-notes.pdf",
    type: "PDF",
  },
  {
    id: "m3",
    title: "Java Full Stack Slides",
    description: "Slides for Java enterprise development.",
    file: "/files/java-fullstack-slides.pptx",
    type: "PPTX",
  },
];

export default function UploadedMaterialsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [materialFile, setMaterialFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [materialsList, setMaterialsList] = useState(materials);

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMaterialFile(e.target.files[0]);
    }
  };

  const handleDelete = (id: string) => {
    setMaterialsList(materialsList.filter(m => m.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse || !materialFile) {
      setMessage("Please select a course and a material file.");
      return;
    }
    setUploading(true);
    setMessage("");
    // Example: send to API route (not implemented)
    const formData = new FormData();
    formData.append("courseId", selectedCourse);
    formData.append("material", materialFile);
    try {
      const res = await fetch("/api/instructor/upload-material", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setMessage("Material uploaded successfully!");
        setMaterialFile(null);
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
        <h1 className="text-2xl font-bold">Uploaded Materials</h1>
        <button
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 text-sm font-medium"
          onClick={() => setShowModal(true)}
        >
          Upload Material
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-3 w-full max-w-md relative">
            <button type="button" className="absolute top-2 right-2 text-xl" onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-lg font-bold mb-2">Upload Material to Course</h2>
            <div>
              <label className="block mb-1 font-medium">Select Course</label>
              <select
                value={selectedCourse}
                onChange={handleCourseChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">-- Choose a course --</option>
                {/* You can import and map courses here if needed */}
                <option value="cs101">Introduction to Programming</option>
                <option value="wd202">Web Development Bootcamp</option>
                <option value="ds301">Data Science with R</option>
                <option value="ai404">AI and Machine Learning</option>
                <option value="gd150">Graphic Design Principles</option>
                <option value="mktg210">Digital Marketing Essentials</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Choose Material File</label>
              <input
                type="file"
                accept=".pdf,.ppt,.pptx,.doc,.docx,.txt"
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
              {uploading ? "Uploading..." : "Upload Material"}
            </button>
            {message && <p className="mt-2 text-sm text-muted-foreground">{message}</p>}
          </form>
        </div>
      )}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {materialsList.map(material => (
          <div key={material.id} className="border rounded-lg bg-white shadow flex flex-col overflow-hidden">
            <div className="relative w-full h-32 flex items-center justify-center bg-muted">
              <span className="text-4xl font-bold text-primary">{material.type}</span>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold mb-1">{material.title}</h2>
              <p className="text-sm text-muted-foreground mb-2">{material.description}</p>
              <div className="flex gap-2 mt-auto">
                <a
                  href={material.file}
                  download
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-xs"
                  style={{ textDecoration: "none" }}
                >
                  Download
                </a>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                  onClick={() => handleDelete(material.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
