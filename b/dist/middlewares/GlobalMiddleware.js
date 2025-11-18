import { getSession } from "@auth/express";
import { authConfig, authenticationFunc } from "../routers/auth.route.js";
import { ReturnResponse } from "../lib/ReturnResponse.js";
export const authenticatedUser = async (req, res, next) => {
    try {
        // res.locals.session = await getSession(req, res);
        const session = await getSession(req, authConfig);
        const { username, id, email } = session?.user;
        console.log(`session is that : ${email}`);
        if (!session) {
            return ReturnResponse(res, 401, false, "Unauthorized , Session Has Expired");
        }
        next();
    }
    catch (error) {
        throw new Error("Unauthorized Access", error);
    }
};
//# sourceMappingURL=GlobalMiddleware.js.map