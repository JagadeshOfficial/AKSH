import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/instructor/login',
    error: '/instructor/login',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // If redirecting to home (logout), go to home page
      if (url === '/' || url === baseUrl) {
        return '/';
      }
      // Otherwise, always redirect to dashboard after login
      return '/instructor/dashboard';
    },
  },
});

export { handler as GET, handler as POST };
