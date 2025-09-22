// src/app/(app)/instructor/courses/page.tsx
"use client";
import { useState } from "react";
import { courses as rawCourses } from "@/lib/data";

import Image from "next/image";

export default function InstructorCoursesPage() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [amount, setAmount] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  // Add default amount property to initial courses
  const [courses, setCourses] = useState(
    rawCourses.map(course => ({ ...course, amount: "" }))
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    const newCourse = {
      id: `c${Date.now()}`,
      title,
      description,
      instructor,
      imageId: imagePreview || "course1",
      enrolled: false,
      amount,
    };
    setCourses([newCourse, ...courses]);
    setTitle("");
    setDescription("");
    setInstructor("");
    setAmount("");
    setImageFile(null);
    setImagePreview("");
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">All Courses</h1>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
          onClick={() => setShowForm(true)}
        >
          Add Course
        </button>
      </div>
      {/* Modal Popup for Add Course */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <form onSubmit={handleAddCourse} className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-3 w-full max-w-md relative">
            <button type="button" className="absolute top-2 right-2 text-xl" onClick={() => setShowForm(false)}>&times;</button>
            <h2 className="text-lg font-bold mb-2">Add New Course</h2>
            <input
              type="text"
              placeholder="Course Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
            <input
              type="text"
              placeholder="Instructor"
              value={instructor}
              onChange={e => setInstructor(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
            <input
              type="number"
              placeholder="Amount (₹)"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border rounded px-3 py-2"
            />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover rounded" />
            )}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add</button>
          </form>
        </div>
      )}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <div key={course.id} className="border rounded-lg bg-white shadow flex flex-col overflow-hidden">
            <div className="relative w-full h-40">
              {course.imageId.startsWith("blob:") ? (
                <img src={course.imageId} alt={course.title} className="object-cover w-full h-full" />
              ) : (
                <Image
                  src={`/images/${course.imageId}.jpg`}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold mb-1">{course.title}</h2>
              <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
              <p className="text-xs">Instructor: {course.instructor}</p>
              {course.amount && (
                <p className="text-xs font-semibold text-green-700">Amount: ₹{course.amount}</p>
              )}
              <div className="flex gap-2 mt-4">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                  onClick={() => alert(`Edit course: ${course.title}`)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                  onClick={() => alert(`Remove course: ${course.title}`)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
