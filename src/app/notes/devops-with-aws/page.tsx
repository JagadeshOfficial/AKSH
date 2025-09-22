"use client";
import React from "react";
import Link from "next/link";

export default function DevOpsWithAWSNotes() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">DevOps with AWS Notes</h1>
      <p className="mb-4 text-lg text-gray-700">Comprehensive notes and tutorials for DevOps and AWS, inspired by GeeksforGeeks.</p>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li><Link href="#devops-basics" className="text-indigo-600 hover:underline">DevOps Basics</Link></li>
        <li><Link href="#ci-cd" className="text-indigo-600 hover:underline">CI/CD Pipelines</Link></li>
        <li><Link href="#docker" className="text-indigo-600 hover:underline">Docker</Link></li>
        <li><Link href="#aws-services" className="text-indigo-600 hover:underline">AWS Services</Link></li>
        <li><Link href="#infrastructure-as-code" className="text-indigo-600 hover:underline">Infrastructure as Code</Link></li>
        <li><Link href="#monitoring" className="text-indigo-600 hover:underline">Monitoring & Logging</Link></li>
      </ul>
      <section id="devops-basics" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">DevOps Basics</h2>
        <p className="text-gray-700">Learn DevOps principles, culture, and tools. <Link href="https://www.geeksforgeeks.org/devops/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks DevOps</Link></p>
      </section>
      <section id="ci-cd" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">CI/CD Pipelines</h2>
        <p className="text-gray-700">Automate builds, tests, and deployments. <Link href="https://www.geeksforgeeks.org/ci-cd-pipeline/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks CI/CD</Link></p>
      </section>
      <section id="docker" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Docker</h2>
        <p className="text-gray-700">Containerize applications using Docker. <Link href="https://www.geeksforgeeks.org/docker/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Docker</Link></p>
      </section>
      <section id="aws-services" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">AWS Services</h2>
        <p className="text-gray-700">Explore AWS EC2, S3, Lambda, and more. <Link href="https://www.geeksforgeeks.org/aws/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks AWS</Link></p>
      </section>
      <section id="infrastructure-as-code" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Infrastructure as Code</h2>
        <p className="text-gray-700">Manage infrastructure with Terraform, CloudFormation, etc. <Link href="https://www.geeksforgeeks.org/infrastructure-as-code/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks IaC</Link></p>
      </section>
      <section id="monitoring" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Monitoring & Logging</h2>
        <p className="text-gray-700">Monitor and log applications using AWS tools. <Link href="https://www.geeksforgeeks.org/monitoring-and-logging-in-devops/" className="text-indigo-600 hover:underline" target="_blank">Reference: GeeksforGeeks Monitoring</Link></p>
      </section>
    </div>
  );
}
