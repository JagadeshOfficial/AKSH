// src/app/(app)/instructor/courses/categories/page.tsx
"use client";
import { Book, Folder } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    id: "web-dev",
    name: "Web Development",
    description: "Courses about building websites and web apps.",
    image: "/images/Frontend-Development.webp",
  },
  {
    id: "python",
    name: "Python Programming",
    description: "Learn Python for data science, AI, and more.",
    image: "/images/analytics-python.jpg",
  },
  {
    id: "python-full-stack",
    name: "Python Full Stack",
    description: "Become a full stack developer using Python frameworks.",
    image: "/images/Python-Full-Stack.png",
  },
  {
    id: "java",
    name: "Java Full Stack",
    description: "Master Java for enterprise and backend development.",
    image: "/images/Java-Full-Stack.png",
  },
  {
    id: "sql",
    name: "SQL Databases",
    description: "Understand relational databases and SQL.",
    image: "/images/SQL-Databases.png",
  },
  {
    id: "devops",
    name: "DevOps",
    description: "Learn CI/CD, cloud, and infrastructure automation.",
    image: "/images/Devops.png",
  },
];

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Folder className="h-6 w-6 text-primary" />
        Categories
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.id} className="border rounded-lg bg-white shadow flex flex-col overflow-hidden">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-lg">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
                <Book className="h-4 w-4 text-muted-foreground" />
                {cat.name}
              </h2>
              <p className="text-sm text-muted-foreground mb-2">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
