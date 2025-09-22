import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Extends the built-in session.user type to include the 'role' property.
   */
  interface Session {
    user?: {
      role?: string;
    } & DefaultSession["user"];
  }
}