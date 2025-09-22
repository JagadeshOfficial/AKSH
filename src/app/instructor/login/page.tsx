"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InstructorLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.ok) {
      router.push("/instructor/dashboard");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-indigo-100">
      <div className="flex w-full justify-center items-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-700">Instructor Login</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-indigo-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-indigo-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg text-lg shadow">Login</Button>
          </form>
          <div className="mt-6">
            <Button
              className="w-full flex items-center justify-center gap-2 bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-400 hover:text-indigo-900 transition-colors duration-200 font-semibold py-3 rounded-lg text-lg shadow"
              variant="outline"
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/instructor/dashboard" })}
            >
              <FcGoogle className="h-5 w-5" />
              Sign in with Google
            </Button>
          </div>
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-indigo-400 hover:underline">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
