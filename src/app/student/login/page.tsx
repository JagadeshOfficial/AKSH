"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"; // Install react-icons if not present: npm install react-icons

export default function StudentLogin() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegister ? "Student Registration" : "Student Login"}
        </h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border rounded px-4 py-2" />
          <input type="password" placeholder="Password" className="w-full border rounded px-4 py-2" />
          {isRegister && (
            <input type="text" placeholder="Full Name" className="w-full border rounded px-4 py-2" />
          )}
          <Button type="submit" className="w-full">
            {isRegister ? "Register" : "Login"}
          </Button>
        </form>
        <div className="mt-4">
          <Button
            className="w-full flex items-center justify-center gap-2 bg-white border text-gray-700 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 transition-colors duration-200"
            variant="outline"
            type="button"
            // onClick={handleGoogleSignIn} // Add your Google sign-in logic here
          >
            <FcGoogle className="h-5 w-5" />
            Sign in with Google
          </Button>
        </div>
        <div className="mt-4 text-center">
          {isRegister ? (
            <span>
              Already have an account?{' '}
              <button className="text-blue-600 hover:underline" onClick={() => setIsRegister(false)}>
                Login
              </button>
            </span>
          ) : (
            <span>
              New user?{' '}
              <button className="text-blue-600 hover:underline" onClick={() => setIsRegister(true)}>
                Register
              </button>
            </span>
          )}
        </div>
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
