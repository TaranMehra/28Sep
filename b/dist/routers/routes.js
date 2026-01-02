import { Router } from "express";
import { signUpController } from "../controllers/SignUpControllers.js";
import { signUpmiddleware } from "../middlewares/signUpmiddleware.js";
// import { SignInController } from "../controllers/SignInController.js";
import { authenticationFunc } from "./auth.route.js";
import { authenticatedUser } from "../middlewares/GlobalMiddleware.js";
import { GetAllUsers } from "../controllers/GetAllUsers.js";
export const route = Router();
//for sign-up (registering the user)
route.post("/auth/sign-up", signUpmiddleware, signUpController);
// route.post("/auth/*", authenticationFunc);
// route.get("/test/hello", authenticatedUser, (req, res) => {
//   return res.send("hellllloooo");
// });
route.get("/test/hello", (req, res) => {
    return res.send("hellllloooo");
});
route.get("/getallUsers", authenticatedUser, GetAllUsers);
//# sourceMappingURL=routes.js.map