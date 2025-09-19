"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function InstructorLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-indigo-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Instructor Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border rounded px-4 py-2" />
          <input type="password" placeholder="Password" className="w-full border rounded px-4 py-2" />
          <Button type="submit" className="w-full">Login</Button>
        </form>
        <div className="mt-4">
          <Button
            className="w-full flex items-center justify-center gap-2 bg-white border text-gray-700 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 transition-colors duration-200"
            variant="outline"
            type="button"
            onClick={() => signIn("google")}
          >
            <FcGoogle className="h-5 w-5" />
            Sign in with Google
          </Button>
        </div>
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
