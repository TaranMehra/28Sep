import { ExpressAuth } from "@auth/express";
import Credentials from "@auth/express/providers/credentials";
import { checkConnection } from "../lib/connection.js";
import { UserModel } from "../lib/models/Schemas.Model.js";
import { findUserByUsername } from "../lib/models/user.model.js";
import { email, string } from "zod";
export const authenticationFunc = ExpressAuth({
    providers: [
        Credentials({
            credentials: {
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
            authorize: async (credentials) => {
                const { username, password } = credentials;
                await checkConnection();
                const user = await findUserByUsername(username);
                if (!user)
                    return null;
                return user;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // Add user info to token when user signs in
            if (user) {
                token.id = user.id;
                token.username = user.username;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            // Send user properties to the client
            if (token && session.user) {
                session.user.id = token.id;
                session.user.username = token.username;
                session.user.email = token.email;
            }
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
});
//# sourceMappingURL=auth.route.js.map