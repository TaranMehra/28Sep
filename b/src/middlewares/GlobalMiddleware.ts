import { getSession } from "@auth/express";
import type { NextFunction, Request, Response } from "express";
import { authConfig, authenticationFunc } from "../routers/auth.route.js";
import { ReturnResponse } from "../lib/ReturnResponse.js";

export const authenticatedUser = async (req: Request, res: Response, next: NextFunction) => {
  // res.locals.session = await getSession(req, res);
  const session = await getSession(req, authConfig);
  const { username,id , email } = session?.user;
  console.log(`session is that : ${email}`);

  if (!session) {
    return ReturnResponse(res, 401, false, "Unauthorized , Session Has Expired");
  }
  next();
};
