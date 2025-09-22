"use client";

import { instructorNavGroups, navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  // Hide sidebar on instructor login page
  if (pathname === "/instructor/login") {
    return null;
  }

  const studentNav = navItems.filter(item => item.role === 'student' || item.role === 'all');
  const isInstructor = pathname.startsWith("/instructor");
  const isStudent = !isInstructor;

  return (
    <div className="flex h-full flex-col border-r bg-card text-card-foreground">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Image
            src="/images/Logo.png"
            alt="AKSH-JAVA-HUB Logo"
            width={150}
            height={10}
            className="h-21 w-21 object-contain"
          />
          <span className=""></span>
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
              {instructorNavGroups.map((group) => (
                <div key={group.title} className="mb-4">
                  <p className="px-3 py-2 text-xs font-semibold text-muted-foreground">{group.title}</p>
                  {group.items.map((item) => (
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
              ))}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
