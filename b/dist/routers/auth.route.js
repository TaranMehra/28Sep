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
import bcrypt from "bcryptjs";
// export const authenticationFunc = ExpressAuth({
export const authConfig = {
    // trustHost: true, //in reverse proxy get the right url(x-forward-host ) when it's behind proxies
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
            async authorize(credentials) {
                //must change return type as i return custom user
                const { username, password } = credentials;
                await checkConnection();
                const user = await findUserByUsername(username);
                if (!user) {
                    throw new Error("User Not Found");
                }
                const hashedPassword = user?.password;
                if (hashedPassword) {
                    const result = await bcrypt.compare(password, hashedPassword);
                    console.log(`result! ${result}`);
                    if (result) {
                        console.log("correct pass returning user");
                        return user;
                    }
                    else {
                        console.log("wrong pass returning null");
                        // return null;
                        throw new Error("Password Incorrect");
                    }
                }
            },
        }),
    ],
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
                session.user.id = token.id;
                session.user.username = token.username;
                session.user.email = token.email;
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
    secret: process?.env?.AUTH_SECRET,
};
export const authenticationFunc = ExpressAuth(authConfig);
//# sourceMappingURL=auth.route.js.map