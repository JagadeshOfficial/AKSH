import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <BookOpen className="w-6 h-6 text-primary" />
          <span>AKSH-JAVA-HUB</span>
        </Link>
        <Button asChild variant="ghost">
          <Link href="/dashboard">Login <ArrowRight className="ml-2 h-4 w-4"/></Link>
        </Button>
      </header>
      <main className="flex-1 flex items-center justify-center text-center p-4">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            The Future of Learning is Here.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            LMS Edge is a cutting-edge platform designed to empower both students and instructors with powerful tools for a seamless educational experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" passHref>
              <Button size="lg" className="w-full sm:w-auto">
                <GraduationCap className="mr-2 h-5 w-5" />
                Go to Student Dashboard
              </Button>
            </Link>
            <Link href="/instructor/dashboard" passHref>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M18 8.7 12 12l-6-3.3a1 1 0 0 1 0-1.8l6-3.3a1 1 0 0 1 1 0l6 3.3a1 1 0 0 1 0 1.8Z"/><path d="m2 13.6 6 3.3a1 1 0 0 0 1 0l6-3.3a1 1 0 0 0 0-1.8L9 8.2a1 1 0 0 0-1 0L2 11.8a1 1 0 0 0 0 1.8Z"/><path d="m2 18.1 6 3.3a1 1 0 0 0 1 0l6-3.3a1 1 0 0 0 0-1.8L9 12.8a1 1 0 0 0-1 0L2 16.3a1 1 0 0 0 0 1.8Z"/></svg>
                Go to Instructor Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} LMS Edge. All rights reserved.
      </footer>
    
    </div>
  );
}
