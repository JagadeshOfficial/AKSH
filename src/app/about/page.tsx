"use client";
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Linkedin, Instagram, Twitter, ArrowRight, GraduationCap, Code2, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [showLoginChoice, setShowLoginChoice] = useState(false);
  const handleLoginClick = () => setShowLoginChoice(true);
  const handleLoginSelect = (type: 'student' | 'instructor') => {
    setShowLoginChoice(false);
    if (type === 'student') window.location.href = '/student/login';
    else window.location.href = '/instructor/login';
  };
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-200 via-white to-blue-100">
      {/* Header - same as Home */}
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

      {/* Main Content - About sections */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-24">
        {/* Hero Section */}
        <section className="about-hero text-center text-white py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl w-full max-w-5xl mb-12">
          <h1 className="page-title text-4xl md:text-5xl font-extrabold mb-4">Empowering the Next Generation of Java Developers</h1>
          <p className="lead text-lg md:text-xl my-4">We are a team of passionate developers and educators dedicated to making high-quality Java education accessible to everyone.</p>
        </section>

        {/* Mission Section */}
        <section className="py-12 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80" width={600} height={400} className="rounded-3xl shadow-xl w-full h-auto object-cover" alt="Team collaborating" />
            </div>
            <div>
              <h2 className="section-title text-2xl md:text-3xl font-bold text-indigo-700 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-2">Inspired by the best learning platforms like Javatpoint and GeeksforGeeks, our mission is to provide comprehensive, practical, and up-to-date learning resources for the Java ecosystem. We believe in learning by doing, focusing on real-world projects that prepare our students for successful careers in technology.</p>
              <p className="text-gray-500">We aim to bridge the gap between academic knowledge and industry demands, ensuring every learner has the skills and confidence to excel.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-indigo-50 w-full max-w-5xl rounded-3xl shadow-xl mb-12">
          <div className="text-center mb-8">
            <h2 className="section-title text-2xl md:text-3xl font-bold text-indigo-700 mb-2">Why AKSH Java Hub?</h2>
            <p className="text-gray-600">The advantages of learning with us.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="feature-card text-center glassmorphism p-6 rounded-2xl shadow-lg">
              <div className="feature-icon bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 rounded-full p-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h5 className="font-semibold mb-1">Expert Instructors</h5>
              <p className="text-gray-600 text-sm">Learn from industry veterans with years of real-world experience in Java development.</p>
            </div>
            <div className="feature-card text-center glassmorphism p-6 rounded-2xl shadow-lg">
              <div className="feature-icon bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 rounded-full p-4">
                <Code2 className="h-8 w-8" />
              </div>
              <h5 className="font-semibold mb-1">Practical Learning</h5>
              <p className="text-gray-600 text-sm">Focus on hands-on projects and coding exercises that build tangible skills.</p>
            </div>
            <div className="feature-card text-center glassmorphism p-6 rounded-2xl shadow-lg">
              <div className="feature-icon bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 rounded-full p-4">
                <Rocket className="h-8 w-8" />
              </div>
              <h5 className="font-semibold mb-1">Career Support</h5>
              <p className="text-gray-600 text-sm">Get guidance on resumes, interview preparation, and career growth.</p>
            </div>
            <div className="feature-card text-center glassmorphism p-6 rounded-2xl shadow-lg">
              <div className="feature-icon bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 rounded-full p-4">
                <Users className="h-8 w-8" />
              </div>
              <h5 className="font-semibold mb-1">Vibrant Community</h5>
              <p className="text-gray-600 text-sm">Join a network of learners and mentors to support you on your journey.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 text-center text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full max-w-5xl rounded-3xl shadow-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism rounded-2xl shadow-lg p-8">
              <h2 className="text-4xl font-bold">10,000+</h2>
              <p className="text-lg">Students Trained</p>
            </div>
            <div className="glassmorphism rounded-2xl shadow-lg p-8">
              <h2 className="text-4xl font-bold">50+</h2>
              <p className="text-lg">Courses Offered</p>
            </div>
            <div className="glassmorphism rounded-2xl shadow-lg p-8">
              <h2 className="text-4xl font-bold">95%</h2>
              <p className="text-lg">Placement Success</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 w-full max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="section-title text-2xl md:text-3xl font-bold text-indigo-700 mb-2">Meet Our Team</h2>
            <p className="text-gray-600">The minds behind the mission.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
            <div className="team-card text-center glassmorphism p-8 rounded-2xl shadow-lg">
              <Image src="https://i.pravatar.cc/150?img=1" width={96} height={96} alt="Team Member 1" className="team-img rounded-full mx-auto mb-3 w-24 h-24 object-cover" />
              <h5 className="font-semibold">Akshay Kumar</h5>
              <p className="text-gray-600">Founder & Lead Instructor</p>
              <div className="flex justify-center gap-2 mt-2">
                <a href="#" className="text-indigo-600"><Linkedin size={20} /></a>
                <a href="#" className="text-indigo-600"><Twitter size={20} /></a>
              </div>
            </div>
            <div className="team-card text-center glassmorphism p-8 rounded-2xl shadow-lg">
              <Image src="https://i.pravatar.cc/150?img=2" width={96} height={96} alt="Team Member 2" className="team-img rounded-full mx-auto mb-3 w-24 h-24 object-cover" />
              <h5 className="font-semibold">Sunita Sharma</h5>
              <p className="text-gray-600">Curriculum Director</p>
              <div className="flex justify-center gap-2 mt-2">
                <a href="#" className="text-indigo-600"><Linkedin size={20} /></a>
              </div>
            </div>
            <div className="team-card text-center glassmorphism p-8 rounded-2xl shadow-lg">
              <Image src="https://i.pravatar.cc/150?img=3" width={96} height={96} alt="Team Member 3" className="team-img rounded-full mx-auto mb-3 w-24 h-24 object-cover" />
              <h5 className="font-semibold">Ravi Patel</h5>
              <p className="text-gray-600">Student Success Manager</p>
              <div className="flex justify-center gap-2 mt-2">
                <a href="#" className="text-indigo-600"><Linkedin size={20} /></a>
                <a href="#" className="text-indigo-600"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - same as Home */}
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

