import { Router } from "express";
import { signUpController } from "../controllers/authControllers.js";
import { signUpmiddleware } from "../middlewares/signUpmiddleware.js";

export const route = Router();

//for sign-up (registering the user)
route.post("/auth/sign-up", signUpmiddleware, signUpController);
