"use client";
import React from "react";
import Link from "next/link";

export default function JavaFullStackNotes() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">Java Full Stack Notes</h1>
      <p className="mb-4 text-lg text-gray-700">Comprehensive notes and tutorials for Java Full Stack development, inspired by GeeksforGeeks.</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><Link href="#core-java" className="text-indigo-600 hover:underline">Core Java Concepts</Link></li>
        <li><Link href="#spring-framework" className="text-indigo-600 hover:underline">Spring Framework</Link></li>
        <li><Link href="#hibernate" className="text-indigo-600 hover:underline">Hibernate ORM</Link></li>
        <li><Link href="#frontend" className="text-indigo-600 hover:underline">Frontend (React/Angular)</Link></li>
        <li><Link href="#rest-api" className="text-indigo-600 hover:underline">REST API Development</Link></li>
        <li><Link href="#database" className="text-indigo-600 hover:underline">Database Integration</Link></li>
        <li><Link href="#deployment" className="text-indigo-600 hover:underline">Deployment & DevOps</Link></li>
      </ul>
      <section id="core-java" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Core Java Concepts</h2>
        <p className="text-gray-700">Learn about OOP, data types, collections, exception handling, multithreading, and more. <Link href="https://www.geeksforgeeks.org/java/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Java</Link></p>
      </section>
      <section id="spring-framework" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Spring Framework</h2>
        <p className="text-gray-700">Explore Spring Core, MVC, Boot, Security, and microservices. <Link href="https://www.geeksforgeeks.org/spring-framework/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Spring</Link></p>
      </section>
      <section id="hibernate" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Hibernate ORM</h2>
        <p className="text-gray-700">Understand ORM, mapping, transactions, and relationships. <Link href="https://www.geeksforgeeks.org/hibernate-framework/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Hibernate</Link></p>
      </section>
      <section id="frontend" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Frontend (React/Angular)</h2>
        <p className="text-gray-700">Learn modern frontend frameworks, state management, and UI design. <Link href="https://www.geeksforgeeks.org/reactjs-tutorials/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks React</Link></p>
      </section>
      <section id="rest-api" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">REST API Development</h2>
        <p className="text-gray-700">Build RESTful APIs with Spring Boot and integrate with frontend. <Link href="https://www.geeksforgeeks.org/rest-api/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks REST API</Link></p>
      </section>
      <section id="database" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Database Integration</h2>
        <p className="text-gray-700">Work with MySQL, PostgreSQL, MongoDB, and data modeling. <Link href="https://www.geeksforgeeks.org/sql-tutorial/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks SQL</Link></p>
      </section>
      <section id="deployment" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Deployment & DevOps</h2>
        <p className="text-gray-700">Deploy Java apps using Docker, CI/CD, and cloud platforms. <Link href="https://www.geeksforgeeks.org/devops/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks DevOps</Link></p>
      </section>
    </div>
  );
}
