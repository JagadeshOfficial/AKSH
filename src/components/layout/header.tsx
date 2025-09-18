"use client";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { UserNav } from "./user-nav";
import { Sidebar } from "./sidebar";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const title = navItems.find(item => item.href === pathname)?.title || 'Dashboard';
  
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
        <Sheet>
            <SheetTrigger asChild>
                <button className="lg:hidden">
                    <Menu className="h-6 w-6"/>
                    <span className="sr-only">Toggle navigation menu</span>
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72">
                <Sidebar />
            </SheetContent>
        </Sheet>

        <div className="w-full flex-1">
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>

        <div className="w-full flex-1">
            <form>
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                </div>
            </form>
        </div>

        <UserNav />
    </header>
  );
}
