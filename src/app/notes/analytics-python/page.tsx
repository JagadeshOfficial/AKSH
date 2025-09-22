"use client";
import React from "react";
import Link from "next/link";

export default function AnalyticsPythonNotes() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">Data Analytics with Python Notes</h1>
      <p className="mb-4 text-lg text-gray-700">Comprehensive notes and tutorials for Data Analytics using Python, inspired by GeeksforGeeks.</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><Link href="#python-basics" className="text-indigo-600 hover:underline">Python Basics</Link></li>
        <li><Link href="#data-analysis" className="text-indigo-600 hover:underline">Data Analysis</Link></li>
        <li><Link href="#data-visualization" className="text-indigo-600 hover:underline">Data Visualization</Link></li>
        <li><Link href="#pandas" className="text-indigo-600 hover:underline">Pandas Library</Link></li>
        <li><Link href="#numpy" className="text-indigo-600 hover:underline">NumPy Library</Link></li>
        <li><Link href="#machine-learning" className="text-indigo-600 hover:underline">Machine Learning</Link></li>
      </ul>
      <section id="python-basics" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Python Basics</h2>
        <p className="text-gray-700">Learn Python syntax, data types, and functions. <Link href="https://www.geeksforgeeks.org/python-programming-language/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Python</Link></p>
      </section>
      <section id="data-analysis" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Analysis</h2>
        <p className="text-gray-700">Explore data analysis techniques and tools. <Link href="https://www.geeksforgeeks.org/data-analysis/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Data Analysis</Link></p>
      </section>
      <section id="data-visualization" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Visualization</h2>
        <p className="text-gray-700">Visualize data using Matplotlib, Seaborn, and Plotly. <Link href="https://www.geeksforgeeks.org/data-visualization/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Data Visualization</Link></p>
      </section>
      <section id="pandas" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Pandas Library</h2>
        <p className="text-gray-700">Work with dataframes and series in Pandas. <Link href="https://www.geeksforgeeks.org/pandas-tutorial/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Pandas</Link></p>
      </section>
      <section id="numpy" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">NumPy Library</h2>
        <p className="text-gray-700">Perform numerical computations with NumPy. <Link href="https://www.geeksforgeeks.org/numpy-tutorial/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks NumPy</Link></p>
      </section>
      <section id="machine-learning" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Machine Learning</h2>
        <p className="text-gray-700">Introduction to machine learning concepts and libraries. <Link href="https://www.geeksforgeeks.org/machine-learning/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks ML</Link></p>
      </section>
    </div>
  );
}
