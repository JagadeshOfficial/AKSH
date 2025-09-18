"use client";

import { navItems, user } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Bell } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const studentNav = navItems.filter(item => item.role === 'student' || item.role === 'all');
  const instructorNav = navItems.filter(item => item.role === 'instructor' || item.role === 'all');

  // Show only student sidebar if on student dashboard/routes
  const isStudent = pathname.startsWith("/dashboard");
  // Show only instructor sidebar if on instructor dashboard/routes
  const isInstructor = pathname.startsWith("/instructor");

  return (
    <div className="flex h-full flex-col border-r bg-card text-card-foreground">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          <span className="">AKSH-JAVA-HUB</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-4">
          {isStudent && (
            <div>
              <p className="px-3 py-2 text-xs font-semibold text-muted-foreground">Student</p>
              {studentNav.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === item.href && "bg-muted text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </div>
          )}
          {isInstructor && (
            <div>
              <p className="px-3 py-2 text-xs font-semibold text-muted-foreground">Instructor</p>
              {instructorNav.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === item.href && "bg-muted text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
