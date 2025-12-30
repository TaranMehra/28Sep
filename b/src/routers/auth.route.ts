// make redirect on client side in frontend

import { ExpressAuth } from "@auth/express";
import Credentials from "@auth/express/providers/credentials";
import { checkConnection } from "../lib/connection.js";
import { UserModel } from "../lib/models/Schemas.Model.js";
import { findUserByUsername } from "../lib/models/user.model.js";
import { email, string, success } from "zod";
import { ReturnResponse } from "../lib/ReturnResponse.js";
import { skipMiddlewareFunction } from "mongoose";
import "dotenv/config";
import type {
  AuthConfig,
  // Session,
  // User,
} from "@auth/core/types";
import bcrypt from "bcryptjs";

// export const authenticationFunc = ExpressAuth({
export const authConfig: AuthConfig = {
  trustHost: true, //in reverse proxy get the right url(x-forward-host ) when it's behind proxies
  // debug: true, //for debugig
  providers: [
    Credentials({
      credentials: {
        // User,

        username: {
          type: "string",
          label: "username",
          placeholder: "eg-> user1234",
        },
        password: {
          type: "password",
          label: "password",
          placeholder: "*****",
        },
      },
      async authorize(credentials): Promise<any> {
        const { username } = credentials as {
          username: string;
          password: string;
        };

        console.log(`${username} is trying to login`);

        await checkConnection();

        const user = await findUserByUsername(username);
        if (!user) {
          console.log("user not found");
          return null;
        }

        // 🔓 Password check skipped intentionally
        const isValid = true;

        if (!isValid) {
          return null;
        }

        console.log("login allowed (password skipped)");

        return {
          id: user.id,
          username: user.username,
          email: user.email,
        };
      },
      // async authorize(credentials) :Promise<any>{
      //   try {
      //     if (!credentials) return null;

      //     const { username, password } = credentials;
      //     console.log(`${username} tried to login`);

      //     await checkConnection();

      //     const user = await findUserByUsername(username as string) ;
      //     if (!user) {
      //       console.log("User not found");
      //       return null;
      //     }

      //     const isValid = await bcrypt.compare(password, user.password);
      //     console.log("password match:", isValid);

      //     if (!isValid) {
      //       console.log("Wrong password");
      //       return null;
      //     }

      //     // ✅ return PLAIN object
      //     return {
      //       id: user._id.toString(),
      //       username: user.username,
      //       email: user.email,
      //     };
      //   } catch (err) {
      //     console.error("Authorize error:", err);
      //     return null; // ❗ NEVER throw
      //   }
      // },
    }),
  ],
  // cookies:{
  //   sessionToken:{
  //     options:{

  //     }
  //   }
  // }
  // cookies: {
  //   sessionToken: {
  //     name: "authjs.session-token",
  //     options: {
  //       httpOnly: false,
  //       secure: true, // REQUIRED
  //       sameSite: "none", // REQUIRED
  //       path: "/",
  //     },
  //   },
  // },

  callbacks: {
    async jwt({ token, user }) {
      // Add user info to token when user signs in
      if (user) {
        token.id = user.id;
        token.username = user?.username;
      }
      return token;
    },

    async session({ session, token }) {
      //     // Send user properties to the client
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.username = token.username as string;
        session.user.email = token.email as string;
      }
      return session;
    },

    //cutom redirection after succesfull login
    redirect({ url, baseUrl }) {
      return `${baseUrl}/auth/session`;
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process?.env?.AUTH_SECRET as string,
};

export const authenticationFunc = ExpressAuth(authConfig);
