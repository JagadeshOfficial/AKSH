"use client";
import React from "react";
import Link from "next/link";

export default function PythonFullStackNotes() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">Python Full Stack Notes</h1>
      <p className="mb-4 text-lg text-gray-700">Comprehensive notes and tutorials for Python Full Stack development, inspired by GeeksforGeeks.</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><Link href="#core-python" className="text-indigo-600 hover:underline">Core Python Concepts</Link></li>
        <li><Link href="#django" className="text-indigo-600 hover:underline">Django Framework</Link></li>
        <li><Link href="#flask" className="text-indigo-600 hover:underline">Flask Microframework</Link></li>
        <li><Link href="#frontend" className="text-indigo-600 hover:underline">Frontend (React/Angular)</Link></li>
        <li><Link href="#rest-api" className="text-indigo-600 hover:underline">REST API Development</Link></li>
        <li><Link href="#database" className="text-indigo-600 hover:underline">Database Integration</Link></li>
        <li><Link href="#deployment" className="text-indigo-600 hover:underline">Deployment & DevOps</Link></li>
      </ul>
      <section id="core-python" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Core Python Concepts</h2>
        <p className="text-gray-700">Learn about data types, OOP, exception handling, modules, and more. <Link href="https://www.geeksforgeeks.org/python-programming-language/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Python</Link></p>
      </section>
      <section id="django" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Django Framework</h2>
        <p className="text-gray-700">Explore Django models, views, templates, authentication, and REST APIs. <Link href="https://www.geeksforgeeks.org/django-tutorial/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Django</Link></p>
      </section>
      <section id="flask" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Flask Microframework</h2>
        <p className="text-gray-700">Understand Flask routing, templates, and RESTful APIs. <Link href="https://www.geeksforgeeks.org/flask/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Flask</Link></p>
      </section>
      <section id="frontend" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Frontend (React/Angular)</h2>
        <p className="text-gray-700">Learn modern frontend frameworks, state management, and UI design. <Link href="https://www.geeksforgeeks.org/reactjs-tutorials/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks React</Link></p>
      </section>
      <section id="rest-api" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">REST API Development</h2>
        <p className="text-gray-700">Build RESTful APIs with Django/Flask and integrate with frontend. <Link href="https://www.geeksforgeeks.org/rest-api/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks REST API</Link></p>
      </section>
      <section id="database" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Database Integration</h2>
        <p className="text-gray-700">Work with MySQL, PostgreSQL, MongoDB, and data modeling. <Link href="https://www.geeksforgeeks.org/sql-tutorial/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks SQL</Link></p>
      </section>
      <section id="deployment" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Deployment & DevOps</h2>
        <p className="text-gray-700">Deploy Python apps using Docker, CI/CD, and cloud platforms. <Link href="https://www.geeksforgeeks.org/devops/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks DevOps</Link></p>
      </section>
    </div>
  );
}
