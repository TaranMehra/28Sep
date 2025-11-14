// import type { DefaultSession } from "@auth/express";
// import NextAuth from "next-auth";
import { ExpressAuthConfig } from "@auth/express";
// import "@auth/core/types"

declare module "@auth/express" {
  interface User {
    username: string;
    email: string;
  }
  interface JWT {
    username: string;
  }
  interface Session {
    user: {
      username: string;
    } & DefaultSession["user"];
  }
}
