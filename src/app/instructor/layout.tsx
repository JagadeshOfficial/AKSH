"use client";
import { Sidebar } from "@/components/layout/sidebar";
import React from "react";
import { usePathname } from "next/navigation";

export default function InstructorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Use single column layout for login page
  if (pathname === "/instructor/login") {
    return <main className="min-h-screen w-full flex flex-col">{children}</main>;
  }
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <main className="flex flex-col">{children}</main>
    </div>
  );
}
