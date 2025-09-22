"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // ADDED

export default function StudentLogin() {
  const [isRegister, setIsRegister] = useState(false);
  // ADDED: State for form handling
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ADDED: Proper submit handler
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // NOTE: This uses a mock credentials provider which you would need to set up.
    // For now, it will show an error, but the Google button will work correctly.
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push("/student/dashboard");
    } else {
      setError("Login failed. Please use Google Sign-In for now.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegister ? "Student Registration" : "Student Login"}
        </h2>
        {/* FIXED: Changed to a real form with onSubmit */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isRegister && (
            <input type="text" placeholder="Full Name" className="w-full border rounded px-4 py-2" />
          )}
          {/* ADDED: Error message display */}
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          {/* FIXED: Button type is now "submit" and onClick is removed */}
          <Button type="submit" className="w-full">
            {isRegister ? "Register" : "Login"}
          </Button>
        </form>
        <div className="mt-4">
          <Button
            className="w-full flex items-center justify-center gap-2 bg-white border text-gray-700 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 transition-colors duration-200"
            variant="outline"
            type="button"
            // FIXED: This now works correctly with the updated NextAuth config
            onClick={() => signIn("google", { callbackUrl: "/student/dashboard" })}
          >
            <FcGoogle className="h-5 w-5" />
            {isRegister ? "Register with Google" : "Sign in with Google"}
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