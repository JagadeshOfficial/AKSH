// src/app/(app)/instructor/courses/reviews/page.tsx
"use client";
import { courses } from "@/lib/data";
import Image from "next/image";

export default function ReviewQueuePage() {
  // Example: filter courses that need review (customize as needed)
  const reviewCourses = courses.filter(course => !course.enrolled);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Review Queue</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviewCourses.length === 0 ? (
          <p className="text-muted-foreground">No courses pending review.</p>
        ) : (
          reviewCourses.map(course => (
            <div key={course.id} className="border rounded-lg bg-white shadow flex flex-col overflow-hidden">
              <div className="relative w-full h-40">
                <Image
                  src={`/images/${course.imageId}.jpg`}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold mb-1">{course.title}</h2>
                <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
                <p className="text-xs mt-auto">Instructor: {course.instructor}</p>
                <button className="mt-3 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
                  Review Course
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}