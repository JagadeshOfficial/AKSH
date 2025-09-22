"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
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

      {/* Main Content - Contact sections */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-24">
        {/* Hero Section */}
        <section className="contact-hero text-center py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-3xl shadow-2xl w-full max-w-5xl mb-12">
          <h1 className="page-title text-4xl md:text-5xl font-extrabold mb-4">Get In Touch</h1>
          <p className="lead text-lg md:text-xl my-4">We're here to help and answer any question you might have. We look forward to hearing from you!</p>
        </section>

        {/* Contact Info & Form */}
        <section className="py-12 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="contact-info-card glassmorphism rounded-xl shadow p-6 flex items-center gap-4">
                <span className="bg-indigo-600 text-white rounded-full p-3"><i className="bi bi-geo-alt-fill text-xl" /></span>
                <div>
                  <h5 className="font-semibold">Our Address</h5>
                  <p className="text-gray-600">Capital Park, Survey No 12, Silicon Valley, Madhapur, Hyderabad, Telangana 500081</p>
                </div>
              </div>
              <div className="contact-info-card glassmorphism rounded-xl shadow p-6 flex items-center gap-4">
                <span className="bg-indigo-600 text-white rounded-full p-3"><Mail size={20} /></span>
                <div>
                  <h5 className="font-semibold">Email Us</h5>
                  <a href="mailto:akshjavahub@gmail.com" className="text-indigo-700">akshjavahub@gmail.com</a>
                </div>
              </div>
              <div className="contact-info-card glassmorphism rounded-xl shadow p-6 flex items-center gap-4">
                <span className="bg-indigo-600 text-white rounded-full p-3"><Phone size={20} /></span>
                <div>
                  <h5 className="font-semibold">Call Us</h5>
                  <a href="tel:+919014985626" className="text-indigo-700">+91 9014985626</a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="contact-form-card glassmorphism rounded-xl shadow p-8">
              <h3 className="mb-4 font-bold text-indigo-700">Send us a Message</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" id="subject" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={5} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required></textarea>
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-800">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section mb-12 w-full max-w-5xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.223842104275!2d78.3888350153572!3d17.448477005951814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158aaaaaaab%3A0x295a633583482989!2sSilicon%20Valley%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1678886543210!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AKSH Java Hub Location"
          ></iframe>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-indigo-50 w-full max-w-5xl rounded-3xl shadow-xl mb-12">
          <div className="text-center mb-8">
            <h2 className="section-title text-2xl md:text-3xl font-bold text-indigo-700 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600">Have questions? We have answers.</p>
          </div>
          <div className="space-y-4">
            <details className="bg-white rounded-lg p-4 shadow">
              <summary className="font-semibold text-indigo-700 cursor-pointer">What are the prerequisites for the courses?</summary>
              <p className="text-gray-600 mt-2">Most of our beginner courses have no prerequisites! For advanced courses, a basic understanding of Java is recommended. Each course page lists specific requirements.</p>
            </details>
            <details className="bg-white rounded-lg p-4 shadow">
              <summary className="font-semibold text-indigo-700 cursor-pointer">Do you provide job placement assistance?</summary>
              <p className="text-gray-600 mt-2">Yes, we offer career support including resume building workshops, mock interviews, and guidance on job applications to help our students succeed in the job market.</p>
            </details>
            <details className="bg-white rounded-lg p-4 shadow">
              <summary className="font-semibold text-indigo-700 cursor-pointer">Can I get a certificate after completion?</summary>
              <p className="text-gray-600 mt-2">Absolutely! Upon successful completion of any course, you will receive a verifiable certificate from AKSH Java Hub to showcase your new skills.</p>
            </details>
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

