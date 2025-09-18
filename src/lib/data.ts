import type { LucideIcon } from 'lucide-react';
import { Book, Code, Film, MessageSquare, Briefcase, DollarSign, Settings, GraduationCap, LayoutDashboard, Star, FileText } from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  label?: string;
  role: 'student' | 'instructor' | 'all';
};

export const navItems: NavItem[] = [
  { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, role: 'student' },
  { title: 'Courses', href: '/courses', icon: Book, role: 'student' },
  { title: 'Discussions', href: '/discussions', icon: MessageSquare, role: 'student' },
  { title: 'Job Board', href: '/jobs', icon: Briefcase, role: 'student' },
  { title: 'Dashboard', href: '/instructor/dashboard', icon: LayoutDashboard, role: 'instructor' },
  { title: 'AI Feedback', href: '/feedback', icon: Star, role: 'instructor' },
  { title: 'Compiler', href: '/compiler', icon: Code, role: 'all' },
  { title: 'Payment', href: '/payment', icon: DollarSign, role: 'all' },
  { title: 'Settings', href: '/settings', icon: Settings, role: 'all' },
];

export const courses = [
  { id: 'cs101', title: 'Introduction to Programming', description: 'Learn the fundamentals of programming using Python.', instructor: 'Dr. Ada Lovelace', imageId: 'course1', enrolled: true, progress: 75 },
  { id: 'wd202', title: 'Web Development Bootcamp', description: 'A comprehensive course on modern web development with React and Node.js.', instructor: 'Dr. Tim Berners-Lee', imageId: 'course2', enrolled: true, progress: 45 },
  { id: 'ds301', title: 'Data Science with R', description: 'Dive deep into data analysis and visualization with R.', instructor: 'Dr. John Chambers', imageId: 'course3', enrolled: false },
  { id: 'ai404', title: 'AI and Machine Learning', description: 'Explore the exciting world of artificial intelligence.', instructor: 'Dr. Alan Turing', imageId: 'course4', enrolled: true, progress: 90 },
  { id: 'gd150', title: 'Graphic Design Principles', description: 'Master the core concepts of visual design and communication.', instructor: 'Mr. Paul Rand', imageId: 'course5', enrolled: false },
  { id: 'mktg210', title: 'Digital Marketing Essentials', description: 'Understand the strategies behind successful online marketing campaigns.', instructor: 'Ms. Ann Handley', imageId: 'course6', enrolled: false },
];

export const assignments = [
    { id: 'a1', course: 'Introduction to Programming', title: 'Basic Syntax and Variables', dueDate: '2024-09-15', submitted: true, grade: 95, feedback: 'Excellent work! Your variable names are very clear and your code is well-commented.' },
    { id: 'a2', course: 'Web Development Bootcamp', title: 'Build a Personal Portfolio', dueDate: '2024-09-20', submitted: true, grade: 88, feedback: 'Great start. Consider improving the responsiveness on smaller screens.' },
    { id: 'a3', course: 'AI and Machine Learning', title: 'Implement a Simple Neural Network', dueDate: '2024-09-25', submitted: false },
    { id: 'a4', course: 'Introduction to Programming', title: 'Loops and Conditionals', dueDate: '2024-10-01', submitted: false },
];

export const jobs = [
    { id: 'j1', title: 'Frontend Developer', company: 'Tech Solutions Inc.', location: 'Remote', imageId: 'job1' },
    { id: 'j2', title: 'Backend Engineer', company: 'Data Systems LLC', location: 'New York, NY', imageId: 'job2' },
    { id: 'j3', title: 'UX/UI Designer', company: 'Creative Minds', location: 'San Francisco, CA', imageId: 'job3' },
    { id: 'j4', title: 'Data Analyst', company: 'Number Crunchers', location: 'Chicago, IL', imageId: 'job4' },
];

export const discussions = [
    { id: 'd1', course: 'Web Development Bootcamp', title: 'Struggling with React hooks', author: 'Alice', replies: 5, lastReply: '2 hours ago' },
    { id: 'd2', course: 'Introduction to Programming', title: 'What\'s the best way to handle errors in Python?', author: 'Bob', replies: 12, lastReply: '5 hours ago' },
    { id: 'd3', course: 'Data Science with R', title: 'Best libraries for data visualization?', author: 'Charlie', replies: 8, lastReply: '1 day ago' },
];

export const user = {
    name: 'Alex Doe',
    email: 'alex.doe@example.com',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
}
