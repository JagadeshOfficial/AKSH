import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";

// ADDED: A mock list of instructor emails. In a real app, check this against your database.
const instructorEmails = ["charlie.brown@example.com", "your-instructor-email@gmail.com"];

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // You would add other providers like "credentials" here if needed
  ],
  pages: {
    signIn: '/instructor/login', // Default sign-in page
    error: '/instructor/login',
  },
  callbacks: {
    // ADDED: The jwt callback to assign a role to the token
    async jwt({ token, user }) {
      // On initial sign in, user object is available
      if (user?.email && instructorEmails.includes(user.email)) {
        token.role = "instructor";
      } else if (user) {
        token.role = "student";
      }
      return token;
    },
    // ADDED: The session callback to add the role to the session object
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
    // FIXED: Simplified the redirect logic. It will now correctly use the callbackUrl.
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };