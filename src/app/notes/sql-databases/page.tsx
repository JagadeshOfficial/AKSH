"use client";
import React from "react";
import Link from "next/link";

export default function SQLDatabasesNotes() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">SQL Databases Notes</h1>
      <p className="mb-4 text-lg text-gray-700">Comprehensive notes and tutorials for SQL and database management, inspired by GeeksforGeeks.</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><Link href="#sql-basics" className="text-indigo-600 hover:underline">SQL Basics</Link></li>
        <li><Link href="#mysql" className="text-indigo-600 hover:underline">MySQL</Link></li>
        <li><Link href="#postgresql" className="text-indigo-600 hover:underline">PostgreSQL</Link></li>
        <li><Link href="#mongodb" className="text-indigo-600 hover:underline">MongoDB</Link></li>
        <li><Link href="#data-modeling" className="text-indigo-600 hover:underline">Data Modeling</Link></li>
        <li><Link href="#database-design" className="text-indigo-600 hover:underline">Database Design</Link></li>
      </ul>
      <section id="sql-basics" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">SQL Basics</h2>
        <p className="text-gray-700">Learn SQL syntax, queries, and operations. <Link href="https://www.geeksforgeeks.org/sql-tutorial/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks SQL</Link></p>
      </section>
      <section id="mysql" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">MySQL</h2>
        <p className="text-gray-700">Work with MySQL databases, tables, and queries. <Link href="https://www.geeksforgeeks.org/mysql-tutorial/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks MySQL</Link></p>
      </section>
      <section id="postgresql" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">PostgreSQL</h2>
        <p className="text-gray-700">Explore PostgreSQL features and advanced queries. <Link href="https://www.geeksforgeeks.org/postgresql-tutorial/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks PostgreSQL</Link></p>
      </section>
      <section id="mongodb" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">MongoDB</h2>
        <p className="text-gray-700">Learn NoSQL concepts and MongoDB operations. <Link href="https://www.geeksforgeeks.org/mongodb/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks MongoDB</Link></p>
      </section>
      <section id="data-modeling" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Modeling</h2>
        <p className="text-gray-700">Understand data modeling and normalization. <Link href="https://www.geeksforgeeks.org/database-normalization/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Normalization</Link></p>
      </section>
      <section id="database-design" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Database Design</h2>
        <p className="text-gray-700">Design efficient and scalable databases. <Link href="https://www.geeksforgeeks.org/database-design/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Database Design</Link></p>
      </section>
    </div>
  );
}
