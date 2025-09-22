"use client";
import React from "react";
import Link from "next/link";

export default function FrontendDevelopmentNotes() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">Frontend Development Notes</h1>
      <p className="mb-4 text-lg text-gray-700">Comprehensive notes and tutorials for Frontend Development, inspired by GeeksforGeeks.</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><Link href="#html-css-js" className="text-indigo-600 hover:underline">HTML, CSS, JavaScript</Link></li>
        <li><Link href="#react" className="text-indigo-600 hover:underline">React.js</Link></li>
        <li><Link href="#angular" className="text-indigo-600 hover:underline">Angular</Link></li>
        <li><Link href="#state-management" className="text-indigo-600 hover:underline">State Management</Link></li>
        <li><Link href="#ui-design" className="text-indigo-600 hover:underline">UI/UX Design</Link></li>
        <li><Link href="#testing" className="text-indigo-600 hover:underline">Testing & Debugging</Link></li>
      </ul>
      <section id="html-css-js" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">HTML, CSS, JavaScript</h2>
        <p className="text-gray-700">Learn the building blocks of web development. <Link href="https://www.geeksforgeeks.org/html-tutorials/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks HTML</Link></p>
      </section>
      <section id="react" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">React.js</h2>
        <p className="text-gray-700">Build dynamic UIs with React, hooks, and context. <Link href="https://www.geeksforgeeks.org/reactjs-tutorials/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks React</Link></p>
      </section>
      <section id="angular" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Angular</h2>
        <p className="text-gray-700">Develop scalable apps with Angular modules and services. <Link href="https://www.geeksforgeeks.org/angularjs-tutorial/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Angular</Link></p>
      </section>
      <section id="state-management" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">State Management</h2>
        <p className="text-gray-700">Manage app state with Redux, Context API, and RxJS. <Link href="https://www.geeksforgeeks.org/state-management-in-react/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks State Management</Link></p>
      </section>
      <section id="ui-design" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">UI/UX Design</h2>
        <p className="text-gray-700">Design beautiful interfaces and user experiences. <Link href="https://www.geeksforgeeks.org/ui-ux-design/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks UI/UX</Link></p>
      </section>
      <section id="testing" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Testing & Debugging</h2>
        <p className="text-gray-700">Test and debug frontend applications. <Link href="https://www.geeksforgeeks.org/testing-in-reactjs/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Testing</Link></p>
      </section>
    </div>
  );
}
