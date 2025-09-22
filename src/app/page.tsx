"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Video, Clock, Headphones, Book, User, Code, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [showLoginChoice, setShowLoginChoice] = useState(false);
  const handleLoginClick = () => setShowLoginChoice(true);
  const handleLoginSelect = (type: 'student' | 'instructor') => {
    setShowLoginChoice(false);
    if (type === 'student') window.location.href = '/student/login';
    else window.location.href = '/instructor/login';
  };
  return (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-200 via-white to-blue-100">
      {/* Header */}
      <header className="h-16 px-6 flex items-center justify-between bg-white/70 backdrop-blur-xl shadow-lg border-b border-gray-200 fixed top-0 left-0 w-full z-50" style={{boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.10)', border: '1px solid rgba(255,255,255,0.12)'}}>
        <Link href="/" className="flex items-center gap-3 font-bold text-xl">
          <Image
            src="/images/Logo.png"
            alt="AKSH-JAVA-HUB Logo"
            width={120}
            height={40}
            className="w-[120px] h-[40px]"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 mr-2">
          <Link href="/about" className="font-medium text-indigo-700 hover:text-indigo-900 transition-colors">About</Link>
          <Link href="/contact" className="font-medium text-indigo-700 hover:text-indigo-900 transition-colors">Contact</Link>
          <Button variant="ghost" size="sm" className="font-semibold text-indigo-700 px-4 py-2" onClick={handleLoginClick}>
            Login <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
      </header>
      {/* Login Choice Modal */}
      {showLoginChoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xs text-center">
            <h2 className="text-xl font-bold mb-4">Login as</h2>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="w-full" onClick={() => handleLoginSelect('student')}>
                Student
              </Button>
              <Button size="lg" variant="outline" className="w-full" onClick={() => handleLoginSelect('instructor')}>
                Instructor
              </Button>
            </div>
            <button className="mt-6 text-sm text-gray-500 hover:underline" onClick={() => setShowLoginChoice(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
  <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="w-full flex flex-col items-center justify-center py-24 mb-16">
          <div className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl px-10 py-16 max-w-2xl text-center border border-gray-100">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900 drop-shadow-lg">
              Master <span className="text-orange-500">Java Programming</span> <span className="text-indigo-700">Today!</span>
            </h1>
            <p className="text-2xl text-gray-700 mb-10 font-medium">
              In-depth tutorials &bull; Practical examples &bull; Expert guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="w-full sm:w-auto transition-transform duration-200 hover:scale-105 hover:shadow-lg bg-indigo-600 text-white font-bold text-lg px-8 py-4 rounded-full">
                EXPLORE TUTORIALS
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto transition-transform duration-200 hover:scale-105 hover:shadow-lg border-2 border-indigo-600 text-indigo-700 font-bold text-lg px-8 py-4 rounded-full">
                REQUEST INFO
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
  <section className="grid md:grid-cols-3 gap-16 max-w-5xl w-full py-16 mb-16 bg-white/70 rounded-3xl shadow-2xl backdrop-blur-xl border border-gray-100">
          <div className="bg-indigo-50 rounded-2xl p-8 shadow text-center flex flex-col items-center">
            <Video className="h-10 w-10 text-indigo-600 mb-4" />
            <h2 className="font-bold text-xl mb-2">Live Tutorials</h2>
            <p className="text-gray-600">Engage in interactive learning sessions with our expert instructors.</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 shadow text-center flex flex-col items-center">
            <Clock className="h-10 w-10 text-green-600 mb-4" />
            <h2 className="font-bold text-xl mb-2">Flexible Learning</h2>
            <p className="text-gray-600">Access all materials and learn at your own pace, anytime, anywhere.</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-8 shadow text-center flex flex-col items-center">
            <Headphones className="h-10 w-10 text-yellow-600 mb-4" />
            <h2 className="font-bold text-xl mb-2">Doubt Clearance</h2>
            <p className="text-gray-600">Get your questions answered instantly by our dedicated team of experts.</p>
          </div>
        </section>

        {/* Popular Learning Paths */}
  <section className="max-w-6xl w-full py-12 mb-16 bg-white/70 rounded-3xl shadow-2xl backdrop-blur-xl border border-gray-100">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900">Explore Popular Learning Paths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Java Full Stack",
                subtitle: "Master frontend and backend with Java, Spring, and modern JS frameworks.",
                image: "/images/Java-Full-Stack.png"
              },
              {
                title: "Python Full Stack",
                subtitle: "Build powerful web apps with Django, Flask, and cutting-edge frontend tools.",
                image: "/images/Python-Full-Stack.png"
              },
              {
                title: "Frontend Development",
                subtitle: "Craft stunning user interfaces with React, Angular, and the latest CSS techniques.",
                image: "/images/Frontend-Development.webp"
              },
              {
                title: "Database",
                subtitle: "Learn to design, manage, and query relational and NoSQL databases. Master data modeling and ensure data integrity.",
                image: "/images/SQL-Databases.png"
              },
              {
                title: "Data Analytics",
                subtitle: "Turn raw data into actionable insights using Python, SQL, and visualization libraries.",
                image: "/images/analytics-python.jpg"
              },
              {
                title: "DevOps with AWS",
                subtitle: "Automate and scale infrastructure with CI/CD pipelines, Docker, and AWS.",
                image: "/images/Devops.png"
              }
            ].map((path, idx) => (
              <Link key={idx} href={`/notes/${encodeURIComponent(path.title.replace(/\s+/g, '-').toLowerCase())}`} className="bg-white rounded-2xl shadow-lg flex flex-col justify-between border border-gray-100 hover:scale-105 transition-transform duration-200 overflow-hidden cursor-pointer">
                <div className="w-full h-40 relative">
                  <Image src={path.image} alt={path.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{path.title}</h3>
                  <p className="text-gray-600 mb-4">{path.subtitle}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-indigo-600">AKSH Java Hub</span>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">Free</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
  <section className="max-w-6xl w-full py-20 mb-16 bg-white/80 rounded-3xl shadow-2xl backdrop-blur-xl border border-gray-100">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900">Why Choose AKSH Java Hub</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 rounded-2xl p-8 shadow text-center flex flex-col items-center">
              <Book className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Comprehensive Tutorials</h3>
              <p className="text-gray-600">From beginner to advanced levels, our curriculum covers all essential Java technologies.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 shadow text-center flex flex-col items-center">
              <User className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Learn directly from industry experts with years of real-world development experience.</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 shadow text-center flex flex-col items-center">
              <Code className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Practical Examples</h3>
              <p className="text-gray-600">Reinforce your learning with hands-on code snippets and real-world applications.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
  <footer className="bg-gradient-to-br from-indigo-900 via-blue-900 to-gray-900 text-gray-100 py-20 px-12 mt-20 rounded-t-3xl shadow-2xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 items-start">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image src="/images/Logo.png" alt="AKSH Java Hub Logo" width={80} height={40} />
              <span className="font-extrabold text-2xl">AKSH JAVA HUB</span>
            </div>
            <p className="text-gray-400 text-sm">Your comprehensive guide to mastering Java. From core concepts to advanced frameworks, we provide the resources you need to excel in your tech journey.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-indigo-400">Home</Link></li>
              <li><Link href="/tutorials" className="hover:text-indigo-400">Tutorials</Link></li>
              <li><Link href="/courses" className="hover:text-indigo-400">Courses</Link></li>
              <li><Link href="/about" className="hover:text-indigo-400">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/testimonials" className="hover:text-indigo-400">Testimonials</Link></li>
              <li><Link href="/community" className="hover:text-indigo-400">Community</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-400">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter to get the latest tutorials and news delivered to your inbox.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email address" className="bg-gray-800 border border-gray-700 rounded px-4 py-2 flex-1 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <Button type="submit" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-indigo-400"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-indigo-400"><Mail className="h-6 w-6" /></a>
              <a href="#" className="hover:text-indigo-400"><Phone className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} AKSH Java Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
